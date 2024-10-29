// src/components/TextSwitcher.js
import React, { useState, useEffect } from 'react';

const TextSwitcher = () => {
  const [text, setText] = useState('Elegance');

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => {
        if (prevText === 'Elegance') return 'Minimalism';
        if (prevText === 'Minimalism') return 'Comfort';
        return 'Elegance';
      });
    }, 1000); // Update every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return <div>{text}</div>;
};

export default TextSwitcher;
