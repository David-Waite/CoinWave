"use client";
import styles from "./account.module.css";
import AccountMenu from "../components/account/AccountMenu/AccountMenu";
import { useState } from "react";

export default function Account() {
  const [selected, setSelected] = useState("");

  function handleMenuSelect(select) {
    setSelected(select);
    setSelectedItems(selectItemsByCategory(select));
  }

  const [selectedItems, setSelectedItems] = useState(ITEMSDUMMY);

  function selectItemsByCategory(select) {
    return ITEMSDUMMY.filter((item) =>
      item.category === select ? item : select === "" && item
    );
  }
  return (
    <div className={styles.main}>
      <aside>
        <AccountMenu />
      </aside>
      <hr />
      <main>yeet</main>
    </div>
  );
}
