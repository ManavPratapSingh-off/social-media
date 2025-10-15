import React, { useContext, useRef, useState, useEffect } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { FiPlusSquare } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../context/ModalContext";
import { upload_post_apicall } from "../apicalls/postCalls";

function UploadModal() {
  const navigate = useNavigate();
  const input_media = useRef();
  const [modaltype, setmodaltype] = useState("post");
  const [media, setmedia] = useState(null);
  const [srcurl, setsrcurl] = useState("");
  const [mediatype, setmediatype] = useState("");
  const modal_ref = useRef(null)
  const {setuploadModalisOpen} = useContext(ModalContext)
  const [caption, setcaption] = useState("")

  const handle_input_media = (e) => {
    const file = e.target.files[0];
    setmedia(file);
    if (file?.type.includes("image")) {
      setmediatype("image");
    } else if (file?.type.includes("video")) {
      setmediatype("video");
    } else {
      setmediatype(null);
    }

    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB limit example
        alert("File is too large");
        return;
      }
      const mediaUrl = URL.createObjectURL(file)
      setsrcurl(mediaUrl);
    }
  };

  const make_upload_request = async (e) => {
    e.preventDefault()
    const body = new FormData()
    body.append("media_type", mediatype)
    body.append("media_url", media)
    body.append("caption", caption)
    
    try {
      const response = await upload_post_apicall(body)
      console.log(response)
      alert("post created successfully")
      setuploadModalisOpen(false)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    const detect_mouse_click = (e)=>{
        if (modal_ref.current && !modal_ref.current.contains(e.target)) setuploadModalisOpen(false) 
    }
    document.addEventListener("mousedown", detect_mouse_click)
    return ()=>document.removeEventListener("mousedown", detect_mouse_click)
  }, [])

  return (
    <div
      className="
  fixed inset-0 z-[1]
  bg-black/50 backdrop-blur-sm
  flex items-center justify-center 
  p-4
  overflow-hidden
"
    >
      {/* Your existing modal code goes here */}
      <div ref={modal_ref} className="w-[95%] lg:max-w-[60%] h-[600px] rounded-2xl flex justify-center items-center overflow-hidden relative z-[2]">
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
        relative z-[3]
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
            {["Post", "Story", "Reel"].map((type) => {
              const isactive = modaltype === type.toLowerCase();
              return (
                <div
                  key={type}
                  onClick={() => setmodaltype(type.toLowerCase())}
                  className={`w-[28%] h-[80%] flex justify-center items-center text-sm font-medium rounded-full cursor-pointer ${
                    isactive
                      ? "text-[var(--color-surface)] shadow-md"
                      : "text-[var(--color-muted)] hover:bg-[var(--color-border)]"
                  }`}
                  style={{
                    backgroundColor: isactive
                      ? "var(--color-secondary)"
                      : "transparent",
                  }}
                >
                  {type}
                </div>
              );
            })}
          </div>

          {/* Upload box */}
          <div
            className="
                    w-[95%] h-[220px] bg-[var(--color-bg)] border border-dashed border-[var(--color-border)]
                    flex flex-col items-center justify-center gap-3 
                    mt-6 rounded-xl cursor-pointer  overflow-hidden
                    hover:bg-[var(--color-surface)] transition
                  "
            onClick={() => input_media.current.click()}
          >
            <input
              type="file"
              accept="image/*,video/*"
              ref={input_media}
              onClick={handle_input_media}
              hidden
            />
            {srcurl ? (<div>
              {mediatype==="image" && <img src={srcurl} alt="posted image" className="max-w-full max-h-full"/>}
              {mediatype==="video" && <video src={srcurl} controls className="max-w-full max-h-full"/>}
            </div>) : (
              <>
                <FiPlusSquare className="text-[var(--color-muted)] w-8 h-8" />
                <p className="text-[var(--color-text)] font-medium">
                  Add Media
                </p>
              </>
            )}
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
            value={caption}
            onChange={(e) => setcaption(e.target.value)}
          />

          {/* Button */}
          <button
            className="
                    w-[95%] h-[44px] mt-6 rounded-lg font-semibold 
                    bg-[var(--color-secondary)] text-[var(--color-surface)] 
                    hover:bg-[var(--color-primary)] active:scale-[0.99] transition
                    shadow-[0_6px_16px_rgba(64,93,230,0.35)]
                  "
            onClick={make_upload_request}
          >
            {`Upload ${modaltype.charAt(0).toUpperCase()}${modaltype.slice(1)}`}
          </button>
        </div>

        {/* RIGHT (branding / promo) */}
        <div
          className="
        md:w-1/2 h-full hidden lg:flex flex-col items-center justify-center 
        bg-[var(--color-surface)]/10 backdrop-blur-[1px]
        text-[var(--color-surface)] font-semibold
        relative z-[3]
      "
        ></div>
      </div>
    </div>
  );
}

export default UploadModal;
