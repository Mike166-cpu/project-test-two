import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Clock from "../components/Clock";
import { BellIcon } from "@heroicons/react/24/outline";
import { LuLayout, LuLayoutDashboard, LuPackage, LuBox } from "react-icons/lu";
import SearchBar from "../components/Searchbar";
import { RiArchiveDrawerLine, RiPagesLine } from "react-icons/ri";
import { BsChatLeft } from "react-icons/bs";
import { LiaWpforms } from "react-icons/lia";
import { IoDocumentsOutline, IoDesktopSharp } from "react-icons/io5";

const NotificationIcon = () => {
  return (
    <div className="relative">
      <BellIcon className="h-6 w-6 text-gray-600" />
      {/* Optionally, you can add a badge or notification count */}
      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
        3
      </span>
    </div>
  );
};

const Dashboard = () => {
  useEffect(() => {
    document.title = "Human Resources 1";
  }, []);

  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    return null;
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isHomeSubMenuOpen, setIsHomeSubMenuOpen] = useState(false);
  const [isAboutSubMenuOpen, setIsAboutSubMenuOpen] = useState(false);

  const toggleHomeSubMenu = () => {
    setIsHomeSubMenuOpen(!isHomeSubMenuOpen);
  };

  const toggleAboutSubMenu = () => {
    setIsAboutSubMenuOpen(!isAboutSubMenuOpen);
  };

  const glowStyle = {
    color: "teal",
    textShadow:
      "0 0 5px rgba(0, 128, 128, 0.7), 0 0 10px rgba(0, 128, 128, 0.5), 0 0 15px rgba(0, 128, 128, 0.3)",
  };

  return (
    <div className="flex">
      {/* Sidebar */}
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
            </div> <br />
            <div className="flex pt-2 hover:bg-gray-200 hover:text-black-500 p-2 rounded-md transition-all duration-200">
              <IoDesktopSharp size="1.4rem" />
              <span className="font-semibold text-[0.875rem] pl-[5px]">
                Dashboard
              </span>
            </div>
          </div>

          <ul className="mt-4">
            <li>
              <span className="text-gray-400 text-sm font-semibold">Apps</span>
              <div className="flex pt-2">
                <LuPackage size="1.4rem" />
                <span className="font-semibold text-[0.875rem] pl-[5px]">
                  Ecommerce
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
              <span className="text-gray-400 text-sm font-semibold">UI Showcase</span>
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
                  Forms
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`flex-1 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        } transition-all duration-300`}
      >
        <div className="navbar bg-base-500 shadow-md">
          <div className="flex-none">
            <button
              className="btn btn-square btn-ghost"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          <div>
            <SearchBar />
          </div>

          <div className="flex items-center ml-auto">
            <NotificationIcon />
          </div>

          <div className="relative flex items-center ml-4">
            {/* Profile Icon with Dropdown */}
            <div className="dropdown dropdown-end relative">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar p-2"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Profile"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <span className="p-4 text-s font-semibold">Overview</span>
        </div>

        <div className="p-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Analytics</h2>
            </div>
            <div className="p-4">
              {/* Example Data */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Metric 1 */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <LuLayoutDashboard size="2rem" className="text-blue-500" />
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-700">Total Views</h3>
                      <p className="text-xl font-bold text-gray-900">12,345</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">This is the total number of views for the dashboard.</p>
                </div>

                {/* Metric 2 */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <LuPackage size="2rem" className="text-green-500" />
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-700">New Orders</h3>
                      <p className="text-xl font-bold text-gray-900">789</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">This shows the number of new orders placed recently.</p>
                </div>

                {/* Metric 3 */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <IoDesktopSharp size="2rem" className="text-red-500" />
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-700">Bounce Rate</h3>
                      <p className="text-xl font-bold text-gray-900">45%</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Percentage of visitors who leave the site after viewing only one page.</p>
                </div>

                {/* Metric 4 */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <LuBox size="2rem" className="text-yellow-500" />
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-700">Active Users</h3>
                      <p className="text-xl font-bold text-gray-900">1,234</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Number of active users currently on the platform.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
