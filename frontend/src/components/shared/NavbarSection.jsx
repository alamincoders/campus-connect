import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const NavbarSection = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "home", path: "/" },
    { name: "features", path: "/features" },
    { name: "blogs", path: "/blogs" },
    { name: "shop", path: "/shop" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex items-center justify-between w-full relative bg-white boxShadow  px-[10px] py-[8px] border-b">
      <div className="items-center gap-x-8 flex">
        <Link to="/">
          <img
            src="/logo.svg"
            alt="logo"
            className="w-auto"
          />
        </Link>

        <ul className="items-center gap-[20px] text-[1rem] text-mine-shaft lg:flex hidden">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`before:w-0 hover:before:w-full before:bg-main-400 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] before:left-0 cursor-pointer capitalize ${
                isActive(item.path) ? "text-main-400" : ""
              }`}
            >
              <Link
                to={item.path}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="items-center gap-[10px] flex">
        <Link
          to="/signin"
          className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize hover:text-main-400 transition-all duration-300 sm:flex hidden"
        >
          Sign in
        </Link>
        <Link
          to="/signup"
          className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-main-400 text-white hover:bg-main-500 transition-all duration-300 sm:flex hidden"
        >
          Sign up
        </Link>

        <CiMenuFries
          className="text-[1.8rem] mr-1 text-mine-shaft cursor-pointer lg:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      <aside
        className={`${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[200px] opacity-0 z-[-1]"
        } lg:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}
      >
        <div className="relative mb-5">
          <input
            className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-main-400"
            placeholder="Search..."
          />
          <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]" />
        </div>

        <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`hover:border-b-main-400 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize ${
                isActive(item.path) ? "text-main-400" : ""
              }`}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
};

export default NavbarSection;
