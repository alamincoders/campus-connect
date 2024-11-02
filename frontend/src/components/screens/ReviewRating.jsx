import { motion } from "framer-motion";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";

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
  const [rating, setRating] = useState(2);

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
        <div>
          <ReactStars
            count={5}
            onChange={setRating}
            value={rating}
            size={60}
            a11y={true}
            activeColor="#ffd700"
            isHalf={false}
          />
          <label
            htmlFor="name"
            className="relative w-full"
          >
            <textarea
              name="name"
              id="name"
              rows={5}
              placeholder="How was your experience?"
              className="border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#ffd700] transition-colors duration-300 resize-none placeholder:text-gray-400/50"
            />
          </label>
        </div>
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
