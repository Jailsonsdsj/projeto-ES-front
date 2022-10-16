import React, { useState, useEffect } from "react";
import LoadingData from "../../components/utils/LoadingData";
import ProfileData from "../../components/ProfileData";
import { EditOutlined  } from "@ant-design/icons";
import { Button } from "antd";
import ResetPassword from "../../components/ResetPassword/FormResetPassword";
import { userData } from "../../api/users";
import AddGuests from "../../components/AddGuests";
import AllGuests from "../../components/AllGuests";
export const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [resetPasswordModal, setResetPasswordModal ] = useState(false)

  useEffect(() => {
    (async () => {
      const dataResponse = await userData();
      setData(dataResponse);
      setLoading(false);
    })();
  }, []);

  const onClick = ()=>{
    setResetPasswordModal(!resetPasswordModal)
    
  }

  return (
    <>
      {loading ? (
        <LoadingData />
      ) : (
        <main>
          <h1>Conta</h1>
          <div className="profile-type">
            <h2>Administrador</h2>
            {/* add edit function inside button */}
            <button >
              <EditOutlined />
              Editar
            </button>
          </div>
          <ProfileData data={data}/>
          {/* Insert change passowrd funcion here */}
          <button onClick={onClick}>Alterar a senha</button>
     
          {resetPasswordModal && <ResetPassword/>}
  
          <div className="guests">
            <h2>Convidados</h2>          
            <AddGuests/>
          </div>

          <div className="guests-container">
           <AllGuests/>
          </div>
        </main>
      )}
    </>
  );
};
