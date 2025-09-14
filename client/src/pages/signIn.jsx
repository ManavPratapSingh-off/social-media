import React, { useState } from "react";
import { signInUser } from "../apicalls/authcalls.js";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../assets/gradient-blue-pink-abstract-art-wallpaper-preview.jpg'; // Adjust the path as necessary

function signIn() {
  const [userName, setUserName] = useState("");
  const [passwd, setPasswd] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault()
    if (!userName || !passwd) {
      alert("Please fill all the fields");
      return;
    }
    const credentials = {
      user_name: userName,
      password: passwd,
    };
    try {
      const response = await signInUser(credentials);
      console.log("User signed in successfully:", response);
      alert("User signed in successfully");
      navigate("/home");
      setUserName("");
      setPasswd("");
    } catch (error) {
      console.error("Error signing in:", error);
      alert("Error signing in: " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{backgroundImage : `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition : 'center'}}>
      <div className="bg-white/30 backdrop-blur-md p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-[var(--color-text)]">
          Sign In
        </h2>
        <form className="space-y-4" onSubmit={e => handleSignIn(e)}>
          <div>
            <label
              htmlFor="user_name"
              className="block text-[var(--color-text)] mb-1"
            >
              Username:
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              className="w-full px-3 py-2 border border-[var(--color-border)] rounded bg-[var(--color-surface)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="passwd"
              className="block text-[var(--color-text)] mb-1"
            >
              Password:
            </label>
            <input
              type="password"
              id="passwd"
              name="passwd"
              required
              className="w-full px-3 py-2 border border-[var(--color-border)] rounded bg-[var(--color-surface)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              onChange={(e) => setPasswd(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--color-primary)] text-[var(--color-surface)] py-2 rounded hover:bg-[var(--color-primary-light)] transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default signIn;
