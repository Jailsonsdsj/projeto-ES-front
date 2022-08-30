import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

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

    const login = (email, password) =>{
        console.log("login auth", { email, password })

        //create API section (simulation)
        const loggedUser = {
            id: "123",
            email
        }

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if(password === "123"){
            //if the password is correct, then redirect the use to homepage
            setUser({ id: "123", email })
            navigate("/");
        }   
    }

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user")
        setUser(null);
        navigate("/login");
    };

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, loading, logout, login}}>
            {children}
        </AuthContext.Provider>
    )
}