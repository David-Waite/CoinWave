"use client";
import styles from "./accountMenu.moudle.css";

export default function AccountMenu(props) {
  function handleClick(select) {
    props.onClick(selectedCategroy);
  }

  const selectedP = {
    color: "Black",
    backgroundColor: "green",
  };

  return (
    <div className={styles.container}>
      <div onClick={() => handleClick("art")}>
        <p style={Object.assign(props.selected === "art" && selectedP)}>
          Personal Info
        </p>
      </div>

      <div onClick={() => handleClick("memberships")}>
        <p style={Object.assign(props.selected === "memberships" && selectedP)}>
          Sell
        </p>
      </div>

      <div onClick={() => handleClick("pfp")}>
        <p style={Object.assign(props.selected === "pfp" && selectedP)}>
          Purchases{" "}
        </p>
      </div>
    </div>
  );
}
