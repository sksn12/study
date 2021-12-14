import React, { memo } from "react";
import styles from "./header.module.css";
import logo from "../../images/logo.png";
const Header = memo(({ onLogout }) => (
  <header className={styles.header}>
    {onLogout && (
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    )}
    <img className={styles.logo} src={logo} alt='logo' />
    <h1 className={styles.title}>Business Card Maker</h1>
  </header>
));

export default Header;
