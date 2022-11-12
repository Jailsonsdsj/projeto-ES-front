import React, { useState }from "react";
import { useNavigate } from "react-router-dom";
import {Modal} from "react-bootstrap";

const ModalMessage = ({ message,navigateLink }) => {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const navigate = useNavigate()

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
      };
    const onClick = () =>{
        if(navigateLink){
            navigate(navigateLink)
        }else{
            window.location.reload()
        }
    }

  return (
    <Modal  backdrop="static" keyboard={false}show={modalIsOpen} onHide={toggleModal} className="success-message">
      <Modal.Header >
          <Modal.Title>{message}</Modal.Title>
    </Modal.Header>
    
    <Modal.Footer>
        <button className="add-btn-client" onClick={onClick}>Ok</button>
    </Modal.Footer>
      
    </Modal>
  );
};

export default ModalMessage;
