import React from 'react'
import useAuth from '../../hooks/useAuth'
import {  Navigate } from 'react-router-dom'

const AlreadySigninProtectRoute = ({children}) => {
    const { token } = useAuth();
    return <>{!token ? children : <Navigate to="/dashboard" />}</>;
}

export default AlreadySigninProtectRoute
