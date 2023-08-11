import Image from "next/image";
import styles from "./account.module.css";
import AccountMenu from "../components/account/AccountMenu/AccountMenu";

export default function Account() {
  return (
    <div className={styles.main}>
      <aside>
        <AccountMenu />
      </aside>
      <main>yeet</main>
    </div>
  );
}
