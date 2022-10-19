import React, { useEffect, useState } from "react";
import { userData } from "../../api/users";
import { addAlloteament } from "../../api/alloteaments";
import { getAllAlloteaments } from "../../api/alloteaments";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Modal, Row, Col} from "react-bootstrap";
import ModalMessage from "../../components/utils/ModalMessage";
import "../../assets/css/style.css";

export const Allotments = () => {
  const [alloteaments, setAlloteaments] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [messageSubmit, setMessageSubmit] = useState();
  const [inputData, setInputData] = useState({
    img: "",
    name: "",
    cep: "",
    address: "",
    number: "",
  });

  useEffect(() => {
    (async () => {
      const user = await userData();
      const alloteaments = await getAllAlloteaments(user.user_id);
      setAlloteaments(alloteaments);
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addAlloteament(inputData);
  
    response.status === 201
      ? setMessageSubmit("Loteamento cadastrado com sucesso!")
      : setMessageSubmit("Falha ao cadastrar loteamento");

      setModalIsOpen(!modalIsOpen)
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  return alloteaments ? (
    <main className="container-1">
      <div className="btn-position">
        <h1>Loteamentos</h1>
        <div className="search-addClients-position">
          <input
            className="search-input"
            type="text"
            placeholder="Pesquisar loteamento"
          />
          <button
            className="add-btn-client"
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            Adicionar Loteamento
          </button>
        </div>
      </div>

      <Modal
        show={modalIsOpen}
        onHide={() => setModalIsOpen(!modalIsOpen)}
        animation={false}
        dialogClassName="modal-md"
        centered
      >
        <div className="active-users-intire-box">
          <Modal.Header closeButton>
            <Modal.Title>Adicionar Loteamento</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="add-client-modal" onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <input
                    className="input-img"
                    type="file"
                    name="img"
                    id="image"
                    alt="Adicionar Imagem"
                    value={inputData.img}
                    onChange={onChange}
                  />
                 
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    className="input-convidado"
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={inputData.name}
                    onChange={onChange}
                  />
                </Col>

                <Col>
                  <input
                    className="input-convidado"
                    type="text"
                    name="address"
                    placeholder="Logradouro"
                    value={inputData.address}
                    onChange={onChange}
                  />
                </Col>
                <Col>
                  <input
                    className="input-convidado"
                    type="text"
                    name="cep"
                    placeholder="CEP"
                    value={inputData.cep}
                    onChange={onChange}
                  />
                </Col>
                <Col>
                  <input
                    className="input-convidado"
                    type="text"
                    name="number"
                    placeholder="Número"
                    value={inputData.number}
                    onChange={onChange}
                  />
                </Col>
              </Row>
              <br></br>
              <button
                className="input-reset"
                onClick={() => setModalIsOpen(!modalIsOpen)}
              >
                Cancelar
              </button>
              <input className="input-btn" type="submit" value="Adicionar" />
            </form>
          </Modal.Body>
          
          
        </div>
      </Modal>
      {messageSubmit && (
             <ModalMessage message={messageSubmit} />
        )}
        
      <div className="lotes-img">
        {alloteaments.length
          ? Object.entries(alloteaments).map(([key, value]) => (
              <div key={key}>
                <NavLink
                  className="h3-nav-link"
                  to={`/Allotments/AlloteamentsDetails/${value.id}`}
                >
                  <img
                    src="https://i.ibb.co/JKLpGDL/image.png"
                    alt="loteamento-img"
                  />
                  <h4>{value.name}</h4>
                </NavLink>
                <p>{value.address}</p>
              </div>
            ))
          : "Sem lote cadastrado"}
      </div>
    </main>
  ) : (
    <>Carregando dados...</>
  );
};
