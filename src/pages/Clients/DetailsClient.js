import React, { useEffect, useState } from "react";
import { useParams,useNavigate  } from "react-router-dom";
import LoadingData from "../../components/utils/LoadingData";
import { EditOutlined, DeleteOutlined, RightOutlined,InfoCircleOutlined,WarningOutlined  } from "@ant-design/icons";
import { NavLink  } from "react-router-dom";
import { getCustomersDetails,deleteCustomer } from "../../api/user";


const DetailsClient = () => {
    const { userId } = useParams();
    const [loading, setLoading] = useState(true)
    const [clientData, setClientData] = useState();
    const [toggleDeleteClient, setToggleDeleteClient] = useState(false);
    const [messageSubmit, setMessageSubmit] = useState()
    const [toggleDeleteLot, setToggleDeleteLot] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
          const response = await getCustomersDetails(userId);
          if(response.status === 200){
            setClientData(response.data.customer);
          }else{
            setMessageSubmit("Usuário não encontrado");
          }
          setLoading(false);
          
        })();
      }, [userId]);

    const deleteUser = () =>{
        (async () => {
            const response = await deleteCustomer(userId)
            toggleCanvas();
            response.status === 200 ? setMessageSubmit("Usuário deletado com sucesso") : setMessageSubmit("Falha ao deletar usuário")
        })();
    }
    const toggleCanvas =()=>{
        setToggleDeleteClient(!toggleDeleteClient)
    }
    
    

   
    console.log(clientData);

  return loading ? 
    <LoadingData/> : (<>
        <div> 
            <div>
                <NavLink to="/clients">Clientes</NavLink>   <RightOutlined /> {clientData.name}
            </div>
            <div>
                <EditOutlined/>
                <DeleteOutlined onClick={toggleCanvas}/>
            </div>
        </div>
        
        {toggleDeleteClient && 
            (<div> 
                <h3>Tem certeza que deseja excluir o cliente?</h3>
                <button onClick={toggleCanvas}>Cancelar</button>
                <button onClick={deleteUser}>Excluir</button>
            </div>)
        }
     
        {messageSubmit && (
      <div className="success-message">
         <h3>{messageSubmit}</h3>
         <button type="button" onClick={ ()=>navigate("/clients")}>Ok</button>
      </div>
     
    )}
        <table>
            <thead>
                <tr>
                    <td>Nome</td>
                    <td>CPF</td>
                    <td>ID</td>
                    <td>E-mail</td>
                    <td>Endereço</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{clientData.name}</td>
                    <td>{clientData.cpf}</td>
                    <td>{clientData.id}</td>
                    <td>{clientData.email}</td>
                    <td>{clientData.address}</td>
                </tr>
            </tbody>
        </table>
        <h3>Lotes</h3>
        <div className="lot-container">
            {clientData.lots.length ? (
               Object.entries(clientData.lots).map(([key, value]) => (
                <div key={key}>
                    <div>
                        <div>{value.allotment_name} / {value.lot_number} / {value.block}</div>
                        <button>Ver Detalhes<InfoCircleOutlined /></button>
                    </div>
                    <div>
                        <p><WarningOutlined />Aberto</p>
                        <button onClick={(()=>setToggleDeleteLot(!toggleDeleteLot))}>Excluir lote do proprietário</button>
                    </div>
                    {toggleDeleteLot && 
                        (<div> 
                            <h3>Tem certeza que deseja desvincular o lote?</h3>
                            <button onClick={(()=>setToggleDeleteLot(!toggleDeleteLot))}>Cancelar</button>
                            <button onClick={''}>Excluir</button>
                        </div>)
                    }
                </div>
               ))
               
            
            ):(<>Sem lotes associados</>)}
           
        </div>
        </>)
}

export default DetailsClient