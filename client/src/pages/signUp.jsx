import React, { useState } from "react";
import { signUpUser } from "../apicalls/authcalls.js";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../assets/gradient-blue-pink-abstract-art-wallpaper-preview.jpg';

function signUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [passwd, setPasswd] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault()
    if (!name || !email || !userName || !passwd) {
      alert("Please fill all the fields");
      return;
    }
    const userData = {
      name : name,
      email : email,
      user_name : userName,
      password : passwd,
    };
    console.log(userData);

    try {
      const response = await signUpUser(userData);
      console.log("User signed up successfully:", response);
      alert("User signed up successfully");
      navigate("/home")
      setName("");
      setEmail("");
      setUserName("");
      setPasswd("");
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Error signing up: " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen " style={{backgroundImage : `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition : 'center'}}>
      <div className="bg-white/30 backdrop-blur-md p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-[var(--color-text)]">
          Sign Up
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-[var(--color-text)] mb-1"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-[var(--color-border)] rounded bg-[var(--color-surface)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-[var(--color-text)] mb-1"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-[var(--color-border)] rounded bg-[var(--color-surface)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="user_name"
              className="block text-[var(--color-text)] mb-1"
            >
              Username:
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
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
            onClick={(e) => handleSignUp(e)}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default signUp;
