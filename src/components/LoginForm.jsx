import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "./Modal";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const LoginForm = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response ? err.response.data.message : "Server error");
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm ">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-10 shadow-md rounded-2xl"
        >
          <h2 className="text-xl font-medium text-center mb-6">
            LOGIN AS ADMIN <br />
            <span className="text-[10px]">HUMAN RESOURCES 1</span>
          </h2>
          {/* Email Field */}
          <div className="relative w-full">
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-3.5 bg-white px-1 text-gray-500 text-sm"
            >
              Email
            </label>
          </div>{" "}
          <br />
          {/* Password Field */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label
              htmlFor="password"
              className="absolute left-3 -top-3.5 bg-white px-1 text-gray-500 text-sm"
            >
              Password
            </label>
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
          {/* Forgot Password */}
          <div className="text-center mt-4">
            <a
              href="#"
              className="text-[#32674D] font-extrabold text-xs cursor-pointer hover:bg-gray-200 px-2 py-1 rounded"
            >
              Forgot your password?
            </a>
          </div>
          {/* Login Button */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="w-[80px] py-2 px-4 bg-[#32674D] text-white font-medium rounded-3xl shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2"
            >
              Log In
            </button>
          </div>
        </form>
        <div className="text-center pt-3">
          <a href="#" className="font-bold text-[#32674D]">
            Not a member yet? Join now!
          </a>
          <br /> <br />
          <button
            onClick={() => navigate("/signup")}
            className="text-[#32674D] font-bold border-[1px] p-2 border-[#32674D] rounded-3xl hover:bg-gray-300 focus:outline-none"
          >
            Join Now
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} message={error} />
    </div>
  );
};

export default LoginForm;
