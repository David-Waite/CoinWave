"use client";
import styles from "./account.module.css";
//account papge
import AccountMenu from "../components/account/AccountMenu/AccountMenu";
import AccountInformation from "../components/account/AccountInfomation/AccountInfomation";
import SellProduct from "../components/account/SellProduct/SellProduct";
import PurchaseHistroy from "../components/account/PurchaseHistory/PurchaseHistory";
import { useState } from "react";
export default function Account() {
  // state that updates via the click of each menu item
  const [selected, setSelected] = useState({
    accountInformation: true,
    sellProduct: false,
    purchaseHistroy: false,
  });

  //if the input matches the string then it is set to true else falt
  function handleMenuSelect(select) {
    setSelected({
      accountInformation: select === "accountInformation",
      sellProduct: select === "sellProduct",
      purchaseHistroy: select === "purchaseHistroy",
    });
  }

  return (
    <div className={styles.main}>
      <AccountMenu selected={selected} onClick={handleMenuSelect} />

      {/* displays the content based on what is selected */}
      <main className={styles.mainContent}>
        {selected.accountInformation && <AccountInformation />}
        {selected.sellProduct && <SellProduct />}
        {selected.purchaseHistroy && <PurchaseHistroy />}
      </main>
    </div>
  );
}
