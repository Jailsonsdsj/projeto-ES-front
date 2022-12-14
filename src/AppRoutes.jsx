import React,{useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Allotments } from './pages/Allotments';
import { Clients } from './pages/Clients';
import DetailsClient from './pages/Clients/DetailsClient';
import { Financial } from './pages/Financial';
import HomePage from './pages/HomePage';
import { Profile } from './pages/Profile';
import { Navigation } from './components/Header/Navigation';
import { LoginForm } from './pages/Login';
import { ResetPassword } from './pages/Login/ResetPassword'; 
import { AuthContext, AuthProvider } from './contexts/auth';
import AlloteamentsDetails from './pages/Allotments/AlloteamentsDetails';
import Lot from './pages/Lot';

export const AppRoutes = () =>{

    //checks if the component inside Private (children) is autenticate. if don't, the user will be redirect to login page
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext)
        if(loading){
            return <div className="loading">Carregando...</div>
        }
        if (!authenticated) {
            return <Navigate to="/login" />
        }
        return(
            <>
            <Navigation />
            {children}
            </>
        ) 
    }
    

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={ <LoginForm />} />
                    <Route exact path="/resetPassword" element={ <ResetPassword />} />
                    <Route exact path="/" element={<Private> <HomePage /></Private>} />
                    <Route exact path="/Financial" element={<Private> <Financial /></Private>} />
                    <Route exact path="/Allotments" element={<Private> <Allotments /></Private>} />
                    <Route exact path="/Allotments/AlloteamentsDetails/:id" element={<Private> <AlloteamentsDetails/></Private>} />
              
                    <Route exact path="/Clients" element={<Private> <Clients /></Private>} />
                    <Route exact path="/Profile" element={<Private> <Profile /></Private>} />
                    <Route exact path="/Lot/:lotId/:id" element={<Private> <Lot/></Private>} />
                    <Route exact path="/clients/DetailsClient/:userId" element={<Private> <DetailsClient/></Private>} />
                </Routes>
            </AuthProvider>
      </Router>
    )
}
