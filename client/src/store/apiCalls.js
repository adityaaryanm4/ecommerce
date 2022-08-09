import { loginStart, loginSuccess, loginFailure } from "./userSlice"
import { userRequest } from "../requestMethods"

const login = async(dispatch,user) =>{
    dispatch(loginStart())
    try {
        const res = (await userRequest.post("/api/auth/login",user)).data
        if(res !== "Invalid ceredentials")
            dispatch(loginSuccess(res))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export {login}