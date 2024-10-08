import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        errorDefault(state) {
            state.error = false
        },
        loginStart(state) {
            state.isFetching = true
        },
        loginSuccess(state, action) {
            state.isFetching = false
            state.currentUser = action.payload
            state.error = false
        },
        loginFailure(state, action) {
            state.isFetching = false
            state.error = true
        },
        logout(state) {
            state.currentUser = null
        }
    }
})

export const { errorDefault, loginStart, loginSuccess, loginFailure, logout } = userSlice.actions
export default userSlice.reducer