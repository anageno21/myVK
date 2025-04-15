import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/animate.min.css';
import './styles/swiper-bundle.min.css';
import './styles/styles.css';
import './styles/icomoon/style.css';
import App from './App';

// Περιμένουμε το DOM να φορτώσει
window.onload = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};