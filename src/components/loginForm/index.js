import React, { useState }from 'react';
import LoginForm from './loginForm';


const Login = () =>{
    const [user, setUser] = useState({name:"",email:""});
    const [error, setError] = useState("");

    //temporarily credencials
    const adminUser = {
        name: "Júnior",
        email: "junior@klot.com",
        password: "123"
    }

    const login = (details) => {
        //this autentication should be replaced by an API request
        if (details.email === adminUser.email && details.password === adminUser.password){
            setUser({
              name: details.email,
              email: details.email,

            });
            
          }else{
            setError("Credenciais inválidas")
          }
    }
     //temporarily close conection
    const logout = () =>{
        setUser({
            name: "",
            email: ""
        });
        setError("")

    }

    return(
        <div className="App">
            {(user.email !== "") ? (
                <div className="wellcome">
                    <h2>Wellcome, <span>{user.name}</span></h2>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <LoginForm login={login} error={error}/>
            )}
        </div>
    );
} 

export default Login;