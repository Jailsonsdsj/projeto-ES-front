
import {apiAutentication, API_BACKEND_BASEURL} from ".";

export const getAllAlloteaments = async(id)=> {
    try{
        const response = await apiAutentication.get(`/user/get_allotments/${id}`) 
        return response.data.data
     
    }catch(err){
        console.error(`getAllAlloteaments error: ${err}`)
        return err;
    }
    
}

export const detailsAllotments = async(allotment_id,number)=>{
    
    try{
        const body ={
            "allotment_id": allotment_id,
            "number": number
        }
        const response = await apiAutentication.post(`${API_BACKEND_BASEURL}/lot/get_lot`, body)
        return response.data.data
     
    }catch(err){
        console.error(`detailsAllotments error: ${err}`)
        return err;
    }
}
