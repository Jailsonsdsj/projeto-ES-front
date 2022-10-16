import React, { useState,useEffect } from 'react'
import { getCustomers } from '../api/user'


const AllClients = () => {
    const [ clientList, setClientList ] = useState()

    useEffect(()=>{
        (async ()=>{
            const response = await getCustomers();  
            setClientList(response.data.data);

        })();
      }, []);


  return (
    clientList ? (

        Object.entries(clientList).map(
            ([key, value]) =>(
               
            <div className="client-container" key={key}>
                <p>{value.name}</p>
                <ul>
                    <li>CPF: {value.cpf}</li>
                    <li>ID: {value.id}</li>
                    <li>Lote Associado: {value.address}</li>
                </ul>
            </div>
        ))
    
    ) : ( <>Carregando dados...</> )
    
  )
}

export default AllClients