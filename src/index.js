
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/style.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <header/>
  </React.StrictMode>
);

reportWebVitals();
