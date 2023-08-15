"use client";
import styles from "./searchBar.module.css";

export default function SearchBar(props) {
  return (
    <div>
      <input
        className={styles.searchBar}
        name="search"
        onChange={props.onChange}
        placeholder="search"
      />
      <AiOutlineSearch />
    </div>
  );
}
