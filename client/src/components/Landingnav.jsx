import React from "react";
import logo from "../assets/minigram.png";
import {useNavigate} from "react-router-dom"

function Landingnav() {
  const navigate = useNavigate();

  return (
    <div className=" py-2 px-8 grid grid-cols-8 row-span-1">
      <div className="col-span-1 flex items-center justify-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="col-start-8 py-4 flex items-center justify-evenly">
        <button onClick={() => navigate("/sign-in")} className="bg-[var(--color-surface)] p-2 rounded-md cursor-pointer">Log in</button>
        <button onClick={() => navigate("/sign-up")} className="bg-[var(--color-secondary)] p-2 rounded-md cursor-pointer">Sign up</button>
      </div>
    </div>
  );
}

export default Landingnav;
