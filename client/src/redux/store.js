import {configureStore} from '@reduxjs/toolkit';
import userSlice from "./userSlice.js"
import displaySlice from "./displaySlice.js"
import postSlice from "./postSlice.js"

const store = configureStore({
    reducer : {
        user : userSlice,
        display : displaySlice,
        post : postSlice
    }
})

export default store