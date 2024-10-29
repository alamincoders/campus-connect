import { motion } from "framer-motion";
import Rating from "react-rating-stars-component";

const ReviewCard = ({ review }) => {
  /*   const ratingChanged = (newRating) => {
    console.log(newRating);
  }; */
  return (
    <>
      <motion.div className="rounded-md bg-white group hover:bg-secondary_main hover:text-white duration-300 transition-all ease-in-out p-6 w-max max-w-96 cursor-pointer shadow-2xl shadow-[#EFF7FF] relative">
        <div className="flex items-center gap-2 mb-2">
          <div>
            <img
              // src={review.avatar}
              src="/user.png"
              className="w-16 h-16 object-cover rounded clip-bg border group-hover:border-white/20"
              alt={review.name}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{review.name}</h3>
            <p className="text-sm text-gray-600 group-hover:text-white/80">
              {review.profession}
            </p>
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

        <blockquote className="font-roboto text-lg text-[#777777] group-hover:text-white/80 tracking-[0.5px]">
          <q>
            {review.message.slice(0, 100)}{" "}
            {review.message.length > 100 ? "..." : ""}{" "}
          </q>
        </blockquote>
      </motion.div>
    </>
  );
};

export default ReviewCard;
