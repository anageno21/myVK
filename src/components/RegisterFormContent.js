// src/components/RegisterFormContent.js
import React, { useState } from 'react';

const RegisterFormContent = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <div>
      <h2>Εγγραφή / Σύνδεση</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Όνομα Χρήστη:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            required
          />
        </div>
        <div>
          <label>Κωδικός:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
          />
        </div>
        <button type="submit">Υποβολή</button>
      </form>
    </div>
  );
};

export default RegisterFormContent;