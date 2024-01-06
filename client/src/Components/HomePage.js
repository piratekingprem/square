import React from 'react'
import inner from '../WhatsApp_Image_2024-01-04_at_9.24.23_PM-removebg-preview.png'

function HomePage() {
  return (
   <>
    <div className='homepage box'>
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
    <div className='HomePageCards'>
      <div className='HomePageCard'>
        <p className='home_card_heading'>Custom Software Development</p>
        <hr style={{marginLeft: '5%'}}></hr>
        <p className='home_card_body'>From strategy and planning to developing and scaling we have delivered end-to-end solutions for our clients. Our team of professionals has consulted multiple brnads to leverage latest technology</p>
      </div>
      <div className='HomePageCard'>
        <p className='home_card_heading'>Website Design and Development</p>
        <hr style={{marginLeft: '5%'}}></hr>
        <p className='home_card_body'>We develop website for client to grow there bussiness. For that we use different technologies such Mern stack, Mean stack and Wordpress. This help clients to choose the right technology</p>
      </div>
      <div className='HomePageCard'>
        <p className='home_card_heading'>Mobile App Development</p>
        <hr style={{marginLeft: '5%'}}></hr>  
        <p className='home_card_body'>We Design,Develop and Test Mobile Application, We Offer App Marketing, Maintenance and Update. Our  App Development Service Are Tailored To Meet Specific Needs And Budgets</p>
      </div>
    </div>
    </>
  )
}

export default HomePage
