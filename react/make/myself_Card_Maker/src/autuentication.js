import "firebase/auth";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIRE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIRE_AUTH}`,
  projectId: `${process.env.REACT_APP_FIRE_PROJECTID}`,
  storageBucket: `${process.env.REACT_APP_FIRE_STROAGE}`,
  messagingSenderId: `${process.env.REACT_APP_FIRE_MESSGAEING}`,
  appId: `${process.env.REACT_APP_FIRE_APPID}`,
  measurementId: `${process.env.REACT_APP_FIRE_MEASUREMENTID}`,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const Googleprovider = new firebase.auth.GoogleAuthProvider();
const Gitprovider = new firebase.auth.GithubAuthProvider();
Googleprovider.setCustomParameters({ prompt: "select_account" });
Gitprovider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = (loggedIn) =>
  auth
    .signInWithPopup(Googleprovider)
    .then((result) => {
      if (result.credential) {
        return (loggedIn = true);
      } else {
        return;
      }
    })
    .catch((error) => {
      const errorCode = error.code;
    });
export const SignInWithGitHub = (loggedIn) =>
  auth
    .signInWithPopup(Gitprovider)
    .then((result) => {
      if (result.credential) {
        return (loggedIn = true);
      } else {
        return;
      }
    })
    .catch((error) => {
      const errorCode = error.code;
    });
export default firebase;
