import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { useAuth } from "../context/authContext";
import { ThemeContext } from "../context/ThemeContext";
import "./PagUsuario.css";

function PagUsuario() {
  const [userList, setUserList] = useState([]);
  const { user, role } = useAuth();
  const { isDarkMode } = useContext(ThemeContext);

  const getUsers = async () => {
    const userRef = collection(db, "users");
    const userDocs = await getDocs(userRef);
    setUserList(userDocs.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const changeRole = async (email, role) => {
    const userDoc = doc(db, "users", email);

    if (role === "user") {
      const newrole = {
        email: email,
        role: "admin",
      };
      await updateDoc(userDoc, newrole);
    } else {
      const newrole = {
        email: email,
        role: "user",
      };
      await updateDoc(userDoc, newrole);
    }
    getUsers();
  };
  return (
    <div className="users">
      {userList.map((list) => (
        <div
          key={list.id}
          className={isDarkMode ? "cardUsersDark" : "cardUsersLight"}
        >
          <p>{list.email}</p>
          <p>{list.role}</p>
          {user.email === "dueño@gmail.com" ? (
            <button
              className={
                isDarkMode ? "btnChangeRoleDark" : "btnChangeRoleLight"
              }
              onClick={() => changeRole(list.email, list.role)}
            >
              Change Role
            </button>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}

export default PagUsuario;
