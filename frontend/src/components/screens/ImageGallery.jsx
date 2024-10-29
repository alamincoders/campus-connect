import SubHeading from "../shared/SubHeading";
import GalleryLists from "./GalleryLists";
import GalleryTabs from "./GalleryTabs";

const ImageGallery = () => {
  return (
    <div className="py-16 lg:py-30 bg-[#EFF7FF] relative z-0">
      <div className="container_fluid">
        <div className="space-y-8 lg:space-y-0 lg:flex items-center justify-between gap-8">
          <SubHeading
            className="max-w-[686px] w-full"
            heading="Last Year We Have Completed Gallery Showcase"
            sub_heading="Our Recent Gallery"
          />
          <GalleryTabs />
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
