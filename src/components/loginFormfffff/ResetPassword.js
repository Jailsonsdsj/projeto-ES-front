import React, { useState } from 'react'
import { sendResetPassword } from '../../api/users';

const ResetPassword = () => {
    const [ statusResponse, setStatusResponse ] = useState('')
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const { email } = e.target
        const { value } = email
        if(value.length){
           const response = await sendResetPassword(value)
        
           response === 200 ? 
           setStatusResponse("Enviamos um link de recuperação para o seu e-mail. Não esqueça de verificar a caixa de spam.") :
            setStatusResponse("O endereço de e-mail que você inseriu não está vinculado a uma conta do K-Lote. Entre em contato com o administrador do site.")
        }   
    }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Recuperar Senha</h2>
        <div className="form-group">
            <label htmlFor="email">Digite seu e-mail: </label>
            <input 
                type="email"
                id="email"
                name="email" 
            />
        </div>
         <input type="submit" value="Enviar" />
        {statusResponse ? <p>{statusResponse}</p>: <></>}
    </form>
  );
}

export default ResetPassword