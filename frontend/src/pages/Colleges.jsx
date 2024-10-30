import CollegeLists from "@/components/screens/CollegeLists";
import { BreadcrumbSection } from "@/components/shared/Breadcrumb";

const Colleges = () => {
  return (
    <>
      <BreadcrumbSection
        page_name="All Colleges"
        items={[{ label: "Home", path: "/" }, { label: "Colleges" }]}
      />
      <div className="py-16 lg:py-30 relative">
        <div className="container_fluid">
          <CollegeLists />
        </div>

        {/*  */}
        <div className="absolute bottom-0 left-0 -z-10 scale-bounce">
          <img
            src="/animate-img.png"
            alt="animate"
          />
        </div>
      </div>
    </>
  );
};

export default Colleges;
