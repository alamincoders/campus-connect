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
        items={[{ label: "Home", path: "/" }, { label: "My College" }]}
      />
    </>
  );
};

export default MyCollege;
