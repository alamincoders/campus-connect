import AboutSection from "@/components/screens/AboutSection";
import AdmissionSection from "@/components/screens/AdmissionSection";
import ImageGallery from "@/components/screens/ImageGallery";
import NewsLetter from "@/components/screens/NewsLetter";
import ReviewSection from "@/components/screens/ReviewSection";
import { BreadcrumbSection } from "@/components/shared/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <BreadcrumbSection
        page_name="About Us"
        items={[{ label: "Home", path: "/" }, { label: "About Us" }]}
      />

      <AdmissionSection />
      <AboutSection />
      <ImageGallery />
      <ReviewSection />
      <NewsLetter />
    </>
  );
};

export default AboutPage;
