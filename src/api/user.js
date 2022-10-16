
import { apiAutentication, API_BACKEND_BASEURL } from ".";


export const createGuest = async({ fullName,email,cpf,cel }) => {
    try{
        const body ={
            "email":email,
            "name": fullName,
            "cpf":cpf,
            "phone":cel
        }
    
        const response = await apiAutentication.post(`${API_BACKEND_BASEURL}/user/register_guest`, body)
        return response;

    }catch(err){
        console.error(`createGuest error: ${err}` )
        throw new Error(err)
    }

}
