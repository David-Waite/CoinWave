"use client";
import styles from "./searchBar.module.css";

export default function SearchBar(props) {
  return (
    <input
      className={styles.searchBar}
      name="search"
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="search"
    />
  );
}
