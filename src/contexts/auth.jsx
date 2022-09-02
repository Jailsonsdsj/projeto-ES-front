import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { apiAutentication,createSession,getUser } from "../api/users";
import axios from "axios";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) =>{
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    //to ensure useEffect runs after page load
    const [loading, setLoading ] = useState(true)
    
    useEffect(()=>{
        const recoveredUser = localStorage.getItem('user');
        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
        }
        setLoading(false)

    }, [])

    const login = async(email, password) =>{

        //calls api session
        const response = await createSession(email,password)
        
        console.log("login", response.data);

        const loggedUser = response.data;
        // const token = response.data.token;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        // localStorage.setItem("token", token);

        //sets default headres in requests
        // apiAutentication.defaults.headers.Authorization = `Bearer ${token}`;

        setUser(loggedUser);
        //if the autentication is done, then redirect the use to homepage
        navigate("/");
        
    }

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user")
        // localStorage.removeItem("token")
        apiAutentication.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/login");
    };

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, loading, logout, login}}>
            {children}
        </AuthContext.Provider>
    )
}