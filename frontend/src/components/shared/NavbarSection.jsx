import { useAuth } from "@/hooks/useAuth";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "../ui/modal";
import LoginUserDropdown from "./LoginUserDropdown";
import SearchBar from "./SearchBar";

const NavbarSection = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const navItems = [
    { name: "home", path: "/" },
    { name: "colleges", path: "/colleges" },
    { name: "admission", path: "/admission" },
    { name: "my college", path: "/my-college" },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 140);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-[99999] bg-white py-5 lg:py-0 transition-all duration-300 ${
        isFixed ? "fixed top-0 left-0 w-full shadow animate-fadeDown" : ""
      }`}
    >
      <div className="flex items-center justify-between container_fluid">
        <Link to="/">
          <img
            src="/logo-main.png"
            alt="logo"
            className="max-w-60 w-full px-3"
          />
        </Link>
        <div className="items-center gap-x-8 flex">
          <ul className="items-center gap-6 xl:gap-12 text-base lg:flex hidden">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`before:w-0 hover:before:w-full before:bg-main-400 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] before:left-0 cursor-pointer capitalize font-medium py-[21.5px] hover:text-primary_main ${
                  isActive(item.path) ? "text-primary_main" : "text-[#162542]"
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
            <Modal>
              <ModalTrigger>
                <button className="inline-flex">
                  <Search className="mt-2" />
                </button>
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <SearchBar
                    className="!w-full"
                    shortcut={false}
                  />
                </ModalContent>
              </ModalBody>
            </Modal>
          </ul>

          <div className="items-center gap-[10px] flex">
            {!user && (
              <Link
                to="/login"
                className="py-3.5 2xl:py-[21.5px] px-8 text-white bg-primary_main hover:text-primary_main-100 hover:bg-secondary_main transition-all duration-300 lg:flex hidden font-medium uppercase rounded-[2px] 2xl:rounded-none "
              >
                Admission Open
              </Link>
            )}
            {user && <LoginUserDropdown />}

            <CiMenuFries
              className="text-[1.8rem] mr-1 text-mine-shaft cursor-pointer lg:hidden flex"
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            />
          </div>
        </div>

        <aside
          className={`${
            mobileSidebarOpen
              ? "translate-x-0 opacity-100 z-[200]"
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
                  isActive(item.path) ? "text-primary_main" : ""
                }`}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
            <Link
              to="/login"
              className="py-3 lg:py-[21.5px] px-8 text-white bg-primary_main hover:text-primary_main-100 hover:bg-secondary_main transition-all duration-300 inline-flex lg:hidden font-medium uppercase"
            >
              Admission Open
            </Link>
          </ul>
        </aside>
      </div>
    </nav>
  );
};

export default NavbarSection;
