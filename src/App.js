import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/shared/AuthContext';
import ProtectedRoute from './components/shared/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';
import ContactUsPage from './components/Pages/ContactUsPage';
import LoginPage from './components/Pages/LoginPage';
import UserLoginPage from './users/UserLoginPage';
import StaffLoginPage from './staff/StaffLoginPage';
import RegisterPage from './components/Pages/RegisterPage';
import UserRegisterPage from './users/UserRegisterPage';
import StaffRegisterPage from './staff/StaffRegisterPage';

import UserRouter from './users/UserRouter';

import StaffRouter from './staff/StaffRouter';

import AdminLogin from './admin/AdminLogin';
import AdminSidebar from './admin/AdminSidebar';
import AdminMainContent from './admin/AdminMainContent';

import './App.css';

function StaffDashboardLayout() {
  return <StaffRouter />;
}

function AdminDashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <AdminMainContent />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App min-h-screen flex flex-col">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <HomePage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Header />
                  <AboutPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Header />
                  <ContactUsPage />
                  <Footer />
                </>
              }
            />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/user-login" element={<UserLoginPage />} />
            <Route path="/staff-login" element={<StaffLoginPage />} />
            <Route path="/staff/login" element={<Navigate to="/staff-login" replace />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/user-registration" element={<UserRegisterPage />} />
            <Route path="/staff-registration" element={<StaffRegisterPage />} />

            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute role="user">
                  <UserRouter />
                </ProtectedRoute>
              }
            />

            <Route
              path="/staff/dashboard/*"
              element={
                <ProtectedRoute role="staff">
                  <StaffDashboardLayout />
                </ProtectedRoute>
              }
            />

            <Route path="/admin/login" element={<AdminLogin />} />

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute role="admin">
                  <AdminDashboardLayout />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
