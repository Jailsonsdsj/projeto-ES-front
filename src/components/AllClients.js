import React, { useState,useEffect } from 'react'
import { getCustomers } from '../api/user'
import "../assets/css/style.css"
import { NavLink } from "react-router-dom";


const AllClients = () => {
    const [ clientList, setClientList ] = useState()

    useEffect(()=>{
        (async ()=>{
            const user = JSON.parse(localStorage.getItem("userData"));
            const response = await getCustomers(user.user_id);  
            setClientList(response.data.data);

        })();
      }, []);

  return (
    clientList ? (

        Object.entries(clientList).map(
            ([key, value]) =>(
               
            <div className='active-users-intire-box' key={key}>
                <div className="active-users-credentials-box" >
                    <div className='users-lote-column'>
                    <NavLink className='active-users-name' to={`/clients/DetailsClient/${value.id}`}>
                        <p>{value.name}</p>
                    </NavLink>
                    <div style={{backgroundColor: 'white'}} className='lote-association'>
                          {Object.entries(value.lots).map(([key, value]) =>(
                            <p key={key}>{value.allotment_name} / {value.lot_number} / {value.block}</p>
                        ))}
                    </div>
                    </div>
                    <p><b style={{color: '#AEAEB2', fontWeight: 'normal'}}>CPF</b> {value.cpf}</p>
                    <p><b style={{color: '#AEAEB2', fontWeight: 'normal'}}>ID</b> {value.id}</p>
                    
                    
                </div>
            </div>
            
        ))
    ) : ( <>Carregando dados...</> )
  )
}

export default AllClients