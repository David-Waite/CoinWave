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

  const [selectedItems, setSelectedItems] = useState(
    ITEMSDUMMY.filter((item) =>
      item.category === selected ? item : selected === "" && item
    )
  );
  function handleClick(select) {
    setSelected(select);
  }

  function handleSearch(searchQueryInput) {
    setSearchQuery(searchQueryInput);
    console.log(searchQuery + searchQueryInput[-0]);
  }

  // if (searchQuery !== "") {
  //   setSelectedItems((prev) => {
  //     let filteredItems = [];

  //     console.log(prev);
  //     // prev.forEach((item) => {
  //     //   if (item.productName.includes(searchQuery)) {
  //     //     filteredItems.push(item);
  //     //   }
  //     // });
  //     return prev;
  //   });
  // }

  return (
    <main className={styles.container}>
      <Menu selected={selected} onClick={handleClick} mobile={false} />

      <input name="search" onChange={(e) => handleSearch(e.target.value)} />

      <ProductCards items={selectedItems} />
    </main>
  );
}
