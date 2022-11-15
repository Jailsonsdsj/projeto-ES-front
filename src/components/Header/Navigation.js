import React, { useContext, useState, useEffect } from "react";

import { AuthContext } from "../../contexts/auth";
import { UserOutlined } from "@ant-design/icons";
import { Space, Menu } from "antd";
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
} from "../../assets/css/style";
export const Navigation = () => {
  const { logout } = useContext(AuthContext);
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    (async () => {
      const userData = JSON.parse(localStorage.getItem("userData"));
      setLoggedUser(userData);
    })();
  }, []);



  const handleLogout = () => {
    logout();
  };

  const menu = (
    <Menu>
    <Menu.Item>item 1</Menu.Item>
    <Menu.Item>item 2</Menu.Item>
  </Menu>
  );

  return (
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
          <UserAvatar overlay={{ menu }}>
            <MenuNavLink to="/profile">
              {loggedUser && (
                <>
                  <UserOutlined />
                  {loggedUser.name}
                </>
              )}
            </MenuNavLink>
          </UserAvatar>
        </MenuOption>
      </MenuItems>
    </NavBar>
    /* <nav>
            <ul className="nav-links">
                <li className="logo">
                    <a href="/">
                        <img src="https://i.ibb.co/xzyn9sj/logo-klote-03.png" alt="klote-logo" />
                    </a>
                </li>
                <li key="home">
                    <NavLink  to='/' className="nav-link">
                        Início
                    </NavLink>
                </li>
                <li key="financial">
                    <NavLink to='/financial' className="nav-link" >
                        Financeiro
                    </NavLink>
                </li>
                <li key="allotments">
                    <NavLink to='/allotments' className="nav-link">
                        Loteamento
                    </NavLink>
                </li>
                <li key="clients">
                    <NavLink to='/clients' className="nav-link" >
                        Clientes
                    </NavLink>
                </li>
                <li key="profile">
                    <NavLink to='/profile' className="nav-link">
                       <PrimaryButton><UserOutlined /></PrimaryButton>
                    </NavLink>
                </li>
              
                
                <li><button className="logout-btn" onClick={handleLogout}> Logout </button></li>
            </ul>
        </nav>
        
        */
  );
};
