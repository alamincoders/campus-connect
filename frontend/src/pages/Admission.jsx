import { BreadcrumbSection } from "@/components/shared/Breadcrumb";
import AdmissionPage from "./AdmissionPage";
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
