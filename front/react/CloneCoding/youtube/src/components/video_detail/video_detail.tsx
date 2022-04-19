import React, { memo } from "react";
import styles from "../video_detail/video_detail.module.css";
const VideoDetail = memo((props) => {
  const onDlete = () => {
    props.onBackHome(null);
  };
  console.log("detail");
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        type="text/html"
        width="100%"
        height="500px"
        src={`https:www.youtube.com/embed/${props.selected.id}`}
        frameBorder="0"
        allowFullScreen
        title="youtube"
      ></iframe>
      <h2>{props.selected.snippet.title}</h2>
      <pre className={styles.description}>
        {props.selected.snippet.description}
      </pre>
      <button onClick={onDlete} className={styles.delete}>
        <i className="fas fa-times"></i>
      </button>
    </section>
  );
});

export default VideoDetail;
