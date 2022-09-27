import React, { useContext,useEffect,useState } from 'react'
import { AuthContext } from '../../contexts/auth'
import { getUsers,userData } from '../../api/users';
import LoadingData from '../../components/utils/LoadingData';

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


  
 

  return (
    <>
    {loading ? (
      <LoadingData/>
      ):( 
      <div>
        <p>Olá, {loggedUser.name}!</p>
        <div><h1>Dashboard</h1></div>
        <p>Estamos preparando o seu K-lote!</p>
        <img src="https://c.tenor.com/7X9KjkIfDQwAAAAM/michael-scott.gif" alt="" srcset="" />
      </div>
      )}
    </>
  )
}

export default HomePage