import Image from "next/image";
import styles from "./productCards.module.css";
import Link from "next/link";

export default function ProductCards(props) {
  const cardElements = props.items.map((item) => {
    return (
      <Link key={item.id} href={`/products/${item.id}`}>
        <div className={styles.cardContainer}>
          <div className={styles.imageContainer}>
            <Image src={item.imageURL} fill={true} alt={item.altText} />
          </div>
          <div>
            <p>{item.productName}</p>
            <div>
              <div>
                <p>Price</p>
                <p>{item.price}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return <div className={styles.container}>{cardElements}</div>;
}
