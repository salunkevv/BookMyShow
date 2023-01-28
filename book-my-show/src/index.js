import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MovieProvider from "./Context/MovieContext";

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MovieProvider>
    <App />
    </MovieProvider>
    </BrowserRouter>
   
  </React.StrictMode>
);

