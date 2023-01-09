import React, { useEffect, useState } from "react";
import '../../assets/css/style.css'
import { deleteAlloteament } from "../../api/alloteaments";
import { useParams, useNavigate } from "react-router-dom";
import { getAllAlloteaments } from "../../api/alloteaments";
import { BluePrintContainer, Lot , AddLot, ModalFooter} from "../../assets/css/components.styled";
import LoadingData from "../../components/utils/LoadingData";
import { Modal,Space } from "antd";
import ModalMessage from "../../components/utils/ModalMessage";
import { PrimaryButton,AddButton,MainContainer,SecondaryButton, ButtonContainer, NormalButton } from "../../assets/css/style";
import { NavLink } from "react-router-dom";
import {
  EditOutlined,
  DeleteOutlined,
  RightOutlined,
  InfoCircleOutlined,
  WarningOutlined,
  
} from "@ant-design/icons";


const AlloteamentsDetails = () => {
  const { id } = useParams();
  const [dataAlloteaments, setDataAlloteaments] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [messageSubmit, setMessageSubmit] = useState(false);


  useEffect(() => {
    (async () => {
      const user = JSON.parse(localStorage.getItem("userData"));
      const reponse = await getAllAlloteaments(user.user_id);
      const details = reponse.filter((item) => item.id == id);
  
      setDataAlloteaments(details[0]);
    })();
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

 const deleteLot = () =>{
   (async()=>{
    const response = await deleteAlloteament(dataAlloteaments);
    response.status === 200 ?
    setMessageSubmit("Loteamento deletado com sucesso") : 
    setMessageSubmit("Falha ao deletar loteamento");
    console.log(`reponse: ${response}`)
   })();
 };


  
  return dataAlloteaments ? (
    <>
      <Modal
        open={modalIsOpen}
        title="Confirmar ação"
        onOk={''}
        onCancel={closeModal}
        width={400}
        footer={[
          <ModalFooter>
            <NormalButton key="back" type="normal" onClick={()=>closeModal()}>
              Cancelar
            </NormalButton>
           
            <SecondaryButton danger key="submit" type="primary" onClick={()=> deleteLot()}>
              Excluir
            </SecondaryButton>
          </ModalFooter>,
        ]}
      >
        {messageSubmit && (
          <ModalMessage message={messageSubmit} navigateLink={"/allAloteaments"}/>
        )
        }

      <h3>Tem certeza que deseja excluir o loteamento?</h3>
      </Modal>
  
    <MainContainer>
      <div className="btn-position">
        <h3>
          <NavLink className="h3-nav-link" to="/clients">
            Loteamentos
          </NavLink>
          <RightOutlined />
          {dataAlloteaments.name}
        </h3>
        <ButtonContainer align="right">
            <SecondaryButton
              className="input-edit-outlined"
              style={{ backgroundColor: "white" }}
            >
              <EditOutlined />
              Editar
            </SecondaryButton>
            <SecondaryButton danger
              onClick={() => openModal()}
            >
              <DeleteOutlined
              />
              Excluir
            </SecondaryButton>
  
        </ButtonContainer>
      </div>
    
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

        <Space size={[8, 16]} wrap>
      
        {Object.keys(dataAlloteaments.lots).length
          ? <> {Object.entries(dataAlloteaments.lots).map(([key, value]) => (
              <NavLink key={key} to={`/Lot/${dataAlloteaments.id}/${key}`}>
                <Lot avaliable={value}>
                  <p>{key}</p>
                </Lot>
              </NavLink>
            ))}
            {/* add new lotes here */}
            <AddLot onClick={''}>
              <AddButton/>
            </AddLot>
            </>
          : <>
              <PrimaryButton>Adicionar Lotes</PrimaryButton>
            </>}
      </Space>
      
      <BluePrintContainer>
          <PrimaryButton>Anexar planta baixa</PrimaryButton>
      </BluePrintContainer>
      
      </div>
    </MainContainer>

    </>
  ) : (
    <LoadingData />
  );
};

export default AlloteamentsDetails;
