import AboutSection from "@/components/screens/AboutSection";
import HeroSlider from "@/components/screens/HeroSlider";
import ImageGallery from "@/components/screens/ImageGallery";
import OurColleges from "@/components/screens/OurColleges";
import ResearchPapersSection from "@/components/screens/ResearchPapersSection";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <OurColleges />
      <ImageGallery />
      <ResearchPapersSection />
    </>
  );
};

export default HomePage;
