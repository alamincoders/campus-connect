import SearchBar from "../shared/SearchBar";
import SubHeading from "../shared/SubHeading";
import CollegeLists from "./CollegeLists";

const OurColleges = () => {
  return (
    <div className="py-16 lg:py-30 relative">
      <div className="container_fluid">
        <div className=" space-y-8 lg:space-y-0 lg:flex items-end justify-between gap-8">
          <SubHeading
            heading="Our College Lists"
            sub_heading="Our Colleges"
          />
          <SearchBar />
        </div>
        <div className="mt-8">
          <CollegeLists />
        </div>
      </div>

      {/*  */}
      <div className="absolute bottom-0 left-0 -z-10 scale-bounce">
        <img
          src="/animate-img.png"
          alt="animate"
        />
      </div>
    </div>
  );
};

export default OurColleges;
