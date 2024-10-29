import AboutSection from "@/components/screens/AboutSection";
import AdmissionSection from "@/components/screens/AdmissionSection";
import HeroSlider from "@/components/screens/HeroSlider";
import ImageGallery from "@/components/screens/ImageGallery";
import OurColleges from "@/components/screens/OurColleges";
import ResearchPapersSection from "@/components/screens/ResearchPapersSection";
import ReviewSection from "@/components/screens/ReviewSection";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <OurColleges />
      <ImageGallery />
      <ResearchPapersSection />
      <ReviewSection />
      <AdmissionSection />
    </>
  );
};

export default HomePage;
