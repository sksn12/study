import React from "react";
import { SignInWithGoogle, SignInWithGitHub } from "../../autuentication.js";
import Footer from "../footer/footer";
import Header from "../Header/header";
import styles from "../Login/login.module.css";
const Login = (props) => {
  const google = async () => {
    const result = await SignInWithGoogle(props.loggedIn);
    props.change(result);
  };
  const GitHub = async () => {
    const result = await SignInWithGitHub(props.loggedIn);
    props.change(result);
  };
  return (
    <div className={styles.background}>
      <div className={styles.popup}>
        <Header />
        <div className={styles.login}>
          <span className={styles.span}>Login</span>
          <button className={styles.btn} onClick={google}>
            Google
          </button>
          <button className={styles.btn} onClick={GitHub}>
            Github
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
