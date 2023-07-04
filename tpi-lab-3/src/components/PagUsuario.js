import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { useAuth } from "./context/authContext";

function PagUsuario() {
  const [userList, setUserList] = useState([]);
  const { user } = useAuth();
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
    <div>
      {userList.map((list) => (
        <div key={list.id}>
          <p>{list.email}</p>
          <p>{list.role}</p>
          {list.email !== "elprimeradmin@gmail.com" && (
            <button onClick={() => changeRole(list.email, list.role)}>
              {" "}
              Change Role
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default PagUsuario;
