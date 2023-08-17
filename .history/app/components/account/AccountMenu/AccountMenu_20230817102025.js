import styles from "./accountMenu.module.css";
import { RiExpandLeftRightLine } from "react-icons/ri";
import { MdHistory, MdHome, MdSell } from "react-icons/md";
import { useState } from "react";
import useWindowDimensions from "@/app/hooks/useWindowDimenstions";

export default function AccountMenu(props) {
  const { width, height } = useWindowDimensions();

  const [collapseMenu, setCollapseMenu] = useState(width < 778 ? true : false);
  function handleClick(select) {
    props.onClick(select);
  }

  const selectedP = {
    backgroundColor: "#fa8284",
  };

  const menuStyle = collapseMenu < 778 ? { width: "40px" } : { width: "279px" };

  const collapseMenuText = {
    color: "transparent",
  };

  const openMenuText = {
    color: "white",
  };

  const collapseMenuIcon = {
    left: "3px",
  };

  return (
    <div className={`${styles.container}`} style={menuStyle}>
      <RiExpandLeftRightLine
        onClick={() => setCollapseMenu((prev) => !prev)}
        className={styles.expandBtn}
      />
      <div className={styles.infoOverView}>
        <div className={styles.overViewTextContainer}>
          <p
            className={styles.fullNameOverView}
            style={Object.assign(collapseMenu && collapseMenuText)}
          >
            John Doe
          </p>
          <p
            className={styles.emailOverView}
            style={Object.assign(collapseMenu && collapseMenuText)}
          >
            Johndoe@gmail.com
          </p>
        </div>
      </div>

      <div
        onClick={() => handleClick("accountInformation")}
        className={styles.linkContainer}
        style={Object.assign(props.selected.accountInformation && selectedP)}
      >
        <MdHome
          className={styles.menuIcons}
          style={Object.assign(collapseMenu && collapseMenuIcon)}
        />
        <p className={styles.linkText}>Account Information</p>
      </div>

      <div
        onClick={() => handleClick("sellProduct")}
        className={styles.linkContainer}
        style={Object.assign(props.selected.sellProduct && selectedP)}
      >
        <MdSell
          className={styles.menuIcons}
          style={Object.assign(collapseMenu && collapseMenuIcon)}
        />
        <p className={styles.linkText}>Sell Product</p>
      </div>

      <div
        onClick={() => handleClick("purchaseHistroy")}
        className={`${styles.linkContainer} ${styles.linkContainerBottom}`}
        style={Object.assign(props.selected.purchaseHistroy && selectedP)}
      >
        <MdHistory
          className={styles.menuIcons}
          style={Object.assign(collapseMenu && collapseMenuIcon)}
        />
        <p className={styles.linkText}>Purchase Histroy</p>
      </div>
    </div>
  );
}
