import React, { useState, useEffect, useContext } from "react";
import LoadingData from "../../components/utils/LoadingData";
import ProfileData from "../../components/profileData";
import { EditOutlined } from "@ant-design/icons";
import ResetPassword from "../../components/ResetPassword/FormResetPassword";
import { AuthContext } from "../../contexts/auth";
// import AddGuests from "../../components/AddGuests";
import "../../assets/css/style.css";
// import AllGuests from "../../components/AllGuests";
export const Profile = () => {
  const [resetPasswordModal, setResetPasswordModal] = useState(false);
  const { userData } = useContext(AuthContext);

  const onClick = () => {
    setResetPasswordModal(!resetPasswordModal);
  };

  return (
    <>
      <main className="container-1">
        <h1>Conta</h1>
        <div className="btn-position">
          <h2>Administrador</h2>
          {/* add edit function inside button */}
          <button className="btn-edit">
            <EditOutlined />
            Editar
          </button>
        </div>
        <ProfileData data={userData} />
        <button className="btn-large" onClick={() => onClick(true)}>
          Alterar a senha
        </button>
        {resetPasswordModal && <ResetPassword />}

        {/* <div className="guests">
            <h2>Convidados</h2>          
            <AddGuests/>
          <div className="guests-container">
           <AllGuests/>
          </div> */}
      </main>
    </>
  );
};
