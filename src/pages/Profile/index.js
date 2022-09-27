import React, { useState,useEffect } from 'react'
import LoadingData from '../../components/utils/LoadingData';
import ProfileData from '../../components/ProfileData';
import { userData } from '../../api/users';
export const Profile = () => {
  const [loading , setLoading] = useState(true);
  const [ data, setData ] = useState()

  //uncoment when request data
  // const [ guests, setGests] = useState()
  
  useEffect(()=>{
    (async()=>{
      const dataResponse = await userData();
      setData(dataResponse);
      setLoading(false);
      
    })()
  },[])


  return (
    <>
    {loading ? (
      <LoadingData/>
      ):( 
      <main>
        <h1>Conta</h1>
        <ProfileData data={data}/>
        {/* Insert change passowrd funcion here */}
        <button>Alterar Senha</button>
        <div className="guests-container">
          {/* insert guests component */}
        </div>
      </main>
      )}
    </>
  )
}

