
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
        return new Error(err)
    }

}

export const getAllGuests = async() =>{
    try{
        const response = await apiAutentication.get('user/get_clients')
        return response;

    }catch(err){
        return new Error(err)
    }
}




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
        return new Error(err)
    }
}

export const getCustomers = async(id) =>{
    try{
        return apiAutentication.get(`customer/get_customers/${id}`)

    }catch(err){
        return new Error(err)
    }
}


export const getCustomersDetails = async(id) =>{
 
    try{
        return apiAutentication.get(`customer/get_customer/${id}`)
        
    }catch(err){
        return new Error(err)
        
    }
}


export const deleteCustomer = async(id) =>{
    try{
        return apiAutentication.delete(`customer/delete/${id}`)
       

    }catch(err){
        return new Error(err)
    }
}

export const deleteCustomerLot = async(userId,allotment_id,customer_id,lot_number) =>{
    try{
        const body ={
            "allotment_id": allotment_id,
            "lot_number": lot_number,
            "customer_id": customer_id
        }
        return apiAutentication.delete(`customer/purcharse/delete/${userId}`)
        

    }catch(err){
        return new Error(err)
    }
}




export const ticketGenerator = async(clientName) =>{
    try{
        return apiAutentication.get(`pdf/${clientName}`)
        
    }catch(err){
        return new Error(err)
        
    }
}