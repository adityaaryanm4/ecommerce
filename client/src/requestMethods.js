import axios from "axios";

let token
const localStorageObject = JSON.parse(localStorage.getItem("persist:root")) 
if (localStorageObject) { //in very beginning, when the page has not loaded yet, local storage is empty
    const currentUser = JSON.parse(localStorageObject.user).currentUser
    if (currentUser) { //in very beginning, currentUser is null. so token is undefined
        token = currentUser.token
    }
}

const BASE_URL = "https://karashopserver.herokuapp.com/"


const publicRequest = axios.create({
    baseURL: BASE_URL,
})

const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${token}`
    }
})

export { publicRequest, userRequest }