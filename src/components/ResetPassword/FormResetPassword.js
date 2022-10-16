import React from "react";

const FormResetPassword = () => {


  return (
    <div className="container">
      <h2>Alterar Senha</h2>
      <form action="">
        <label className="label-newpassword" htmlFor="new-password">Nova senha</label>
        <input className="new-password" placeholder="***********" type="password" />
        <label className="label-newpassword" htmlFor="confirm-password">Repita a senha</label>
        <input className="new-password" placeholder="***********" type="password" />
      </form>
      <input className="input-reset" type="reset" value="Cancelar" />
      <input className="input-btn" type="submit" value="Alterar" />
    </div>

  );
};

export default FormResetPassword;
