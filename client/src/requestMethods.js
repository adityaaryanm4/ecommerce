import axios from "axios";

// let accessToken
// const localStorageObject = JSON.parse(localStorage.getItem("persist:root"))
// const currentUser = JSON.parse(localStorageObject.user).currentUser

// if (currentUser) {
//     accessToken = currentUser.token
// }


const BASE_URL = "http://localhost:5000/"


const publicRequest = axios.create({
    baseURL: BASE_URL,
})
const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token
// const token = JSON.parse(localStorage.getItem("persist:root"))

const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${token}`
    }
})

export { publicRequest, userRequest }