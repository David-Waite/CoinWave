import styles from "./purchaseHistroy.module.css";
export default function PurchaseHistroy() {
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
    {
      id: 3,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 4,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 5,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 6,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 7,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 8,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 9,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 10,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 11,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 12,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 13,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 14,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 15,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 16,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 17,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 18,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 19,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 20,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 21,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 22,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 23,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
    {
      id: 24,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
  ];

  const tableBodyContent = DUMMYHISTORY.map((purchase) => {
    return (
      <tr key={purchase.id}>
        <td>{purchase.name}</td>
        <td>{purchase.price} ETH</td>
        <td>{purchase.Date}</td>
      </tr>
    );
  });
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
