"use client";
import styles from "./accountMenu.moudle.css";

export default function AccountMenu(props) {
  function handleClick(select) {
    props.onClick(select);
  }

  const selectedP = {
    color: "Black",
    backgroundColor: "green",
  };

  return (
    <div className={styles.container}>
      <div onClick={() => handleClick("accountInformation")}>
        <p
          style={Object.assign(
            props.selected === "accountInformation" && selectedP
          )}
        >
          Account Information
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
