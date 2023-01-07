import React, { useState } from "react";
import { NavigationType, useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import moment from "moment";

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

export function Extra() {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  if (user) {
    return (
        <div style={{ margin: "2em" }}>
          
          <h1 className="extra-header">
            Konnect, <br />
            but <span className="extra-header-emphasis">Better</span>
          </h1>

          <div className="extra-plans">
            <div className="extra-plan">
              <h2 className="extra-plan-header">Subscription</h2>
              
              <h4 className="extra-plan-price">$ <span className="extra-plan-price-int"  style={{ backgroundImage: 'linear-gradient(0deg,var(--red-50),var(--yellow-50))' }}>5</span> / month</h4>

              <ul className="extra-plan-list">
                <li className="extra-plan-list-item"><i className="fa-solid fa-check" style={{ color: 'var(--green-50)' }}></i> 250 Character Post Cap </li>
                <li className="extra-plan-list-item"><i className="fa-solid fa-check" style={{ color: 'var(--green-50)' }}></i> GIF Support </li>
                <li className="extra-plan-list-item"><i className="fa-solid fa-check" style={{ color: 'var(--green-50)' }}></i> Star Next to Name </li>
                <li className="extra-plan-list-item"><i className="fa-solid fa-check" style={{ color: 'var(--green-50)' }}></i> Edit Posts </li>
              </ul>

              <button className="extra-plan-button" style={{ backgroundImage: 'linear-gradient(0deg,var(--red-50),var(--yellow-50))' }}>
                <span className="extra-plan-button-text">Subscribe</span>
              </button>
            </div>
            <div className="extra-plan">
              <h2 className="extra-plan-header">Lifetime</h2>

              <h4 className="extra-plan-price">$ <span className="extra-plan-price-int" style={{ backgroundImage: 'linear-gradient(0deg,var(--purple-50),var(--blue-50))' }}>50</span> once</h4>

              <ul className="extra-plan-list">
                <li className="extra-plan-list-item"><i className="fa-solid fa-check" style={{ color: 'var(--green-50)' }}></i> All Extra Features </li>
                <li className="extra-plan-list-item"><i className="fa-solid fa-check" style={{ color: 'var(--green-50)' }}></i> One payment </li>
                <li className="extra-plan-list-item"><i className="fa-solid fa-check" style={{ color: 'var(--green-50)' }}></i> Best Value </li>
                <li className="extra-plan-list-item"><i className="fa-solid fa-check" style={{ color: 'var(--green-50)' }}></i> Did I mention best value?</li>
              </ul>

              <button className="extra-plan-button" style={{ backgroundImage: 'linear-gradient(0deg,var(--purple-50),var(--blue-50))' }}>
                <span className="extra-plan-button-text">Buy Now</span>
              </button>
            </div>
          </div>
        </div>
    );
  } else {
    navigate("/");
  }
}
