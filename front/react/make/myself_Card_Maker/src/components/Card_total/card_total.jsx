import React, { useState } from "react";
import CardMakerItem from "./Card_Maker/Card_Maker_components/card_item";
import CardList from "./Card_Maker/Card_Maker_list/card_list";
import styles from "../Card_total/card_total.module.css";
import PreviewTotal from "./Card_Preview/Preview_total/preview_total";

const CardTotal = (props) => {
  const [Card_list, setCard_list] = useState([]);

  const onAdd = (target) => {
    console.log(target);
    setCard_list(Card_list.concat(target));
  };
  const onDelete = (target) => {
    const Card_list1 = [...Card_list];
    const num = Card_list1.indexOf(target);
    Card_list1.splice(num, 1);
    setCard_list(Card_list1);
  };
  return (
    <div className={styles.list}>
      <div className={styles.total_page}>
        <span className={styles.total_title}>Card Maker</span>
        {Card_list && (
          <CardList CardList={Card_list} onDelete={onDelete}></CardList>
        )}
        <CardMakerItem onAdd={onAdd}></CardMakerItem>
      </div>
      <PreviewTotal CardList={Card_list}></PreviewTotal>
    </div>
  );
};

export default CardTotal;
