// App.js
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';

import AboutUs from './Components/AboutUs';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './Components/HomePage';
import Contact from './Components/Contact';
import Product from './Components/Product';
import Box from './Components/Box';
function App() {
  return (
    <div className="App">
      <Box/>
    </div>
  );
}

export default App;
