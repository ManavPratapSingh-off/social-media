import React, { useRef, useState } from "react";
import reactLogo from "../assets/react.svg";
import { useDispatch, useSelector } from "react-redux";
import { patch_profile_details } from "../apicalls/userCalls.js";
import { setUserData } from "../redux/userSlice.js";
import EditProfileModal from "./EditProfileModal.jsx";

function ProfileMain() {
  const { userData, profileData } = useSelector((state) => state.user);  
  const user_name = profileData ? profileData.user_name : null;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[30%] px-32 flex items-center justify-start gap-16 bg-[var(--color-bg)]">
      <div className="flex justify-center items-center rounded-full bg-[var(--color-surface)] w-32 h-32 overflow-hidden">
        <img src={reactLogo} alt="profile_pic" className="w-32" />
      </div>
      <div className="flex flex-col items-start justify-center gap-4 py-24">
        <div className="w-full flex items-center gap-8">
          <span className="text-xl">{user_name ? user_name : "user name"}</span>
          {userData?.user_name === user_name ? (
            <button
              onClick={() => setIsOpen(true)}
              className="px-3 py-1 rounded-md bg-gray-300 hover:bg-gray-200 hover:cursor-pointer text-sm"
            >
              Edit Profile
            </button>
          ) : (
            <button className="px-3 py-1 rounded-md bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] hover:cursor-pointer text-sm">
              Follow
            </button>
          )}
        </div>
        <span className="text-[var(--color-muted)] flex justify-start items-center gap-6">
          <span>0 posts</span> <span>0 followers</span> <span>0 following</span>
        </span>
        {profileData?.bio && (
          <span>{profileData?.bio}</span>
        )}
      </div>

        {isOpen && <EditProfileModal setIsOpen={setIsOpen}/>}
    </div>
  );
}

export default ProfileMain;
