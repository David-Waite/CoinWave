"use client";
import styles from "./account.module.css";
import { useState } from "react";
import AccountMenu from "../components/account/AccountMenu/AccountMenu";
import AccountInformation from "../components/account/AccountInfomation/AccountInfomation";
import SellProduct from "../components/account/SellProduct/SellProduct";
import PurchaseHistroy from "../components/account/PurchaseHistory/PurchaseHistory";

export default function Account() {
  const [selected, setSelected] = useState({
    accountInformation: false,
    sellProduct: true,
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
