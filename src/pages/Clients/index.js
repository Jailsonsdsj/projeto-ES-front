import React from 'react'
import './client-style.css'
import '../../assets/css/style.css'
import AddClients from './AddClients';
import AllClients from './AllClients';
import {SearchOutlined} from '@ant-design/icons';
import { MainContainer } from '../../assets/css/style';
import { SearchbarContainer } from '../../assets/css/components.styled';
import { AddButton,Title2, PageHeader } from '../../assets/css/style';
import { Input } from 'antd';
const { Search } = Input;


export const Clients = () => {
  // const [users, setUsers] = useState([]);
  // const [loading , setLoading] = useState(true);

  // useEffect(()=>{
  //   (async ()=>{
  //     const response = await getUsers();
  //     setUsers(response.data);
  //     setLoading(false);
  //   })();
  // }, []);


  return (
    <MainContainer>
     <PageHeader>
        <Title2>Clientes</Title2>
        <SearchbarContainer>
          <Search
            placeholder="Pesquisar cliente"
            style={{
              width: 200,
            }}
            onSearch={""}
          />
  
          <AddClients/>
        </SearchbarContainer>
      </PageHeader>
      
    <AllClients/>
    </MainContainer>
  
  )
}
