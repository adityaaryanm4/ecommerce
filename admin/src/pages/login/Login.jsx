import { useState, useEffect } from "react"
import { login } from "../../darkMode/apiCalls"
import { useDispatch, useSelector } from "react-redux"
import "./login.scss"
import { errorDefault } from "../../darkMode/userSlice"

const Login = () => {

    const { isFetching, error } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    //to set "error" to "false" on refresh/reload
    useEffect(() => {
        dispatch(errorDefault())
    }, [dispatch])

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        login(dispatch, user)
    }
    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <input name="email" type="email" placeholder="Email" value={user.email} onChange={handleChange} />
                <input name="password" type="password" placeholder="Password" value={user.password} onChange={handleChange} />
                <button type="submit">{isFetching ? "Logging In..." : "Log In"}</button>
                {error && <div style={{ color: "red" }}> Something went wrong...</div>}
            </form>
        </div>
    )
}

export default Login