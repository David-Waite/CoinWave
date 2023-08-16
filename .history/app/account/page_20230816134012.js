"use client";
import styles from "./account.module.css";
import { useState } from "react";
import AccountMenu from "../components/account/AccountMenu/AccountMenu";
import AccountInformation from "../components/account/AccountInfomation/AccountInfomation";
import SellProduct from "../components/account/SellProduct/SellProduct";
import PurchaseHistroy from "../components/account/PurchaseHistory/PurchaseHistory";
import { useRef, useEffect } from "react";
export default function Account() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  console.log(windowWidth);
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
      <AccountMenu selected={selected} onClick={handleMenuSelect} />

      <main className={styles.mainContent}>
        {selected.accountInformation && <AccountInformation />}
        {selected.sellProduct && <SellProduct />}
        {selected.purchaseHistroy && <PurchaseHistroy />}
      </main>
    </div>
  );
}
