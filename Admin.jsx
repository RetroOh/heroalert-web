import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export default function Admin() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "alerts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAlerts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>HeroAlert Admin Dashboard</h1>
      {alerts.length === 0 && <p>No alerts yet.</p>}
      <ul>
        {alerts.map(alert => (
          <li key={alert.id} style={{ marginBottom: 15, borderBottom: "1px solid #ccc" }}>
            <p><strong>Timestamp:</strong> {alert.timestamp?.toDate().toLocaleString()}</p>
            <p><strong>Sender:</strong> {alert.sender || "Unknown"}</p>
            <p><strong>Message:</strong> {alert.message || "No message"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
