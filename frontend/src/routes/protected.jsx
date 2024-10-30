import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(user);
  return user?.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
