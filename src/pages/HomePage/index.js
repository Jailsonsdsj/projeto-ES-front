import React, { useContext,useEffect,useState } from 'react'
import { AuthContext } from '../../contexts/auth'
import { getUsers,userData, getAllAllotments } from '../../api/users';
import LoadingData from '../../components/utils/LoadingData';

const HomePage = () => {
  const [ loading , setLoading] = useState(true);
  const [ loggedUser, setLoggedUser ] = useState(null)
  const [ alloteaments, setAlloteaments ] = useState(null)
  useEffect(()=>{
    (async ()=>{
      const user = await userData();
      setLoggedUser(user)

      // const alloteaments = await getAllAllotments(user.user_id);
      // setAlloteaments(alloteaments);

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
        {/* 
        1. create componet to show Dashboard data
        2. create componet to show the list of alloteaments
        3. show alloteaments details
         */}
      </div>
      )}
    </>
  )
}

export default HomePage