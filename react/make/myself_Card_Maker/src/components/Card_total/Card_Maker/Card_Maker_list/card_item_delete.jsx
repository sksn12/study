import React from "react";
import styles from "../Card_Maker_list/card_maker.module.css";
const CardItemDelete = (props) => {
  const onDelete = () => {
    props.onDelete();
  };
  return (
    <button className={styles.btn_delete} onClick={onDelete}>
      Delete
    </button>
  );
};

export default CardItemDelete;
