import { loginStart, loginSuccess, loginFailure } from "./userSlice"
import { publicRequest } from "../requestMethod"

const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = (await publicRequest.post("/api/auth/login", user)).data
        if (res !== "Invalid ceredentials") {
            dispatch(loginSuccess(res))
            window.location.href = "/"
        }
        else {
            dispatch(loginFailure())
        }
    } catch (error) {
        dispatch(loginFailure())
    }
}

export { login }