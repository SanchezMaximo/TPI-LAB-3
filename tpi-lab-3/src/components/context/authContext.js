import React, { children } from "react";
import { createContext, useContext } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export function AuthProvider({ children }) {
  const signup = (email, password) => {
    console.log(email, password);
  };

  return (
    <authContext.Provider value={{ signup }}>{children}</authContext.Provider>
  );
}
export default AuthProvider;

//poner en Home/app/la pag principal luego
