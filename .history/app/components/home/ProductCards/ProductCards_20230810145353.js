"use client";

import Image from "next/image";
import styles from "./productCards.module.css";

export default function ProductCards(props) {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <Image src={"/slideshowimage1.avif"} fill={true} />
        </div>
        <div>
          <h3>name</h3>
          <h4>price</h4>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <Image src={"/slideshowimage1.avif"} fill={true} />
        </div>
        <div>
          <h3>name</h3>
          <h4>price</h4>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <Image src={"/slideshowimage1.avif"} fill={true} />
        </div>
        <div>
          <h3>name</h3>
          <h4>price</h4>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <Image src={"/slideshowimage1.avif"} fill={true} />
        </div>
        <div>
          <h3>name</h3>
          <h4>price</h4>
        </div>
      </div>
    </div>
  );
}
