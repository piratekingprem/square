// App.js
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import logo from './Animation - 1704301535155.gif'
function App() {
  return (
    <div className="App">
      <div className='box'>
        <Navbar></Navbar>
        <div class="grid-container">
          <div class="grid-item HomePageText">
            Your all in one it <br/> solutions
            <p>Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley</p>
            <a href="#" class="cta">Explore Now</a>
          </div>
          <div class="grid-item"><img src={logo} className='homePage_gif' /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
