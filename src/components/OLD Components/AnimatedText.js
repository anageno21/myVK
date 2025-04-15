import React, { useState, useEffect } from 'react';

const AnimatedText = ({ words, effect = 'fade' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500); // Animation delay (matches the CSS animation duration)

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={`animationtext ${effect}`}>
      <span className="cd-words-wrapper">
        {words.map((word, index) => (
          <span
            key={index}
            className={`item-text ${index === currentIndex ? 'is-visible' : 'is-hidden'}`}
          >
            {effect === 'letters' ? (
              word.split('').map((letter, i) => (
                <i key={i} style={{ transitionDelay: `${i * 50}ms` }}>
                  {letter}
                </i>
              ))
            ) : (
              word
            )}
          </span>
        ))}
      </span>
    </span>
  );
};

export default AnimatedText;