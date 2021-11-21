import React from 'react';
import img from './img/card-image.jpg';
import './feed.css';

const Feed = (props) => {
  return (
    <div className="feed">
        <div className="feed-card">
            <div className="card-image">
                <img src={img} className="" height="200px"></img>
            </div>
            <div className="card-text">
                <h1>Heading</h1>
                <h2>Subheading</h2>
                <p>This is some text</p>
            </div>    
        </div>
    </div>
  );
};

export default Feed;