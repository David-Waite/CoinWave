"use client";
import styles from "./cart.module.css";
import { CartContext } from "@/context/cart";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  return <div className={styles.container}>{cartItems}</div>;
}
