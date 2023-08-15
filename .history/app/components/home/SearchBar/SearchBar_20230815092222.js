"use client";
import styles from "./searchBar.module.css";

export default function SearchBar(props) {
  function handleClick(select) {
    const selectedCategroy = select === props.selected ? "" : select;
    props.onClick(selectedCategroy);
  }

  const selectedP = {
    color: "white",
  };

  return (
    <input
      className={styles.searchBar}
      name="search"
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="search"
    />
  );
}
