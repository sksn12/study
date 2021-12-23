import React, { memo } from "react";
import styles from "../card/card.module.css";
import DEFAULT_URL from "../../images/default_logo.png";
const Card = memo(({ card }) => {
  const { name, company, theme, title, email, message, fileURL } = card;
  // fileURL에 null이면 url에 DEFAULT_URL이 들어감
  const url = fileURL || DEFAULT_URL;
  return (
    <li className={`${styles.card} ${getStyle(theme)}`}>
      <img src={url} alt='profile' className={styles.avatar} />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
});

function getStyle(theme) {
  switch (theme) {
    case "Dark":
      return styles.dark;
    case "Light":
      return styles.light;
    case "Colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme : ${theme}`);
  }
}

export default Card;
