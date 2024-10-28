import { BreadcrumbSection } from "@/components/shared/Breadcrumb";

const ContactPage = () => {
  return (
    <>
      <BreadcrumbSection
        page_name="Contact Us"
        items={[{ label: "Home", path: "/" }, { label: "Contact Us" }]}
      />
    </>
  );
};

export default ContactPage;
