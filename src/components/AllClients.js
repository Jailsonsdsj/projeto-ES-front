import React, { useState,useEffect } from 'react'
import { getCustomers } from '../api/user'
import { NavLink } from "react-router-dom";


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
                    <NavLink
                        to={`/clients/DetailsClient/${value.id}`}
                        
                    >
                        <p>{value.name}</p>
                    </NavLink>
                    <ul>
                        <li>CPF: {value.cpf}</li>
                        <li>ID: {value.id}</li>
                    </ul>
                    <div>                  
                        {Object.entries(value.lots).map(([key, value]) =>(
                            <p key={key}>{value.allotment_name} / {value.lot_number} / {value.block}</p>
                        ))}
                    </div>
                </div>
           
        ))
    ) : ( <>Carregando dados...</> )
  )
}

export default AllClients