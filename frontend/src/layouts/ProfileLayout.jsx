import TopNavSection from "@/components/shared/TopNavSection";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1">
        <TopNavSection />
        <SidebarTrigger />
        <Outlet />
      </div>
    </SidebarProvider>
  );
};

export default ProfileLayout;
