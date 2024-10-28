import { BreadcrumbSection } from "@/components/shared/Breadcrumb";

const Colleges = () => {
  return (
    <>
      <BreadcrumbSection
        page_name="Colleges"
        items={[{ label: "Home", path: "/" }, { label: "Colleges" }]}
      />
    </>
  );
};

export default Colleges;
