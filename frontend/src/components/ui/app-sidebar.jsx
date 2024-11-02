import { HomeIcon, InfoIcon, LogOut, Settings, StarIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { Button } from "./button";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Add Review",
    url: "/profile/add-review",
    icon: StarIcon,
  },
  {
    title: "Account Information",
    url: "/account",
    icon: InfoIcon,
  },

  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Sign Out",
    icon: LogOut,
  },
];

export function AppSidebar() {
  const { logout } = useAuth();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Profile Settings</SidebarGroupLabel>
          <SidebarGroupContent className="mt-3 lg:mt-7">
            <SidebarMenu>
              {items.map((item, i) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={`${
                      i === items.length - 1
                        ? "mt-2.5 lg:mt-5 text-primary_main"
                        : ""
                    }`}
                    asChild
                  >
                    {i === items.length - 1 ? (
                      <Button
                        type="submit"
                        onClick={() => logout()}
                        className="w-full bg-transparent text-left items-center justify-start static text-sm pl-2"
                      >
                        <item.icon />
                        {item.title}
                      </Button>
                    ) : (
                      <Link to={item?.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
