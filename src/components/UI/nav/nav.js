import React from 'react';
import './nav.css';
import './assets/images/logo.png'; 
import img from './assets/images/logo.png';
import {Link} from 'react-router-dom'


const Nav = (props) => {
  return (
    <div className="nav">
        <div className="nav-logo-left">
        <img src={img} height="70px"></img>
        </div>
        <div className="nav-links-right">
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </div>
    </div>
  );
};

export default Nav;