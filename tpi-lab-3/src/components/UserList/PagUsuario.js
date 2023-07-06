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

  const confirmChangeRole = (email, currentRole) => {
    const newRole = currentRole === "user" ? "admin" : "user";
    const confirmation = window.confirm(
      `Are you sure that ${email} should be changed to ${newRole}?`
    );

    if (confirmation) {
      changeRole(email, newRole);
    }
  };

  const changeRole = async (email, role) => {
    const userDoc = doc(db, "users", email);

    const newRoleData = {
      email: email,
      role: role,
    };

    await updateDoc(userDoc, newRoleData);
    getUsers();
  };

  return (
    <div>
      {userList.map((list) => (
        <div
          key={list.id}
          className={isDarkMode ? "cardUsersDark" : "cardUsersLight"}
        >
          <p>{list.email}</p>
          <p className={list.role === "admin" ? "roleCard" : ""}>{list.role}</p>
          {user.email === "dueño@gmail.com" &&
          list.email !== "dueño@gmail.com" ? (
            <button
              className={
                isDarkMode ? "btnChangeRoleDark" : "btnChangeRoleLight"
              }
              onClick={() => confirmChangeRole(list.email, list.role)}
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
