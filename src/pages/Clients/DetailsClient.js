import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingData from "../../components/utils/LoadingData";
import { EditOutlined, DeleteOutlined  } from "@ant-design/icons";
import { getCustomersDetails } from "../../api/user";

const DetailsClient = () => {
    const { userId } = useParams();
    const [loading, setLoading] = useState(true)
    const [clientData, setClientData] = useState();

    useEffect(() => {
        (async () => {
          const response = await getCustomersDetails(userId);
          setClientData(response.data.customer);
          setLoading(false);
        })();
      }, [userId]);

      console.log(clientData);

  return loading ? 
    <LoadingData/> : (
        <div>Clientes</div>
  )
}

export default DetailsClient