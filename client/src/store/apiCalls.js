import { loginStart, loginSuccess, loginFailure } from "./userSlice"
import { publicRequest, userRequest } from "../requestMethods"

const login = async(dispatch,user) =>{
    dispatch(loginStart())
    try {
        const res = (await publicRequest.post("/api/auth/login",user)).data
        if(res !== "Invalid ceredentials")
            dispatch(loginSuccess(res))
        else{
            dispatch(loginFailure())
        }    
    } catch (error) {
        dispatch(loginFailure())
    }
}

const addToCartDB = async ()=>{

}

export {login,addToCartDB}