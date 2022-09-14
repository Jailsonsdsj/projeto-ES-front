import React, { useState,useEffect } from 'react'
import { getUsers,userData } from '../../api/users';


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
    <h1>Usuários ativos:</h1>
    {users ? 
      <ul>
        {users.data.map((user) => (
            <li key={user.cpf}>
              {user.cpf} - {user.email}
            </li>
          ))}
      </ul> : <p>Sem usuários cadastrados</p>}
      </>
  )
}
