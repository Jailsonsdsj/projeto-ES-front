import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { addAlloteament } from "../../api/alloteaments";
import { getAllAlloteaments } from "../../api/alloteaments";
import { NavLink } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import ModalMessage from "../../components/utils/ModalMessage";
import { Input, Modal  } from 'antd';

import "../../assets/css/style.css";
import { 
  Title2,
  Headline,
  Caption2,
  InputDefault,
  AddButton,
  CenterContainer
} from "../../assets/css/style";


import {
  AlloteamentsContainer,
  Card,
  CardImage,
  AlloteamentsHeader,
  SearchbarContainer
} from "../../assets/css/components.styled";


const { Search } = Input;
export const Allotments = () => {
  const { userData } = useContext(AuthContext);
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
      const alloteaments = await getAllAlloteaments(userData.user_id);
      setAlloteaments(alloteaments);
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addAlloteament(inputData);

    response.status === 201
      ? setMessageSubmit("Loteamento cadastrado com sucesso!")
      : setMessageSubmit("Falha ao cadastrar loteamento");

    setModalIsOpen(!modalIsOpen);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  return alloteaments ? (
    <>
      <AlloteamentsHeader>
        <Title2>Loteamentos</Title2>
        <SearchbarContainer>
          <Search
            placeholder="Pesquisar loteamento"
            style={{
              width: 200,
            }}
            onSearch={''}
          />
          <AddButton onClick={() => setModalIsOpen(!modalIsOpen)}/>

        </SearchbarContainer>
      </AlloteamentsHeader>

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
      {messageSubmit && <ModalMessage message={messageSubmit} />}

      <AlloteamentsContainer size={[8, 16]} wrap>
        {alloteaments.length
          ? Object.entries(alloteaments).map(([key, value]) => (
              <NavLink to={`/Allotments/AlloteamentsDetails/${value.id}`}>
                <Card key={key}>
                  <CardImage
                    src="https://i.ibb.co/JKLpGDL/image.png"
                    alt="loteamento-img"
                  />
                  <Headline>{value.name}</Headline>
                  <Caption2>{value.address}</Caption2>
                </Card>
              </NavLink>
            ))
          : "Sem lote cadastrado"}
      </AlloteamentsContainer>
    </>
  ) : (
    <>Carregando dados...</>
  );
};
