import React, { useState,useEffect } from 'react'
import { getUsers,userData } from '../../api/users';
import './client-style.css'

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


  if(loading){
    return (
    <>
      <div className="loading">Carregando dados...</div>

    </>
    );
  }

  return (
    <>
    <h1>Usuários ativos ou passivos?</h1>
    {users ? 
      <>
        {users.data.map((user) => (
          <div className='active-users-intire-box'>
          <div className='active-users-credentials-box'>
            <p>{user.name}</p>
            <p>CPF: {user.cpf}</p>
            <p>ID: {user.email}</p>
          </div>
          </div>
          ))}
     </> : <p>Sem usuários cadastrados</p>}
    </>
  )
}
