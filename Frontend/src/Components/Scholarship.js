import React from 'react'
import './Scholarship.css';
import Navbar from './Navbar';
const Scholarship = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <div className='scholarship'>
        <div className='heading-scholarship'>
          <div className='sch-top-heading'>
              <div className='overlay-donate'>
              </div>
              <div className='main-scholarship-heading'>
                <p>Be the reason</p>
                <p>someone smiles today !</p>
              </div>
          </div>
          <div className='sch-bottam-description'>
              <p>We at SheRise want to give the opportunity to all the underprivileged girls, to come and explore the STEM field and excel their career in tech. Donate now and help to shape their futures!</p>
          </div>
          <div className='checkout'>
              <button className='checkout-button'>
                <div className='donate-btn'>
                  <p className='checkout-btn-text'>Donate Now</p>
                </div>
                <div className='purple-btn'>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                  </svg>
                </div>
              </button>
          </div>
        </div>
        <div className='scholarship-banner'>
          <img src='https://sherise.vercel.app/static/media/Donation.71edebfb86df5143bbaea0a1728642a7.svg' alt='' /> 
        </div>
      </div>
      <div className='poor-girl'>
        <div className='poor-girl-section'>
          <div className='poor-girl-section-main'>
            <div className='poor-girl-desc'>
              <div className='poor-girl-desc-heading'>
                <p></p>
              </div>
              <div className='poor-girl-sch-description'>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className='scholarship-form'>
          <div className='scholarship-form-desc'>
            <p>Scholarship Form</p>
            <p>*Fill the below form to avail for the schloarship</p>
          </div>
          <div className='sch-contactFormContainer'>
            <form>
              <div className='sch-name'>
                <label>
                  <input type='text' name='Name' id='name' placeholder='First Name*' required></input>
                </label>
                <label>
                  <input type='text' name='Name' id='name' placeholder='Last Name*' required></input>
                </label>
              </div>
              <label className='sch-email'>
                <input type='email' name='_replyto' id='email' placeholder='Your Email*' required>
                </input>
              </label>
              <label className='sch-text'>
                <input type='text' name='_replyto' id='board' placeholder='Your 10th Board Marks*' required>
                </input>
              </label>
              <label className='sch-text'>
                <input type='text' name='_replyto' id='board' placeholder='Your 12th Board Marks*' required>
                </input>
              </label>
              <label>
                <textarea className='scho-textarea' name='message' rows="6" placeholder='Why you need this scholarship? Write in brief*' required></textarea>
              </label>
              <button className='send-button' type='sumbit' value="send" >Send</button>
            </form>
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
    </>
  )
}
export default Scholarship;