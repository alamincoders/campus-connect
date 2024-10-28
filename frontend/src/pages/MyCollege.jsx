import { BreadcrumbSection } from "@/components/shared/Breadcrumb";

const MyCollege = () => {
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
