import React, { useEffect,useState } from 'react'
import { userData } from '../../api/users';
import { addAlloteament } from '../../api/alloteaments';
import { getAllAlloteaments } from '../../api/alloteaments';
import {SearchOutlined,PlusOutlined} from '@ant-design/icons'
import { NavLink } from "react-router-dom";

export const Allotments = () =>{

  const [ alloteaments, setAlloteaments ] = useState(null)
  const [ addAlloteamentModal, setAddAlloteamentModal] = useState(false)
  const [messageSubmit, setMessageSubmit] = useState()
  const [ inputData, setInputData ] = useState({
    img:"",
    name:"",
    cep:"",
    address:"",
    number:""
  })

  useEffect(()=>{
    (async ()=>{
      const user = await userData();
      const alloteaments = await getAllAlloteaments(user.user_id);
      setAlloteaments(alloteaments);

    })();
  }, []);

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const response = await addAlloteament(inputData)
    response.status === 201 ? setMessageSubmit("Loteamento cadastrado com sucesso!") : setMessageSubmit("Falha ao cadastrar loteamento")
  }

  const onChange = (e) =>{
    const { name, value } = e.target
    setInputData({...inputData, [name]:value})
  }
 


  return alloteaments ? (
    <main>
    <div>
      <h1>Loteamentos</h1>
      <input type="text" placeholder='Pesquisar loteamento...' />
      <SearchOutlined/>
      
      <PlusOutlined onClick={()=>setAddAlloteamentModal(!addAlloteamentModal)}/>
    </div>
    {addAlloteamentModal && (
    <div>
      <h3>Adicionar Loteamento</h3>
      <form onSubmit={handleSubmit}>
        <input type="file" name="img" id="image" alt="Adicionar Imagem" value={inputData.img} onChange={onChange}/>
        <input type="text" name="name" placeholder="Nome" value={inputData.name} onChange={onChange}/>
        <input type="text" name="cep" placeholder="cep" value={inputData.cep} onChange={onChange}/>
        <input type="text" name="address" placeholder="Logradouro" value={inputData.address} onChange={onChange}/>
        <input type="text" name="number" placeholder="Número" value={inputData.number} onChange={onChange}/>
        <button onClick={()=>setAddAlloteamentModal(!addAlloteamentModal)}>Cancelar</button>
        <input className="primary-button" type="submit" value="Adicionar" />
      </form>
      {messageSubmit && (
      <div className="success-message">
         <h3>{messageSubmit}</h3>
         <button onClick={()=>window.location.reload()}>Ok</button>
      </div>
     
      )}
    </div>
    )}

    <div>
    {alloteaments.length
            ? Object.entries(alloteaments).map(([key, value]) =>              
              <div key={key}>
                <NavLink to={`/Allotments/AlloteamentsDetails/${value.id}`}>
                <img src="https://i.ibb.co/JKLpGDL/image.png"  alt="Imagem Loteamento" />
                <h4>{value.name}</h4>
                </NavLink>
                <p>{value.address}</p>
              </div>
             
              )
            : "Sem lote cadastrado"}
    </div>
    </main>
  ) : <>Carregando dados...</>
}

