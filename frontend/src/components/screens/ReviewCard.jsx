import { motion } from "framer-motion";
import Rating from "react-rating-stars-component";

const ReviewCard = ({ review }) => {
  /*   const ratingChanged = (newRating) => {
    console.log(newRating);
  }; */
  return (
    <>
      <motion.div className="rounded-md bg-white duration-300 transition-all ease-in-out p-6 w-max max-w-96 shadow-2xl shadow-[#EFF7FF] relative overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <div>
            <img
              // src={review.avatar}
              src="/user.png"
              className="w-16 h-16 object-cover rounded clip-bg border"
              alt={review?.name}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{review?.name}</h3>
            <p className="text-sm text-gray-600 ">{review?.profession}</p>
          </div>
        </div>
        <Rating
          count={5}
          value={review.rating}
          size={24}
          activeColor="#ffd700"
          edit={false}
          isHalf={true}
          //   onChange={ratingChanged}
        />
        <blockquote className="font-roboto text-base text-[#777777] tracking-[0.5px]">
          <q>
            {review?.message?.slice(0, 100)}
            {review?.message?.length > 100 ? "..." : ""}
          </q>
        </blockquote>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src="/qt-icon.png"
            alt="qt"
            className="opacity-5"
          />
        </div>{" "}
        <div className="absolute -bottom-4 -left-2 rotate-45">
          <img
            src="/cou-icon.png"
            alt="qt"
            className="scale-bounce opacity-70"
          />
        </div>
      </motion.div>
    </>
  );
};

export default ReviewCard;
