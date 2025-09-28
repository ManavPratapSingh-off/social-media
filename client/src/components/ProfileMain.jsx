import React, { useRef, useState } from "react";
import reactLogo from "../assets/react.svg";
import { useSelector } from "react-redux";

function ProfileMain() {
  const { userData, profileData } = useSelector((state) => state.user);
  const user_name = profileData ? profileData.user_name : null;
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState(userData?.user.user_name);
  const [name, setName] = useState(userData?.user.name);
  const [bio, setBio] = useState(userData?.user.bio);
  const imgInput = useRef()
  const [fileURL, setFileURL] = useState("")

  const handleImage = (e) => {
    const file = e.target.files[0]
    const file_url = URL.createObjectURL(file)
    setFileURL(file_url)
  }

  return (
    <div className="w-full h-[30%] px-32 flex items-center justify-start gap-16 bg-[var(--color-bg)]">
      <div className="flex justify-center items-center rounded-full bg-[var(--color-surface)] w-32 h-32 overflow-hidden">
        <img src={reactLogo} alt="profile_pic" className="w-32" />
      </div>
      <div className="flex flex-col items-start justify-center gap-4 py-24">
        <div className="w-full flex items-center gap-8">
          <span className="text-xl">{user_name ? user_name : "user name"}</span>{" "}
          {userData?.user?.user_name === user_name ? (
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
        <span className="text-[var(--color-muted)]">
          0 posts 0 followers 0 following
        </span>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-lg">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <div className="w-full flex flex-col items-center gap-3">
              <input type="file" accept="image/*" ref={imgInput} onChange={handleImage} hidden/>
              <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden border-4 border-gray-200 shadow cursor-pointer group">
                {fileURL ? (
                  <img src={fileURL} alt="profile-pic"/>
                ) : null}
                <div
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-medium transition"
                  onClick={() => imgInput.current.click()}
                >
                  Change
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-[50px] bg-gray-100 border border-gray-300 rounded-lg px-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <input
                  type="text"
                  placeholder="Enter Your Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full h-[50px] bg-gray-100 border border-gray-300 rounded-lg px-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <input
                  type="text"
                  placeholder="Bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full h-[50px] bg-gray-100 border border-gray-300 rounded-lg px-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileMain;
