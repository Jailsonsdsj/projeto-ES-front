import React, { useState,useEffect } from 'react'
import { getUsers,userData } from '../../api/users';
import './client-style.css'
import '../../assets/css/style.css'
import AddClients from '../../components/AddClients';
import AllClients from '../../components/AllClients';
import "../../assets/css/style.css"
import {SearchOutlined} from '@ant-design/icons';

export const Clients = () => {
  const [users, setUsers] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    (async ()=>{
      const response = await getUsers();
      setUsers(response.data);
      setLoading(false);
    })();
  }, []);


  return (
    loading ? 
    (<div className="loading">Carregando dados...</div> 
    ):
    <main className='container-1'>
      {/* <div style={{displey:'flex', flexDirection: 'row'}}>
      <div style={{displey:'flex', flexDirection: 'row'}}>
        <h1>Clientes</h1>
        <AddClients/>
      </div>
      </div> */}
      
      
      {/* <AllClients/> */}
      <div className="btn-position">
        <h1>Clientes</h1>
        <div className="search-addClients-position">
          <input className='search-input' type="text" placeholder='Buscar'></input>
          <AddClients/>
          {/* <SearchOutlined/> */}
        </div>
        
      </div>
      
    <AllClients/>
    </main>
  )
}
