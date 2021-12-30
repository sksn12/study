import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import ClassApp from "./app";
const classApp = new ClassApp();
ReactDOM.render(
  <React.StrictMode>
    <App classApp={classApp} />
  </React.StrictMode>,
  document.getElementById("root")
);
