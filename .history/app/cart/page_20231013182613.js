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
import axios from "axios";

export default function Cart() {
  // gets the relvent functions and state from the cart context
  const [addCreditCard, setAddCreditCard] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    cardNumber: "",
    expiryDate: "",
    CVC: "",
    billingAddress: "",
    userEmail: "",
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

  async function fetchUserData() {
    const token = localStorage.getItem("access_token"); // Get the token from local storage

    try {
      const response = await axios.get("http://127.0.0.1:8000/users/me/", {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
        },
      });

      if (response.data) {
        checkForCreditCard(response.data[0]);
      }
    } catch (error) {
      console.error(`Error fetching user data: ${error}`);
    }
  }

  async function checkForCreditCard(userdata) {
    let email = userdata.email.toString();

    axios
      .post("http://127.0.0.1:8000/hascreditcard/", { email: email })
      .then(function (response) {
        let expiryDate = new Date(response.data.ExpiryDate); // replace with the date from your database
        let year = expiryDate.getFullYear();
        let month = expiryDate.getMonth() + 1; // getMonth() returns a zero-based month, so add 1
        month = month < 10 ? "0" + month : month; // pad single digit months with a leading zero
        let inputExpiryDate = `${year}-${month}`;
        setFormData({
          fullName: `${userdata.firstName} ${userdata.lastName}`,
          cardNumber: response.data.CreditCardNumber,
          expiryDate: inputExpiryDate,
          CVC: response.data.CVC,
          billingAddress: response.data.BillingAddress,
          userEmail: `${userdata.email}`,
        });
      })

      .catch(function (error) {
        setFormData({
          fullName: `${userdata.firstName} ${userdata.lastName}`,
          cardNumber: "",
          expiryDate: "",
          CVC: "",
          billingAddress: "",
          userEmail: `${userdata.email}`,
        });
        console.log(error);
      });
  }

  function checkout() {
    fetchUserData();
    setAddCreditCard(true);
  }

  async function addToBlockchain() {
    for (let i = 0; i < cartItems.length; i++) {
      for (let j = 0; j < cartItems[i].quantity; j++) {
        //add to block chain
        let data = {
          itemName: cartItems[i].productName, // replace with actual item name
          itemPrice: cartItems[i].price, // replace with actual item price
          userAddress: "0x425282C917fed31782d33E684A64078517AF9132", // replace with actual user address
          firstName: "First Name", // replace with actual first name
          lastName: "Last Name", // replace with actual last name
          email: "user@example.com", // replace with actual email
        };

        axios
          .post("http://127.0.0.1:8000/purchase/", data)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function purchase(event) {
    event.preventDefault();

    addToBlockchain();
  }

  //jsx for the cart and the checkout button
  return (
    <div>
      {addCreditCard && (
        <form className={styles.form} onSubmit={purchase}>
          <h1 className={styles.formTitle}>Add credit card</h1>

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
            name="expiryDate"
            value={formData.expiryDate}
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
        </form>
      )}
      {!addCreditCard && (
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
              <button onClick={checkout} className={styles.checkoutBtn}>
                Procceed to checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
