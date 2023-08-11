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
          style={Object.assign(props.selected.accountInformation && selectedP)}
        >
          Account Information
        </p>
      </div>

      <div onClick={() => handleClick("sellProduct")}>
        <p style={Object.assign(props.selected.sellProduct && selectedP)}>
          Sell Product
        </p>
      </div>

      <div onClick={() => handleClick("purchaseHistroy")}>
        <p style={Object.assign(props.selected && selectedP)}>
          Purchase Histroy
        </p>
      </div>
    </div>
  );
}
