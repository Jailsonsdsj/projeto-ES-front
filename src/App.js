// import logo from './logo.svg';
//import all components here
import Login from './components/loginForm/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={ <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
