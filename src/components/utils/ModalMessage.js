import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Space, Button } from "antd";
import { PrimaryButton,SuccessIcon, ErrorIcon ,InfoIcon} from "../../assets/css/style";

//type:error, info, success
const ModalMessage = ({ message, navigateLink, type }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const navigate = useNavigate();

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const onClick = () => {
    setModalIsOpen(false)
    navigateLink ? navigate(navigateLink) : window.location.reload();
  };


  const style ={
    marginLeft: "auto",
    marginRight: 0
  }

  const ModalBodyStyle = {
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
  }

  return ( 
    <Modal
      open={modalIsOpen}
      footer={[
        <PrimaryButton key="submit" onClick={onClick} style={style}>
          ok
        </PrimaryButton>,
      ]}
    >
      <div style={ModalBodyStyle}>
        {type == "success" && <SuccessIcon/>}
        {type == "info" && <InfoIcon/>}
        {type == "error" && <ErrorIcon/>}
        <p>{message}</p>
      </div>
    </Modal>
  );
};

export default ModalMessage;
