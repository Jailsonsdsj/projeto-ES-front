import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { getAllAlloteaments } from "../api/alloteaments";
import { addClient } from "../api/user";
import { Modal, Row, Col} from "react-bootstrap";
import ModalMessage from "./utils/ModalMessage";
import "../assets/css/style.css"

const AddClients = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [alloteaments, setAlloteaments] = useState();
  const [selectedAlloteament, setSelectedAlloteament] = useState("");
  const [messageSubmit, setMessageSubmit] = useState();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    cpf: "",
    address: "",
    lot: "",
    alloteaments: "",
    admin_id: "",
  });

  useEffect(() => {
    (async () => {
      //get all alloteaments
      const user = JSON.parse(localStorage.getItem("userData"));
      setFormValues({ ...formValues, admin_id: user.user_id });
      const allAlloteamentsResponse = await getAllAlloteaments(user.user_id);
      setAlloteaments(allAlloteamentsResponse);
    })();
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      const response = await addClient(formValues);
      response.status === 201 ? setMessageSubmit("Cliente cadastrado com sucesso!") : setMessageSubmit("Falha ao cadastrar cliente");
  
      toggleModal()
    })();
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const lots = JSON.parse(value);
    setSelectedAlloteament(lots.lots);
  };
  
  return (
    <>
      <button className="add-btn-client" onClick={toggleModal}>
        Adicionar Clientes
      </button>

      <Modal show={modalIsOpen} onHide={toggleModal} animation={false}   dialogClassName="modal-md" centered >

        <Modal.Header closeButton>
          <Modal.Title>Adicionar Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form onSubmit={handleSubmit}>
          <Row>
            <Col>
            <input
                type="text"
                className="linear-input"
                name="name"
                placeholder="Nome"
                onChange={onChange}
                value={formValues.name}
              />
            </Col>
            <Col>
            <input
                type="text"
                className="linear-input"
                name="email"
                placeholder="E-mail"
                onChange={onChange}
                value={formValues.email}
              />
            </Col>
            <Col>
            <input
                type="text"
                className="linear-input"
                name="cpf"
                placeholder="CPF"
                onChange={onChange}
                value={formValues.cpf}
              />
            </Col>
            <Col>
            <input
                type="text"
                className="linear-input"
                name="address"
                placeholder="Endereço"
                onChange={onChange}
                value={formValues.address}
              />
            </Col>
          </Row>
              

            <h5>Lote associado</h5>

            <select
              name="alloteaments"
              id="alloteaments-list"
              placeholder="Lotes associados"
              onChange={(e) => {
                handleChange(e);
                onChange(e);
              }}
              defaultValue={formValues.alloteaments}
            >
              <option value={false}>Loteamento</option>
              {alloteaments ? (
                alloteaments.map((item) => (
                  <option
                    key={item.id}
                    value={JSON.stringify(item)}
                    datasearch={JSON.stringify(item)}
                  >
                    {item.name}
                  </option>
                ))
              ) : (
                <></>
              )}
            </select>

            {selectedAlloteament ? (
              <select
                name="lot"
                id="lot"
                defaultValue={formValues.lot}
                onChange={onChange}
              >
                <option value={false}>Lote</option>
                {Object.entries(selectedAlloteament).map(
                  ([key, value]) =>
                    value && (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    )
                )}
              </select>
            ) : (
              <></>
            )}
            <br></br>

            <button className="input-reset" onClick={toggleModal}>
              Cancelar
            </button>
            <input className="add-btn-client" type="submit" value="Adicionar"/>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      {messageSubmit && (
          <>
          <ModalMessage message={messageSubmit} />
           </>
        )}
    </>
    
  );
};

export default AddClients;
