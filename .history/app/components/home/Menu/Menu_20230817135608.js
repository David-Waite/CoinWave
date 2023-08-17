"use client";
import styles from "./menu.module.css";

export default function Menu(props) {
  function handleClick(select) {
    const selectedCategroy = select === props.selected ? "" : select;
    props.onClick(selectedCategroy);
  }

  const selectedP = {
    opacity: "1",
    backgroundColor: "rgba(0, 0, 0, 0.01)",
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

      <div onClick={() => handleClick("pfp")}>
        <p style={Object.assign(props.selected === "pfp" && selectedP)}>PFP</p>
      </div>
      <div onClick={() => handleClick("photography")}>
        <p style={Object.assign(props.selected === "photography" && selectedP)}>
          Photography
        </p>
      </div>
    </div>
  );
}
