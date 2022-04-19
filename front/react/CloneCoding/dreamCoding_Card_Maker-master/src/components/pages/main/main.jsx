import React, { useState } from "react";
import Header from "../../UI/organisms/headerBanner/headerBanner";
import styles from "../main/main.module.css";
import Body from "../../UI/organisms/bodyList/bodyList";

const Main = () => {
  const [ListArr, setListArr] = useState([
    { name: "Reading", count: 0, defaultVal: true },
    { name: "Running", count: 0, defaultVal: true },
    { name: "Coding", count: 0, defaultVal: true },
  ]);

  return (
    <div className={styles.page}>
      <Header countTotal={ListArr} />
      <Body ListArr={ListArr} setListArr={setListArr} />
    </div>
  );
};

export default Main;
