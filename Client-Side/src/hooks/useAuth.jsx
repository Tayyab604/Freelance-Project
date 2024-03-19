import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'

const useAuth = () => {
    const { token,user,login,logout ,username,userId,role } =useContext(AuthContext)
  return {
    token,
    user,
    login,
    logout,
    username,
    userId,
    role,
  }
}

export default useAuth
