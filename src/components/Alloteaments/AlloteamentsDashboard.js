import React, { useState } from "react";
// import { BorderOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Space } from "antd";
import { Lot,AlloteamentsInfo,AlloteamentsTable, AlloteamentsLegend } from "../../assets/css/components.styled";
import { Title2 } from "../../assets/css/style";

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
    <div>
      <Title2 style={{ fontWeight: "bold" }}>Acompanhar Loteamento</Title2>

      <select name="address" onChange={handleChange}>
        {alloteaments.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      <AlloteamentsInfo>
        <AlloteamentsTable>
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
        </AlloteamentsTable>

        <AlloteamentsLegend>
          <p>🟢Disponível </p>
          <p>⚫️Vendido </p>
        </AlloteamentsLegend>
      </AlloteamentsInfo>

      <Space size={[8, 16]} wrap>
        {Object.keys(dataAlloteaments.lots).length
          ? Object.entries(dataAlloteaments.lots).map(([key, value]) => (
              <NavLink to={`/Lot/${dataAlloteaments.id}/${key}`} key={key}>
                <Lot key={key} avaliable={value}>
                  <p>{key}</p>
                </Lot>
              </NavLink>
            ))
          : "Sem lote cadastrado"}
      </Space>
    </div>
  );
};

export default AlloteamentsDashboard;
