import { API_BACKEND_ENDPOINT } from ".";
import axios from "axios";

export const apiAutentication = axios.create({
    baseURL: API_BACKEND_ENDPOINT,
});

export const createSession = async(email,password) =>{
    try{
        const headers = {
            "email": email, 
            "password": password
        }
        return apiAutentication.post('/api/user/login', headers)

    }catch(err){
        return err;

    }
    
}
export const getUser = async() =>{
    try{
        return apiAutentication.get('/get_user/5')

    }catch(err){
        return err;

    }
    
}