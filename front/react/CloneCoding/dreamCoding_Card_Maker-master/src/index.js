import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import "@fortawesome/fontawesome-free/js/all.js";
import App from "./app.jsx";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";
import CardRepository from "./service/card_repository";

const authService = new AuthService();
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository();
/* 상태관리를 여러 컴포넌트별로 전달하지 않고 하나의 콜백함수로 만들어서 사용하는 방식
   이렇게 콜백함수로 하는 이유는 단순히 변수롤 만들어 전달하면 사용하는 곳에서 ImageUploader안에 다른 onClick과 같은 메서드를 추가할수없음 
   또한 여기에서만 변경하면 됨으로 심플하게 디펜더시 인젝셕이된다. 유지보수 up
   */
const FileInput = memo((props) => {
  return <ImageFileInput {...props} imageUploader={imageUploader} />;
});
ReactDOM.render(
  <React.StrictMode>
    <App
      FileInput={FileInput}
      authService={authService}
      cardRepository={cardRepository}
    ></App>
  </React.StrictMode>,
  document.getElementById("root")
);
