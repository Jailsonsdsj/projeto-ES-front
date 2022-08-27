import React, { useState } from 'react'


function LoginForm({ login,error }){
    const [details, setDetails] = useState({email:"", password:""})

    const submitHandle = (e) =>{
        e.preventDefault();
        login(details);
    }

   

  return (
    <form onSubmit={submitHandle}>
        <h2>Login</h2>
       
        <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
        </div>
        {(error !== "") ? ( <div className="error">{error}</div>) : ""}
        <input type="submit" value="Entrar" />
    </form>
  )
}

export default LoginForm