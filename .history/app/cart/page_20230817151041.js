"use client";
import styles from "./cart.module.css";
import { CartContext } from "@/context/cart";
import Image from "next/image";
import { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  const gasFee = 30;

  const tableBodyContent = cartItems.map((product) => {
    return (
      <tr key={product.id}>
        <td>
          <MdOutlineClose onClick={() => removeFromCart(product)}>
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
        <td>{product.quantity}</td>
        <td>{product.price * product.quantity}</td>
      </tr>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        <h1 className={styles.title}>Shopping cart</h1>
        <div className={styles.cartContent}>
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
            <button
              onClick={() => {
                clearCart;
              }}
            >
              Clear Cart
            </button>
          </table>
        </div>
      </div>
      <div className={styles.summary}>
        <h1 className={styles.title}>Summary</h1>
        <div className={styles.summaryContent}>
          <div>
            <h2>Subtotal</h2>
            <p>{getCartTotal()}</p>
          </div>
          <div>
            <h2>Gas fees</h2>
            <p>{gasFee}</p>
          </div>
          <div>
            <h2>Total</h2>
            <p>{getCartTotal() + gasFee}</p>
          </div>
          <button>Procceed to checkout</button>
        </div>
      </div>
    </div>
  );
}
