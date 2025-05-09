// src/components/BookingModal.js
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useAuth } from '../context/AuthContext';
import './BookingModal.css';

const BookingForm = ({ therapist, onClose }) => {
  const { user } = useAuth();
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [sessionType, setSessionType] = useState('individual');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingError, setBookingError] = useState('');

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      const times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
      setAvailableTimes(times);
    };
    fetchAvailableTimes();
  }, [date]);

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!user) {
      setBookingError('Πρέπει να συνδεθείτε για να κάνετε κράτηση.');
      return;
    }

    if (!selectedTime) {
      setBookingError('Παρακαλώ επιλέξτε ώρα.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          therapistId: therapist.id,
          userId: user.userId, // Χρήση του userId από το AuthContext
          date: date.toISOString().split('T')[0],
          time: selectedTime,
          sessionType,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setBookingSuccess(true);
        setBookingError('');
        setTimeout(onClose, 2000);
      } else {
        setBookingError(data.error || 'Αποτυχία κράτησης');
      }
    } catch (error) {
      setBookingError('Αποτυχία κράτησης: ' + error.message);
    }
  };

  return (
    <div className="booking-form-container">
      <div className="modal-header">
        <h2>Κράτηση με {therapist.name}</h2>
        <button className="modal-close-button" onClick={onClose}>
          ×
        </button>
      </div>
      <form onSubmit={handleBooking}>
        <div className="form-group">
          <label>Ημερομηνία:</label>
          <div className="calendar-wrapper">
            <Calendar onChange={setDate} value={date} minDate={new Date()} />
          </div>
        </div>
        <div className="form-group">
          <label>Ώρα:</label>
          <div className="time-slots">
            {availableTimes.map((time) => (
              <button
                type="button"
                key={time}
                className={selectedTime === time ? 'selected' : ''}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Τύπος Συνεδρίας:</label>
          <select value={sessionType} onChange={(e) => setSessionType(e.target.value)}>
            <option value="individual">Ατομική</option>
            <option value="couple">Ζευγαριού</option>
          </select>
        </div>
        <button type="submit" className="booking-button" disabled={!selectedTime}>
          Επιβεβαίωση Κράτησης
        </button>
      </form>
      {bookingSuccess && (
        <p className="success-message">Η κράτηση ολοκληρώθηκε με επιτυχία!</p>
      )}
      {bookingError && <p className="error-message">{bookingError}</p>}
    </div>
  );
};

const BookingModal = ({ therapist, onClose }) => {
  if (!therapist) return null;

  return (
    <div className="booking-modal-overlay">
      <div className="booking-modal">
        <BookingForm therapist={therapist} onClose={onClose} />
      </div>
    </div>
  );
};

export default BookingModal;