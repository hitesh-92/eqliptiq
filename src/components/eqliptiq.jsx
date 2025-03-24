import React, { useRef, useEffect } from 'react';
import './eqliptiq.css';

// Static configuration to prevent unnecessary recalculations
const COLORS = {
  primary: 'white',
  accent1: '#f0f', // Magenta for "eq"
  accent2: '#0ff', // Cyan for "iq"
  shadowColors: ['#0ff', '#f0f', '#333'] // Fixed shadow color order
};

// Pre-allocated array to hold shadow values (minimizes garbage collection)
const shadowCache = new Array(COLORS.shadowColors.length);

/**
 * Generates a CSS text-shadow string with minimal object allocation.
 * @returns {string} A text-shadow CSS value composed of three shadow values.
 * 
 * Time Complexity: O(n) where n is shadowColors.length (constant: 3)
 * Space Complexity: O(1) (reuses pre-allocated array)
 */
const generateShadows = () => {
  for (let i = 0; i < COLORS.shadowColors.length; i++) {
    // Calculate random offsets and blur value
    const offsetX = (Math.random() * 10 - 5).toFixed(2);
    const offsetY = (Math.random() * 10 - 5).toFixed(2);
    const blur = (5 + Math.random() * 5).toFixed(2);
    shadowCache[i] = `${offsetX}px ${offsetY}px ${blur}px ${COLORS.shadowColors[i]}`;
  }
  return shadowCache.join(', ');
};

const EqliptiqHeader = () => {
  // DOM reference to update styles directly without triggering re-renders
  const h1Ref = useRef(null);
  
  // Store the initial shadow configuration to avoid recalculating on mount
  const initialShadow = useRef(generateShadows());

  /**
   * Animation effect to update text-shadow using direct DOM manipulation.
   * This avoids React state updates, keeping re-render cycles to a minimum.
   * The function throttles the updates to ~30fps.
   */
  useEffect(() => {
    let animationFrame;
    let lastUpdate = 0;
    const throttleMs = 15; // ~30fps throttle

    const updateShadows = (timestamp) => {
      if (!h1Ref.current) return;
      if (timestamp - lastUpdate > throttleMs) {
        h1Ref.current.style.textShadow = generateShadows();
        lastUpdate = timestamp;
      }
      animationFrame = requestAnimationFrame(updateShadows);
    };

    animationFrame = requestAnimationFrame(updateShadows);
    
    // Cleanup to cancel animation when the component unmounts
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="eqliptiq-header">
      {/* The initial text-shadow is applied via inline style; further updates are done via DOM */}
      <h1
        className="eqliptiq-heading"
        style={{ textShadow: initialShadow.current }}
        ref={h1Ref}
      >
        <span className="eqliptiq-accent1">eq</span>
        <span className="eqliptiq-transition">lipt</span>
        <span className="eqliptiq-accent2">iq</span>
      </h1>
    </div>
  );
};

// Wrap with React.memo to avoid unnecessary re-renders from parent updates
export default React.memo(EqliptiqHeader);
