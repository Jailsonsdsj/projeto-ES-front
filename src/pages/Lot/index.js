import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingData from "../../components/utils/LoadingData";
import { detailsAllotments } from "../../api/users";

const Lot = () => {
  const { id, lotId } = useParams();
  const [lotData, setLotData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await detailsAllotments(lotId, id);
      setLotData(response);
      setLoading(false);
    })();
  }, [id]);

  console.log(lotData);

  return loading ? (
    <LoadingData />
  ) : (
    <main>
      <div className="buttons">
        <button>Editar</button>
        <button>Excluir</button>
      </div>

      <div className="lot-info-container">
        <div className="lot-info">
          <h1>Lote {lotData.block}</h1>
          <h5>Valor da Venda</h5>
          <h3>R${lotData.value}</h3>
        </div>
        <button> Adicionar Proprietário</button>
      </div>

      <div className="lot-history">
        <h5>Histório do lote</h5>
        <table>
          <thead>
            <tr>
              <td>Data</td>
              <td>Descrição</td>
            </tr>
          </thead>
          <tbody>
            {Object.keys(lotData.history).length
              ? Object.entries(lotData.history).map(([key, value]) => (
                  <tr key={value.id}>
                    <td>{value.created_at}</td>
                    <td>{value.description}</td>
                  </tr>
                ))
              : "Lote sem histórico"}
          </tbody>
        </table>
        <button>Adicionar Marco</button>
      </div>
    </main>
    // <ul>
    //     <li> ID: {lotData.allotment_id}</li>
    //     <li> Bloco: {lotData.block}</li>
    //     <li> Número: {lotData.number}</li>
    //     <li> Status: {lotData.status}</li>
    //     <li> Valor: {lotData.value}</li>
    // </ul>
  );
};

export default Lot;
