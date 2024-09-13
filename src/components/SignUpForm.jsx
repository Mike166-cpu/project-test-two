import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Modal = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h3 className="text-lg font-semibold">{message}</h3>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(null);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long, include one uppercase letter, one digit number, and one symbol."
      );
      return;
    }

    try {
      await axios.post("http://localhost:5000/signup", {
        firstName,
        lastName,
        middleName,
        birthday,
        gender,
        email,
        password,
      });
      setModalMessage("Registration successful! Redirecting to login.");
      setIsModalOpen(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.response ? err.response.data.message : "Server error");
      setModalMessage("Server error");
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-7">
      <div className="w-[800px] p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-medium text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            {/* First Name */}
            <div className="space-y-1 flex-1">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            {/* Last Name */}
            <div className="space-y-1 flex-1">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            {/* Middle Name */}
            <div className="space-y-1 flex-1">
              <label
                htmlFor="middleName"
                className="block text-sm font-medium text-gray-700"
              >
                Middle Name
              </label>
              <input
                type="text"
                id="middleName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex space-x-4">
            {/* Birthday */}
            <div className="space-y-1 flex-1">
              <label
                htmlFor="birthday"
                className="block text-sm font-medium text-gray-700"
              >
                Birthday
              </label>
              <input
                type="date"
                id="birthday"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
              />
            </div>

            {/* Gender */}
            <div className="space-y-1 flex-1">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <select
                id="gender"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3"
              >
                <i
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} text-gray-500`}
                ></i>
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-1">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3"
              >
                <i
                  className={`fas ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"} text-gray-500`}
                ></i>
              </button>
            </div>
          </div>

          {error && <div className="text-sm text-red-500 mt-2">{error}</div>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Already have an account?</p>
            <button
              onClick={() => navigate("/login")}
              className="mt-2 text-blue-500 hover:underline"
            >
              Log In
            </button>
          </div>
        </form>
        <Modal
          isOpen={isModalOpen}
          message={modalMessage}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default SignUpForm;
  