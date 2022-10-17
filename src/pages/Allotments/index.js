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
    <main className='container-1'>
    <div className="btn-position">
      <h1>Loteamentos</h1>
      <div className="search-addClients-position">
        <input className='search-input' type="text" placeholder='Pesquisar loteamento' />
        <button className="add-btn-client" onClick={()=>setAddAlloteamentModal(!addAlloteamentModal)}>Adicionar Loteamento</button>
      </div>
    </div>
    {addAlloteamentModal && (
    <div className='active-users-intire-box'>
      <h3>Adicionar Loteamento</h3>
      <form className="add-client-modal" onSubmit={handleSubmit}>
        <div>
          <input className='input-img' type="file" name="img" id="image" alt="Adicionar Imagem" value={inputData.img} onChange={onChange}/>
          <label for='image'></label>
        </div>
        <br></br>
        <div className='info-lote-input'>
        <input className="input-convidado" type="text" name="name" placeholder="Nome" value={inputData.name} onChange={onChange}/>
        {/* <input type="text" name="cep" placeholder="cep" value={inputData.cep} onChange={onChange}/> */}
        <input className="input-convidado" type="text" name="address" placeholder="Logradouro" value={inputData.address} onChange={onChange}/>
        <input className="input-convidado" type="text" name="number" placeholder="Número" value={inputData.number} onChange={onChange}/>
        </div>
        <br></br>
        <button className="input-reset" onClick={()=>setAddAlloteamentModal(!addAlloteamentModal)}>Cancelar</button>
        <input className="input-btn" type="submit" value="Adicionar" />
      </form>
      {messageSubmit && (
      <div className="success-message">
         <h3>{messageSubmit}</h3>
         <button onClick={()=>window.location.reload()}>Ok</button>
      </div>
     
      )}
    </div>
    )}

    <div className='lotes-img'>
    {alloteaments.length
            ? Object.entries(alloteaments).map(([key, value]) =>              
              <div key={key}>
                <NavLink className='h3-nav-link' to={`/Allotments/AlloteamentsDetails/${value.id}`}>
                <img src="https://i.ibb.co/JKLpGDL/image.png"  alt="loteamento-img" />
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

