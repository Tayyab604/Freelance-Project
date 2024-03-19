import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [user, setuser] = useState(null)
    const [token, settoken] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(["jwt"])
    const [Idcookies, IdsetCookie, IdremoveCookie] = useCookies(["UserId"])
    const [username, setusername] = useState("")
    const [userId, setuserId] = useState("")
    const [role, setrole] = useState("")
    
   
    const login = (username,email,userId,tokenStr,role) => {
        if (tokenStr) {
            settoken(tokenStr)
            setusername(username)
            setuserId(userId)
            setrole(role)
            const {exp} = jwtDecode(tokenStr,username,userId,role)
            setCookie('jwt',tokenStr,{
                path: "/",
                maxAge : exp,
                sameSite : true
            })
            setCookie('username',username,{
                path: "/",
                maxAge : exp,
                sameSite : true
            })
            setCookie('UserId',userId,{
                path: "/",
                maxAge : exp,
                sameSite : true
            })
            setCookie('role',role,{
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
        setusername(null)
        setuserId(null)
        setrole(null)
        removeCookie('jwt',{path:  "/" })
        removeCookie('username',{path:  "/" })
        removeCookie('UserId',{path:  "/" })
        removeCookie('role',{path:  "/" })
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
            username,
            userId,
            role,
            login,
            logout,
           
        }} >
            {children}
        </AuthContext.Provider>
    )
}