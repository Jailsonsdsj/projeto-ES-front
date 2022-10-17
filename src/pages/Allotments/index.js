import React, { useEffect,useState } from 'react'
import { userData } from '../../api/users';
import { addAlloteament } from '../../api/alloteaments';
import { getAllAlloteaments } from '../../api/alloteaments';
import {SearchOutlined,PlusOutlined} from '@ant-design/icons'

export const Allotments = () =>{

  const [ alloteaments, setAlloteaments ] = useState(null)
  const [ addAlloteamentModal, setAddAlloteamentModal] = useState(false)
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
    console.log(response)

  }

  const onChange = (e) =>{
    const { name, value } = e.target
    setInputData({...inputData, [name]:value})
  }
  // console.log(alloteaments)


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
    </div>
    )}

    <div>
    {alloteaments.length
            ? Object.entries(alloteaments).map(([key, value]) =>
              <div key={key}>
                <img src="https://i.ibb.co/JKLpGDL/image.png"  alt="Imagem Loteamento" />
                <h4>{value.name}</h4>
                <p>{value.address}</p>
              </div>
              )
            : "Sem lote cadastrado"}
    </div>
    </main>
  ) : <>Carregando dados...</>
}

