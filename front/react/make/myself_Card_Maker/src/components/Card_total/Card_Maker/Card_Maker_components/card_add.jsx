import React from "react";
import styles from "../Card_Maker_components/Card_Maker_components.module.css";
const CardMakerAdd = (props) => {
  const onAddHanle = () => {
    props.onAdd();
  };

  return (
    <div className={styles.btn_Add} onClick={onAddHanle}>
      <label for='input_add'>Add</label>
      <input
        id='input_add'
        type='submit'
        value='Upload Files'
        name='submit'
        className={styles.btn_form}
      />
    </div>
  );
};

export default CardMakerAdd;
