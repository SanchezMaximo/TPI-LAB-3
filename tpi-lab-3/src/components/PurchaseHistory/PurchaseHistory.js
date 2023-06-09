import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { useAuth } from "../context/authContext";
import PHCard from "./PHCard";
import "./PurchaseHistory.css";
import Loader from "../Loading/Loader";

function PurchaseHistory() {
  const { user, role } = useAuth();
  const historyRef = collection(db, "purchases", user.email, "userPurchases");
  const [historyUser, setHistoryUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const getHistoryUser = async () => {
    if (role !== "admin") {
      const storedRecord = await getDocs(historyRef);
      setHistoryUser(
        storedRecord.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setLoading(false);
    } else {
      const adminRef = collection(
        db,
        "purchases",
        "adminRecord",
        "usersPurchases"
      );
      const storedRecord = await getDocs(adminRef);
      setHistoryUser(
        storedRecord.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setLoading(false);
    }
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
      {loading ? (
        <Loader />
      ) : historyUser.length === 0 ? (
        <>
          <h3 className="purchaseHistory">Purchase History</h3>
          <p className="textNoPurchase">No purchase history available.</p>
        </>
      ) : (
        <>
          <h3 className="purchaseHistory">Purchase History</h3>
          <div className="purchaseGroups">
            {groupByTime().map((group, index) => (
              <div key={index} className="groupContainer">
                <h4 id="titleP">Purchase {index + 1}</h4>
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
        </>
      )}
    </div>
  );
}

export default PurchaseHistory;
