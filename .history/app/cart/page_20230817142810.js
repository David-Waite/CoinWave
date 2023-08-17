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
      <h1>Shopping cart</h1>
    </div>
  );
}
