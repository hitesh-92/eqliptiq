import React, { useRef, useEffect, useMemo } from 'react';

// Whalesbros

// Inline critical CSS directly in component
const useCriticalCSS = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .eqliptiq-heading {
        color: #fff;
        font: 400 2.5rem/1.2 Georgia,serif;
        letter-spacing: -0.05em;
        text-transform: lowercase;
        text-shadow: 0 -3px 4px #0ff, 0 3px 4px #f0f;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
};

const EqliptiqHeader = React.memo(() => {
  const h1Ref = useRef(null);
  useCriticalCSS();
  // usePulseAnimation(h1Ref);

  // Static markup with size guarantee
  return (
    <h1 
      ref={h1Ref}
      className="eqliptiq-heading"
      style={{
        display: 'inline-block',
        padding: '1.5rem 1.5rem',
        borderRadius: '4px',
        position: 'relative'
      }}
    >
      eqliptiq
    </h1>
  );
});

export default EqliptiqHeader;