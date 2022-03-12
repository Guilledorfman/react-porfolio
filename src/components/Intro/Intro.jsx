import React from 'react';
import Logo from '../Logo/Logo';
import './Intro.scss'

const Intro = () => {
  return (
  <div className="intro">
  <div id="intro"></div>
    <div className="left">
      <div className="img"></div>
    </div>
    <div className="right">
    <div className="introduction">
        <p className="hello">Hello! I'm</p>
        <h1 className="name">GUILLERMO DORFMAN</h1>
      </div>
      <p className="intro-text">A <b>front-end web developer</b> passionate about creating interactive applications and experiences on the web.</p>
    </div>
  </div>
  )
};

export default Intro;
