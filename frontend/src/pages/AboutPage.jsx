import { BreadcrumbSection } from "@/components/shared/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <BreadcrumbSection
        page_name="About Us"
        items={[{ label: "Home", path: "/" }, { label: "About" }]}
      />
    </>
  );
};

export default AboutPage;
