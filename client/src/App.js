// App.js
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from '../src/Components/Product'
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs'
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} ></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
