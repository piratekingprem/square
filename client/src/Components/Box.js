import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import HomePage from './HomePage'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Product from './Product'
function Box() {
  return (
    <div className='box'>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Box
