import React from "react";
import Banner from "../../molecules/Banner/banner";
import styles from "../headerBanner/headerBanner.module.css";

const HeaderBanner = ({ countTotal }) => {
  return (
    <div className={styles.headerBanner}>
      <Banner countTotal={countTotal} />
    </div>
  );
};

export default HeaderBanner;
