import React from "react";
import Count from "../../atoms/counts/count";
import Leaf from "../../atoms/iconComponent/leaf";
import styles from "../Banner/banner.module.css";

const Banner = ({ countTotal }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_icon}>
        <Leaf />
      </div>
      <div className={styles.title}>Haibt Tracker</div>
      <div className={styles.banner_count}>
        <Count countTotal={countTotal} />
      </div>
    </div>
  );
};

export default Banner;
