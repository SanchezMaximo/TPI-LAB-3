import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { toast } from "react-toastify";
import { doc, getDoc } from "firebase/firestore";
export const authContext = createContext();

//Custom hooks
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("user");

  const signup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setRole(null);
    signOut(auth);
  };
  const getUserRole = async (currentUser) => {
    const userC = doc(db, "users", currentUser.email);
    const userR = await getDoc(userC);
    const userData = userR.data();
    setRole(userData.role);
  };

  const ToastError = (errors) => {
    if (errors.code === "auth/missing-email")
      return toast.error("Missing Email");
    if (errors.code === "auth/invalid-email")
      return toast.error("Invalid Email");
    if (errors.code === "auth/missing-password")
      return toast.error("Missing password");
    if (errors.code === "auth/weak-password")
      return toast.error("Password should be 6 or longer digits");
    if (errors.code === "auth/email-already-in-use")
      return toast.error("Email already in use");
    if (errors.code === "auth/user-not-found")
      return toast.error("User not found");
    if (errors.code === "auth/wrong-password")
      return toast.error("Wrong Password");
  };
  //Cambio de estado en usuario cuando se loguea, registra o logout
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        getUserRole(currentUser);
      }
    });
  }, []);
  return (
    <authContext.Provider
      value={{ signup, login, logout, user, loading, ToastError, role }}
    >
      {children}
    </authContext.Provider>
  );
}
