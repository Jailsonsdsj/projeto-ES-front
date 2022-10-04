import React from "react";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

import { createGuest } from "../api/user";
// import './AddGUests.css'

const AddGuests = () => {
  const [openModal, setOpenModal] = useState(false)
  const [focused, setFocused] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    cpf: "",
    cel: "",
  });

  const inputs = [
    {
      id: 1,
      type: "text",
      label: "Nome",
      name: "fullName",
      errorMessage: "Preenchimento obrigatório",
      required: true,
      pattern: "[A-Za-zd.]",
    },
    {
      id: 2,
      type: "email",
      label: "E-mail",
      name: "email",
      errorMessage: "E-mail inválido",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
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
      pattern: "^[0-9]",
    },
  ];

  const onChange = (e) => {
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  // const handleFocus = (e) => {
  //   setFocused(true);
  // };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await createGuest(formValues);
    console.log(response);
    //if response ok, than show successful message. else, show input erros
  };

  const closeModal = () =>{
    setOpenModal(!openModal)

  }


  return (
    openModal ? (
      <form onSubmit={handleSubmit}>
      <h3>Adicionar convidado</h3>

      {inputs.map((input) => (
        <div key={input.id} className="input-group">
          <label>{input.label}</label>
          <input
            id={input.id}
            type={input.type}
            name={input.name}
            required={input.required}
            value={formValues[input.name]}
            onChange={onChange}
            // onBlur={handleFocus}
            // onFocus={handleFocus}
            // focused={focused.toString()}
            // pattern={input.pattern}
          />
          {/* <span>{input.errorMessage}</span> */}
        </div>
      ))}
      <input type="button" value="Cancelar" onClick={closeModal}/>
      <input type="submit" value="Cadastrar" />
    </form>
    ) : (
        <PlusOutlined onClick={closeModal}/>
      )
  );
};

export default AddGuests;
