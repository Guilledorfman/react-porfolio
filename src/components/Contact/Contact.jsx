import React from 'react';
import './Contact.scss'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  return( 
  
    <div id="contact" className="contact">  
      <h2>Contact</h2>
      <div className="contact-cont">
        <div className="left">
          <p>You can find me on any of these platforms:</p>
          <div className="links">
            <a href="https://github.com/Guilledorfman" target='_blank'>
              <GitHubIcon sx={{ fontSize: 30 }}/>
            </a>
            <a href="https://www.linkedin.com/in/guille-dorfman/" target='_blank'>
              <LinkedInIcon sx={{ fontSize: 30 }}/>
            </a>
            <a href="https://www.instagram.com/dxrfmxn/" target='_blank'>
              <InstagramIcon sx={{ fontSize: 30 }}/>
            </a>
          </div>
          <div className="email">
            <EmailIcon sx={{ fontSize: 20 }}/>
            <i>guillermodorfman@gmail.com</i>
          </div>
        </div>
        <div className="right">
          <p>Or leave a message here:</p>
          <input type="text" placeholder='name' />
          <input type="text" placeholder='email' />
          <textarea placeholder='message' />
          <button>SEND MESSAGE</button>
        </div>
      </div>
    </div>
  )
};

export default Contact;
