import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  let location = useLocation();

  const { user, loading } = useAuth();
  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  if (!user) {
    <Navigate to="/login" state={{ from: location }}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
