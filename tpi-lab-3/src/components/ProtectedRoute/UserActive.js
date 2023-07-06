import Loader from "../Loading/Loader";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

export function UserActive({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;
  if (user) return <Navigate to="/" />;

  return <>{children}</>;
}
