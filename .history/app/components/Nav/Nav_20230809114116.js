import Image from "next/image";
import styles from "./nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.main}>
      <Link href="/home">CoinWave</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
}