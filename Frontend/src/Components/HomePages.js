import React from 'react';
import './HomePages.css';
import Navbar from './Navbar';
import Slider from './Slider';
const HomePages = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="content">
          <h4 className="pink-heading">LADIES, ARE YOU MISSING OPPORTUNITIES ?</h4>
          <h1>Climb the Career <br></br> Ladder on <span className='pink-heading'> SheRise</span></h1>
          <p>SheRise is the premier job portal for women, offering a wide range of job opportunities in a variety of industries. Our mission is to empower women in the workforce by connecting them with female-friendly employers and providing resources for career advancement.</p>
        </div>
        <div className="images">
          <div className="image-column">
            <div className="image-card">
              <img src="https://ik.imagekit.io/sayancr777/tr:w-150/SheRise/girl13.jpg?updatedAt=1689504272833" alt='' />
            </div>
          </div>
          <div className="image-column">
            <div className="image-card">
              <img src="https://ik.imagekit.io/sayancr777/tr:w-100/SheRise/girl11.jpeg?updatedAt=1689504268533" alt='' />
            </div>
            <div className="image-card">
              <img src='https://ik.imagekit.io/sayancr777/tr:w-100/SheRise/girl15.jpg?updatedAt=1689504269740' alt='' />
            </div>
            <div className="image-card">
              <img src='https://ik.imagekit.io/sayancr777/tr:w-100/SheRise/girl14.jpg?updatedAt=1689504273280' alt='' />
            </div>
          </div>
          <div className="image-column">
            <div className="image-card">
              <img src='https://ik.imagekit.io/sayancr777/tr:w-100/SheRise/girl2.jpg?updatedAt=1689504273895' alt='' />
            </div>
            <div className="image-card">
              <img src='https://ik.imagekit.io/sayancr777/tr:w-100/SheRise/girl16.jpg?updatedAt=16895042729' alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='compnay-logo'>
        <div className='compnay-logo-main'>
          <img src={`${process.env.PUBLIC_URL}/companyphotos/shopify.png`} alt="Shopify Logo" />
          <img src={`${process.env.PUBLIC_URL}/companyphotos/paypal.png`} alt="Paypal Logo" />
          <img src={`${process.env.PUBLIC_URL}/companyphotos/amazon.png`} alt="Amazon" />
          <img src={`${process.env.PUBLIC_URL}/companyphotos/aribnb.png`} alt="Aribnb Logo" />
          <img src={`${process.env.PUBLIC_URL}/companyphotos/slack.png`} alt="Slack Logo" />
        </div>
        <div className='compnay-logo-second'>
          <img src={`${process.env.PUBLIC_URL}/companyphotos/google.png`} alt="Google Logo" />
          <img src={`${process.env.PUBLIC_URL}/companyphotos/microsoft.jpeg`} alt="Microsoft Logo" />
        </div>
      </div>
      <div className='ourservice'>
        <div className='our-service-main'>
          <div className='service-heading'>
            <p>Our Service</p>
          </div>
          <div className='service-card'>
            <div className='service-card-inner'>
              <div className='image'>
                <img src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service1.webp?updatedAt=1689492296241' alt=''></img>
              </div>
              <div className='heading'>
                <p>AI Assitant</p>
              </div>
              <div className='description'>
                Atom is an AI assistant build with help of openai api which provides you 2 different services. This ai bot is super powerful and can present you with perfect results within a thanos's snap.
              </div>
            </div>
            <div className='service-card-inner'>
              <div className='image'>
                <img src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service2.svg?updatedAt=1689493101201' alt=''></img>
              </div>
              <div className='heading'>
                <p>One-2-One Mentorship</p>
              </div>
              <div className='description'>
                Mentors from all big tech companies (Faang Companies) are here to assist you in your needs. You will be provided personalized chatting with them.
              </div>
            </div>
            <div className='service-card-inner'>
              <div className='image'>
                <img src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service3.webp?updatedAt=1689493101686' alt=''></img>
              </div>
              <div className='heading'>
                <p>5 Category Job Listing</p>
              </div>
              <div className='description'>
                To eliminate crowding, we have separated our job listing into 5 different categories i.e, hackathons, internships, workshops, hirings and conferences.
              </div>
            </div>
            <div className='service-card-inner'>
              <div className='image'>
                <img src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service4.webp?updatedAt=1689493101109' alt=''></img>
              </div>
              <div className='heading'>
                <p>Bookmarking and Filtering Jobs</p>
              </div>
              <div className='description'>
                To come and see later the job postings, we have introduced the bookmark function to save for later use also the filtering option to filter the jobs by their titles.
              </div>
            </div>
            <div className='service-card-inner'>
              <div className='image'>
                <img src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service5.webp?updatedAt=1689493101582' alt=''></img>
              </div>
              <div className='heading'>
                <p>Scholarship</p>
              </div>
              <div className='description'>
                We are raising funds from different people all over the world to give the underpreviledged girls a proper guidance and shine in the tech field.
              </div>
            </div>
            <div className='service-card-inner'>
              <div className='image'>
                <img src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service6.webp?updatedAt=1689493101339' alt=''></img>
              </div>
              <div className='heading'>
                <p>Passwordless Login</p>
              </div>
              <div className='description'>
                Remembering passwords for each and every other websites is a very hectic task, thats why SheRise have brought you the passwordless authentication.
              </div>
            </div>
            <div className='service-card-inner'>
              <div className='image'>
                <img src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service7.webp?updatedAt=1689493101242' alt=''></img>
              </div>
              <div className='heading'>
                <p>Get Notified</p>
              </div>
              <div className='description'>
                Whenever there will be any new job coming in our website, you will be notified through your email so that you don't miss any opportunity.
              </div>
            </div>
            <div className='service-card-inner'>
              <div className='image'>
                <img src='	https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service8.webp?updatedAt=1689493101221' alt=''></img>
              </div>
              <div className='heading'>
                <p>24/7 Technical Support</p>
              </div>
              <div className='description'>
                If anybody faces any technical issue with our website, we are here to give backup and are available 24*7 hours online with all our tech team (just fill the contact form).
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='whysherise'>
        <div className='whysherise-main'>
          <div className='left'>
            <img src='https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/whysherise.svg?updatedAt=1689503441644' alt=''></img>
          </div>
          <div className='right'>
            <div className='heading-main'>
              <p className='right-heading1'>Reasons for choosing us</p>
              <p className='right-heading2'>Why SheRise ?</p>
            </div>
            <div className='all-reasons'>
              <div className='reason1'>
                <div className='heading'>
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                    <path d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9 8 4 8.9 4 10 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 10 C 20 8.9 19.1 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 8 14 C 8.55 14 9 14.45 9 15 C 9 15.55 8.55 16 8 16 C 7.45 16 7 15.55 7 15 C 7 14.45 7.45 14 8 14 z M 12 14 C 12.55 14 13 14.45 13 15 C 13 15.55 12.55 16 12 16 C 11.45 16 11 15.55 11 15 C 11 14.45 11.45 14 12 14 z M 16 14 C 16.55 14 17 14.45 17 15 C 17 15.55 16.55 16 16 16 C 15.45 16 15 15.55 15 15 C 15 14.45 15.45 14 16 14 z"></path>
                    </svg>
                    <span>Passwordless Authentication</span>
                  </p>
                </div>
                <div className='desc'>
                  <p>Passwordless authentication is an authentication method in which a user can log in to any particular product or system without entering (and having to remember) a password or any other knowledge-based secret. SheRise provides you with this feature which will help the users to login to their profile seamlessly by eliminating the forget password process from the system.</p>
                </div>
              </div>
              <div className='reason2'>
                <div className='heading'>
                  <p>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M128 0c35.346 0 64 28.654 64 64s-28.654 64-64 64c-35.346 0-64-28.654-64-64S92.654 0 128 0m119.283 354.179l-48-192A24 24 0 0 0 176 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H80a24 24 0 0 0-23.283 18.179l-48 192C4.935 369.305 16.383 384 32 384h56v104c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V384h56c15.591 0 27.071-14.671 23.283-29.821z"></path>
                    </svg>
                    <span>Female Oriented Jobs</span>
                  </p>
                </div>
                <div className='desc'>
                  We are the first one to come up with the onestop job portal only for the females. Here all the jobs which are listed are at first verified by our very own recruiters to eliminate false listings and we are providing the job listings under 5 main criteria i.e, Conferences, Hackathons, Hirings, Internships and Workshops.
                </div>
              </div>
              <div className='reason3'>
                <div className='heading'>
                  <p>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"></path>
                    </svg>
                    <span>Supporting Underprivileged</span>
                  </p>
                </div>
                <div className='desc'>
                  Since we are non-profit organization, we are raising funds to directly help those female childrens who are not able to pursue their career in tech due to financial or any other reasons.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='ourmentor'>
        <div className='ourmentor-main'>
          <div className='om-heading'>
            <p>What our Mentor says ?</p>
          </div>
          <div className='mentor-quote'>
            <div className='quote1'>
              <div className='image'>
                <img src='https://sherise.vercel.app/static/media/mentor3.91b77fad3c01016e08dc.png' alt=''></img>
              </div>
              <div className='quote-desc'>
                <p>Make sure your LinkedIn profile is up-to-date and that you have a portfolio of your work online. This will make it easy for recruiters to find you and learn about your skills and experience.</p>
              </div>
              <div className='mentor-desc'>
                <p>Isabella Anderson</p>
                <p>Recruiter</p>
              </div>
            </div>
            <div className='quote1'>
              <div className='image'>
                <img src='https://sherise.vercel.app/static/media/mentor5.d3d29668457db3c97d8c.png' alt=''></img>
              </div>
              <div className='quote-desc'>
                <p>Be proactive and persistent. Reach out to companies you're interested in working for and let them know you're available. Follow up with recruiters after you've applied for a job to check on the status of your application and express your continued interest in the position.</p>
              </div>
              <div className='mentor-desc'>
                <p>Brittany Thompson</p>
                <p>Hiring Manager</p>
              </div>
            </div>
            <div className='quote1'>
              <div className='image'>
                <img src='https://sherise.vercel.app/static/media/mentor6.3a30a9072e17fcfe90e6.png' alt=''></img>
              </div>
              <div className='quote-desc'>
                <p>Networking is key. The more connections you have in your industry, the more likely you are to hear about job opportunities and get your foot in the door at a good company.</p>
              </div>
              <div className='mentor-desc'>
                <p>Melissa Garcia</p>
                <p>Hiring Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slider></Slider>
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
  );
};
export default HomePages;