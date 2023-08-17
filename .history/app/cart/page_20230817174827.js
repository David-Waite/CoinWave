"use client";
import styles from "./cart.module.css";
import { CartContext } from "@/context/cart";
import Image from "next/image";
import { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

export default function Cart() {
  const {
    cartItems,

    removeFromCart,
    clearCart,
    getCartTotal,
    updateQuantity,
  } = useContext(CartContext);

  if (!cartItems) {
    return;
  }

  if (cartItems && cartItems.length === 0) {
    return (
      <div className={styles.empty}>
        <h1>Seems empty here...</h1>
        <Link className={styles.emptyLink} href="/">
          Take me home
        </Link>
      </div>
    );
  }
  function handleFocusOut(productId, quantity) {
    if (quantity.length === 0 || quantity < 0) {
      updateQuantity(productId, 1);
    }
  }
  const gasFee = 30;

  const tableBodyContent = cartItems.map((product) => {
    return (
      <tr key={product.id}>
        <td>
          <MdOutlineClose
            onClick={() => removeFromCart(product)}
            className={styles.removeFromCart}
          >
            X
          </MdOutlineClose>
        </td>
        <td>
          <div className={styles.imageContainer}>
            <Image
              src={product.imageURL}
              fill={true}
              alt={product.productName}
              objectFit="contain"
            />
          </div>
        </td>
        <td>{product.productName}</td>
        <td>{product.price} ETH</td>
        <td>
          <input
            onBlur={() => handleFocusOut(product.id, product.quantity)}
            type="number"
            className={styles.quantityInput}
            value={product.quantity}
            min="0"
            onChange={(e) => updateQuantity(product.id, e.target.value)}
          />
        </td>
        <td>{product.price * product.quantity} ETH</td>
      </tr>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        <h1 className={styles.title}>Shopping cart</h1>
        <div className={styles.cartContent}>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>{tableBodyContent}</tbody>
            </table>
          </div>

          <button
            onClick={() => {
              clearCart();
            }}
            className={styles.clearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
      <div className={styles.summary}>
        <h1 className={styles.title}>Summary</h1>
        <div className={styles.summaryContent}>
          <div className={styles.summaryContentTop}>
            <h2>Subtotal</h2>
            <p>{getCartTotal()} ETH</p>
          </div>

          <div>
            <h2>Gas fees</h2>
            <p>{gasFee} ETH</p>
          </div>
          <div>
            <h2>Total</h2>
            <p>{getCartTotal() + gasFee} ETH</p>
          </div>
          <button className={styles.checkoutBtn}>Procceed to checkout</button>
        </div>
      </div>
    </div>
  );
}
