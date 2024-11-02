import ContactForm from "@/components/screens/ContactForm";
import { BreadcrumbSection } from "@/components/shared/Breadcrumb";

const ContactPage = () => {
  return (
    <>
      <BreadcrumbSection
        page_name="Contact Us"
        items={[{ label: "Home", path: "/" }, { label: "Contact Us" }]}
      />
      <ContactForm />
    </>
  );
};

export default ContactPage;
