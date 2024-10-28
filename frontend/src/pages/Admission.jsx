import { BreadcrumbSection } from "@/components/shared/Breadcrumb";

const Admission = () => {
  return (
    <>
      <BreadcrumbSection
        page_name="Admission"
        items={[{ label: "Home", path: "/" }, { label: "Admission" }]}
      />
    </>
  );
};

export default Admission;
