import React from 'react'
import inner from '../623c11f3-4629-4936-a141-7fd32ba14523.gif'
function HomePage() {
  return (
    <div className='homepage'>
      <div class="grid-container">
          <div class="grid-item HomePageText">
            Your all in one it <br/> solutions......
            <p>Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley</p>
            <a href="#" class="cta">Explore Now</a>
            
          </div>
          <div class="grid-item ">
            <img src={inner} className='imageINtwo'/>
          </div>
        </div>
    </div>
  )
}

export default HomePage
