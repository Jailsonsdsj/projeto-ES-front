
import {apiAutentication, API_BACKEND_BASEURL} from ".";

export const getAllAlloteaments = async(id)=> {
    try{
        const response = await apiAutentication.get(`/user/get_allotments/${id}`) 
        return response.data.data
     
    }catch(err){
        
        return new Error(err)
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
        return new Error(err)
    }
}


export const addAlloteament = async({name,cep,address,img_url}) =>{
    try{
        const user = JSON.parse(localStorage.getItem("userData"));
        const body ={
            "name": name,
            "cep": cep,
            "address": address,
            "img_url": "https://i.ibb.co/JKLpGDL/image.png",
            "users_access":[user.user_id]
        }
        const response = apiAutentication.post("/allotment/register",body)
        return response
        

    }catch(err){
        return new Error(err)
    }
}


//request error
export const deleteAlloteament = async({id}) =>{
    try{
        return apiAutentication.delete(`lot/delete/${id}`)
    }catch(err){
        return new Error(err)
    }

}