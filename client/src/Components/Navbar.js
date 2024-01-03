// Navbar.js
import React from 'react';


function Navbar() {
  return (
    <div className='container'>
      <ul className='navbar'>
        <li className='logo'><p>Your Logo</p></li>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
