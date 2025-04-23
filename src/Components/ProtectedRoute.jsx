// src/components/ProtectedRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children, requireOnboarding = true }) => {
  const [status, setStatus] = useState({
    isAuthenticated: false,
    isOnboarded: false,
    loading: true
  });

  const location = useLocation();

  useEffect(() => {
    // Check auth and onboarding status from localStorage or your auth context
    const authStatus = {
      isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
      isOnboarded: localStorage.getItem('isOnboarded') === 'true',
      loading: false
    };
    setStatus(authStatus);
  }, [location]);

  if (status.loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!status.isAuthenticated) {
    return <Navigate to="/onboarding/welcome" replace />;
  }

  if (requireOnboarding && !status.isOnboarded) {
    return <Navigate to="/onboarding/profile" replace />;
  }

  return children;
};

export default ProtectedRoute;