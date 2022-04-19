import React from "react";
import Reset from "../../atoms/button/reset";
import InputBox from "../../molecules/inputBox/inputBox";
import List from "../../molecules/list/list";
import styles from "../bodyList/bodyList.module.css";

const BodyList = ({ ListArr, setListArr }) => {
  return (
    <div className={styles.body}>
      <InputBox ListArr={ListArr} setListArr={setListArr} />
      <List ListArr={ListArr} setListArr={setListArr} />
      <Reset ListArr={ListArr} setListArr={setListArr} />
    </div>
  );
};

export default BodyList;
