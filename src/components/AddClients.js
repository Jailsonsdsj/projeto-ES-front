import React, { useState, useEffect } from "react";
import { ConsoleSqlOutlined, PlusOutlined } from "@ant-design/icons";
import { getAllAlloteaments, detailsAllotments } from "../api/alloteaments";
import { addClient } from "../api/user";
import { message } from "antd";


const AddClients = () => {
  const [openModal, setOpenModal] = useState(false);
  const [alloteaments, setAlloteaments] = useState();
  const [selectedAlloteament, setSelectedAlloteament] = useState("");
  const [messageSubmit, setMessageSubmit] = useState()
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
    setOpenModal(!openModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      const response = await addClient(formValues)
      response.status === 201 ? setMessageSubmit("Cliente cadastrado com sucesso!") : setMessageSubmit("Falha ao cadastrar cliente")
    })();
    
    
    
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const lots = JSON.parse(value);
    setSelectedAlloteament(lots.lots);
  };

  return openModal ? (
    <div className="modal-test" >
          <div className="modal-container-up">
          <h2>Adicionar Cliente</h2>
          <form className="add-client-modal" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'row', gap: '100px'}}>
          <input
            type="text"
            className="input-convidado"
            name="name"
            placeholder="Nome"
            onChange={onChange}
            value={formValues.name}
          />
          <input
            type="text"
            className="input-convidado"
            name="email"
            placeholder="E-mail"
            onChange={onChange}
            value={formValues.email}
          />
          <input
            type="text"
            className="input-convidado"
            name="cpf"
            placeholder="CPF"
            onChange={onChange}
            value={formValues.cpf}
          />
          <input
            type="text"
            className="input-convidado"
            name="address"
            placeholder="Endereço"
            onChange={onChange}
            value={formValues.address}
          />
          </form>
          
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
          <br></br>
          <button className="input-reset" onClick={toggleModal}>
            Cancelar
          </button>
          <input className="input-btn" type="submit" value="Adicionar" />
        </div>
    </div>
  ) : (
    <button className="add-btn-client" onClick={toggleModal}>Adicionar Clientes</button>
);
};

export default AddClients;
