import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "boring-avatars";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import BadWordsFilter from "bad-words";

import "./App.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { getFirestore } from "firebase/firestore";

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

export function Messages() {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const dummy = useRef();
  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdTimestamp").limit(50);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const createMessage = async (e) => {
    e.preventDefault();

    let content = filter.clean(formValue);

    if (content.length > 25) {
      content = content.substring(0, 25);
    }    

    await messageRef.add({
      author: auth.currentUser.displayName,
      authorId: auth.currentUser.uid,
      authorPhoto: auth.currentUser.photoURL,
      content: content,
      created: moment().format("MMMM DD, YYYY h:mm:ss a"),
      createdTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setFormValue("");
  };

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (user) {
    return (
      <div className="messages-container">
        <div className="messages">
          {messages &&
            messages.map((msg) => <MessageLayout key={msg.id} message={msg} />)}

          <div ref={dummy}></div>
        </div>

        <form className="create-message" onSubmit={createMessage}>
          <div className="create-message-input-container" id="create-message">
            <div className="create-message-input-text">
              <input className="create-message-input" value={formValue} maxLength="100" onChange={(e) => setFormValue(e.target.value)} placeHolder="What's on your mind?" id="create-post-input" autoComplete="off"/>
            </div>
            <div className="create-message-options">
              <button className="create-message-button" type="submit" disabled={!formValue} >
                <i className="fa-solid fa-paper-plane" style={{ color: "var(--white)" }}></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    navigate("/signin");
  }
}

function MessageLayout(props, key) {
  let { content, author, authorPhoto, created } = props.message;

  return (
    <div className="message">
      {
        authorPhoto ? <img src={authorPhoto} className="message-avatar" alt="logo" /> : <div className="message-avatar"><Avatar size={60} name={author} variant="beam" colors={["#e45869","#fdd579","#93c17a","#77bdf1","#bba5de"]} /></div>
      }
      <div className="message-content">
        <div className="message-author">
          {author}{" "}
          <span className="message-time">
            {moment(created, "MMMM DD, YYYY h:mm:ss a").calendar()}
          </span>
        </div>
        <div className="message-text">{content}</div>
      </div>
    </div>
  );
}
