import React from "react";
import Add from "../../atoms/button/add";
import Input from "../../atoms/input/input";
import styles from "../inputBox/inputBox.module.css";

const InputBox = () => {
  return (
    <div className={styles.inputBox}>
      <Input />
      <Add />
    </div>
  );
};

export default InputBox;
