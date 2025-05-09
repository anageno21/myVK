// src/components/RegistrationModal.js
import React, { useState } from 'react';
import RegisterFormWrapper from './RegisterForm';
import LoginFormWrapper from './LoginForm';
import { useAuth } from '../context/AuthContext';
import './RegistrationModal.css';

const RegistrationModal = ({ isOpen, onClose }) => {
  const { login, logout, user } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  if (!isOpen) return null;

  const handleSuccessfulAuth = (userId, username) => {
    login(userId, username);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          ×
        </button>
        {user ? (
          <div className="logged-in-message">
            <p>Добро пожаловать, {user.username}!</p>
            <button onClick={logout} className="logout-button">
              Выйти
            </button>
          </div>
        ) : showLogin ? (
          <LoginFormWrapper onSuccessfulLogin={handleSuccessfulAuth} />
        ) : (
          <RegisterFormWrapper onSuccessfulRegister={handleSuccessfulAuth} />
        )}
        {!user && (
          <p className="toggle-form">
            {showLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
            <button onClick={() => setShowLogin(!showLogin)}>
              {showLogin ? 'Регистрация' : 'Вход'}
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;