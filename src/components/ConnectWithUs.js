import React, { useState } from 'react';
import './ConnectWithUs.css';

const ConnectWithUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Сообщение отправлено успешно!');
        setFormData({ name: '', phone: '', service: '', message: '' });
      } else {
        setStatus('Не удалось отправить сообщение. Попробуйте снова.');
      }
    } catch (error) {
      setStatus('Произошла ошибка. Попробуйте позже.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="connect-with-us-section">
      <div className="container">
        <div className="split-container">
          <div className="left-section">
            <div className="section-header">
              <h2>
                <span className="highlight">ЗАПИШИТЕСЬ НА</span> Бесплатную Консультацию - Начните <span className="highlight">ВАШ ПУТЬ К ИСЦЕЛЕНИЮ</span>
              </h2>
              <p>Свяжитесь с нашими специалистами сегодня и сделайте первый шаг к более здоровой и счастливой жизни.</p>
            </div>
          </div>
          <div className="right-section">
            <form className="consultation-form" onSubmit={handleSubmit}>
              <h3>Получите Бесплатную Консультацию</h3>
              <input
                type="text"
                name="name"
                placeholder="Ваше Имя*"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Номер Телефона"
                value={formData.phone}
                onChange={handleChange}
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="" disabled>Выберите Услугу</option>
                <option value="therapy">Терапия</option>
                <option value="self-care">Саморазвитие</option>
                <option value="trauma">Травматология</option>
              </select>
              <textarea
                name="message"
                placeholder="Ваше Сообщение"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit">Отправить</button>
              {status && <p className="status-message">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;