"use client";
import Image from "next/image";
import styles from "./productCards.module.css";

export default function ProductCards(props) {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <Image
            src={"/slideshowImage1.avif"}
            fill={true}
            objectFit="cover"
            alt="proudct"
          />
        </div>
        <div>
          <h3>name</h3>
          <h4>price</h4>
        </div>
      </div>
    </div>
  );
}
