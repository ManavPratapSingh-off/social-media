import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Messages from "../components/Messages";
import bgImg from "../assets/gradient-blue-pink-abstract-art-wallpaper-preview.jpg"

function home() {
  return (
    <div className="h-screen gap-6 bg-[var(--color-bg)]" >
      <Navbar/>
      <Main/>
      <Messages/>
    </div>
  );
}

export default home;

// style={{backgroundImage:`url(${bgImg})`, backgroundPosition: "center", backgroundSize: "cover"}}