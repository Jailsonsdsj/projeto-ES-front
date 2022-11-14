import React, { useState } from 'react'
import { sendResetPassword } from '../../api/users';
import './reset-password.css';
import { Link } from "react-router-dom";


export const ResetPassword = () => {
    const [ statusResponse, setStatusResponse ] = useState('')
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const { email } = e.target
        const { value } = email
        if(value.length){
           const response = await sendResetPassword(value)
        
           response === 200 ? 
           setStatusResponse("Senha temporária enviada. Verifique o e-mail cadastrado para continuar.") :
           setStatusResponse("O endereço de e-mail que você inseriu não está vinculado a uma conta do K-Lote. Entre em contato com o administrador do site.")
        }   
    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit} className='reset-form'>
            <div className='title-form'>
                <h2 >Recuperar sua senha</h2>
                <p>Vamos enviar uma senha temporária através do e-mail cadastrado.</p>
            </div>
            
            <div className="form-group">
                <label htmlFor="email" className='input-label'>Digite seu e-mail: </label>
                <input 
                    className='input-text'
                    type="email"
                    id="email"
                    name="email"
                    placeholder='seuemail@email.com' 
                />
            </div>
            <div className='input-class'>
                <Link to="/login" className='input-reset'> Cancelar </Link>
                <input className='input-btn' type="submit" value="Enviar" />
            </div>

            {statusResponse ? <p>{statusResponse}</p>: <></>}
        </form>
    </div>
    
  );
}

