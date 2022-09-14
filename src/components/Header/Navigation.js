import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { AuthContext } from "../../contexts/auth";

export const Navigation = () => {
    const { logout } = useContext(AuthContext);

    const handleLogout = () =>{
        logout();
      }
      
    return(
        <nav>
            <div className="nav-logo">
               <img src="" alt="" />
            </div>
            <ul className="nav-links">
                <li key="home">
                    <NavLink  
                    to='/'
                    className="nav-link"
                    activeClassName="nav-link-active"
                    >Início
                    </NavLink>
                </li>
                <li key="financial">
                    <NavLink 
                    to='/financial'
                    className="nav-link"
                    activeClassName="nav-link-active"
                    >Financeiro
                    </NavLink>
                </li>
                <li key="allotments">
                    <NavLink 
                    to='/allotments'
                    className="nav-link"
                    activeClassName="nav-link-active"
                    >Loteamentos
                    </NavLink>
                </li>
                <li key="clients">
                    <NavLink 
                    to='/clients'
                    className="nav-link"
                    activeClassName="nav-link-active"
                    >Clientes
                    </NavLink>
                </li>
                <li key="profile">
                    <NavLink 
                    to='/profile'
                    className="nav-link"
                    activeClassName="nav-link-active"
                    >Perfil
                    </NavLink>
                </li>
            </ul>
            <button onClick={handleLogout}> Logout </button>
        </nav>
    )
}