import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { AuthContext } from "../../contexts/auth";
import './navigation-style.css'

export const Navigation = () => {
    const { logout } = useContext(AuthContext);

    const handleLogout = () =>{
        logout();
      }
      
    return(
        <nav>
            
            <div class="hamburger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            <ul class="nav-links">
                <li class="logo">
                    <img src="https://pbs.twimg.com/media/FdtM0pqWAAA7QJj?format=jpg&name=4096x4096" alt="logo" />
                </li>
                <li key="home">
                    <NavLink  to='/' className="nav-link"activeClassName="nav-link-active">
                        Início
                    </NavLink>
                </li>
                <li key="financial">
                    <NavLink to='/financial' className="nav-link" activeClassName="nav-link-active">
                        Financeiro
                    </NavLink>
                </li>
                <li key="allotments">
                    <NavLink to='/allotments' className="nav-link"activeClassName="nav-link-active">
                        Loteamento
                    </NavLink>
                </li>
                <li key="clients">
                    <NavLink to='/clients' className="nav-link" activeClassName="nav-link-active">
                        Clientes
                    </NavLink>
                </li>
                <li key="profile">
                    <NavLink to='/profile' className="nav-link" activeClassName="nav-link-active">
                        Perfil
                    </NavLink>
                </li>
                {/* <li>colocar nome do usuário</li> */}
                <li><button className="logout-btn" onClick={handleLogout}> Logout </button></li>
            </ul>
        </nav>
    )
}