import React, { memo } from "react";
import VideoItem from "../video_item/video_item";
import style from "./video_list.module.css";
const VideoList = memo((props) => {
  const hanlde_onClick = (event) => {
    props.onClick(event);
  };
  return (
    <ul className={style.ul}>
      {props.videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          Click_handle={hanlde_onClick}
          selected={props.selected}
        />
      ))}
    </ul>
  );
});

export default VideoList;
