import React, { useEffect,useState } from 'react'
import { userData } from '../../api/users';
import { getAllAlloteaments } from '../../api/alloteaments';
import AlloteamentsDashboard from '../../components/Alloteaments/AlloteamentsDashboard'
import LoadingData from '../../components/utils/LoadingData';
import './home-index-style.css'

const HomePage = () => {
  const [ loading , setLoading] = useState(true);
  const [ loggedUser, setLoggedUser ] = useState(null)
  const [ alloteaments, setAlloteaments ] = useState(null)
  useEffect(()=>{
    (async ()=>{
      const user = await userData();
      setLoggedUser(user)
     
      const alloteaments = await getAllAlloteaments(user.user_id);
      setAlloteaments(alloteaments);

      setLoading(false);
    })();
  }, []);


  return (
    <>
    {loading ? (
      <LoadingData/>
      ):( 
      <div className='container-warning'>
        <div className='alert-content'>
          <div><h1>Dashboard</h1></div>
          <p>Olá, {loggedUser.name}!</p>
          <p>Estamos preparando o seu K-lote!</p>
          {/* 
            1. create componet to show Dashboard data - waiting for business rule
            2. create componet to show the list of alloteaments
            3. show alloteaments details when click
          */}
          <AlloteamentsDashboard alloteaments={alloteaments}/>
        </div>
        
      </div>
      )}
    </>
  )
}

export default HomePage