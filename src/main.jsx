import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import LoginForm from './components/LoginForm'; 
import SignUpForm from './components/SignUpForm'; 
import Dashboard from './pages/Dashboard'; 
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} /> 
        <Route path="/login" element={<LoginForm />} /> 
        <Route path="/signup" element={<SignUpForm />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/profile" element={<Profile />} />
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
