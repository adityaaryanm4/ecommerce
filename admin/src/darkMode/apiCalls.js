import { loginStart, loginSuccess, loginFailure } from "./userSlice"
import { publicRequest } from "../requestMethod"

const login = async(dispatch,user) =>{
    console.log(user)
    dispatch(loginStart())
    try {
        const res = (await publicRequest.post("/api/auth/login",user)).data
        console.log(res)
        if(res !== "Invalid ceredentials")
            dispatch(loginSuccess(res))
        else{
            dispatch(loginFailure())
        }    
    } catch (error) {
        dispatch(loginFailure())
    }
}

export {login}