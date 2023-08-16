import styles from "./accountMenu.module.css";
import { RiExpandLeftRightLine } from "react-icons/ri";
import { MdHistory, MdHome, MdSell } from "react-icons/md";
export default function AccountMenu(props) {
  function handleClick(select) {
    props.onClick(select);
  }

  const selectedP = {
    backgroundColor: "#fa8284",
  };

  return (
    <div className={styles.container}>
      <RiExpandLeftRightLine className={styles.expandBtn} />
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
        <MdHome className={styles.menuIcons} />
        <p>Account Information</p>
      </div>

      <div
        onClick={() => handleClick("sellProduct")}
        className={styles.linkContainer}
        style={Object.assign(props.selected.sellProduct && selectedP)}
      >
        <MdSell className={styles.menuIcons} />
        <p>Sell Product</p>
      </div>

      <div
        onClick={() => handleClick("purchaseHistroy")}
        className={`${styles.linkContainer} ${styles.linkContainerBottom}`}
        style={Object.assign(props.selected.purchaseHistroy && selectedP)}
      >
        <MdHistory className={styles.menuIcons} />
        <p>Purchase Histroy</p>
      </div>
    </div>
  );
}
