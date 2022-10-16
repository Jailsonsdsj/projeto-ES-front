import React from "react";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { FormRequestAccess } from "./utils/FormAddGuests";
import { createGuest } from "../api/user";
// import './AddGUests.css'

const AddGuests = () => {
  const [openModal, setOpenModal] = useState(false);

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    cpf: "",
    cel: "",
  });

  const inputs = [
    {
      id: 1,
      type:"text",
      label:"Nome",
      name:"fullName",
      errorMessage: "",
      required:true,
      pattern:null,
    },
    {
      id: 2,
      type: "text",
      label: "E-mail",
      name: "email",
      errorMessage: "E-mail inválido",
      required: false,
      pattern: null,
    },
    {
      id: 3,
      type: "text",
      label: "CPF",
      name: "cpf",
      errorMessage: "CPF inválido",
      required: true,
      pattern:
        "([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})",
    },
    {
      id: 4,
      type: "text",
      label: "Telefone",
      name: "cel",
      errorMessage: "Telefone inválido",
      required: true,
      pattern: null,
    },
  ];

  const onChange = (e) => {
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createGuest(formValues);
    console.log(response);
    //if response ok, than show successful message. else, show input erros
  };

  const closeModal = () => {
    setOpenModal(!openModal);
  };

  return openModal ? (
    <form onSubmit={handleSubmit} className ="modal">
      <h3>Adicionar convidado</h3>
      <div style={{display: 'flex', flexDirection: 'row', gap: '100px'}}>
        {inputs.map((input) => (
          <FormRequestAccess
            key={input.id}
            {...input}
            value={formValues[input.name]}
            onChange = {(onChange)}
          />
        ))}
      </div>
    
      <div className="input-class">
        <input className="input-reset" type="button" value="Cancelar" onClick={closeModal} />
        <input className="input-btn" type="submit" value="Adicionar" />
      </div>
    </form>
  ) : (
    <PlusOutlined onClick={closeModal} />
  );
};

export default AddGuests;
