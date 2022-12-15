import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from 'react-router-dom';
import {ShoppingCartProvider} from './context/ShoppingCart';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ShoppingCartProvider>
        <App/>
      </ShoppingCartProvider>
    </Router>
  </React.StrictMode>,
)
