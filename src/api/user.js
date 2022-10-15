
import { apiAutentication, API_BACKEND_BASEURL } from ".";

//erro
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



//erro
export const addClient = async({ name,email,cpf,address,lot,alloteaments }) =>{
    try{
        
        const allotment = JSON.parse(alloteaments)
       
        const body={
            "email":email,
            "name": name,
            "cpf":cpf,
            "address":address,
            "lots":[{
                "allotment_id":allotment.id,
                "number": parseInt(lot)
            }]
        }
        console.log(body)
    const response = await apiAutentication.post(`${API_BACKEND_BASEURL}/register_guest`, body)
    console.log(response)
    // return response;  


    }catch(err){
        console.error(`addClient error: ${err}` )
        throw new Error(err)
    }
}

export const getCustomers = async() =>{
    try{
        return apiAutentication.get('customer/get_customers')

    }catch(err){
        console.error(err)
        return err;
    }
}


