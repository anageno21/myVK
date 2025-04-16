import React, { useEffect } from 'react';
import WOW from 'wowjs';

function WowWrapper({ children }) {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  return <>{children}</>;
}

export default WowWrapper;