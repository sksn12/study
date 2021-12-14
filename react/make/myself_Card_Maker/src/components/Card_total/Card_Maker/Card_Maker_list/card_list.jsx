import React from "react";
import CardItem from "./card_item";

const CardList = (props) => {
  const date = new Date();
  const onDelete = (target) => {
    props.onDelete(target);
  };
  return (
    <>
      {props.CardList.map((item) => {
        return (
          <CardItem
            item={item}
            key={date.getMilliseconds()}
            onDelete={onDelete}
          />
        );
      })}
    </>
  );
};

export default CardList;
