import { API_BACKEND_BASEURL } from ".";
import axios from "axios";

export const apiAutentication = axios.create({
    baseURL: API_BACKEND_BASEURL,
});

export const createSession = async(email,password) =>{
    try{ 
        const headers = {
            auth: {
              "username": email,
              "password": password
            }
          };
        return apiAutentication.post('/user/login', {}, headers)

    }catch(err){
        return err;

    }
    
}

export const getUsers = async() =>{
    try{
        return apiAutentication.get('/user/get_users')

    }catch(err){
        return err;

    }
    
}

export const sendResetPassword = async(email) => {
    try{
        const response = await fetch(`${API_BACKEND_BASEURL}/user/send_email`, {
            method: "POST",
            body: JSON.stringify({
                "email": email
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
               
        return response.status;

    }catch(err){
        return err;
    }
   
}