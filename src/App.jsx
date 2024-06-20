import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './Components/NavBar';
import Product from './Components/Product';
import ProductDetails from './Components/ProductDetails';
import SearchItems from './Components/SearchItems';
import CartPage from './Components/CartPage';
import { items } from './Components/Data';

const App = () => {
  const[data, setData]=useState([...items]);
  return (
    <>
    <BrowserRouter>
      <NavBar mansi={setData} />
      <Routes>
        <Route path="/" element={<Product items={data}/>} />
        <Route path="/product/:id" element={<ProductDetails/>} /> 
        <Route path="/search/:term" element={<SearchItems/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App;
