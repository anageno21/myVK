// src/components/LoginFormContent.js
import React, { useState } from 'react';

const LoginFormContent = ({ onSubmit, error }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <div className="login-form">
      <h2>Σύνδεση</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Όνομα Χρήστη:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Κωδικός:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Σύνδεση</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LoginFormContent;