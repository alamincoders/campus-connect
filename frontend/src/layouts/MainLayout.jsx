import CopyrightSection from "@/components/shared/CopyrightSection";
import FooterSection from "@/components/shared/FooterSection";
import NavbarSection from "@/components/shared/NavbarSection";
import TopNavSection from "@/components/shared/TopNavSection";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header>
        <TopNavSection />
        <NavbarSection />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterSection />
        <CopyrightSection/>
      </footer>
    </>
  );
};

export default MainLayout;
