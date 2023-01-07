import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./app/Home";
import { Messages } from "./app/Messages";
import { CreatePost } from "./app/CreatePost";
import { Extra } from "./app/Extra";
import { SignIn } from "./app/SignIn";
import { NotFound } from "./app/NotFound";
import { LayOut } from "./app/components/LayOut";

import "./app/App.css";

function App() {
  for (let i = 0; i < 10; i++) {
    console.log(
      "%cStop!",
      "color:red;font-family:system-ui;font-size:3rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );
    console.log(
      "%cThis is a browser feature intended for developers. If someone told you to copy-paste something here it is a scam and will give them access to your Konnect account.",
      "color:white;font-family:system-ui;font-size:1rem;font-weight:bold"
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/extra" element={<Extra />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;