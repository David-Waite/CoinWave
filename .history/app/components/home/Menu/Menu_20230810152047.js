"use client";
import styles from "./menu.module.css";

export default function Menu(props) {
  function handleClick(select) {
    props.onClick(select);
  }

  const selectedP = {
    color: "Black",
  };

  return (
    <div className={styles.container}>
      <div onClick={() => handleClick("art")}>
        <p style={Object.assign(props.selected === "art" && selectedP)}>Art</p>
      </div>

      <div onClick={() => handleClick("memberships")}>
        <p style={Object.assign(props.selected === "memberships" && selectedP)}>
          Memberships
        </p>
      </div>

      <div onClick={() => handleClick("PFP")}>
        <p style={Object.assign(props.selected.PFP && selectedP)}>PFP</p>
      </div>
      <div onClick={() => handleClick("photography")}>
        <p style={Object.assign(props.selected.photography && selectedP)}>
          Photography
        </p>
      </div>
    </div>
  );
}
