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

  console.log(lotData)

 

  return loading ? (
    <LoadingData />
  ) : (
    <ul>
        <li> ID: {lotData.allotment_id}</li>
        <li> Bloco: {lotData.block}</li>
        <li> Número: {lotData.number}</li>
        <li> Status: {lotData.status}</li>
        <li> Valor: {lotData.value}</li>
    </ul>
  );
};

export default Lot;
