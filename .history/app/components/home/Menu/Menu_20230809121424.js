"use client";
import styles from "./menu.module.css";

export default function Menu(props) {
  function handleClick(select) {
    props.onClick(select);
  }

  const selectedBackground = {
    left: "0px",
  };
  const selectedP = {
    color: "Black",
  };

  return (
    <div id="menu">
      <div onClick={() => handleClick("about")}>
        <p style={Object.assign(props.selected.about && selectedP)}>Art</p>
      </div>

      <div onClick={() => handleClick("education")}>
        <p style={Object.assign(props.selected.education && selectedP)}>
          Memberships
        </p>
      </div>

      <div onClick={() => handleClick("technologies")}>
        <div
          className={styles.technologiesBackground}
          style={Object.assign(
            props.selected.technologies && selectedBackground
          )}
        ></div>
        <p style={Object.assign(props.selected.technologies && selectedP)}>
          PFP
        </p>
      </div>
      <div
        className={`${styles.linkContainer} ${styles.technologies}`}
        onClick={() => handleClick("technologies")}
      >
        <div
          className={styles.technologiesBackground}
          style={Object.assign(
            props.selected.technologies && selectedBackground
          )}
        ></div>
        <p style={Object.assign(props.selected.technologies && selectedP)}>
          Photography
        </p>
      </div>
    </div>
  );
}
