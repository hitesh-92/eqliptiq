// UnderConstruction.js
import React from 'react';
import './UnderConstruction.css';

const UnderConstruction = () => {
  return (
    <div className="construction-container">
      <div className="elliptic-logo">
        <div className="logo-core"></div>
        <div className="logo-tool hammer"></div>
        <div className="logo-tool wrench"></div>
      </div>
      <h1 className="title">Eqliptiq</h1>
      <div className="construction-content">
        <h2>Under Construction</h2>
        <p>We're building something extraordinary! 🚧</p>
        <p style={{marginTop:"20px", color:"black"}}>"From struggle to flow, from thought to instinct—the art of mastery is becoming what you do." - Abaraham Maslow</p>
        <p>Eqliptiq (ec-lip-tic) is a multi-sensory quiz-based learning platform</p>
        <p style={{color:"black"}}>Inspired by techniques from mad geniuses like Salvitore Dali to PhD Academics</p>
        <p>Discover Here... Coming soon...</p>
      </div>
      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
    </div>
  );
};

export default UnderConstruction;