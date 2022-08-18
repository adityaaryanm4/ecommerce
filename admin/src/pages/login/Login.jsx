import { useState } from "react"
import { login } from "../../darkMode/apiCalls"
import { useDispatch } from "react-redux"
import "./login.scss"

const Login = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
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
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login