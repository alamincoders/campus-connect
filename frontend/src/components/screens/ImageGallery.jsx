import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SubHeading from "../shared/SubHeading";
import { Button } from "../ui/button";
import GalleryLists from "./GalleryLists";

const ImageGallery = () => {
  return (
    <div className="py-16 lg:py-30 bg-[#EFF7FF] relative z-0">
      <div className="container_fluid">
        <div className="space-y-8 lg:space-y-0 lg:flex items-end justify-between gap-8">
          <SubHeading
            className="max-w-[686px] w-full"
            heading="Last Year Gallery Showcase"
            sub_heading="Our Recent Gallery"
          />

          <Link className="inline-block" to="/about-us">
            <Button className="bg-secondary_main before:bg-primary_main py-3 lg:py-5 px-6 lg:px-[30px]">
              More About Us <FaArrowRightLong />
            </Button>
          </Link>
        </div>
        <div className="mt-8">
          <GalleryLists />
        </div>
      </div>

      {/*  */}
      <div className=" hidden lg:block absolute bottom-0 right-0 -z-10 scale-bounce">
        <img
          src="/bg-animate.png"
          alt="animate"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
