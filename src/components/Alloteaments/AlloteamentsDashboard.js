import React, { useState, useEffect } from "react";
import { BorderOutlined } from "@ant-design/icons";
import "./AlloteamentsDashboard.css";
import { NavLink } from "react-router-dom";

const AlloteamentsDashboard = ({ alloteaments }) => {
  const [dataAlloteaments, setDataAlloteaments] = useState(alloteaments[0]);

  const handleChange = (e) => {
    const { value } = e.target;
    const selectedAlloteaments = alloteaments.filter(
      (item) => item.id == value
    );
    setDataAlloteaments(selectedAlloteaments[0]);
  };


  return (
    <div className="alloteaments-panel">
      <h2>Acompanhar Loteamento</h2>
      <select name="address" onChange={handleChange}>
        {alloteaments.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <div className="alloteaments-details">
        <div className="alloteaments-description">
          <table>
            <thead>
              <tr>
                <td>Nome</td>
                <td>Logradouro</td>
                <td>Número</td>
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
          <div className="status-subtitle">
            {/* replace icon */}
            <p>v - disponíveis</p>
            <p>x - vendidos</p>
          </div>
        </div>
        <div className="alloteaments-numbers">
          {Object.keys(dataAlloteaments.lots).length
            ? Object.entries(dataAlloteaments.lots).map(([key, value]) =>
                value === "available" ? (
                  <div key={key} className="box-lot available-lot">
                    <NavLink
                      to={`/Lot/${dataAlloteaments.id}/${key}`}
                      key={key}
                      className="nav-link"
                      activeClassName="nav-link-active"
                    >
                      <p>{key}</p>
                    </NavLink>
                  </div>
                ) : (
                  <div key={key} className="box-lot unavaliable-lot">
                    <p>{key}</p>
                  </div>
                )
              )
            : "Sem lote cadastrado"}
        </div>
      </div>
    </div>
  );
};

export default AlloteamentsDashboard;

// {
//     address:"",
//     cep:"",
//     id:"",
//     img_url:"",
//     lots:[],
//     name:""
// }
