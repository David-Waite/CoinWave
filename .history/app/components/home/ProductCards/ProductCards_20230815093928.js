import Image from "next/image";
import styles from "./productCards.module.css";
import Link from "next/link";

export default function ProductCards(props) {
  const cardElements = props.items.map((item) => {
    return (
      <Link key={item.id} href={`/products/${item.id}`}>
        <div className={styles.cardContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={item.imageURL}
              fill={true}
              alt={item.altText}
              objectFit="cover"
            />
          </div>
          <div className={styles.cardBottom}>
            <p className={styles.title}>{item.productName}</p>
            <div className={styles.cardInfoContainer}>
              <div>
                <p className={styles.priceHeading}>Price</p>
                <p className={styles.price}>{item.price}</p>
              </div>
              <div>
                <p className={styles.fromHeading}>From</p>
                <p className={styles.price}>{item.author}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return <div className={styles.container}>{cardElements}</div>;
}
