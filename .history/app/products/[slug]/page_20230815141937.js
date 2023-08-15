"use client";

import Image from "next/image";
import styles from "./productAbout.module.css";
import Link from "next/link";

export default function Page({ params }) {
  const ITEMSDUMMY = [
    {
      id: 1,
      description: "Art dummy product description",
      category: "art",
      productName: "Art dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      author: "John Doe",
      price: 420,
    },

    {
      id: 2,
      category: "memberships",
      description: "Memberships dummy product description",
      productName: "Membership dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      author: "John Doe",
      price: 420,
    },
    {
      id: 3,
      category: "pfp",
      description: "Pfp dummy product description",
      productName: "Pfp dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      author: "John Doe",
      price: 420,
    },
    {
      id: 4,
      category: "photography",
      description: "Photography dummy product description",
      productName: "Photography dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      author: "John Doe",
      price: 420,
    },
    {
      id: 5,
      description: "art dummy product description",
      category: "art",
      productName: "Art dummy title the second",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      author: "John Doe",
      price: 420,
    },
    {
      id: 6,
      description: "art dummy product description",
      category: "art",
      productName: "Art dummy title the second",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      author: "John Doe",
      price: 420,
    },
    {
      id: 7,
      description: "art dummy product description",
      category: "art",
      productName: "Art dummy title the second",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      author: "John Doe the man with a long name ",
      price: 420,
    },
    {
      id: 8,
      description: "art dummy product description",
      category: "art",
      productName: "Art dummy title the second",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      author: "John Doe",
      price: 420,
    },
  ];

  const selectedItem = ITEMSDUMMY.filter((item) => item.id == params.slug)[0];

  return (
    <div>
      <Link href={"/"}>Back</Link>
      <div className={styles.container}>
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
            <h2 className={styles.smallTitle}>Price</h2>
            <p className={`${styles.text} ${styles.price}`}>
              {selectedItem.price} ETH <span>$120</span>
            </p>
            <button className={styles.addToCartBtn}>add to cart</button>
          </div>
          <div className={styles.card}>
            <h2 className={styles.smallTitle}>Description</h2>
            <p className={styles.text}>{selectedItem.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
