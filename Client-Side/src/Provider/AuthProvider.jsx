import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [user, setuser] = useState(null)
    const [token, settoken] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(["jwt"])
    
   
    const login = (user) => {
        if (user.token) {
            settoken(user.token)
            setuser(user)
            const {exp} = jwtDecode(user.token)

            setCookie('jwt',user.token,{
                path: "/",
                maxAge : exp,
                sameSite : true
            }) 
            return 
        }
        logout()
    }
    const logout = () => {
        settoken(null)
        setuser(null)
        removeCookie('jwt',{path:  "/" })
    }
    useEffect(() => {
        if (cookies?.jwt) {
            settoken(cookies.jwt);
          const user = jwtDecode(cookies.jwt);
          setuser(user);
        }
      }, [cookies]);
    
      
    return (
        <AuthContext.Provider value={{
            user,
            token,
            user,
            login,
            logout,
           
        }} >
            {children}
        </AuthContext.Provider>
    )
}