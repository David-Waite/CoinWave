"use client";

import Image from "next/image";
import styles from "./productLists.module.css";

import { useState } from "react";
import Menu from "../Menu/Menu";
import ProductCards from "../ProductCards/ProductCards";

export default function ProductLists() {
  const ITEMSDUMMY = [
    {
      id: 1,
      category: "art",
      productName: "art dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },
    {
      id: 1,
      category: "memberships",
      productName: "membership dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },
    {
      id: 1,
      category: "pfp",
      productName: "pfp dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },
    {
      id: 1,
      category: "photography",
      productName: "photography dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },
  ];

  const [selected, setSelected] = useState("art");

  function handleClick(select) {
    setSelected(select);
  }

  let selectedItems = ITEMSDUMMY.filter((item) =>
    item.category === selected ? selected : item
  );

  return (
    <main className={styles.container}>
      <Menu selected={selected} onClick={handleClick} mobile={false} />

      <ProductCards items={selectedItems} />
    </main>
  );
}
