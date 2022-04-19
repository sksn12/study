import React, { memo } from "react";

import style from "./video_item.module.css";
const VideoItem = memo((props) => {
  const onClick = () => {
    props.setSelected(props.video);
  };
  console.log("item");
  const display = props.selected ? style.list : style.grid;
  return (
    <li className={`${style.item} ${display}`} onClick={onClick}>
      <img
        className={style.img}
        src={props.video.snippet.thumbnails.medium.url}
        alt="thumbnails"
      />
      <div className={style.spans}>
        <span className={style.title}>{props.video.snippet.title}</span>
        <span className={style.channel}>
          {props.video.snippet.channelTitle}
        </span>
      </div>
    </li>
  );
});

export default VideoItem;
