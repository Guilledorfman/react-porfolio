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
                <a href="#intro" className='logo'><h1>Logo.</h1></a>
                <a href="google.com" target='_blank' className="itemContainer">
                    <GitHubIcon className="icon"/>
                </a>
                <a href="google.com" target='_blank' className="itemContainer">
                    <LinkedInIcon className="icon"/>
                </a>
                <a href="google.com" target='_blank' className="itemContainer">
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
