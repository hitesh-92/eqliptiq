import React, { useRef, useEffect } from 'react';
import './eqliptiq.css';

// Simplified configuration with only necessary colors for shadows.
const COLORS = {
  shadowColors: ['#0ff', '#f0f', '#333']
};

// Pre-allocated array to reduce garbage collection.
const shadowCache = new Array(COLORS.shadowColors.length);

/**
 * Generates a CSS text-shadow string with minimal allocations.
 * Iterates over the shadow colors, assigning random offsets and blur values.
 */
const generateShadows = () => {
  for (let i = 0; i < COLORS.shadowColors.length; i++) {
    // Calculate random offsets and blur with two decimal precision.
    const offsetX = (Math.random() * 10 - 5).toFixed(2);
    const offsetY = (Math.random() * 10 - 5).toFixed(2);
    const blur = (5 + Math.random() * 5).toFixed(2);
    shadowCache[i] = `${offsetX}px ${offsetY}px ${blur}px ${COLORS.shadowColors[i]}`;
  }
  return shadowCache.join(', ');
};

const EqliptiqHeader = () => {
  const h1Ref = useRef(null);
  // Store initial shadow configuration to avoid triggering re-render.
  const initialShadow = useRef(generateShadows());

  useEffect(() => {
    let animationFrame;
    let lastUpdate = 0;
    const throttleMs = 15; // roughly 30fps throttle interval

    /**
     * Animation loop to update text-shadow for a dynamic effect.
     * Throttled to reduce unnecessary calculations.
     */
    const updateShadows = (timestamp) => {
      if (!h1Ref.current) return;
      if (timestamp - lastUpdate > throttleMs) {
        h1Ref.current.style.textShadow = generateShadows();
        lastUpdate = timestamp;
      }
      animationFrame = requestAnimationFrame(updateShadows);
    };

    animationFrame = requestAnimationFrame(updateShadows);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="eqliptiq-header">
      <h1
        className="eqliptiq-heading"
        style={{ textShadow: initialShadow.current }}
        ref={h1Ref}
      >
        eqliptiq
      </h1>
    </div>
  );
};

// Using React.memo to prevent unnecessary re-renders if props/state don't change.
export default React.memo(EqliptiqHeader);
