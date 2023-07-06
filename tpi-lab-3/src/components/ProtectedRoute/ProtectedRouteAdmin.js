import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

export function ProtectedRouteAdmin({ children }) {
  const { role, loading } = useAuth();

  if (loading) return <h1>loading</h1>;

  if (role !== "admin") return <Navigate to="/" />;

  return <>{children}</>;
}
