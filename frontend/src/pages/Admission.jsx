import { BreadcrumbSection } from "@/components/shared/Breadcrumb";
import AdmissionForm from "./AdmissionForm";

const Admission = () => {
  return (
    <>
      <BreadcrumbSection
        page_name="Admission"
        items={[{ label: "Home", path: "/" }, { label: "Admission" }]}
      />
      <AdmissionForm />
    </>
  );
};

export default Admission;
