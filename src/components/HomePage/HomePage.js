import React, { useContext,useEffect,useState } from 'react'
import { AuthContext } from '../../contexts/auth'
import { getUsers,userData } from '../../api/users';


const HomePage = () => {
  const name = userData()
  const { logout } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading , setLoading] = useState(true);
  const [ loggedUser, setLoggedUser ] = useState(null)

  useEffect(()=>{
    (async ()=>{
      const response = await getUsers();
      const user = await userData();
      setUsers(response.data);
      setLoggedUser(user)
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
      <p>Bem vindo(a), {loggedUser.name}!</p>
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