import AboutSection from "@/components/screens/AboutSection";
import AdmissionSection from "@/components/screens/AdmissionSection";
import HeroSlider from "@/components/screens/HeroSlider";
import ImageGallery from "@/components/screens/ImageGallery";
import NewsLetter from "@/components/screens/NewsLetter";
import OurColleges from "@/components/screens/OurColleges";
import ResearchPapersSection from "@/components/screens/ResearchPapersSection";
import ReviewSection from "@/components/screens/ReviewSection";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <OurColleges />
      <ImageGallery />
      <ResearchPapersSection />
      <ReviewSection />
      <AdmissionSection />
      <NewsLetter />
    </>
  );
};

export default HomePage;
