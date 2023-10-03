"use client";
// product page
import Image from "next/image";
import styles from "./productAbout.module.css";
import Link from "next/link";
import { CartContext } from "../../../context/cart";
import { useContext, useEffect } from "react";
import axios from "axios";

export default function Page({ params }) {
  // function for added to cart imported from content
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/product/"),
      { product: params.slug }
        .then((res) => {
          setItemData(res.data);
        })
        .then(setSelectedItems(""))
        .catch((error) => {
          console.log(error);
        });
  }, []);

  const selectedItem = ITEMSDUMMY.filter((item) => item.id == params.slug)[0];

  // returns jsx for each items with button to added item to cart
  return (
    <div className={styles.container}>
      <Link className={styles.backBtn} href={"/"}>
        Back
      </Link>
      <div className={styles.contentContainer}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              src={selectedItem.imageURL}
              fill={true}
              alt={selectedItem.altText}
              objectFit="contain"
            />
          </div>
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.card}>
            <p className={styles.smallTitle}>{selectedItem.author}</p>
            <h1>{selectedItem.productName}</h1>
          </div>

          <div className={styles.card}>
            <h2 className={styles.smallTitle}>Description</h2>
            <p className={styles.text}>{selectedItem.description}</p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.smallTitle}>Price</h2>
            <p className={`${styles.text} ${styles.price}`}>
              {selectedItem.price} ETH <span>$120</span>
            </p>
            <button
              className={styles.addToCartBtn}
              onClick={() => addToCart(selectedItem)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
