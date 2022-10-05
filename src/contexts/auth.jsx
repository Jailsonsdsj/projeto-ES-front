import React, { useState, useEffect, createContext } from "react";
import { useNavigate} from "react-router-dom";
import { createSession } from "../api";
import { apiAutentication } from "../api";
// import axios from "axios";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) =>{
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    //to ensure useEffect runs after page load
    const [loading, setLoading ] = useState(true)
    
    useEffect(()=>{
        const recoveredUser = localStorage.getItem("user");
        const token = localStorage.getItem("token")
        
        if(recoveredUser && token){
            setUser(JSON.parse(recoveredUser))
            //sets default headres in requests
            apiAutentication.defaults.headers.Authorization = `Bearer ${token}`;
        }
        setLoading(false)

    },[])

    const login = async(email, password) =>{

        const response = await createSession(email,password)
        const loggedUser = response.data;
        const token = response.data.token;
        
        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);
        apiAutentication.defaults.headers.Authorization = `Bearer ${token}`;

        setUser(loggedUser);
        //if the autentication is done, then redirect the use to homepage
        navigate("/");
        
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
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}