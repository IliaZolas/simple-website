import React from 'react';
import img from './img/banner.jpg';
import './banner.css';


const Banner = (props) => {
  return (
    <div className="banner">
        <div className="banner-image">
                <img src={img} className="banner-img"></img>
        </div>
        <div className="banner-text">
                <h1>This is a heading</h1>
                <h2>This is sub text</h2>
        </div>
    </div>
  );
};

export default Banner;