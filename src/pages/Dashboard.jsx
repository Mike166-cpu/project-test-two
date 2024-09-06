import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
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

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 w-64 bg-white h-full shadow-lg z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar content */}
        <div className="p-4">
          <h2 className="text-xl font-bold">Sidebar Menu</h2>
          <ul className="mt-4">
            <div>
              <span className="text-gray-400 text-sm ">
                Employee Records Management <br />
              </span>
              {/*Components*/}
              <span className=" text-base">
                Component 1 <br />
              </span>
              <span className=" text-base">
                Component 1 <br />
              </span>
              <span className=" text-base">
                Component 1 <br />
              </span>
            </div>
            <br />

            <div>
              <div>
                <hr className="border-gray-300 w-full" />
              </div>
              <span className="text-gray-400 text-sm ">
                Onboarding and Offboarding <br />
              </span>
              {/*Components*/}
              <span className=" text-base">
                Component 1 <br />
              </span>
              <span className=" text-base">
                Component 1 <br />
              </span>
              <span className=" text-base">
                Component 1 <br />
              </span>
            </div>
            <br />

            <div>
              <div>
                <hr className="border-gray-300" />
              </div>
              <span className="text-gray-400 text-sm ">HR Compliance <br /></span>
              {/*Components*/}
              <span className=" text-base">
                Component 1 <br />
              </span>
              <span className=" text-base">
                Component 1 <br />
              </span>
              <span className=" text-base">
                Component 1 <br />
              </span>
            </div>
            <br />

            <div>
              <div>
                <hr className="border-gray-300" />
              </div>
              <span className="text-gray-400 text-sm ">
                Time and Attendance Tracking <br />
              </span>
              {/*Components*/}
              <span className=" text-base">
                Component 1 <br />
              </span>
              <span className=" text-base">
                Component 1 <br />
              </span>
              <span className=" text-base">
                Component 1 <br />
              </span>
            </div>
          </ul>
        </div>
      </div>

      <div
        className={`flex-1 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        } transition-all duration-300`}
      >
        <div className="navbar bg-base-100">
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
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Dashboard</a>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
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

        {/* Main content goes here */}
        <div className="p-4">
          {/* Replace with your main content */}
          <h1>Welcome to the Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
