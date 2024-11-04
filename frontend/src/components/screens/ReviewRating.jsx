import {
  useCreateReviewMutation,
  useGetAdmissionCollegeQuery,
} from "@/redux/api/collegesApi";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import Spinner from "../ui/spinner";

const content = [
  {
    name: "Bad",
    height: 50,
    width: 50,
    background: "#777",
    rotate: 180,
  },
  {
    name: "Good",
    height: 50,
    width: 100,
    background: "#125875",
    rotate: 0,
  },
  {
    name: "Excellent",
    height: 100,
    width: 100,
    background: "#ff7350",
    rotate: 0,
  },
];

const Experience = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [rating, setRating] = useState(0);
  const [colleges, setColleges] = useState([]);
  const { data, error, isLoading, refetch } = useGetAdmissionCollegeQuery();
  const user = JSON.parse(Cookies.get("user"));

  const [
    createReview,
    { isLoading: reviewLoading, isError, isSuccess, error: reviewError },
  ] = useCreateReviewMutation();

  const navigate = useNavigate();

  useEffect(() => {
    // Trigger a re-fetch when the component mounts
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (data) {
      setColleges(data.data);
    }
  }, [data, user.id]);

  if (error) {
    console.error(error);
    return (
      <div className="text-red-400 font-medium">Error: {error?.status}</div>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (!colleges) {
    return <div>No college found</div>;
  }

  if (isError) {
    console.error(reviewError);
  }

  const collegeId = colleges?.find(
    (college) => college.userId === user.id
  )?.collegeId;

  if (!collegeId) {
    return (
      <div className="py-16 lg:py-30 bg-[#EFF7FF]">
        <div className="flex items-center justify-center p-6">
          <p className="text-center text-secondary_main">
            No college has applied yet.
          </p>
          <Link
            to="/admission"
            className="text-primary_main px-4 py-4 -mt-1.5 underline underline-offset-4 decoration-primary_main decoration-wavy"
          >
            Admission Open
          </Link>
        </div>
      </div>
    );
  }

  const onSubmit = async (formData) => {
    try {
      const review = {
        ...formData,
        rating,
        userId: user.id,
        name: user.displayName,
        collegeId,
      };

      console.log(review);

      // Call the mutation to create a review
      const result = await createReview(review);

      // Handle successful submission
      if (result || isSuccess) {
        // Reset the form
        setRating(0);
        reset();
        toast.success("Review submitted successfully");
        navigate("/profile");
      }
    } catch (error) {
      // Handle errors during submission
      console.error("Error submitting review:", error);

      // Display error message to the user
      alert(`Failed to submit review: ${error.message || "Unknown error"}`);
    }
  };

  const getContentIndex = (rating) => {
    if (rating < 3) return 0; // Bad
    if (rating < 4) return 1; // Good
    return 2; // Excellent
  };

  const activeContent = content[getContentIndex(rating)];

  const textVariants = {
    enter: { x: "-100%", opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-3/6 mx-auto bg-[#f5f5f5] p-6 rounded-lg shadow">
        <div className="w-full flex items-center flex-col gap-4">
          <div className="flex items-center flex-col">
            <motion.div
              animate={{
                height: activeContent.height,
                width: activeContent.width,
                backgroundColor: activeContent.background,
              }}
              className="transition duration-300 rounded-full"
            />
            <div className="mt-5">
              <Icon rotate={activeContent.rotate} />
            </div>
          </div>
          <motion.h2
            key={rating}
            initial="enter"
            animate="center"
            exit="exit"
            variants={textVariants}
            transition={{ duration: 0 }}
            className="font-semibold text-2xl transition duration-300 delay-300"
          >
            {activeContent.name}
          </motion.h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ReactStars
            count={5}
            onChange={setRating}
            value={rating}
            size={60}
            a11y={true}
            activeColor="#ffd700"
            isHalf={false}
          />

          {errors.comment && (
            <p className="text-red-500 text-sm mt-2">
              {errors.comment.message}
            </p>
          )}
          <label
            htmlFor="name"
            className="relative w-full"
          >
            <textarea
              name="name"
              id="name"
              rows={5}
              {...register("comment", { required: "Comment is required" })}
              placeholder="How was your experience?"
              className="border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#ffd700] transition-colors duration-300 resize-none placeholder:text-gray-400/50"
            />
          </label>
          <Button
            type="submit"
            disabled={reviewLoading}
            className=" bg-primary_main mt-5 before:bg-secondary_main text-white py-3 rounded-lg font-semibold"
          >
            {reviewLoading ? (
              "Submitting..."
            ) : (
              <div className="flex items-center gap-2">
                {" "}
                <Plus /> Add Review
              </div>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

function Icon({ rotate }) {
  return (
    <motion.svg
      width="89"
      height="27"
      viewBox="0 0 89 27"
      fill="none"
      animate={{ rotate }}
      transition={{ duration: 0.3 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M88.6062 5.75162C83.2588 12.2265 76.5801 17.4742 69.024 21.1381C61.468 24.8021 53.2116 26.7962 44.8162 26.9852C36.4208 27.1741 28.0832 25.5534 20.3699 22.2331C12.6566 18.9129 5.74863 13.9709 0.115372 7.74314L6.26321 2.18218C11.0982 7.52742 17.0273 11.7691 23.6476 14.6188C30.2678 17.4686 37.424 18.8597 44.6297 18.6975C51.8354 18.5354 58.9218 16.8237 65.4071 13.679C71.8925 10.5343 77.6248 6.03022 82.2144 0.472867L88.6062 5.75162Z"
        fill="#FFD700"
        className="!fill-primary_main/20"
      />
    </motion.svg>
  );
}

export default Experience;
