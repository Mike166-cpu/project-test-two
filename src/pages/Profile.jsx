import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BellIcon } from "@heroicons/react/24/outline";
import SearchBar from "../components/Searchbar";
import Sidebar from "../components/SideBar";

const NotificationIcon = () => {
  return (
    <div className="relative">
      <BellIcon className="h-6 w-6 text-gray-600" />
      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
        3
      </span>
    </div>
  );
};

const Profile = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    document.title = "Employee Records Management";
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/employees");
        console.log("Response status:", response.status); // Log the status
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Data received:", data); // Log the data received
        setEmployeeData(data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchEmployeeData();
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    return null;
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
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

        {/* MAIN CONTENT */}
        <div className="p-2">
          <h1 className="text-xl font-bold mb-4">Employee Attendance Data</h1>
          <table className="table w-full shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-4 py-3">Employee ID</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Clock In</th>
                <th className="px-4 py-3">Clock Out</th>
                <th className="px-4 py-3">Hours Worked</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {employeeData.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-gray-500">
                    No data available
                  </td>
                </tr>
              ) : (
                employeeData.map((employee) =>
                  employee.attendances.map((record, index) => (
                    <tr
                      key={`${employee.employee_id}-${index}`}
                      className="hover:bg-gray-100"
                    >
                      <td className="px-4 py-3">{employee.employee_id}</td>
                      <td className="px-4 py-3">
                        {employee.first_name} {employee.last_name}
                      </td>
                      <td className="px-4 py-3">{record.date}</td>
                      <td className="px-4 py-3">{record.clock_in}</td>
                      <td className="px-4 py-3">{record.clock_out}</td>
                      <td className="px-4 py-3">{record.hours_worked}</td>
                      <td
                        className={`px-4 py-3 ${
                          record.status === "Present"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {record.status}
                      </td>
                    </tr>
                  ))
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
