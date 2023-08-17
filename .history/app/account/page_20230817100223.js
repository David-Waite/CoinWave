"use client";
import styles from "./account.module.css";

import AccountMenu from "../components/account/AccountMenu/AccountMenu";
import AccountInformation from "../components/account/AccountInfomation/AccountInfomation";
import SellProduct from "../components/account/SellProduct/SellProduct";
import PurchaseHistroy from "../components/account/PurchaseHistory/PurchaseHistory";
import { useEffect, useState } from "react";
export default function Account() {
  const [selected, setSelected] = useState({
    accountInformation: true,
    sellProduct: false,
    purchaseHistroy: false,
  });

  function handleMenuSelect(select) {
    setSelected({
      accountInformation: select === "accountInformation",
      sellProduct: select === "sellProduct",
      purchaseHistroy: select === "purchaseHistroy",
    });
  }

  return (
    <div className={styles.main}>
      <AccountMenu
        selected={selected}
        onClick={handleMenuSelect}
        screenSize={windowSize}
      />

      <main className={styles.mainContent}>
        {selected.accountInformation && <AccountInformation />}
        {selected.sellProduct && <SellProduct />}
        {selected.purchaseHistroy && <PurchaseHistroy />}
      </main>
    </div>
  );
}
