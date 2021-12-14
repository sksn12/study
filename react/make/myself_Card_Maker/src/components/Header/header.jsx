import React from "react";
import styles from "../Header/header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.flex}>
        <img className={styles.logo} alt='logo' src='./images/logo.png'></img>
      </div>
      <span className={styles.header_title}>Business Card Maker</span>
    </div>
  );
};
export default Header;
