import React from "react";
import styles from "../button/btn.module.css";

// className 여러개 넣을 때 2개다 가능
const MBtn = () => {
  return <div className={[styles.m_btn, styles.btn].join(" ")}>-</div>;
};

export default MBtn;
