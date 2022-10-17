import React, { useEffect, useState } from "react";
import { useParams,useNavigate  } from "react-router-dom";
import LoadingData from "../../components/utils/LoadingData";
import { EditOutlined, DeleteOutlined, RightOutlined,InfoCircleOutlined,WarningOutlined  } from "@ant-design/icons";
import { NavLink  } from "react-router-dom";
import { getCustomersDetails,deleteCustomer } from "../../api/user";
import { ticketGenerator } from "../../api/user";

const DetailsClient = () => {
    const { userId } = useParams();
    const [loading, setLoading] = useState(true)
    const [clientData, setClientData] = useState();
    const [toggleDeleteClient, setToggleDeleteClient] = useState(false);
    const [messageSubmit, setMessageSubmit] = useState()
    const [downloadPDF , setDownloadPDF] = useState();
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

    const ticketRequest = () =>{
        (async () => {

            const response = await ticketGenerator(clientData.name)
            if( response.status === 200){
                setDownloadPDF("Carnê gerado com sucesso")
                window.location.href = `https://kloteteste.herokuapp.com/pdf/${clientData.name}`
            }else{
                setDownloadPDF("Falha ao gerar o carnê. Entre em contato com um administrador")
            }
    
            
        })();
    }
    
    // console.log(clientData);

  return loading ? 
    <LoadingData/> : (
    <div className="container-1">
        <div className="btn-position"> 
            <h3>
                <NavLink className='h3-nav-link' to="/clients">Clientes</NavLink>  
                <RightOutlined/> 
                {clientData.name}
            </h3>
            <div className="clients-btn-details-position">
               
                <div>
                    <button className="input-edit-outlined" style={{backgroundColor: 'white'}}><EditOutlined/>Editar</button>
                    <button className="input-delete-outlined" style={{backgroundColor: 'white'}}><DeleteOutlined onClick={toggleCanvas}/> Deletar</button>
                    
                    <button className="input-edit-outlined" onClick={ticketRequest} style={{backgroundColor: 'white'}}>Gerar carnê</button>
                    
                </div>
               
            </div> 
           
        </div>
        {downloadPDF && (
                    <div>
                        <p>{downloadPDF}</p>
                        <button onClick={()=>{setDownloadPDF(!downloadPDF)}}>Fechar</button>
                    </div>
        )}
        
        {toggleDeleteClient && 
            (<div> 
                <h3>Tem certeza que deseja excluir o cliente?</h3>
                <button className="input-edit-outlined" onClick={toggleCanvas}>Cancelar</button>
                <button className="input-delete-outlined" onClick={deleteUser}>Excluir</button>
                
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
                    <td className="td-info">Nome</td>
                    <td className="td-info">CPF</td>
                    <td className="td-info">ID</td>
                    <td className="td-info">E-mail</td>
                    <td className="td-info">Endereço</td>
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
                <div className="divide-details" key={key}>
                    <div className="active-users-credentials-box ">
                        <p className="lote-detail-info">{value.allotment_name} / {value.lot_number} / {value.block}</p>
                        <button className="details-btn"><InfoCircleOutlined/> Ver Detalhes</button>
                    </div>
                    <div className="status-position">
                        <p className="status-user-open"><WarningOutlined/>ABERTO</p>
                        <button onClick={(()=>setToggleDeleteLot(!toggleDeleteLot))} className="delete-user-allotements">Excluir lote do proprietário</button>
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
        </div>)
}

export default DetailsClient