import React from 'react'
import useAuth from '../../hooks/useAuth'
import {  Navigate } from 'react-router-dom'

const ProtectRoute = ({children}) => {
    const {token}  = useAuth()
    return <>{token ? children : <Navigate to="/login" />}</>;
}

export default ProtectRoute
