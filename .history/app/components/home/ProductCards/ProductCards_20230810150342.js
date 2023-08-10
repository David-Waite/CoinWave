"use client";

import Image from "next/image";
import styles from "./productCards.module.css";

export default function ProductCards(props) {
  const cardElements = props.items.map((item) => {
    return (
      <div key={item.id} className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <Image src={item.imageURL} fill={true} alt={item.altText} />
        </div>
        <div>
          <h3>{item.productName}</h3>
          <h4>{item.price}</h4>
        </div>
      </div>
    );
  });
  return <div className={styles.container}>{cardElements}</div>;
}
