"use client";
import Image from "next/image";
import styles from "./productCards.module.css";

export default function ProductCards(props) {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src={"/slideshowImage1.avif"}
          fill={true}
          objectFit="cover"
          alt="proudct"
        />
      </div>
    </div>
  );
}
