// src/components/AvailabilityCalendar.js
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AvailabilityCalendar = ({ psychologist, onDateSelect }) => {
  const [date, setDate] = useState(new Date());
  const [availableDays, setAvailableDays] = useState([]);

  useEffect(() => {
    if (psychologist) {
      const mockAvailableDays = [
        '2025-05-10',
        '2025-05-11',
        '2025-05-15',
        '2025-05-16',
      ];
      setAvailableDays(mockAvailableDays);
    }
  }, [psychologist]);

  const tileDisabled = ({ date }) => {
    const formattedDate = date.toISOString().split('T')[0];
    return !availableDays.includes(formattedDate);
  };

  const handleDateChange = (value) => {
    setDate(value);
    onDateSelect(value.toISOString().split('T')[0]);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '920px', margin: 'auto' }}>
      <h3 style={{ fontSize: '16px', color: '#8EB5BA', marginBottom: '20px' }}>
        Доступные дни для {psychologist || 'выбранного психолога'}
      </h3>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileDisabled={tileDisabled}
        minDate={new Date()}
        locale="ru-RU"
        style={{ fontFamily: 'Playfair Display, serif' }}
      />
    </div>
  );
};

export default AvailabilityCalendar;