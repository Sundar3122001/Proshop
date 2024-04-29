import React from 'react';
import ReactDOM from 'react-dom';
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/productScreen';
import { Provider } from 'react-redux';
import store from './store';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
          <Route index={true} path='/' element={<HomeScreen />} />
          <Route path='/product/:id' element={<ProductScreen />} />
    </Route>
  )
)
const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
  root
);




reportWebVitals();
