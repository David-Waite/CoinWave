// Purchase history
import axios from "axios";
import styles from "./purchaseHistroy.module.css";
import { useEffect } from "react";
export default function PurchaseHistroy() {
  // dummy purchaseHistory data

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/hascreditcard/", { email: email })
      .then(function (response) {
        month = month < 10 ? "0" + month : month; // pad single digit months with a leading zero
        let inputExpiryDate = `${year}-${month}`;
        setFormData({
          fullName: `${userdata.firstName} ${userdata.lastName}`,
          cardNumber: response.data.CreditCardNumber,
          expiryDate: inputExpiryDate,
          CVC: response.data.CVC,
          billingAddress: response.data.BillingAddress,
          userEmail: `${userdata.email}`,
        });
      })

      .catch(function (error) {
        setFormData({
          fullName: `${userdata.firstName} ${userdata.lastName}`,
          cardNumber: "",
          expiryDate: "",
          CVC: "",
          billingAddress: "",
          userEmail: `${userdata.email}`,
        });
        console.log(error);
      });
  }, []);
  const DUMMYHISTORY = [
    {
      id: 1,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 2,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
  ];

  // maps over the dummy data to create rows for the table
  const tableBodyContent = DUMMYHISTORY.map((purchase) => {
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
