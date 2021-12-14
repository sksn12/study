import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";
import stlyes from "./app.module.css";

const App = ({ FileInput, authService, cardRepository }) => {
  return (
    <div className={stlyes.totalPage}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Login authService={authService} />
          </Route>
          <Route path='/maker'>
            <Maker
              FileInput={FileInput}
              authService={authService}
              cardRepository={cardRepository}
            ></Maker>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
