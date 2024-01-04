// App.js
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import logo from './Animation - 1704301535155.gif'
import AboutUs from './Components/AboutUs';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './Components/HomePage';
import Contact from './Components/Contact';
import Product from './Components/Product';
function App() {
  return (
    <div className="App">
    
      <div className='box'>
        <Navbar></Navbar>
        <BrowserRouter>
        <Routes>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
