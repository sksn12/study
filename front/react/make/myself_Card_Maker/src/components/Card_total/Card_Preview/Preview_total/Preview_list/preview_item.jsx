import React from "react";
import styles from "../Preview_list/preview_item.module.css";
const PreviewItem = (props) => {
  let color = "";
  if (props.item.color === "Dark") {
    color = styles.black;
  } else if (props.item.color === "Light") {
    color = styles.white;
  } else if ((props.item.color = "colorful")) {
    color = styles.colorful;
  }
  return (
    <div className={`${styles.card} ${color}`}>
      <div className={styles.h_items}>
        <h1>{props.item.name}</h1>
        <h2>{props.item.company}</h2>
        <span className={styles.h2_boder}></span>
        <h2>{props.item.title}</h2>
        <h2>{props.item.email}</h2>
        <h2>{props.item.message}</h2>
      </div>
    </div>
  );
};

export default PreviewItem;
