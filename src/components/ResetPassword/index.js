import React from "react";

const ResetPassword = () => {


  return (
    <div className="containe">
      <h2>Alterar Senha</h2>
      <form action="">
        <label htmlFor="old-passowrd">Senha antiga</label>
        <input type="password" />
        <label htmlFor="new-password">Nova senha</label>
        <input type="password" />
        <label htmlFor="confirm-password">Repita a senha</label>
        <input type="password" />
        <input type="submit" value="Alterar" />
      </form>
    </div>
  );
};

export default ResetPassword;
