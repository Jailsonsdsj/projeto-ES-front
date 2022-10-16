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
            <div className="hamburger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className="nav-links">
                <li className="logo">
                    <img src="https://i.ibb.co/FgBjTBg/klote-logo.png" alt="klote-logo" />
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
                        Perfil
                    </NavLink>
                </li>
                {/* <li>colocar nome do usuário</li> */}
                <li><button className="logout-btn" onClick={handleLogout}> Logout </button></li>
            </ul>
        </nav>
    )
}