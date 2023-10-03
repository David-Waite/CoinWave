"use client";
// list of products
import styles from "./productLists.module.css";

import { useState, useEffect } from "react";
import Menu from "../Menu/Menu";
import ProductCards from "../ProductCards/ProductCards";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
export default function ProductLists() {
  const [itemData, setItemData] = useState();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/products/")
      .then((res) => {
        setItemData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(itemData);
  // dummy data for each of the products

  // logic for the menu can filter

  const [selected, setSelected] = useState("");
  const [selectedItems, setSelectedItems] = useState(itemData);

  // when a category is selected sets the selected items to the value passed in
  function handleMenuSelect(select) {
    setSelected(select);
    setSelectedItems(selectItemsByCategory(select));
  }

  // function to handle search bar, filters items by title
  function handleSearch(searchQueryInput) {
    if (searchQueryInput != "") {
      console.log(searchQueryInput);
      setSelectedItems(selectItemsBySearch(searchQueryInput));
    } else {
      setSelectedItems(selectItemsByCategory(selected));
    }
  }

  // function to select items by category, returns all if the same item is pressed again
  function selectItemsByCategory(select) {
    return itemData.filter((item) =>
      item.category === select ? item : select === "" && item
    );
  }

  // function to handle search bar, filters items by title
  function selectItemsBySearch(search) {
    let filteredItems = [];
    itemData.forEach((item) => {
      if (item.productName.toLowerCase().includes(search.toLowerCase())) {
        filteredItems.push(item);
      }
    });

    return filteredItems;
  }

  // returns nothing to see if no items match the search
  const productCardsElement =
    selectedItems.length > 0 ? (
      <ProductCards items={selectedItems} />
    ) : (
      <div className={styles.noResults}>Nothing matches your search</div>
    );

  // jsx to be returned
  return (
    <main className={styles.container}>
      <div className={styles.menuContainer}>
        <Menu selected={selected} onClick={handleMenuSelect} />

        <SearchBar onChange={(e) => handleSearch(e.target.value)} />
      </div>

      {productCardsElement}
    </main>
  );
}
