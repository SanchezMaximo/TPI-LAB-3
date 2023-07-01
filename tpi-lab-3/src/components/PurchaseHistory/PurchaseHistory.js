import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { useAuth } from "../context/authContext";

function PurchaseHistory() {
  const { user } = useAuth();
  const historyRef = collection(db, "purchases", user.email, "userPurchases");
  const [historyUser, setHistoryUser] = useState([]);

  const getHistoryUser = async () => {
    const storedRecord = await getDocs(historyRef);
    setHistoryUser(
      storedRecord.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    getHistoryUser();
  }, []);

  return (
    <div>
      <h2>Purchase History</h2>
      {historyUser.length === 0 ? (
        <p>No purchase history available.</p>
      ) : (
        <ul>
          {historyUser.map((record) => (
            <li key={record.id}>
              <p>Name: {record.name}</p>
              <p>Price: {record.price}</p>
              <p>Quantity: {record.quantity}</p>
              <p>Time: {record.time}</p>
              {user.email === "admin@admin.com" && <p>User: {record.user}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PurchaseHistory;
