import React from "react";
import styles from "../counts/counts.module.css";

const Count = ({ countTotal }) => {
  console.log(countTotal);
  return <div className={styles.round}>{1}</div>;
};

export default Count;
