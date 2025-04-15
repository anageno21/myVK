import React, { useEffect } from 'react';
import WOW from 'wowjs'; // Αλλαγή από named import σε default import

const WowWrapper = ({ children }) => {
  useEffect(() => {
    // Αρχικοποίηση του WOW
    const wow = new WOW();
    wow.init();

    // Καθαρισμός (optional, αν χρειάζεται)
    return () => {
      wow.sync(); // Συγχρονισμός πριν την καταστροφή, αν χρειάζεται
    };
  }, []);

  return <>{children}</>;
};

export default WowWrapper;