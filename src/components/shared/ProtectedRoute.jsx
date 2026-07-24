import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function ProtectedRoute({ children, role }) {
  const { isAuthenticated, role: userRole } = useAuth();

  if (!isAuthenticated) {
    if (role === 'admin') return <Navigate to="/admin/login" replace />;
    if (role === 'staff') return <Navigate to="/login" replace />;
    return <Navigate to="/login" replace />;
  }

  if (role && userRole !== role) {
    if (userRole === 'admin') return <Navigate to="/admin/dashboard" replace />;
    if (userRole === 'staff') return <Navigate to="/staff/dashboard" replace />;
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
