import React, { useEffect, useState } from "react";
import '../../assets/css/style.css'
import { useParams, useNavigate } from "react-router-dom";
import { getAllAlloteaments } from "../../api/alloteaments";
import {
  EditOutlined,
  DeleteOutlined,
  RightOutlined,
  InfoCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const AlloteamentsDetails = () => {
  const { id } = useParams();
  const [dataAlloteaments, setDataAlloteaments] = useState();
  const [toggleDeleteLot, setToggleDeleteLot] = useState(false);

  useEffect(() => {
    (async () => {
      const user = JSON.parse(localStorage.getItem("userData"));
      const reponse = await getAllAlloteaments(user.user_id);
      const details = reponse.filter((item) => item.id == id);

      setDataAlloteaments(details[0]);
    })();
  }, []);

  // console.log(dataAlloteaments)

  return dataAlloteaments ? (
    <div className="container-1">
      <div className="btn-position">
        <h3>
          <NavLink className="h3-nav-link" to="/clients">
            Loteamentos
          </NavLink>
          <RightOutlined />
          {dataAlloteaments.name}
        </h3>
        <div className="clients-btn-details-position">
          <div>
            <button
              className="input-edit-outlined"
              style={{ backgroundColor: "white" }}
            >
              <EditOutlined />
              Editar
            </button>
            <button
              className="input-delete-outlined"
              style={{ backgroundColor: "white" }}
            >
              <DeleteOutlined
                onClick={() => setToggleDeleteLot(!toggleDeleteLot)}
              />
              Deletar
            </button>
          </div>
        </div>
      </div>
      {toggleDeleteLot && 
            (<div> 
                <h3>Tem certeza que deseja excluir o loteamento?</h3>
                <button className="input-edit-outlined" onClick={() => setToggleDeleteLot(!toggleDeleteLot)}>Cancelar</button>
                <button className="input-delete-outlined" onClick={''}>Excluir</button>
            </div>)
        }
      <div className="alloteaments-status">
        <p>⚫️Vendido</p>
        <p>🟢Disponível</p>
      </div>
      <br></br>
      <div className="alloteaments-details">
        <div className="alloteaments-description">
          <table className="table-info">
            <thead>
              <tr>
                <td className="td-info">Nome</td>
                <td className="td-info">Logradouro</td>
                <td className="td-info">Número</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dataAlloteaments.name}</td>
                <td>{dataAlloteaments.address}</td>
                <td>{dataAlloteaments.cep}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="alloteaments-numbers">
          {Object.keys(dataAlloteaments.lots).length
            ? Object.entries(dataAlloteaments.lots).map(([key, value]) =>
                value === true ? (
                  <div key={key} className="box-lot available-lot">
                    <NavLink
                      to={`/Lot/${dataAlloteaments.id}/${key}`}
                      key={key}
                      className="info-number-alloteament"
                    >
                      <p>{key}</p>
                    </NavLink>
                  </div>
                ) : (
                  <div key={key} className="box-lot unavaliable-lot">
                    <NavLink
                      to={`/Lot/${dataAlloteaments.id}/${key}`}
                      key={key}
                      className="info-number-alloteament"
                    >
                      <p>{key}</p>
                    </NavLink>

                  </div>
                )
              )
            : <button>Adicionar Lotes</button>}
        </div>
        <button>Anexar planta baixa</button>
      </div>
    </div>
  ) : (
    <>Carregando dados...</>
  );
};

export default AlloteamentsDetails;
