import ContactForm from "@/components/screens/ContactForm";
import { BreadcrumbSection } from "@/components/shared/Breadcrumb";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
