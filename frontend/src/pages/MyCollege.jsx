import MyAdmittedCollege from "@/components/screens/MyAdmittedCollege";
import { BreadcrumbSection } from "@/components/shared/Breadcrumb";
import { useEffect } from "react";

const MyCollege = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BreadcrumbSection
        page_name="My College"
        items={[
          { label: "Home", path: "/" },
          { label: "Profile", path: "/profile" },
          { label: "My College" },
        ]}
      />

      <div className="py-16 lg:py-30 relative">
        <div className="container_fluid">
          <MyAdmittedCollege />
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

export default MyCollege;
