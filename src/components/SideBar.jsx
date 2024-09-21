// components/Sidebar.jsx

import React from "react";
import { LuLayoutDashboard, LuPackage, LuBox } from "react-icons/lu";
import { RiArchiveDrawerLine, RiPagesLine } from "react-icons/ri";
import { BsChatLeft } from "react-icons/bs";
import { LiaWpforms } from "react-icons/lia";
import { IoDocumentsOutline, IoDesktopSharp } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = React.useState(location.pathname);

  React.useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    navigate(path);
    setActivePage(path);
  };

  const glowStyle = {
    color: "teal",
    textShadow:
      "0 0 5px rgba(0, 128, 128, 0.7), 0 0 10px rgba(0, 128, 128, 0.5), 0 0 15px rgba(0, 128, 128, 0.3)",
  };

  return (
    <div
      className={`fixed left-0 top-0 w-64 bg-white h-full shadow-lg z-50 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4 bg-base-500">
        <h2 className="text-xl font-bold text-base-100">Sidebar Menu</h2>

        <div className="mt-4">
          <div className="flex items-center justify-center">
            <LuLayoutDashboard size="2.5rem" style={glowStyle} />
            <h1 className="font-extrabold text-xl pt-1 pl-3">Dashboard</h1>
          </div>{" "}
          <br />
          <div
            className={`flex pt-2 p-2 rounded-md transition-all duration-200 ${
              activePage === "/dashboard" ? "bg-gray-200 text-black" : "hover:bg-gray-200"
            }`}
            onClick={() => handleNavigation("/dashboard")}
          >
            <IoDesktopSharp size="1.4rem" />
            <span className="font-semibold text-[0.875rem] pl-[5px]">
              Dashboard
            </span>
          </div>
        </div>

        <ul className="mt-4">
          <li>
            <span className="text-gray-400 text-sm font-semibold">Apps</span>

            <div
              className={`flex pt-2 p-2 rounded-md transition-all duration-200 ${
                activePage === "/profile" ? "bg-gray-300 text-black" : "hover:bg-gray-200"
              }`}
              onClick={() => handleNavigation("/profile")}
            >
              <LuPackage size="1.4rem" />
              <span className="font-semibold text-[0.875rem] pl-[5px]">
                Employee Records Management
              </span>
            </div>

            <div className="flex pt-3">
              <RiArchiveDrawerLine size="1.4rem" />
              <span className="font-semibold text-[0.875rem] pl-[5px]">
                File Manager
              </span>
            </div>
            <div className="flex pt-3">
              <BsChatLeft size="1.4rem" />
              <span className="font-semibold text-[0.875rem] pl-[5px]">
                Chat
              </span>
            </div>
          </li>

          <li className="mt-4">
            <span className="text-gray-400 text-sm font-semibold">Pages</span>
            <div className="flex pt-2">
              <RiPagesLine size="1.4rem" />
              <span className="font-semibold text-[0.875rem] pl-[5px]">
                Landing Page
              </span>
            </div>
          </li>

          <li className="mt-4">
            <span className="text-gray-400 text-sm font-semibold">
              UI Showcase
            </span>
            <div className="flex pt-2">
              <LuBox size="1.4rem" />
              <span className="font-semibold text-[0.875rem] pl-[5px]">
                Components
              </span>
            </div>
            <div className="flex pt-2">
              <LiaWpforms size="1.4rem" />
              <span className="font-semibold text-[0.875rem] pl-[5px]">
                Forms
              </span>
            </div>
          </li>

          <li className="mt-4">
            <span className="text-gray-400 text-sm font-semibold">Others</span>
            <div className="flex pt-2">
              <IoDocumentsOutline size="1.4rem" />
              <span className="font-semibold text-[0.875rem] pl-[5px]">
                Documents
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
