import FooterSection from "@/components/shared/FooterSection";
import NavbarSection from "@/components/shared/NavbarSection";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header>
        <NavbarSection />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
};

export default MainLayout;
