import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { addAlloteament } from "../../api/alloteaments";
import { getAllAlloteaments } from "../../api/alloteaments";
import { NavLink } from "react-router-dom";
import ModalMessage from "../../components/utils/ModalMessage";
import { Input, Modal, Space} from "antd";


import "../../assets/css/style.css";
import {
  Title2,
  Headline,
  Caption2,
  InputDefault,
  AddButton,
  CenterContainer,
  PrimaryButton,
  NormalButton,
  LinearForm,
  LinearInput,
  AddImg,
  CameraIcon,
  LinearInputGroup,
  PageHeader,
} from "../../assets/css/style";

import {
  AlloteamentsContainer,
  Card,
  CardImage,
  SearchbarContainer,
  ModalFooter,
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

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return alloteaments ? (
    <>
      <PageHeader>
        <Title2>Loteamentos</Title2>
        <SearchbarContainer>
          <Search
            placeholder="Pesquisar loteamento"
            style={{
              width: 200,
            }}
            onSearch={""}
          />
          <AddButton onClick={openModal} />
        </SearchbarContainer>
      </PageHeader>
      <Modal
        open={modalIsOpen}
        title="Adicionar Loteamento"
        onOk={handleSubmit}
        onCancel={closeModal}
        width={600}
        footer={[
          <ModalFooter>
            <NormalButton key="back" type="normal" onClick={closeModal}>
              Cancelar
            </NormalButton>

            <PrimaryButton key="submit" type="primary" onClick={handleSubmit}>
              Cadastrar
            </PrimaryButton>
          </ModalFooter>,
        ]}
      >
        <LinearForm>
          <AddImg for="img"><CameraIcon />Anexar Foto</AddImg>
          <input
            type="file"
            id="img"
            name="img"
            alt="Adicionar Imagem"
            accept="image/png, image/jpeg"
            value={inputData.img}
            onChange={onChange}
            style={{ display: "none" }}
          />
          <LinearInputGroup size={[8, 16]} wrap>
            <LinearInput
              type="text"
              name="name"
              placeholder="Nome"
              value={inputData.name}
              onChange={onChange}
            />
            <LinearInput
              type="text"
              name="address"
              placeholder="Logradouro"
              value={inputData.address}
              onChange={onChange}
            />
            <LinearInput
              type="text"
              name="cep"
              placeholder="CEP"
              value={inputData.cep}
              onChange={onChange}
            />
            <LinearInput
              type="text"
              name="number"
              placeholder="Número"
              value={inputData.number}
              onChange={onChange}
            />
          </LinearInputGroup>
        </LinearForm>
      </Modal>
      {messageSubmit && <ModalMessage message={messageSubmit} type="success"/>}

      <AlloteamentsContainer size={[8, 16]} wrap>
        {alloteaments.length
          ? Object.entries(alloteaments).map(([key, value]) => (
              <NavLink key={key} to={`/Allotments/AlloteamentsDetails/${value.id}`}>
                <Card>
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
