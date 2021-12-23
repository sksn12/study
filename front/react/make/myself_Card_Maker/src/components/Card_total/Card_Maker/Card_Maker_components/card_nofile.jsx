import React from "react";
import styles from "../Card_Maker_components/Card_Maker_components.module.css";

const CardMakerNofile = () => {
  return (
    <div className={styles.btn_nofile}>
      <label for='input'>img_upload</label>
      <input
        type='file'
        className={styles.btn_form}
        id='input'
        accept='image/*'
      />
    </div>
  );
};

export default CardMakerNofile;
