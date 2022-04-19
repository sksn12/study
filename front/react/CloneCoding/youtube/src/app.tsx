import React, { useCallback, useEffect, useState } from "react";
import style from "./app.module.css";
import VideoSearch from "./components/search/video_search";
import VideoList from "./components/videos_list/video_list";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [selected, setSelected] = useState(false);
  const [youtubeData, setYoutubeData] = useState([]);
  console.log("app");
  // useEffect는 컴포넌트가 생성되고 랜더링 됨
  useEffect(() => {
    youtube
      .mostPopualr() //
      .then((e) => setYoutubeData(e));
  }, [youtube]);

  const onBackHome = useCallback((event) => {
    setSelected(event);
  }, []);

  return (
    <div className={style.app}>
      <VideoSearch youtube={youtube} setYoutubeData={setYoutubeData} />
      <section className={style.content}>
        {selected && (
          <div className={style.detail}>
            <VideoDetail selected={selected} onBackHome={onBackHome} />
          </div>
        )}
        <div className={style.list}>
          <VideoList
            setSelected={setSelected}
            youtubeData={youtubeData}
            selected={selected}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
