"use client";

import Image from "next/image";
import styles from "./productAbout.module.css";

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
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src={selectedItem.imageURL}
            height={500}
            width={500}
            alt={selectedItem.altText}
          />
        </div>
      </div>

      <div className={styles.card}>
        <p>{selectedItem.author}</p>
        <h1>{selectedItem.productName}</h1>
      </div>
      <div>
        <h2>Price</h2>
        <p>
          {selectedItem.price} ETH <span>$120</span>
        </p>
        <button>add to cart</button>
      </div>
      <div>
        <h2>Description</h2>
        <p>{selectedItem.description}</p>
      </div>
    </div>
  );
}
