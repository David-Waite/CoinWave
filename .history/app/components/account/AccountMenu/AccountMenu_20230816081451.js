import styles from "./accountMenu.module.css";
import { MdHistory, MdHome, MdSell } from "react-icons/md";
export default function AccountMenu(props) {
  function handleClick(select) {
    props.onClick(select);
  }

  const selectedP = {
    backgroundColor: "red",
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoOverView}>
        <div className={styles.photo}></div>
        <div className={styles.overViewTextContainer}>
          <p className={styles.fullNameOverView}>John Doe</p>
          <p className={styles.emailOverView}>Johndoe@gmail.com</p>
        </div>
      </div>

      <div
        onClick={() => handleClick("accountInformation")}
        className={styles.linkContainer}
        style={Object.assign(props.selected.accountInformation && selectedP)}
      >
        <MdHome fontSize={32} />
        <p>Account Information</p>
      </div>

      <div
        onClick={() => handleClick("sellProduct")}
        className={styles.linkContainer}
        style={Object.assign(props.selected.sellProduct && selectedP)}
      >
        <MdSell fontSize={32} />
        <p>Sell Product</p>
      </div>

      <div
        onClick={() => handleClick("purchaseHistroy")}
        className={`${styles.linkContainer} ${styles.linkContainerBottom}`}
        style={Object.assign(props.selected.purchaseHistroy && selectedP)}
      >
        <MdHistory />
        <p>Purchase Histroy</p>
      </div>
    </div>
  );
}
