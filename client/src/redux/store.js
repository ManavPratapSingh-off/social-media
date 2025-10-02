import {configureStore} from '@reduxjs/toolkit';
import userSlice from "./userSlice.js"
import displaySlice from "./displaySlice.js"

const store = configureStore({
    reducer : {
        user : userSlice,
        display : displaySlice
    }
})

export default store