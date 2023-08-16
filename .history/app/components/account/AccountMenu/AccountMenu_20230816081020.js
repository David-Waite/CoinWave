import styles from "./accountMenu.module.css";
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
        style={Object.assign(props.selected.sellProduct && selectedP)}
      >
        <p
          style={Object.assign(props.selected.accountInformation && selectedP)}
        >
          Account Information
        </p>
      </div>

      <div
        onClick={() => handleClick("sellProduct")}
        className={styles.linkContainer}
        style={Object.assign(props.selected.sellProduct && selectedP)}
      >
        <p>Sell Product</p>
      </div>

      <div
        onClick={() => handleClick("purchaseHistroy")}
        className={styles.linkContainer}
        style={Object.assign(props.selected.sellProduct && selectedP)}
      >
        <p style={Object.assign(props.selected.purchaseHistroy && selectedP)}>
          Purchase Histroy
        </p>
      </div>
    </div>
  );
}
