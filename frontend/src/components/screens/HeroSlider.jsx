import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const HeroSlider = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const images = [
    { src: "/slider1.webp", alt: "Nothing really here" },
    { src: "/slider2.webp", alt: "Nothing really here" },
  ];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 600 : -600,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction < 0 ? 600 : -600,
      opacity: 0,
    }),
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-full w-full center ">
      <CustomCursor
        containerRef={containerRef}
        onClickLeft={handlePrev}
        onClickRight={handleNext}
      />
      <div
        ref={containerRef}
        className="w-full h-[480px] lg:h-[856px] overflow-hidden relative "
      >
        <AnimatePresence
          initial={false}
          custom={direction}
        >
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ opacity: { duration: 0.2 } }}
            className="w-full h-full flex items-center justify-center text-white text-4xl absolute"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="object-cover object-top w-full h-full"
            />
          </motion.div>

          <div className="absolute h-10 w-fit flex items-center gap-1 left-0 right-0 mx-auto bottom-0">
            {Array.from({ length: images.length }).map((_, index) => (
              <motion.div
                key={index}
                animate={{ width: index === currentIndex ? 40 : 2 }}
                className="w-2 h-2 min-w-2 bg-white rounded-full"
              />
            ))}
          </div>
        </AnimatePresence>

        <div className="absolute top-0 left-0  w-full h-full text-white bg-black/40 lg:bg-black/20">
          <div className="container_fluid mt-16 lg:mt-32">
            <div className="relative z-[99]">
              <div className="mb-4 inline-flex gap-2 lg:gap-4 items-center">
                <h5 className="uppercase text-lg tracking-wider lg:tracking-[3px] leading-[18px] font-medium ">
                  welcome To Qeducato
                </h5>{" "}
                <span className="block h-[2px] w-14 md:w-16 bg-primary_main-500" />
              </div>
              <div className="space-y-6 max-w-[746px] break-words ">
                <h2 className="text-3xl md:text-5xl lg:text-7xl leading-[1.2] tracking-[1px] font-bold">
                  Education is the best key success in life
                </h2>
                <p className="text-lg leading-[26px] lg:pr-14">
                  Donec vitae libero non enim placerat eleifend aliquam erat
                  volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed
                  nisl tristique, commodo gravida lectus non.
                </p>
              </div>
              <div className="flex gap-4 mt-8 flex-wrap">
                <Link to="/about-us">
                  <Button className="bg-primary_main-500 py-3 md:py-5 px- md:px-6 lg:px-[30px]">
                    Discover More <FaArrowRightLong />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="py-3 md:py-5 px-4 md:px-6 lg:px-[30px] bg-transparent border border-white hover:border-secondary_main">
                    Contact Us <FaArrowRightLong />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomCursor = ({ containerRef, onClickLeft, onClickRight }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const [rotation, setRotation] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isInside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
        setIsInside(isInside);

        if (isInside) {
          const centerX = rect.left + rect.width / 2;
          const isLeftHalf = e.clientX < centerX;
          setRotation(isLeftHalf);
        }
      }
    };

    const handleClick = (e) => {
      if (isInside && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        if (e.clientX < centerX) {
          onClickLeft();
        } else {
          onClickRight();
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [containerRef, isInside, onClickLeft, onClickRight]);

  return (
    <div>
      <AnimatePresence>
        {isInside && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed z-50"
            style={{ left: mousePosition.x - 25, top: mousePosition.y - 25 }}
          >
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="flex items-center justify-center bg-primary_main w-[50px] h-[50px] bg-primary text-primary-foreground rounded-full"
              animate={{
                rotate: rotation ? 180 : 0,
                transition: { duration: 0.5 },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <ArrowRight size={24} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSlider;
