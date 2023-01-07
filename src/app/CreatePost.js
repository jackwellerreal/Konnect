import React, { useState } from "react";
import { NavigationType, useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import moment from "moment";
import BadWordsFilter from "bad-words";

import "./App.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

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

const filter = new BadWordsFilter();

const auth = firebase.auth();
const firestore = firebase.firestore();

export function CreatePost() {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const postRef = firestore.collection("posts");
  const [formValue, setFormValue] = useState("");

  const createPost = async (e) => {
    e.preventDefault();

    let content = filter.clean(formValue);

    setFormValue("");
    
    if (content.length > 100) {
      content = content.substring(0, 100);
    }

    await postRef.add({
      author: auth.currentUser.displayName,
      authorId: auth.currentUser.uid,
      authorPhoto: auth.currentUser.photoURL,
      content: content,
      created: moment().format("MMMM DD, YYYY h:mm:ss a"),
      createdTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
      hidden: false,
      reliable: true,
      deleted: false,
      id: uuidv4(),
    });


    navigate("/");
  };

  if (user) {
    return (
      <div style={{ margin: "2em" }}>
        <h1>Create Post</h1>
        <form className="create-post" onSubmit={createPost}>
          <div className="create-post-input-container">
            <textarea className="create-post-input" value={formValue} maxLength="100" onChange={(e) => setFormValue(e.target.value)} wrap="hard"></textarea>
          </div>
          <div className="create-post-options">
            <div className="create-post-options-icons">
            </div>
            <button className="create-post-button" type="submit" disabled={!formValue}>
              <i className="fa-solid fa-paper-plane" style={{ color: "var(--white)" }}></i>
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    navigate("/");
  }
}
