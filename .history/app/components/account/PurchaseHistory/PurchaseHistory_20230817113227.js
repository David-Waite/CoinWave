import styles from "./purchaseHistroy.module.css";
export default function PurchaseHistroy() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Purchase Histroy</h1>

      <table>
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
          </tr>
        </tbody>
      </table>
    </main>
  );
}
