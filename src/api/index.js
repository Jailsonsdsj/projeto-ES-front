import axios from "axios";



export const API_BACKEND_BASEURL = 'https://klote.fly.dev';

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


