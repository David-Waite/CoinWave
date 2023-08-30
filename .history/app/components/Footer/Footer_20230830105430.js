import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.main}>
      <p className={styles.copyright}>
        {" "}
        Copyright &copy; CoinWave, 2023. <br />
        All rights reserved.
      </p>
    </footer>
  );
}
