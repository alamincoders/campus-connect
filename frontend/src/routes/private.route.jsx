import { useAuth } from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const location = useLocation();
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  const isAuthenticated = !!user;

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate
      to="/login"
      state={{ from: location }} // Pass 'from' state
    />
  );
};

export default PrivateRoute;
