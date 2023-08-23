// Menu compontent for the main page

"use client";
import styles from "./menu.module.css";

export default function Menu(props) {
  // function that handles the click menu item
  // sets the selected category to be whatever is passed though unless the same is pressed again then sets the selected to be empty
  function handleClick(select) {
    const selectedCategroy = select === props.selected ? "" : select;
    props.onClick(selectedCategroy);
  }

  // style to be applied when a menu item is pressed
  const selectedP = {
    opacity: "1",
  };

  // jsx for the menu
  return (
    <div className={styles.container}>
      <div onClick={() => handleClick("art")}>
        {/* styles are added if the selected prop matches the category */}
        <p
          style={Object.assign(
            props.selected === "art"
              ? selectedP
              : props.selected === ""
              ? selectedP
              : ""
          )}
        >
          Art
        </p>
      </div>

      <div onClick={() => handleClick("memberships")}>
        <p
          style={Object.assign(
            props.selected === "memberships"
              ? selectedP
              : props.selected === ""
              ? selectedP
              : ""
          )}
        >
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
