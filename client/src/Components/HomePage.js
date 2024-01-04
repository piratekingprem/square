import React from 'react'
import inner from '../WhatsApp_Image_2024-01-04_at_9.24.23_PM-removebg-preview.png'
function HomePage() {
  return (
    <div className='homepage'>
      <div class="grid-container">
          <div class="grid-item HomePageText">
            Your all in one it <br/> solutions.......
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
