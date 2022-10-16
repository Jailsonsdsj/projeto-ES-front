
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

export const getAllGuests = async() =>{
    try{
        const response = await apiAutentication.get('user/get_clients')
        return response;

    }catch(err){
        console.error(`getAllGuests error: ${err}` )
        throw new Error(err)
    }
}



//erro
export const addClient = async({ name,email,cpf,address,lot,alloteaments,admin_id  }) =>{
    try{
        
        const allotment = JSON.parse(alloteaments)
        const body={
            "email":email,
            "name": name,
            "cpf":cpf,
            "phone1":"00000000",
            "admin_id":admin_id ,
            "address":address,
            "lots":[{
                "allotment_id":allotment.id,
                "number": parseInt(lot)
            }]
        }
    const response = await apiAutentication.post(`${API_BACKEND_BASEURL}/customer/register`, body)
    return response;  


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


