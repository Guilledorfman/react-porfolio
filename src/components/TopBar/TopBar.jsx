import React, {useState} from 'react';
import './TopBar.scss'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const TopBar = ({menuOpen, setMenuOpen}) => {


  return <div className={'topbar ' + (menuOpen && 'active')}>
          <div className="wrapper">

            <div className="left">
                <a href="#intro" className='logo'>
                  <img src="https://res.cloudinary.com/dxoqq4yvo/image/upload/v1645052793/porfolio/gdlogo_alovpj.png" alt="Guillermo Dorfman"/>
                </a>
                <a href="https://github.com/Guilledorfman" target='_blank' className="itemContainer">
                    <GitHubIcon className="icon"/>
                </a>
                <a href="https://www.linkedin.com/in/guille-dorfman/" target='_blank' className="itemContainer">
                    <LinkedInIcon className="icon"/>
                </a>
                <a href="mailto: guillermodorfman@gmail.com" target='_blank' className="itemContainer">
                    <EmailIcon className="icon"/>
                </a>
            </div>

            <div className="right">
              <div onClick={()=>{setMenuOpen(!menuOpen)}} className="hamburger">
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
              </div>
            </div>
          </div>
        </div>;
};

export default TopBar;
