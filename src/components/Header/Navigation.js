import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";
import { Menu  } from "antd";
// import './navigation-style.css'
import "../../assets/css/style.css";
import {
  PrimaryButton,
  NavBar,
  ImgLogo,
  MenuItems,
  MenuOption,
  MenuNavLink,
  UserAvatar,
  MenuDropDown,
  DropDownOptions,
  DropDownItems,
  MobileNavbar,
  UserPanel,
  MobileMenu,
  MobileMenuItems,

} from "../../assets/css/style";
export const Navigation = () => {
  const { logout } = useContext(AuthContext);
  const [loggedUser, setLoggedUser] = useState(null);
  const [ dropDown, setDropDown] = useState(false)
  useEffect(() => {
    (async () => {
      const userData = JSON.parse(localStorage.getItem("userData"));
      setLoggedUser(userData);
    })();
  }, []);

  const handleLogout = () => {
    logout();
  };

  const activeDropDown = ()=>{
      setDropDown(true)
  }
  const desactiveDropDown = ()=>{
      setDropDown(false)
  }


  

  return (
    <>
    <NavBar>
      <MenuNavLink to="/">
        <ImgLogo
          src="https://i.ibb.co/xzyn9sj/logo-klote-03.png"
          alt="Página Inicial"
        />
      </MenuNavLink>
      <MenuItems>
        <MenuOption>
          <MenuNavLink to="/">Início</MenuNavLink>
        </MenuOption>
        <MenuOption>
          <MenuNavLink to="/financial">Financeiro</MenuNavLink>
        </MenuOption>
        <MenuOption>
          <MenuNavLink to="/allotments">Loteamento</MenuNavLink>
        </MenuOption>
        <MenuOption>
          <MenuNavLink to="/clients">Clientes</MenuNavLink>
        </MenuOption>

        <MenuOption>
            <MenuDropDown onMouseOver={activeDropDown} onMouseOut={desactiveDropDown}>    
              <MenuNavLink to="/profile">
                <UserAvatar icon={<UserOutlined />}>
                    {loggedUser && <>{loggedUser.name}</>}
                </UserAvatar>
              </MenuNavLink>

              {dropDown && (
              <DropDownOptions>
                <DropDownItems onClick={handleLogout}>Sair</DropDownItems>
              </DropDownOptions>
              )}
            </MenuDropDown>
        </MenuOption>
      </MenuItems>
  
        <MobileMenu mode="horizontal" defaultSelectedKeys={['mail']} style={{backgroundColor: '#38B885'}} >
          <Menu.SubMenu key="SubMenu"  icon={<MenuOutlined style={{ fontSize: '50px', marginRight:'30px', color:'#ffff'}}/>}>
            <Menu.Item key="1">
              <NavLink to="/">Início</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/financial">Financeiro</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
            <NavLink to="/allotments">Loteamento</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
            <NavLink to="/clients">Clientes</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <PrimaryButton onClick={handleLogout}>Sair</PrimaryButton>
            </Menu.Item>
          </Menu.SubMenu>
        </MobileMenu>

    </NavBar>  
</>
    
  );
};
