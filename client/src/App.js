// App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from '../src/Components/Product'
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} ></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
