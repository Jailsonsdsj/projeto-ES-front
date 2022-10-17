import React from "react";

const FormResetPassword = () => {


  return (
    <div className="container-1">
      <h2>Alterar Senha</h2>
      <form className="container-1" action="">
        <label className="label-newpassword" htmlFor="new-password">Nova senha</label>
        <input className="new-password" placeholder="***********" type="password" />
        <label className="label-newpassword" htmlFor="confirm-password">Repita a senha</label>
        <input className="new-password" placeholder="***********" type="password" />
        <br></br>
        <br></br>
          <input className="input-reset" type="reset" value="Cancelar" />
          <input className="input-btn" type="submit" value="Alterar" />
        
      </form>
      
    </div>

  );
};

export default FormResetPassword;
