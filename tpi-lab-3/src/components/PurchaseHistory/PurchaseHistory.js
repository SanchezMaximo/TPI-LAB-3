import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { useAuth } from "../context/authContext";
import PHCard from "./PHCard";
import "./PurchaseHistory.css";
import Loader from "../Loading/Loader";

function PurchaseHistory() {
  const { user } = useAuth();
  const historyRef = collection(db, "purchases", user.email, "userPurchases");
  const [historyUser, setHistoryUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const getHistoryUser = async () => {
    const storedRecord = await getDocs(historyRef);
    setHistoryUser(
      storedRecord.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setLoading(false);
  };

  useEffect(() => {
    getHistoryUser();
  }, []);

  const groupByTime = () => {
    const groupedData = {};
    historyUser.forEach((record) => {
      if (groupedData[record.time]) {
        groupedData[record.time].push(record);
      } else {
        groupedData[record.time] = [record];
      }
    });
    return Object.values(groupedData);
  };

  return (
    <div>
      <h3 className="purchaseHistory">Purchase History</h3>
      {loading ? (<Loader />) :
      historyUser.length === 0 ? 
      (
        <p>No purchase history available.</p>
      ) : 
      (
        <div className="purchaseGroups">
              {groupByTime().map((group, index) => (
              <div key={index} className="groupContainer">
                <h3 id="titleP">Purchase {index + 1}</h3>
                {group.map((record) => (
                  <PHCard
                    key={record.id}
                    name={record.name}
                    price={record.price}
                    quantity={record.quantity}
                    time={record.time}
                    userB={record.user}
                  />
                ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default PurchaseHistory;
