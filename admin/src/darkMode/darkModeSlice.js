import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name: "mode",
    initialState: {
        darkMode: false
    },
    reducers: {
        darkModeOn(state) {
            state.darkMode = true
        },
        darkModeOff(state) {
            state.darkMode = false
        },
        darkModeToggle(state) {
            state.darkMode = !state.darkMode
        },

    }
})

export const { darkModeOn, darkModeOff, darkModeToggle } = darkModeSlice.actions
export default darkModeSlice.reducer