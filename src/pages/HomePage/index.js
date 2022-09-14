import React, { useContext,useEffect,useState } from 'react'
import { AuthContext } from '../../contexts/auth'
import { getUsers,userData } from '../../api/users';


const HomePage = () => {
  const [loading , setLoading] = useState(true);
  const [ loggedUser, setLoggedUser ] = useState(null)

  useEffect(()=>{
    (async ()=>{
      const user = await userData();
      setLoggedUser(user)
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
      <p>Olá, {loggedUser.name}!</p>
      <div><h1>Dashboard</h1></div>
      <p>Estamos preparando o seu K-lote!</p>
      <img src="https://c.tenor.com/7X9KjkIfDQwAAAAM/michael-scott.gif" alt="" srcset="" />
    </>
  )
}

export default HomePage