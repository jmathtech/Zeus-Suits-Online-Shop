/* eslint-disable no-lone-blocks */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './Index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

{/* React 18 has updated with using createRoot instead of using ReactDOM.render() */}

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

reportWebVitals();
