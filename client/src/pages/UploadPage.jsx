import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { FiPlusSquare } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const navigate = useNavigate();

  return (
    <div
      className="
    w-full min-h-screen 
    bg-[radial-gradient(1200px_800px_at_10%_-10%,var(--color-accent)_0%,transparent_35%),radial-gradient(1200px_800px_at_110%_0%,var(--color-primary)_0%,transparent_40%),radial-gradient(900px_700px_at_50%_110%,var(--color-secondary)_0%,transparent_45%),linear-gradient(180deg,var(--color-secondary),var(--color-primary))]
    flex items-center justify-center
  "
    >
      <div className="w-[95%] lg:max-w-[60%] h-[600px] rounded-2xl flex justify-center items-center overflow-hidden">
        {/* LEFT (form area) */}
        <div
          className="
        w-full lg:w-1/2 h-full 
        bg-[var(--color-surface)] 
        flex flex-col items-center justify-start
        px-6 sm:px-10 
        pt-8
        gap-5
        shadow-[0_10px_40px_rgba(0,0,0,0.2)]
      "
        >
          {/* Header */}
          <div className="flex items-center gap-3 w-full">
            <MdOutlineKeyboardBackspace
              onClick={() => navigate("/home")}
              className="w-6 h-6 text-[var(--color-muted)] cursor-pointer"
            />
            <h2 className="text-lg font-semibold text-[var(--color-text)]">
              Upload Media
            </h2>
          </div>

          {/* Upload type switch */}
          <div className="w-[95%] h-[50px] bg-[var(--color-bg)] rounded-full flex justify-around items-center mt-2">
            <div className="w-[28%] h-[80%] flex justify-center items-center text-sm font-medium rounded-full bg-[var(--color-secondary)] text-[var(--color-surface)] shadow-md">
              Post
            </div>
            <div className="w-[28%] h-[80%] flex justify-center items-center text-sm font-medium rounded-full text-[var(--color-muted)] hover:bg-[var(--color-border)] cursor-pointer">
              Story
            </div>
            <div className="w-[28%] h-[80%] flex justify-center items-center text-sm font-medium rounded-full text-[var(--color-muted)] hover:bg-[var(--color-border)] cursor-pointer">
              Reel
            </div>
          </div>

          {/* Upload box */}
          <div
            className="
          w-[95%] h-[220px] bg-[var(--color-bg)] border border-dashed border-[var(--color-border)]
          flex flex-col items-center justify-center gap-3 
          mt-6 rounded-xl cursor-pointer 
          hover:bg-[var(--color-surface)] transition
        "
          >
            <FiPlusSquare className="text-[var(--color-muted)] w-8 h-8" />
            <p className="text-[var(--color-text)] font-medium">Upload Post</p>
          </div>

          {/* Caption input */}
          <input
            type="text"
            placeholder="Write a caption..."
            className="
          w-[95%] mt-4 px-3 py-2 rounded-md border border-[var(--color-border)] 
          bg-[var(--color-bg)] text-[var(--color-text)] text-sm 
          focus:outline-none focus:border-[var(--color-muted)]
        "
          />

          {/* Button */}
          <button
            className="
          w-[95%] h-[44px] mt-6 rounded-lg font-semibold 
          bg-[var(--color-secondary)] text-[var(--color-surface)] 
          hover:bg-[var(--color-primary)] active:scale-[0.99] transition
          shadow-[0_6px_16px_rgba(64,93,230,0.35)]
        "
          >
            Upload Post
          </button>
        </div>

        {/* RIGHT (branding / promo) */}
        <div
          className="
        md:w-1/2 h-full hidden lg:flex flex-col items-center justify-center 
        bg-[var(--color-surface)]/10 backdrop-blur-[1px]
        text-[var(--color-surface)] font-semibold
      "
        ></div>
      </div>
    </div>
  );
}

export default UploadPage;
