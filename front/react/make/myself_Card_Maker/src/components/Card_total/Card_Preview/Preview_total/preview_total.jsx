import React from "react";
import styles from "../Preview_total/preview_total.module.css";
import PreviewItem from "./Preview_list/preview_item";
const PreviewTotal = (props) => {
  return (
    <div className={styles.PreviewTotal}>
      <span>Card PreView</span>
      <div className={styles.PreviewBox}>
        {props.CardList.map((item) => {
          return <PreviewItem item={item}></PreviewItem>;
        })}
      </div>
    </div>
  );
};

export default PreviewTotal;
