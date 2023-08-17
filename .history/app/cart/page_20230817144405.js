"use client";
import styles from "./cart.module.css";
import { CartContext } from "@/context/cart";
import { useContext } from "react";
export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  console.log(cartItems);
  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        <h1>Shopping cart</h1>
      </div>
      <div className={styles.summary}>
        <h1>Summary</h1>
        <div>
          <h2>Total</h2>
          <p>{getCartTotal()}</p>
        </div>
        <hr />
      </div>
    </div>
  );
}