import React, { useRef, useState } from "react";
import reactLogo from "../assets/react.svg";
import { useSelector } from "react-redux";
import EditProfileModal from "./EditProfileModal.jsx";

function ProfileMain() {
  const { userData, profileData } = useSelector((state) => state.user);  
  const user_name = profileData ? profileData.user_name : null;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[30%] px-32 flex items-center justify-start gap-16 bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="flex justify-center items-center rounded-full bg-[var(--color-surface)] w-32 h-32 overflow-hidden">
        <img src={userData?.profile_img?userData.profile_img : reactLogo} alt="profile_pic" className="w-32" />
      </div>
      <div className="flex flex-col items-start justify-center gap-4 py-24">
        <div className="w-full flex items-center gap-8">
          <span className="text-xl">{user_name ? user_name : "user name"}</span>
          {userData?.user_name === user_name ? (
            <button
              onClick={() => setIsOpen(true)}
              className="px-3 py-1 rounded-md bg-[var(--color-border)] hover:bg-gray-400 hover:cursor-pointer text-sm"
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
          <span>{userData?.posts ? userData.posts.length : 0} posts</span> <span>0 followers</span> <span>0 following</span>
        </span>
        {profileData?.bio && (
          <span className="text-sm font-[100]">{profileData?.bio}</span>
        )}
      </div>

        {isOpen && <EditProfileModal setIsOpen={setIsOpen}/>}
    </div>
  );
}

export default ProfileMain;
