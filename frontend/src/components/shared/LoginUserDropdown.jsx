import { useAuth } from "@/hooks/useAuth";
import { LogOutIcon } from "lucide-react";
import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdDashboardCustomize, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const LoginUserDropdown = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const { user, logout } = useAuth();

  const actionContents = [
    {
      label: "My College",
      icon: <FaGraduationCap />,
      route: "/my-college", // Define route for "My College"
    },
    {
      label: "Profile",
      icon: <MdDashboardCustomize />,
      route: "/profile", // Define route for "Profile"
    },
    {
      label: "Logout",
      icon: <LogOutIcon size={14} />,
      action: logout, // Define action for "Logout"
    },
  ];

  const handleActionClick = (label) => {
    if (label === "Logout") {
      logout();
    }
    setIsButtonActive(false); // Close dropdown after an action
  };

  return (
    <div className="flex items-center rounded border-none outline-none text-secondary justify-between relative">
      <button className="text-base ml-6 rounded-full w-10 h-10 bg-primary_main-100 text-secondary_main transition-all duration-500 cursor-auto">
        {user?.displayName.charAt(0)}
      </button>

      <div
        onClick={() => setIsButtonActive(!isButtonActive)}
        className="text-secondary_main w-[50px] py-1.5 inline items-center justify-center cursor-pointer rounded-r"
      >
        <MdKeyboardArrowDown className="text-[2rem]" />
      </div>

      <ul
        className={`${
          isButtonActive
            ? "opacity-100 z-20 translate-y-0"
            : "opacity-0 z-[-1] translate-y-[-5px]"
        } publishButtonOptions transition-all duration-500 flex flex-col boxShadow bg-primary_main p-2 w-40 absolute top-[46px] rounded right-0 text-text text-[0.9rem] z-[300]`}
      >
        {actionContents.map((item, index) => (
          <li
            role="button"
            key={index}
            className="py-2 px-3 flex items-center gap-[5px] hover:bg-secondary_main rounded-t cursor-pointer"
            onClick={() => handleActionClick(item.label)}
          >
            {item.route ? (
              <Link
                to={item.route}
                className="flex items-center gap-[5px] w-full h-full"
                onClick={() => setIsButtonActive(false)}
              >
                {item.icon}
                {item.label}
              </Link>
            ) : (
              <>
                {item.icon}
                {item.label}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoginUserDropdown;
