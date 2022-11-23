import React, { useState, useEffect } from "react";
import { getAllAlloteaments } from "../../api/alloteaments";
import { addClient } from "../../api/user";
import { Modal,Space } from "antd";
import ModalMessage from "../../components/utils/ModalMessage";
import "../../assets/css/style.css";
import { AddButton, LinearForm,NormalButton,PrimaryButton, LinearInputGroup, LinearInput, Headline} from "../../assets/css/style";
import { ModalFooter } from "../../assets/css/components.styled";

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

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      const response = await addClient(formValues);
      response.status === 201
        ? setMessageSubmit("Cliente cadastrado com sucesso!")
        : setMessageSubmit("Falha ao cadastrar cliente");
    })();
  };


  const handleChange = (e) => {
    const { value } = e.target;
    const lots = JSON.parse(value);
    setSelectedAlloteament(lots.lots);
  };

  console.log(messageSubmit);

  return modalIsOpen ? (
    <>
      <Modal
        open={modalIsOpen}
        title="Adicionar Cliente"
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
        <LinearForm style={{flexDirection:"column"}}>
          <LinearInputGroup size={[8, 16]} wrap style={{justifyContent:"left", marginBottom:"15px"}} >
            <LinearInput
              type="text"
              className="linear-input"
              name="name"
              placeholder="Nome"
              onChange={onChange}
              value={formValues.name}
            />

            <LinearInput
              type="text"
              className="linear-input"
              name="email"
              placeholder="E-mail"
              onChange={onChange}
              value={formValues.email}
            />

            <LinearInput
              type="text"
              className="linear-input"
              name="cpf"
              placeholder="CPF"
              onChange={onChange}
              value={formValues.cpf}
            />

            <LinearInput
              type="text"
              className="linear-input"
              name="address"
              placeholder="Endereço"
              onChange={onChange}
              value={formValues.address}
            />
          </LinearInputGroup>
          
          <Headline>Lote associado</Headline>
          <Space size={[8, 16]} wrap>
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
          </Space>
          
        </LinearForm>
      </Modal>
      {messageSubmit && <ModalMessage message={messageSubmit} type="success"/>}
    </>
  ):  <AddButton onClick={openModal} />;
};

export default AddClients;
