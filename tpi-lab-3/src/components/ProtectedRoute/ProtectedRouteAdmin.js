import Loader from "../Loading/Loader";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

export function ProtectedRouteAdmin({ children }) {
  const { role, loading } = useAuth();

  if (loading) return <Loader />;

  if (role !== "admin") return <Navigate to="/" />;

  return <>{children}</>;
}
