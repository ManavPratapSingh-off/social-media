import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CurrentUser() {
  const {userData} = useSelector(state => state.user)
  const navigate = useNavigate()  

  return (
    <div onClick={() => navigate(`/profile/${userData?.user_name}`)} className="w-full h-20 px-3 flex justify-start items-center gap-4  hover:cursor-pointer hover:bg-[var(--color-surface)] rounded-lg">
      <div className="h-15 w-15 border rounded-full overflow-hidden border-[var(--color-border)]">
        <img src={userData.profile_img?userData.profile_img : ""} alt="dp" />
      </div>
      <div className="text-[var(--color-muted)] text-sm">
        <span className="font-semibold text-[var(--color-text)]">
          {userData.user_name}
        </span>
        <br />
        {userData.name}
      </div>
    </div>
  );
}

export default CurrentUser;
