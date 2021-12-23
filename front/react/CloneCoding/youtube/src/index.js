import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import Youtube from "./youtube/youtube";
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube}></App>
  </React.StrictMode>,
  document.getElementById("root")
);
