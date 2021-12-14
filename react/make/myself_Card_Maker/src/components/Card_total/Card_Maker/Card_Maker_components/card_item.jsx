import React from "react";
import styles from "../Card_Maker_components/Card_Maker_components.module.css";
import CardMakerAdd from "./card_add";
import CardMakerNofile from "./card_nofile";

const CardMakerItem = (props) => {
  const NameRef = React.createRef();
  const CompanyRef = React.createRef();
  const TitleRef = React.createRef();
  const EmailRef = React.createRef();
  const MessageRef = React.createRef();
  const ColorRef = React.createRef();

  const onAdd = () => {
    props.onAdd({
      name: NameRef.current.value,
      company: CompanyRef.current.value,
      color: ColorRef.current.value,
      title: TitleRef.current.value,
      email: EmailRef.current.value,
      message: MessageRef.current.value,
      
    });
    NameRef.current.value = "";
    CompanyRef.current.value = "";
    ColorRef.current.value = "Dark";
    TitleRef.current.value = "";
    EmailRef.current.value = "";
    MessageRef.current.value = "";
  };
  return (
    <div className={styles.form}>
      <input placeholder='Name' ref={NameRef}></input>
      <input placeholder='Company' ref={CompanyRef}></input>
      <select ref={ColorRef}>
        <option value='Dark'>Dark</option>
        <option value='Light'>Light</option>
        <option value='colorful'>colorful</option>
      </select>
      <input placeholder='Title' ref={TitleRef}></input>
      <input placeholder='Email' ref={EmailRef}></input>
      <textarea placeholder='Message' ref={MessageRef}></textarea>
      <CardMakerNofile></CardMakerNofile>
      <CardMakerAdd onAdd={onAdd}></CardMakerAdd>
    </div>
  );
};

export default CardMakerItem;
