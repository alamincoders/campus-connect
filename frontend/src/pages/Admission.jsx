import { BreadcrumbSection } from "@/components/shared/Breadcrumb";
import AdmissionPage from "./AdmissionPage";

const Admission = () => {
  return (
    <>
      <BreadcrumbSection
        page_name="Admission"
        items={[{ label: "Home", path: "/" }, { label: "Admission" }]}
      />
      <AdmissionPage />
    </>
  );
};

export default Admission;
