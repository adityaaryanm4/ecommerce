import { loginStart, loginSuccess, loginFailure } from "./userSlice"
import axios from "axios"

const login = async(dispatch,user) =>{
    dispatch(loginStart())
    try {
        const res = (await axios.post("/api/auth/login",user)).data
        dispatch(loginSuccess(res))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export {login}