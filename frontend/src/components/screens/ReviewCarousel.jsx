import { CarouselContext } from "@/context/CarouselContext";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Button } from "../ui/button";
import ReviewCard from "./ReviewCard";

export const Carousel = ({ reviews, initialScroll = 0 }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScalability();
    }
  }, [initialScroll]);

  const checkScalability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <CarouselContext.Provider value={{}}>
      <div>
        <div
          className="flex w-full overflow-x-scroll scrollbar-hide scroll-smooth"
          ref={carouselRef}
          onScroll={checkScalability}
        >
          <div className="flex flex-row gap-4 px-4 pb-5 relative">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                review={review}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2 2xl:absolute top-[100px] right-0 mt-8 2xl:mt-0">
          <Button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <FaArrowLeftLong size={24} />
          </Button>
          <Button
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <FaArrowRightLong size={24} />
          </Button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};
