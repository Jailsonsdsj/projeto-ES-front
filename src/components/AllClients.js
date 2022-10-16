import React, { useState,useEffect } from 'react'
import { getCustomers } from '../api/user'
import "../assets/css/style.css"

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
               
            <div className='active-users-intire-box'>
                <div className="active-users-credentials-box" key={key}>
                    <div className='users-lote-column'>
                    <p className='active-users-name'>{value.name}</p>
                    <div style={{backgroundColor: 'white'}} className='lote-association'>
                        <p>Lote Associado: {value.address}</p>
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