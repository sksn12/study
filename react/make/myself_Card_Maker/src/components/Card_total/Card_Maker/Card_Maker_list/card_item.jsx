import React from "react";
import styles from "../Card_Maker_list/card_maker.module.css";
import CardItemDelete from "./card_item_delete";
import CardItemName from "./card_item_name";

const CardItem = (props) => {
  const onpre = (event) => {
    event.preventDefault();
  };
  const onDelete = () => {
    props.onDelete(props.item);
  };
  return (
    <form className={styles.form} onClick={onpre}>
      <input defaultValue={props.item.name}></input>
      <input defaultValue={props.item.company}></input>
      <select>
        <option value='Dark'>{props.item.color}</option>
        <option value='Dark'>Dark</option>
        <option value='Light'>Light</option>
        <option value='colorful'>colorful</option>
      </select>
      <input defaultValue={props.item.title}></input>
      <input defaultValue={props.item.email}></input>
      <textarea defaultValue={props.item.message}></textarea>
      <CardItemName></CardItemName>
      <CardItemDelete onDelete={onDelete}></CardItemDelete>
    </form>
  );
};

export default CardItem;
