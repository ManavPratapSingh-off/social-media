import React, { useEffect } from "react";
import { getCurrentUser } from "../apicalls/authcalls";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice.js";

function useCurrentUser() {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const fetchUser = async () => {
        const data = await getCurrentUser();
        dispatch(setUserData(data));
      };
      fetchUser();
    } catch (error) {
      console.error(error);
    }
  }, []);
}

export default useCurrentUser;
