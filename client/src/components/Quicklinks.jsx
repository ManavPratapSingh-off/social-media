import React from 'react'
import { CgAddR } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BiMoviePlay } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";

function Quicklinks() {
  return (
    <ul className="grid grid-cols-6 gap-8 text-left text-[var(--color-text)] w-full">
      <li className="cursor-pointer pl-6 flex justify-start items-center gap-4"><span className="text-2xl"><AiFillHome/></span>Home</li>
      <li className="cursor-pointer pl-6 flex justify-start items-center gap-4"><span className="text-2xl"><FiSearch/></span>Search</li>
      <li className="cursor-pointer pl-6 flex justify-start items-center gap-4"><span className="text-2xl"><FaRegCompass/></span>Explore</li>
      <li className="cursor-pointer pl-6 flex justify-start items-center gap-4"><span className="text-2xl"><BiMoviePlay/></span>Reels</li>
      <li className="cursor-pointer pl-6 flex justify-start items-center gap-4"><span className="text-2xl"><FaRegHeart/></span>Notifications</li>
      <li className="cursor-pointer pl-6 flex justify-start items-center gap-4"><span className="text-2xl"><CgAddR/></span>Create</li>
    </ul>
  )
}

export default Quicklinks