// import logo from './logo.svg';
//import all components here
import Login from './components/loginForm/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderTest from './components/loginForm/header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path='test' element={<HeaderTest/>}/>
      </Routes>
    </Router>
  );
}

export default App;
