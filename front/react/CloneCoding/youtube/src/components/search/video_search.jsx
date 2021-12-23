import React, { memo, useRef } from "react";
import style from "./video_search.module.css";

const VideoSearch = memo((props) => {
  const inputRef = useRef();
  const onClick = () => {
    const value = inputRef.current.value;
    inputRef.current.value = "";
    props.search(value);
    props.onBackHome(null);
  };
  const Click = () => {
    onClick();
  };
  const press = (event) => {
    if (event.key === "Enter") onClick();
  };

  return (
    <div className={style.div}>
      <img src='./images/logo.png' className={style.logo} alt='logo' />
      <input
        type='text'
        className={style.search}
        placeholder='search'
        ref={inputRef}
        onKeyPress={press}
      />
      <button className={style.btn} onClick={Click}>
        <img src='./images/search.png' alt='btn' />
      </button>
    </div>
  );
});

export default VideoSearch;
