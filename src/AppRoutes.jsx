import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/loginForm/loginForm';
import HomePage from './components/HomePage/HomePage';
import { AuthContext, AuthProvider } from './contexts/auth';


export const AppRoutes = () =>{

    //checks if the component inside Private (children) is autenticate. if don't, the user will be redirect to login page
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext)
        if (!authenticated) {
            return <Navigate to="/login" />
        }
        if(loading){
            return <div className="loading">Carregando...</div>
        }

        return children;
    }
    

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={ <LoginForm />} />
                    <Route exact path="/" element={<Private> <HomePage /></Private>} />
                </Routes>
            </AuthProvider>
      </Router>
    )
}
