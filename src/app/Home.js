import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import data from "@emoji-mart/data";
import Avatar from "boring-avatars";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import moment from "moment";

import logo from "../img/logo.svg";
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

const auth = firebase.auth();
const firestore = firebase.firestore();

export function Home() {
  const [user] = useAuthState(auth);

  console.log(user);

  const navigate = useNavigate();

  const postRef = firestore.collection("posts");
  const query = postRef.orderBy("createdTimestamp").limit(100);
  const [posts] = useCollectionData(query, { idField: "id" });

  if (user) {
    return (
      <>
        {posts ? (
          <div className="posts">
            {posts.reverse().map((post) => (
              <PostsLayout post={post} key={post.id} />
            ))}
          </div>
        ) : (
          <div className="posts-loading">
            <div className="posts-loading-content">
              <img src={logo} className="posts-loading-logo" alt="logo" />

              <h2 className="posts-loading-text">Loading...</h2>
            </div>
          </div>
        )}
      </>
    );
  } else {
    navigate("/signin");
  }
}

function PostsLayout(props, key) {
  let { content, created, author, authorPhoto, hidden, reliable, deleted } = props.post;

  let reliablevar;

  if (deleted === true) {
    return <></>;
  } else {
    if (reliable === false) {
      reliablevar = (
        <div className="post-reliable-container">
          <div className="post-reliable-content">
            <div className="post-reliable-content-header">
              <i className="fa-solid fa-info" style={{fontSize: "1.17em",margin: "0 0.5em 0 0.25em",justifyContent: "center"}}></i>
              <h3>Unreliable Content</h3>
            </div>
            <div className="post-reliable-content-description">
              <p style={{ marginTop: "0.75em" }}>
                This post has been marked as misleading or inaccurate by the
                community. Please take caution when reading this post.
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (hidden) {
      return (
        <div className="post">
          <>
            <div className="post-info">
              <div style={{ display: "flex" }}>
                <img src={logo} class="post-pfp" alt="logo" />
                <div>
                  <h2>Post Hidden</h2>
                  <h4>Originally posted by @{author}</h4>
                </div>
              </div>
            </div>
            <p className="post-content">
              This post has been hidden due to a violation of our{" "}
              <a href="/terms" className="post-content-link">
                Terms of Service
              </a>
              .
            </p>
          </>
        </div>
      );
    } else {
      return (
        <div className="post">
          <div className="post-info">
            <div style={{ display: "flex" }}>
              {
                authorPhoto ? <img src={authorPhoto} className="post-pfp" alt="logo" /> : <div className="post-pfp"><Avatar size={60} name={author} variant="beam" colors={["#e45869","#fdd579","#93c17a","#77bdf1","#bba5de"]} /></div>
              }
              <div>
                <h2>{author}</h2>
                <h4>
                  Posted {moment(created, "MMMM DD, YYYY h:mm:ss a").fromNow()}
                </h4>
              </div>
            </div>
            <div>
              <button className="post-options" id={props.post.id}>
                <i className="fa-solid fa-ellipsis-h"></i>
              </button>
            </div>
          </div>
          <p className="post-content">{content}</p>
          {reliablevar}
        </div>
      );
    }
  }
}
