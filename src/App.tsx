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
import { cartItem } from './Models/addtoCartModel';

export const CartContext = React.createContext({ "name": "rohit" })


function App() {
  const [items, setitems] = useState({ "name": "pooja" })

  return (

    <CartContext.Provider value={{items,setitems}}>
      <BrowserRouter>
      <Routes>
        <Route   path='/' element={<Home/>}/>
        <Route path='/landingPage' element={<MainPage/>}/>
          <Route path='/cart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
    </CartContext.Provider>
    
  )
}

export default App
