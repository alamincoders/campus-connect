import AdmissionColleges from "@/components/screens/AdmissionColleges";
import { BreadcrumbSection } from "@/components/shared/Breadcrumb";
import { useEffect } from "react";

const Admission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BreadcrumbSection
        page_name="Admission"
        items={[{ label: "Home", path: "/" }, { label: "Admission" }]}
      />
      <div className="py-16 lg:py-30 relative">
        <div className="container_fluid">
          <AdmissionColleges />
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

export default Admission;
