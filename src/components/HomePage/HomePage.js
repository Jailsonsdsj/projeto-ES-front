import React, { useContext,useEffect,useState } from 'react'
import { AuthContext } from '../../contexts/auth'
import { getUsers } from '../../api/users';

const HomePage = () => {
  const { logout } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    (async ()=>{
      const response = await getUsers();
      setUsers(response.data);
      setLoading(false);
    })();
  }, []);

  const handleLogout = () =>{
    logout();
  }

  if(loading){
    return (
    <>
      <div className="loading">Carregando dados...</div>
      <button onClick={handleLogout}> Logout </button>
    </>
    );
  }

  return (
    <>
      <div><h1>HomePage</h1></div>
        {users ? 
        <ul>
          <h3>Usuários ativos:</h3>
          {users.data.map((user) => (
              <li key={user.cpf}>
                {user.cpf} - {user.email}
              </li>
            ))}
        </ul> : <p>Sem usuários cadastrados</p>}
      <button onClick={handleLogout}> Logout </button>
    </>
  )
}

export default HomePage