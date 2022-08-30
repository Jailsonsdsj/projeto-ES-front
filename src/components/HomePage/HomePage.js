import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

const HomePage = () => {
  const { authenticated,logout } = useContext(AuthContext);


  const handleLogout = () =>{
    logout();
  }

  return (
    <>
      <div>HomePage</div>
      <p>{String(authenticated)}</p>
      <button onClick={handleLogout}> Logout </button>
    </>
  )
}

export default HomePage