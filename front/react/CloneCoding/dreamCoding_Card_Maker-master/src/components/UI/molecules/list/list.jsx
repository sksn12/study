import React from "react";
import Delete from "../../atoms/button/delete";
import MBtn from "../../atoms/button/mBtn";
import PBtn from "../../atoms/button/pBtn";
import Count from "../../atoms/counts/count";
import styles from "../list/list.module.css";

const List = ({ ListArr, setList }) => {
  return ListArr.map((e) => {
    return (
      <div className={styles.list}>
        <p className={styles.title}>{e.name}</p>
        <Count />
        <PBtn />
        <MBtn />
        <Delete />
      </div>
    );
  });
};

export default List;
