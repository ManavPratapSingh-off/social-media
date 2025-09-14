import React from "react";
import { useSelector } from "react-redux";

function CurrentUser() {
  let userData = useSelector(state => state.user)
    userData = userData.userData

  return (
    <div className="w-full h-15 grid grid-cols-11 gap-0.5 border-b">
      <div className="h-10 w-10 border rounded-full border-[var(--color-border)] col-span-2">
        <img src="" alt="dp" />
      </div>
      <div className="col-span-6 text-[var(--color-muted)] text-sm">
        <span className="font-semibold text-[var(--color-text)]">
          {userData.user.user_name}
        </span>
        <br />
        {userData.user.name}
      </div>
      <button className="col-span-3 text-[var(--color-secondary)] hover:text-[var(--color-primary-light)] bg-transparent border-none shadow-none">
        Log out
      </button>
    </div>
  );
}

export default CurrentUser;
