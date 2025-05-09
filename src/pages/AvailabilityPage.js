// src/pages/AvailabilityPage.js
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import ProfileHeader from '../components/ProfileHeader';
import therapists from '../data/therapistsData';
import './AvailabilityPage.css';

const AvailabilityPage = () => {
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [date, setDate] = useState(new Date());
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    // Προσομοίωση API κλήσης για διαθεσιμότητα
    const fetchAvailability = async () => {
      const data = [
        { time: '09:00', available: true },
        { time: '10:00', available: false },
        { time: '11:00', available: true },
        { time: '14:00', available: true },
        { time: '15:00', available: false },
        { time: '16:00', available: true },
      ];
      setAvailability(data);
    };
    if (selectedTherapist) {
      fetchAvailability();
    }
  }, [selectedTherapist, date]);

  return (
    <div className="availability-page">
      <ProfileHeader />
      <main className="availability-content">
        <div className="container">
          <h1>Διαθεσιμότητα Ψυχολόγων</h1>
          <div className="therapist-selector">
            <label>Επιλέξτε Ψυχολόγο:</label>
            <select onChange={(e) => setSelectedTherapist(therapists.find(t => t.id === parseInt(e.target.value)))}>
              <option value="">-- Επιλέξτε --</option>
              {therapists.map((therapist) => (
                <option key={therapist.id} value={therapist.id}>
                  {therapist.name}
                </option>
              ))}
            </select>
          </div>
          {selectedTherapist && (
            <>
              <div className="calendar-section">
                <Calendar onChange={setDate} value={date} minDate={new Date()} />
              </div>
              <div className="availability-slots">
                <h3>Διαθέσιμες Ώρες για {selectedTherapist.name} στις {date.toLocaleDateString()}</h3>
                <div className="slots">
                  {availability.map((slot) => (
                    <div
                      key={slot.time}
                      className={`slot ${slot.available ? 'available' : 'booked'}`}
                    >
                      {slot.time} {slot.available ? '(Διαθέσιμο)' : '(Κλεισμένο)'}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default AvailabilityPage;