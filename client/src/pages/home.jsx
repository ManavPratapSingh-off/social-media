import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Messages from "../components/Messages";

function home() {
  return (
    <div className="grid grid-cols-[1fr_3fr_1.5fr] gap-6">
      <Navbar/>
      <Main/>
      <Messages/>
    </div>
  );
}

export default home;
