import React, { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { patch_profile_details } from "../apicalls/userCalls";

function EditProfileModal({setIsOpen}) {
  const { userData } = useSelector((state) => state.user);
  const [name, setName] = useState(userData.name);
  const [username, setUsername] = useState(userData.user_name);
  const [bio, setBio] = useState(userData.bio);
  const imgInput = useRef();
  const [fileURL, setFileURL] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    const file_url = URL.createObjectURL(file);
    setFileURL(file_url);
  };

  const form_send_body = async () => {
    const body = { _id: userData._id };
    if (name !== userData.name) body.name = name;
    if (username !== userData.user_name) body.user_name = username;
    if (bio !== userData.bio) body.bio = bio;

    try {
        const response = await patch_profile_details(body)
        if (response) alert ("Changes saved successfully!\n", response)
    } catch (error) {
        alert (`Something went wrong!\n ${error}`)
    }
  };

  return (
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
          <input
            type="file"
            accept="image/*"
            ref={imgInput}
            onChange={handleImage}
            hidden
          />
          <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden border-4 border-gray-200 shadow cursor-pointer group">
            {fileURL ? <img src={fileURL} alt="profile-pic" /> : null}
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            onClick={(e) => {
              e.preventDefault()
              setIsOpen(false);
              form_send_body();
              window.location.reload()
            }}
            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfileModal;
