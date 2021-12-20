import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
