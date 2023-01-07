import React from "react";
import { Link } from "react-router-dom";

import logo from "../../img/logo.svg";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

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

export function SideBarLeft() {
  return (
    <div className="header-left">
      <div></div>
      <div>
        <div>
          <div style={{ display: "block", marginTop: "1.5em" }}>
            <Link to="/">
              <img className="header-logo" src={logo} alt="logo" />
            </Link>
          </div>
          <div style={{ display: "block", marginTop: "2.5em" }}>
            <Link to="/" className="header-content">
              <i className="fa-solid fa-house" style={{ paddingRight: "0.5em" }}></i>{" "}Home
            </Link>
          </div>
          <div style={{ display: "block", marginTop: "2.5em" }}>
            <Link to="/news" className="header-content">
              <i className="fa-solid fa-newspaper" style={{ paddingRight: "0.5em" }}></i>{" "}News
            </Link>
          </div>
          <div style={{ display: "block", marginTop: "2.5em" }}>
            <Link to="/messages" className="header-content">
              <i className="fa-solid fa-message" style={{ paddingRight: "0.5em" }}></i>{" "}Messages
            </Link>
          </div>
          <div style={{ display: "block", marginTop: "2.5em" }}>
            <Link to="/extra" className="header-content">
              <i className="fa-solid fa-plus" style={{ paddingRight: "0.5em" }}></i>{" "}Extra
            </Link>
          </div>
          <div style={{ display: "block", marginTop: "3.5em" }}>
            <a href="/create" style={{fontSize: "1.5em",padding: "0.5em 1em",borderRadius: "9999px",backgroundColor: "var(--red-40)"}}>
              <i className="fa-solid fa-paper-plane" style={{ paddingRight: "0.5em" }}></i>{" "}Post
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export function SideBarRight() {
  return (
    <div className="header-right">
      <div>
        <div style={{ display: "block", margin: "1.5em 0 0 1.5em" }}>
          <i className="fa-solid fa-magnifying-glass" style={{ paddingRight: "0.5em" }} width="30px" height="30px" ></i>
          <input type="text" className="searchbox" name="searchquery" placeholder="Search" maxlength="16" id="searchquery" autocomplete="off" required />
        </div>
        <div style={{ display: "block", margin: "1.5em 0 0 1.5em" }}>
          <button style={{ padding: '0.5em 1em', borderRadius: "9999px", border: 'none', backgroundColor: 'var(--red-40)', fontSize: '1.25em', color: 'var(--text)', cursor: 'pointer' }} onClick={
            () => {
              auth.signOut();
              window.location.reload();
            }
          }><i class="fa-solid fa-right-from-bracket"></i> Sign Out</button>
        </div>
      </div>
      <div></div>
    </div>
  );
}