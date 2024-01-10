import React from 'react'
import Navbar from './Navbar'

function Contact() {
  return (
    <div className='contact box'>
      <Navbar />
      <p style={{ fontSize: '50px', fontFamily: 'sans-serif', fontStyle: 'italic', marginLeft: '25%', marginTop: '15%' }}>Love to hear from you,</p>
      <p style={{ fontSize: '50px', fontStyle: 'italic', marginLeft: '25%', marginTop: '-59px' }}>Get in touch<span style={{ fontSize: '30px' }}>&#128512;</span></p>
      <div className='contact-form'>
        <form className='grid-container contact_page_item'>
          <div className='grid-item contact_items'>
            <label className='contact_us_lable'>Your Name</label>
            <input className='contact_us_input' placeholder='Ex. John Wick' />
            <label className='contact_us_lable'>What are you interested</label>
            <select className='contact_us_input'>
              <option>E-commerce Website</option>
              <option>Mobile Application</option>
              <option>Blog Site</option>
              <option>Custome Software</option>
              <option>Other</option>
            </select>
            <button>Submit</button>
          </div>
          <div className='grid-item colume2_contact_us contact_items'>
            <label className='contact_us_lable'>You Email</label>
            <input className='contact_us_input' placeholder='Ex. johnwick@gmail.com '/>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Contact
