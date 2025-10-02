import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
    name : 'display',
    initialState : {DarkTheme : false},
    reducers : {
        setDarkTheme : (state, action) => {
            state.DarkTheme = action.payload
        }
    }
})

export const {setDarkTheme} = displaySlice.actions
export default displaySlice.reducer