import React from "react";
import { useNavigate } from "react-router-dom";

import "./App.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp({
  apiKey: "AIzaSyAd6HnxUGtkJezITQg1RvVgUjqNF2xpuRk",
  authDomain: "konnect-87259.firebaseapp.com",
  databaseURL: "https://konnect-87259-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "konnect-87259",
  storageBucket: "konnect-87259.appspot.com",
  messagingSenderId: "274248621019",
  appId: "1:274248621019:web:b4a79d276fcf64d80965fe",
  measurementId: "G-PZNXWSQPB0",
});

const auth = firebase.auth();

export function SignIn() {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const signInWithGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  const signInWithFacebook = () => {
    let provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider);
  };
  const signInWithGithub = () => {
    let provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider);
  };

  if (!user) {
    return (
      <>
        <div className="signin-container">
          <h1>Sign in</h1>
          <div className="signin-options">
            <button className="signin-option" onClick={signInWithGoogle}>
              <i className="fa-brands fa-google"></i> Sign In with Google
            </button>
            <button className="signin-option" onClick={signInWithFacebook}>
              <i className="fa-brands fa-facebook"></i> Sign In with Facebook
            </button>
            <button className="signin-option" onClick={signInWithGithub}>
              <i className="fa-brands fa-github"></i> Sign In with Github
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return navigate("/");
  }
}


