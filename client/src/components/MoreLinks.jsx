import React, { useEffect, useState } from "react";
import { FaToggleOn } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { FaToggleOff } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setDarkTheme } from "../redux/displaySlice";

function MoreLinks() {
  const [isOpen, setisOpen] = useState(false)
  const [isDarkTheme, setisDarkTheme] = useState(localStorage.getItem("theme")==="dark")
  const dispatch = useDispatch()

  useEffect(() => {
    if (isDarkTheme) document.documentElement.setAttribute("data-theme", "dark")
    else document.documentElement.removeAttribute("data-theme")
    localStorage.setItem("theme", isDarkTheme?"dark":"light")
    dispatch(setDarkTheme(isDarkTheme))
  }, [isDarkTheme])

  return (
    <div className="relative w-full h-full text-[var(--color-text)]">
      <div className="absolute top-[80%] w-full">
        <button onClick={()=>setisOpen(isOpen?false:true)} className="cursor-pointer pl-6 flex justify-start items-center gap-4">
          <span className="text-2xl">
            <FaBars />
          </span>
          More
        </button>
        { isOpen &&
        (<div className="absolute left-6 bottom-10 z-50 w-52 px-3 py-4 rounded-md text-sm" style={{backgroundColor : isDarkTheme?"#111111":"#e1e1e1"}}>
          <button
          onClick={() => setisDarkTheme(isDarkTheme?false:true)} 
          className="w-full cursor-pointer flex justify-between items-center">Dark Mode<span className="text-2xl" style={{color : isDarkTheme?"teal":"gray"}}>{isDarkTheme?<FaToggleOn/> : <FaToggleOff/>}</span></button>
        </div>)
        }
      </div>
    </div>
  );
}

export default MoreLinks;
