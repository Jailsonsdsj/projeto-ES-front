import React, { useState, useEffect, createContext } from "react";
import { useNavigate} from "react-router-dom";
import { createSession } from "../api";
import { apiAutentication } from "../api";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) =>{
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    //to ensure useEffect runs after page load
    const [loading, setLoading ] = useState(true)

    const [ userData, setUserData ] = useState(null)

    useEffect(()=>{
        const recoveredUser = localStorage.getItem("user");
        const token = localStorage.getItem("token")
        const data = localStorage.getItem("userData")
      

        if(recoveredUser && token && data){
            setUser(JSON.parse(recoveredUser))
            setUserData(JSON.parse(data))
            //sets default headres in requests
            apiAutentication.defaults.headers.Authorization = `Bearer ${token}`;
        }
        setLoading(false)

    },[])

    const login = async(email, password) =>{
        try{
            const response = await createSession(email,password)
            const loggedUser = response.data;
            const token = response.data.token;
            const user = response.data.user_data;
       

            localStorage.setItem("user", JSON.stringify(loggedUser));
            localStorage.setItem("token", token);
            localStorage.setItem("userData", JSON.stringify(user));
            apiAutentication.defaults.headers.Authorization = `Bearer ${token}`;

           
            setUserData(user)
            setUser(loggedUser);
            //if the autentication is done, then redirect the use to homepage
            navigate("/");

        }catch(err){
            console.log(err)
            return new Error(err)
           
        }
    }

  
    
   
  

    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        localStorage.removeItem("userData")
        apiAutentication.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/login");
    };

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, userData, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}