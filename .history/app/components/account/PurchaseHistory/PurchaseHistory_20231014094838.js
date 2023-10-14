// Purchase history
import axios from "axios";
import styles from "./purchaseHistroy.module.css";
import { useEffect, useState } from "react";
export default function PurchaseHistroy() {
  const [purchaseHistroyData, setPurchaseHistroyData] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      const token = localStorage.getItem("access_token"); // Get the token from local storage

      try {
        const response = await axios.get("http://127.0.0.1:8000/users/me/", {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        });

        if (response.data) {
          const userAddress = response.data[0].userAddress;
          axios
            .get(`http://127.0.0.1:8000/purchases/?userAddress=${userAddress}`)
            .then((response) => {
              setPurchaseHistroyData(response.data);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      } catch (error) {
        console.error(`Error fetching user data: ${error}`);
      }
    }
    fetchUserData();
  }, []);

  if (purchaseHistroyData.length === 0) {
    return <div>No purchases have been made</div>;
  }

  const tableBodyContent = purchaseHistroyData.purchases
    .toReversed()
    .map((purchase) => {
      const timestamp = purchase.purchaseTime;

      const date = new Date(timestamp * 1000);

      const day = ("0" + date.getDate()).slice(-2);
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const year = date.getFullYear();

      const hours = date.getHours();
      const minutes = ("0" + date.getMinutes()).slice(-2);
      const seconds = ("0" + date.getSeconds()).slice(-2);

      const ampm = hours >= 12 ? "PM" : "AM";
      const hours12 = hours % 12 || 12;

      return (
        <tr key={purchase.id}>
          <td>{purchase.itemName}</td>
          <td>{purchase.itemPrice}ETH</td>
          <td>
            {purchase.firstName} {purchase.lastName}
          </td>
          <td>{purchase.userAddress}</td>
          <td>{purchase.email}</td>
          <td>{`${day}/${month}/${year} ${hours12}:${minutes}:${seconds} ${ampm}`}</td>
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
