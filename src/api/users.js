import { apiAutentication, API_BACKEND_BASEURL } from ".";
import jwt from 'jwt-decode';


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












