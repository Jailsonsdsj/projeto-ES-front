import React, { useState, useEffect } from "react";
import { getCustomers } from "../../api/user";
import {
  ClientCard,
  AssociateLots,
  ClientCardBody,
  ClientCardLots,
  ClientName,
} from "../../assets/css/components.styled";


const AllClients = () => {
  const [clientList, setClientList] = useState();

  useEffect(() => {
    (async () => {
      const user = JSON.parse(localStorage.getItem("userData"));
      const response = await getCustomers(user.user_id);
      setClientList(response.data.data);
    })();
  }, []);



  return clientList ? (
    Object.entries(clientList).map(([key, value]) => (
      <ClientCard key={key}>
          <ClientCardBody>
            <ClientName
              className="active-users-name"
              to={`/clients/DetailsClient/${value.id}`}
            >
              <li>{value.name}</li>
            </ClientName>
            <li>CPF: <b>{value.cpf}</b></li>
            <li>ID: <b>{value.id}</b></li>
          </ClientCardBody>
      

        <ClientCardLots wrap>
          {Object.entries(value.lots).map(([key, value]) => (
            <AssociateLots key={key}>
              {value.allotment_name} / {value.lot_number} / {value.block}
            </AssociateLots>
          ))}
        </ClientCardLots>
      </ClientCard>
    ))
  ) : (
    <>Carregando dados...</>
  );
};

export default AllClients;
