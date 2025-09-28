import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CurrentUser() {
  const {userData} = useSelector(state => state.user)
  const navigate = useNavigate()  

  return (
    <div onClick={() => navigate(`/profile/${userData?.user.user_name}`)} className="w-full h-15 px-3 flex justify-start items-center gap-4  hover:cursor-pointer hover:bg-[var(--color-bg)] rounded-lg">
      <div className="h-10 w-10 border rounded-full border-[var(--color-border)]">
        <img src="" alt="dp" />
      </div>
      <div className="text-[var(--color-muted)] text-sm">
        <span className="font-semibold text-[var(--color-text)]">
          {userData.user.user_name}
        </span>
        <br />
        {userData.user.name}
      </div>
    </div>
  );
}

export default CurrentUser;
