import React, {useState} from "react";

const FormResetPassword = () => {
    const [modal, setModal] = useState(true)

  return modal ? (
    <div className="container">
      <h2>Alterar Senha</h2>
      <form action="">
        <label className="label-newpassword" htmlFor="new-password">Nova senha</label>
        <input className="new-password" placeholder="***********" type="password" />
        <label className="label-newpassword" htmlFor="confirm-password">Repita a senha</label>
        <input className="new-password" placeholder="***********" type="password" />
      </form>
      <input className="input-reset" type="reset" onClick={(()=>setModal(!modal))} value="Cancelar" />
      <input className="input-btn" type="submit" value="Alterar" />
    </div>

  ) : <></>;
};

export default FormResetPassword;
