import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const PrivateRoutes = ({ children }) => {

    const user = useSelector(state => state.user.currentUser)

    return !user ? <Navigate to="/login" /> : children

}

export default PrivateRoutes