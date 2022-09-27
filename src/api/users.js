import { API_BACKEND_BASEURL } from ".";
import axios from "axios";
import jwt from 'jwt-decode';


export const apiAutentication = axios.create({
    baseURL: API_BACKEND_BASEURL,
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

 //this is will force to update the token
export const axiosPrivate = axios.create({
    baseURL: API_BACKEND_BASEURL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
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
        console.error(err)
        return err;
    }
}

export const getUsers = async() =>{
    try{
        return apiAutentication.get('/user/get_users')

    }catch(err){
        console.error(err)
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
        console.error(err)
        return err;
    }
}

export const userData = async()=>{
    const response = await getUsers();
    const { data } = response;
    const tokenUser = jwt(localStorage.getItem("token"))
    const result = data.data.filter(item => tokenUser.user_data.user_id === item.user_id)
    return result[0];
  }


 

export const getAllAllotments = async(id)=> {
    try{
        return await apiAutentication.get(`/user/get_allotments/${id}`)
     
    }catch(err){
        console.error(`getAllAllotments error: ${err}`)
        return err;
    }
    
}


