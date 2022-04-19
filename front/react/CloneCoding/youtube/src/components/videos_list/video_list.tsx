import React, { memo } from "react";
import VideoItem from "../video_item/video_item";

import style from "./video_list.module.css";
const VideoList = memo((props) => {
  console.log("list");
  return (
    <ul className={style.ul}>
      {props.youtubeData ? (
        props.youtubeData.map((e) => (
          <VideoItem
            key={e.id}
            video={e}
            setSelected={props.setSelected}
            selected={props.selected}
          />
        ))
      ) : (
        <></>
      )}
    </ul>
  );
});
export default VideoList;
