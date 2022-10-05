import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { getAllAlloteaments } from "../api/alloteaments";

const AddClients = () => {
  const [openModal, setOpenModal] = useState(false);
  const [alloteaments, setAlloteaments] = useState();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    cpf: "",
    address: "",
    alloteaments: [],
  });

  useEffect(() => {
    (async () => {
      const user = JSON.parse(localStorage.getItem("userData"));
      const response = await getAllAlloteaments(user.user_id);
      setAlloteaments(response);
    })();
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return openModal ? (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Cliente</h2>
      <input
        type="text"
        className="input-text"
        name="name"
        placeholder="Nome"
        onChange={onChange}
        value={formValues.name}
      />
      <input
        type="text"
        className="input-text"
        name="email"
        placeholder="E-mail"
        onChange={onChange}
        value={formValues.email}
      />
      <input
        type="text"
        className="input-text"
        name="cpf"
        placeholder="CPF"
        onChange={onChange}
        value={formValues.cpf}
      />
      <input
        type="text"
        className="input-text"
        name="address"
        placeholder="Endereço"
        onChange={onChange}
        value={formValues.address}
      />
      <label htmlFor="alloteaments-list">Lotes associados</label>
      <select
        id="alloteaments-list"
        name="alloteaments"
        placeholder="Lotes associados"
      >
        <option>Loteamento</option>
        {alloteaments ? (
          alloteaments.map((item) => (
            <option key={item.id} value={item.address}>
               { console.log(item)}
              {item.address}
            </option>
          ))
        ) : (
         <option> </option>
        )}
      </select>

      {/* input new select based on alloteament selected */}
      <button className="secondary-button" onClick={toggleModal}>
        Cancelar
      </button>
      <input className="primary-button" type="submit" value="Adicionar" />
    </form>
  ) : (
    <PlusOutlined onClick={toggleModal} />
  );
};

export default AddClients;
