import React from "react";
import styles from "../video_detail/video_detail.module.css";
const VideoDetail = (props) => {
  const onDlete = () => {
    props.onBackHome(null);
  };
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        type='text/html'
        width='100%'
        height='500px'
        src={`https:www.youtube.com/embed/${props.onSelected.id}`}
        frameBorder='0'
        allowFullScreen
        title='youtube'
      ></iframe>
      <h2>{props.onSelected.snippet.title}</h2>
      <pre className={styles.description}>
        {props.onSelected.snippet.description}
      </pre>
      <button onClick={onDlete} className={styles.delete}>
        <i class='fas fa-times'></i>
      </button>
    </section>
  );
};

export default VideoDetail;
