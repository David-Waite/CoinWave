import styles from "./nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.main}>
      <Link href="/">CoinWave</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
}
