import styles from "./purchaseHistroy.module.css";
export default function PurchaseHistroy() {
  const DUMMYHISTORY = [
    {
      id: 1,
      name: "example name",
      price: "0.25",
      Date: "12/11/2023",
    },
  ];

  const tableBodyContent = DUMMYHISTORY.map((purchase) => {
    return <tr key={purchase.Date}></tr>;
  });
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Purchase Histroy</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sadofijsofij</td>
            <td>2023 ETH</td>
            <td>09/8/2023</td>
          </tr>
          <tr>
            <td>sadofijsofij</td>
            <td>2023 ETH</td>
            <td>09/8/2023</td>
          </tr>
          <tr>
            <td>sadofijsofij</td>
            <td>2023 ETH</td>
            <td>09/8/2023</td>
          </tr>
          <tr>
            <td>sadofijsofij</td>
            <td>2023 ETH</td>
            <td>09/8/2023</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
