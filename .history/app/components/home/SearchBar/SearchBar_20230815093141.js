"use client";
import styles from "./searchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
export default function SearchBar(props) {
  return (
    <div className={styles.container}>
      <input
        className={styles.searchBar}
        name="search"
        onChange={props.onChange}
        placeholder="Search"
      />
      <AiOutlineSearch className={styles.searchIcon} />
    </div>
  );
}
