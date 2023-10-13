"use client";

// Cart / checkout page
import styles from "./cart.module.css";
import { CartContext } from "@/context/cart";
import Image from "next/image";
import { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import { BsBagFill } from "react-icons/bs";

export default function Cart() {
  // gets the relvent functions and state from the cart context
  const [addCreditCard, setAddCreditCard] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    cardNumber: "",
    expiryDate: "",
    CVC: "",
    billingAddress: "",
  });

  const { cartItems, removeFromCart, clearCart, getCartTotal, updateQuantity } =
    useContext(CartContext);

  if (!cartItems) {
    return;
  }

  // returns empty cart message is the cart doesn't exist or if the length of the cart is zero
  if (cartItems && cartItems.length === 0) {
    return (
      <div className={styles.empty}>
        <div>
          <h1>Seems empty...</h1>
          <BsBagFill className={styles.emptyBag} />
        </div>
        <Link className={styles.emptyLink} href="/">
          Lets change that
        </Link>
      </div>
    );
  }

  // function to update the quantity to 1 if the user clicks out of the quantiy box without
  // providing a value or a negative value
  function handleFocusOut(productId, quantity) {
    if (quantity.length === 0 || quantity < 0) {
      updateQuantity(productId, 1);
    }
  }

  // placeholder for gas fee
  const gasFee = 30;

  // maps over cart items to create each item in the cart
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

  // updates form state baced on input changes
  function handleChange(event) {
    const { type, name, value, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function checkout() {
    //check for credit details
    setAddCreditCard(true);
  }

  function purchase() {
    return;
  }

  //jsx for the cart and the checkout button
  return (
    <div className={styles.container}>
      {addCreditCard && (
        <form onSubmit={purchase}>
          <h1 className={styles.title}>Add credit card</h1>
          <input
            className={styles.input}
            type="text"
            placeholder="Name on card"
            onChange={handleChange}
            name="fullName"
            value={formData.fullName}
          />

          <input
            className={styles.input}
            type="text"
            placeholder="Card Number"
            onChange={handleChange}
            name="cardNumber"
            value={formData.cardNumber}
          />
          <input
            className={styles.input}
            type="month"
            placeholder="Expriy date"
            onChange={handleChange}
            name="expriyDate"
            value={formData.expriyDate}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="CVC"
            onChange={handleChange}
            name="CVC"
            value={formData.CVC}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Billing Address"
            onChange={handleChange}
            name="billingAddress"
            value={formData.billingAddress}
          />

          <button className={styles.purchaseBtn}>Purchase</button>
          <Link className={styles.signUp} href={"/signUp"}>
            or create an account
          </Link>
        </form>
      )}
      {!addCreditCard && (
        <>
          {" "}
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
              <button onClick={checkout} className={styles.checkoutBtn}>
                Procceed to checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
