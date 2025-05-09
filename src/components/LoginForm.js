// src/components/LoginForm.js
import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import LoginFormContent from './LoginFormContent';

// Ορίστε το Stripe publishable key (αντικαταστήστε με το δικό σας)
const stripePromise = loadStripe('your-publishable-key-here');

const LoginFormWrapper = ({ onSuccessfulLogin }) => {
  const [error, setError] = useState('');

  const handleLogin = async (userData) => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        onSuccessfulLogin(data.userId, userData.username); // Καλούμε την onSuccessfulLogin
      } else {
        setError(data.error || 'Αποτυχία σύνδεσης');
      }
    } catch (error) {
      setError('Αποτυχία σύνδεσης: ' + error.message);
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <LoginFormContent onSubmit={handleLogin} error={error} />
    </Elements>
  );
};

export default LoginFormWrapper;