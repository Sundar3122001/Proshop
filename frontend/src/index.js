import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/productScreen';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeScreen />} />
          <Route path='/product/:id' element={<ProductScreen />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  root
);

reportWebVitals();
