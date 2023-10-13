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
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // maps over the dummy data to create rows for the table
  const tableBodyContent = purchaseHistroyData.map((purchase) => {
    return (
      <tr key={purchase.id}>
        <td>{purchase.name}</td>
        <td>{purchase.price} ETH</td>
        <td>{purchase.Date}</td>
      </tr>
    );
  });

  //jsx to return the table
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Purchase Histroy</h1>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{tableBodyContent}</tbody>
        </table>
      </div>
    </main>
  );
}
