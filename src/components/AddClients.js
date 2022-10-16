import React, { useState, useEffect } from "react";
import { ConsoleSqlOutlined, PlusOutlined } from "@ant-design/icons";
import { getAllAlloteaments, detailsAllotments } from "../api/alloteaments";
import { addClient } from "../api/user";


const AddClients = () => {
  const [openModal, setOpenModal] = useState(false);
  const [alloteaments, setAlloteaments] = useState();
  const [selectedAlloteament, setSelectedAlloteament] = useState("");

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    cpf: "",
    address: "",
    lot: "",
    alloteaments: ""
  });

  useEffect(() => {
    (async () => {
      //get all alloteaments
      const user = JSON.parse(localStorage.getItem("userData"));
      const allAlloteamentsResponse = await getAllAlloteaments(user.user_id);
      setAlloteaments(allAlloteamentsResponse);

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
    addClient(formValues)
  };

  const handleChange = (e) => {
  
    const { value } = e.target;
    const lots = JSON.parse(value);
    setSelectedAlloteament(lots.lots);
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

      <h3>Lote associado</h3>

      <select
        name="alloteaments"
        id="alloteaments-list"
        placeholder="Lotes associados"
        onChange={(e)=>{
          handleChange(e)
          onChange(e)
        }
        }
        defaultValue ={formValues.alloteaments}
      >
        <option value={false}>Loteamento</option>
        {alloteaments ? (
          alloteaments.map((item) => (
            <option key={item.id} value={JSON.stringify(item)} datasearch={JSON.stringify(item)}>
              {item.address}
            </option>
          ))
        ) : (
          <></>
        )}
      </select>

      {selectedAlloteament ? (
        <select name="lot" id="lot" defaultValue ={formValues.lot}  onChange={onChange}>
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
