import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import AuthPage from './components/AuthPage';
import LoginForm from './components/LoginForm'; 
import Dashboard from './pages/Dashboard'; 
import SignUpForm from './components/SignUpForm';
import Profile from './pages/Profile'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/login" element={<LoginForm />} /> 
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="./profile" element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
