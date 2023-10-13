// Purchase history
import axios from "axios";
import styles from "./purchaseHistroy.module.css";
import { useEffect, useState } from "react";
export default function PurchaseHistroy() {
  const [purchaseHistroyData, setPurchaseHistroyData] = useState([]);

  useEffect(() => {
    const userAddress = "0x425282C917fed31782d33E684A64078517AF9132";

    axios
      .get(`http://127.0.0.1:8000/purchases/?userAddress=${userAddress}`)
      .then((response) => {
        setPurchaseHistroyData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (purchaseHistroyData.length === 0) {
    return <div>No purchases have been made</div>;
  }

  const tableBodyContent = purchaseHistroyData.purchases.map((purchase) => {
    const timestamp = purchase.purchaseTime; // Replace with actual timestamp

    const date = new Date(timestamp * 1000); // JavaScript uses milliseconds

    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);

    const ampm = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12;

    console.log(
      `${day}/${month}/${year} ${hours12}:${minutes}:${seconds} ${ampm}`
    );

    return (
      <tr key={purchase.id}>
        <td>{purchase.itemName}</td>
        <td>{purchase.itemPrice} ETH</td>
        <td>
          {purchase.firstName} {purchase.lastName}
        </td>
        <td>{purchase.userAddress}</td>
        <td>{purchase.email}</td>
        <td>
          `${day}/${month}/${year} ${hours12}:${minutes}:${seconds} ${ampm}`
        </td>
      </tr>
    );
  });

  //jsx to return the table
  console.log(purchaseHistroyData.purchases);
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Purchase Histroy</h1>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Account name</th>
              <th>User address</th>
              <th>Email</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{tableBodyContent}</tbody>
        </table>
      </div>
    </main>
  );
}
