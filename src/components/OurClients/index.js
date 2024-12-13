import React from "react";
import "./index.css";

const OurClients = ({logos}) => {

  return (
    <div className="our-clients-video-section">
      <div className="clients-container">
        <p className="clients-title">Our Clients</p>
        <h2 className="clients-subtitle">Our Valuable Clients</h2>
      </div>
      <div className="clients-logos">
        <ul>
          {logos.map((client, index) => (
            <li key={index} className="client-logo-item">
              <img src={client.logo} alt={client.name} className="company-logo-image"/>
            </li>
          ))}
        </ul>
      </div>
      <div className="our-clients-background-video">
        <video className="ourclients-video" autoPlay muted loop>
          <source
            src="https://res.cloudinary.com/ramcharan/video/upload/v1733997609/Estavel/globe-video-stone-pedia_zzeuwk.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default OurClients;
