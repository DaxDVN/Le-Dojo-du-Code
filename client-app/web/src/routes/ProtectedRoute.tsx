import { Navigate } from 'react-router-dom';
import React from 'react';

const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  return isAuthenticated() ? children : <Navigate to="/auth" />;
};

export default ProtectedRoute;