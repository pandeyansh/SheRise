import React from 'react'
import Navbar from './Navbar'
import './ContactUs.css';
const ContactUs = () => {
  return (
    <div id='root'>
      <header>
        <Navbar></Navbar>
      </header>
      <div className='slanting-contact-div'></div>
      <div className='contact'>
        <div className='inner-contact'>
          <div className='contact-left'>
            <div className='contact-heading'>
              <p>Help & Support</p>
              <p>Find Bugs? Report us and you will get the hear back within 24hrs</p>
            </div>
            <div className='support-overlay'>
              <p>24 Hours</p>
            </div>
            <div className='ContactFormContainer'>
              <form>
                <div className='con-name'>
                  <label>
                    <input type='text' name='Name' id='name' placeholder='First Name*' required></input>
                  </label>
                </div>
                <label className='con-email'>
                  <input type='email' name='_replyto' id='email' placeholder='Your Email*' required>
                  </input>
                </label>
                <label className='con-text'>
                  <input type='text' name='_replyto' id='board' placeholder='Subject*' required>
                  </input>
                </label>
                <label>
                  <textarea className='contact-textarea' name='message' rows="6" placeholder='Your Message*' required></textarea>
                  </label>
                <button className='contact-send-button' type='sumbit' value="send" >Send</button>
              </form>
            </div>
          </div>
          <div className='contact-right'>
            <img src={`${process.env.PUBLIC_URL}/photos/contactus.jpg`} alt='' style={{ width: '100%', height: 'auto' }}></img>
          </div>
        </div>
      </div>
      <div className='footer-main-outer'>
        <div className='footer'>
         <div className='lower-footer'>
            <div className='copyright'>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"></path>
              </svg>
              <p>2023<span> SheRise</span> - All Rights Reserved</p>
            </div>
            <div className='designation'>
              <p>Developed by <span>Ansh Pandey</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactUs;