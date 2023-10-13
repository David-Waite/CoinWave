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
    return (
      <tr key={purchase.id}>
        <td>{purchase.itemName}</td>
        <td>{purchase.itemPrice} ETH</td>
        <td>
          {purchase.firstName} {purchase.lastName}
        </td>
        <td>{purchase.userAddress.slice(0, 5)}...</td>
        <td>{purchase.purchaseTime}</td>
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
              <th>account name</th>
              <th>user address</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{tableBodyContent}</tbody>
        </table>
      </div>
    </main>
  );
}
