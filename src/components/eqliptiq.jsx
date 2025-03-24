import React, { useState, useEffect } from 'react';

/*
 * EDIT THIS BECAUSE NO GOOD
 * REMOVE BLOAT
 * KEEP PINK/BLUE. GOOD COLOUR. the prompt
*/

const EqliptiqHeader = () => {
  // State for storing dynamic shadow properties
  const [shadows, setShadows] = useState([]);
  
  // Color configuration object for easy maintenance
  const colors = {
    primary: 'white',
    accent2: '#0ff',  // Cyan for "eq"
    accent1: '#f0f',  // Magenta for "iq"
    shadowColors: ['#0ff', '#f0f', '#333'] // Neon shadows + dark shadow
  };

  // Shadow animation effect
  useEffect(() => {
    const generateShadows = () => {
      const newShadows = colors.shadowColors.map((color, index) => ({
        x: Math.random() * 10 - 5,  // Random X position (-5 to 5)
        y: Math.random() * 10 - 5,  // Random Y position (-5 to 5)
        blur: 5 + Math.random() * 5, // Blur between 5-10px
        color: color
      }));
      setShadows(newShadows);
    };

    // Initial call to avoid empty first render
    generateShadows();
    
    // Set up animation interval
    const interval = setInterval(generateShadows, 50);
    return () => clearInterval(interval);
  }, [colors.shadowColors]);

  // Convert shadow objects to CSS string
  const shadowCSS = shadows.map(s => 
    `${s.x}px ${s.y}px ${s.blur}px ${s.color}`
  ).join(', ');

  return (
    <div style={{ 
      background: colors.background, 
      padding: '2rem',
      display: 'inline-block'
    }}>
      <h1 style={{
        color: colors.primary,
        textShadow: shadowCSS,
        fontSize: '3rem',
        fontWeight: 'bold',
        transition: 'text-shadow 0.5s ease-out'
      }}>
        {/* Accentuated parts with neon colors */}
        <span style={{ color: colors.accent1 }}>eq</span>
        lipt
        <span style={{ color: colors.accent2 }}>iq</span>
      </h1>
    </div>
  );
};

export default EqliptiqHeader;