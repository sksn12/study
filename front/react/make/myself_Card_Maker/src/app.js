import React, { useState } from "react";
import Header from "./components/Header/header";
import CardTotal from "./components/Card_total/card_total";
import { HashRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Footer from "./components/footer/footer";
import Login from "./components/Login/login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const change = (result) => {
    setLoggedIn(result);
  };
  const logOut = () => {
    setLoggedIn(false);
  };
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact>
          {loggedIn ? (
            <Redirect to='/page' />
          ) : (
            <Login loggedIn={loggedIn} change={change} />
          )}
        </Route>
        <Route path='/page'>
          <div>
            <button className={styles.btn_logOut} onClick={logOut}>
              {!loggedIn ? <Redirect to='/' /> : <Redirect to='page' />}
              LogOut
            </button>
            <Header />
            <CardTotal />
            <Footer />
          </div>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
