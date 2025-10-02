import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDarkTheme } from "../redux/displaySlice";

const useCurrentTheme = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const isDarkTheme = localStorage.getItem("isDarkTheme")
        dispatch(setDarkTheme(isDarkTheme))
    }, [])
}