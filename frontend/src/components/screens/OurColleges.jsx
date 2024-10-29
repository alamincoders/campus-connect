import SearchBar from "../shared/SearchBar";
import SubHeading from "../shared/SubHeading";

const OurColleges = () => {
  return (
    <div className="py-16 lg:py-30">
      <div className="container_fluid">
        <div className=" space-y-8 lg:space-y-0 lg:flex items-center justify-between gap-8">
          <SubHeading
            heading="Our College Lists"
            sub_heading="Our Colleges"
          />
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default OurColleges;
