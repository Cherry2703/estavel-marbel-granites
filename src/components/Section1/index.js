import React from "react";
import "./index.css"; 

const Section1 = () => {
  return (
    <div className="video-section">
      <video className="background-video" autoPlay muted loop>
        <source src="https://res.cloudinary.com/ramcharan/video/upload/v1733983903/Estavel/marble-video2_mlefzj.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="captions-container">
        <div className="scrolling-caption">
          <p>Transform Your Space, One Step at a Time</p>
        </div>
        <div className="scrolling-caption">
          <p>Make a Statement with Your Floors</p>
        </div>
        <div className="scrolling-caption">
          <p>Be Bold, Be Unique, Be Different</p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
