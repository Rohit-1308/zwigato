import Home from './components/Home/Home'
import MainPage from './components/MainPage/MainPage';
import CartPage from './components/Cart/CartPage';
import './App.css'
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
 
} from "react-router-dom";

import { store } from './store/store'
import { Provider } from 'react-redux';
import { enableMapSet } from 'immer'
import Navbar from './components/Navbar';

function App() {
  enableMapSet()

  return (

    <Provider store={store}>

      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route   path='/' element={<Home/>}/>
        <Route path='/landingPage' element={<MainPage/>}/>
          <Route path='/cart' element={<CartPage />} />
      </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
