"use client";

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
      id: 2,
      category: "memberships",
      productName: "membership dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },
    {
      id: 3,
      category: "pfp",
      productName: "pfp dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },
    {
      id: 4,
      category: "photography",
      productName: "photography dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const [selected, setSelected] = useState("");

  function handleClick(select) {
    setSelected(select);
  }

  function selectItems() {}
  let selectedItems = ITEMSDUMMY.filter((item) =>
    item.category === selected ? item : selected === "" && item
  );

  if (searchQuery !== "") {
    let filteredItems = [];
    selectItems.forEach((item) => {
      if (item.productName.includes(searchQuery)) {
        filteredItems.push(item);
      }
    });
  }

  return (
    <main className={styles.container}>
      <Menu selected={selected} onClick={handleClick} mobile={false} />

      <input name="search" onChange={(e) => setSearchQuery(e.target.value)} />

      <ProductCards items={selectedItems} />
    </main>
  );
}
