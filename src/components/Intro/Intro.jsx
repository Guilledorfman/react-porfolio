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
      <h1><Logo/></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, laudantium.</p>
    </div>
  </div>
  )
};

export default Intro;
