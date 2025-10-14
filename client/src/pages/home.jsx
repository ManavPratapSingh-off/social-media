import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Messages from "../components/Messages";
import UploadModal from "../components/UploadModal.jsx";
import { ModalContext } from "../context/ModalContext.jsx";

function home() {
  const {uploadModalisOpen} = useContext(ModalContext)
  return (
    <div className="h-screen gap-6 bg-[var(--color-bg)]" >
      <Navbar/>
      <Main/>
      <Messages/>
      {uploadModalisOpen && <UploadModal/>}
    </div>
  );
}

export default home;

// style={{backgroundImage:`url(${bgImg})`, backgroundPosition: "center", backgroundSize: "cover"}}