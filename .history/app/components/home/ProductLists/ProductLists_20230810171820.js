"use client";

import styles from "./productLists.module.css";

import { useState } from "react";
import Menu from "../Menu/Menu";
import ProductCards from "../ProductCards/ProductCards";

export default function ProductLists() {
  const ITEMSDUMMY = [
    {
      id: 1,
      description: "art dummy product description",
      category: "art",
      productName: "art dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },

    {
      id: 2,
      category: "memberships",
      description: "memberships dummy product description",
      productName: "membership dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },
    {
      id: 3,
      category: "pfp",
      description: "pfp dummy product description",
      productName: "pfp dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },
    {
      id: 4,
      category: "photography",
      description: "photography dummy product description",
      productName: "photography dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },
    {
      id: 5,
      description: "art dummy product description",
      category: "art",
      productName: "art dummy title the second",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },
  ];

  const [selected, setSelected] = useState("");
  const [selectedItems, setSelectedItems] = useState(ITEMSDUMMY);

  function handleClick(select) {
    setSelected(select);
    setSelectedItems(selectItemsByCategory(select));
  }

  function handleSearch(searchQueryInput) {
    if (searchQueryInput != "") {
      console.log(searchQueryInput);
      setSelectedItems(selectItemsBySearch(searchQueryInput));
    } else {
      setSelectedItems(selectItemsByCategory(selected));
    }
  }

  function selectItemsByCategory(select) {
    return ITEMSDUMMY.filter((item) =>
      item.category === select ? item : select === "" && item
    );
  }

  function selectItemsBySearch(search) {
    let filteredItems = [];
    ITEMSDUMMY.forEach((item) => {
      if (item.productName.toLowerCase().includes(search.toLowerCase())) {
        filteredItems.push(item);
      }
    });

    return filteredItems;
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

  const productCardsElement =
    selectedItems.length > 0 ? (
      <ProductCards items={selectedItems} />
    ) : (
      <div>nothing to see</div>
    );
  return (
    <main className={styles.container}>
      <Menu selected={selected} onClick={handleClick} mobile={false} />

      <input name="search" onChange={(e) => handleSearch(e.target.value)} />
      {productCardsElement}
    </main>
  );
}
