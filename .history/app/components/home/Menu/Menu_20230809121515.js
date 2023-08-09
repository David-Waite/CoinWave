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
    <div>
      <div onClick={() => handleClick("Art")}>
        <p style={Object.assign(props.selected.about && selectedP)}>Art</p>
      </div>

      <div onClick={() => handleClick("Memberships")}>
        <p style={Object.assign(props.selected.education && selectedP)}>
          Memberships
        </p>
      </div>

      <div onClick={() => handleClick("PFP")}>
        <p style={Object.assign(props.selected.technologies && selectedP)}>
          PFP
        </p>
      </div>
      <div onClick={() => handleClick("Photography")}>
        <p style={Object.assign(props.selected.technologies && selectedP)}>
          Photography
        </p>
      </div>
    </div>
  );
}
