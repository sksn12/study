import React, { useEffect, useState } from "react";
import VideoSearch from "./components/search/video_search";
import style from "./app.module.css";
import VideoList from "./components/videos_list/video_list";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);

  const onClick = (video) => {
    setSelected(video);
  };
  const video_delete = (nul) => {
    setSelected(nul);
  };

  const search = (query) => {
    youtube.search(query).then((video) => setVideos(video));
  };

  useEffect(() => {
    youtube.mostPopualr().then((video) => setVideos(video));
  }, [youtube]);
  return (
    <div className={style.app}>
      <VideoSearch search={search} onBackHome={video_delete} />
      <section className={style.content}>
        {selected && (
          <div className={style.detail}>
            <VideoDetail onSelected={selected} onBackHome={video_delete} />
          </div>
        )}
        <div className={style.list}>
          <VideoList
            videos={videos}
            onClick={onClick}
            selected={selected ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
