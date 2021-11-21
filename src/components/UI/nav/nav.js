import React from 'react';
import './nav.css';
import './assets/images/logo.png'; 
import img from './assets/images/logo.png';


const Nav = (props) => {
  return (
    <div className="nav">
        <div className="nav-logo-left">
        <img src={img} height="70px"></img>
        </div>
        <div className="nav-links-right">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Nav;