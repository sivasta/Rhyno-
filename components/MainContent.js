import React, { useEffect, useRef } from 'react';

function MainContent() {
  const words = ['Elegance', 'Minimalism', 'Comfort'];
  const paragraphRef = useRef(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const changeWord = () => {
      currentIndexRef.current = (currentIndexRef.current + 1) % words.length;
      if (paragraphRef.current) {
        paragraphRef.current.textContent = words[currentIndexRef.current];
      }
    };

    const intervalId = setInterval(changeWord, 2000);

    return () => clearInterval(intervalId);
  }, []); // No dependencies needed, `words` is a constant

  return (
    <main>
      <p id="changing-word" ref={paragraphRef}>Elegance</p>
    </main>
  );
}

export default MainContent;
