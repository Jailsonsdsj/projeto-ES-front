import React, { useEffect,useState } from 'react'
import { userData } from '../../api/users';
import { getAllAlloteaments } from '../../api/alloteaments'
import AlloteamentsDashboard from '../../components/Alloteaments/AlloteamentsDashboard'
import LoadingData from '../../components/utils/LoadingData';
import '../../assets/css/style.css'

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
      <div className='container-1'>
        <div className='alert-content'>
          <div><h1>Dashboard</h1></div>
          <p>Olá, {loggedUser.name}!</p>
          {/* 
            1. create componet to show Dashboard data - waiting for business rule
            2. create componet to show the list of alloteaments
            3. show alloteaments details when click
          */}
          <AlloteamentsDashboard alloteaments={alloteaments}/>
        </div>
        <div>
          <img style={{width: '100%'}} src='https://static.wixstatic.com/media/20e028_9f24dce990ec48c4ae60e26255e0f2b0.png/v1/fill/w_940,h_501,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/20e028_9f24dce990ec48c4ae60e26255e0f2b0.png' alt='lote'/>
        </div>
      </div>
      )}
    </>
  )
}

export default HomePage