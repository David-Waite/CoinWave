"use client";
import styles from "./account.module.css";
import AccountMenu from "../components/account/AccountMenu/AccountMenu";
import AccountInformation from "../components/account/AccountInfomation/AccountInfomation";
import { useState } from "react";
import SellProduct from "../components/account/SellProduct/SellProduct";
import PurchaseHistroy from "../components/account/PurchaseHistory/PurchaseHistory";

export default function Account() {
  const [selected, setSelected] = useState({
    accountInformation: false,
    sellProduct: true,
    purchaseHistroy: false,
  });

  const [selectedItems, setSelectedItems] = useState();

  function handleMenuSelect(select) {
    setSelected(select);
    setSelectedItems(selectItemsByCategory(select));
  }

  function selectItemsByCategory(select) {
    return ITEMSDUMMY.filter((item) =>
      item.category === select ? item : select === "" && item
    );
  }

  return (
    <div className={styles.main}>
      <aside>
        <AccountMenu selected={selected} onClick={handleMenuSelect} />
      </aside>
      <hr />
      <main>
        {selected.accountInformation && <AccountInformation />}
        {selected.sellProduct && <SellProduct />}
        {selected.purchaseHistroy && <PurchaseHistroy />}
      </main>
    </div>
  );
}
