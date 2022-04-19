import React, { memo, useRef } from "react";
import style from "./video_search.module.css";

const VideoSearch = memo((props) => {
  const inputRef = useRef();

  const onSearch = () => {
    const data = props.youtube.search(inputRef.current.value);
    data.then((e) => props.setYoutubeData(e));
    inputRef.current.value = "";
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") onSearch();
  };

  console.log("serach");
  return (
    <div className={style.div}>
      <img src="./images/logo.png" className={style.logo} alt="logo" />
      <input
        type="text"
        className={style.search}
        placeholder="search"
        onSubmit={onSearch}
        ref={inputRef}
        onKeyDown={onKeyDown}
      />
      <button className={style.btn} onClick={onSearch}>
        <img src="./images/search.png" alt="btn" />
      </button>
    </div>
  );
});

export default VideoSearch;
