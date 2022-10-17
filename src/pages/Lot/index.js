import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingData from "../../components/utils/LoadingData";
import { detailsAllotments } from "../../api/alloteaments";
import { EditOutlined, DeleteOutlined  } from "@ant-design/icons";
import '../../assets/css/style.css'

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

  return loading ? (
    <LoadingData />
  ) : (
    <main className="container-1">
      <div className="btn-position">
            <h1>Lote {lotData.block}</h1>
            <div>
            <button className="input-edit-outlined" style={{backgroundColor: 'white'}}><EditOutlined/> Editar</button>
            <button className="input-delete-outlined" style={{backgroundColor: 'white'}}> <DeleteOutlined/> Excluir</button>
            </div>
            
      </div>
        <div className="lot-info"> 
          <h3 style={{color: '#AEAEB2'}}>Valor de Venda</h3>
          <h2>R${lotData.value}</h2>
        </div>
        <button className="btn-large"> Adicionar proprietário</button>
      {/* </div> */}

      <div className="lot-history">
        <h3>Histórico do lote</h3>
        <table>
          <thead>
            <tr>
              <td className="td-info">Data</td>
              <td className="td-info">Descrição</td>
            </tr>
          </thead>
          <tbody>
            {Object.keys(lotData.history).length
              ? Object.entries(lotData.history).map(([key, value]) => (
                  <tr key={value.id}>
                    <td style={{color: 'black'}}>{value.created_at}</td>
                    <td style={{color: 'black'}}>{value.description}</td>
                  </tr>

                ))
              : "Lote sem histórico"}
          </tbody>
        </table>
        <button className="add-btn">Adicionar</button>
      </div>
    </main>
  );
};

export default Lot;
