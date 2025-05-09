// src/components/BookingForm.js
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import AvailabilityCalendar from './AvailabilityCalendar';

const stripePromise = loadStripe('your-publishable-key-here');

const BookingForm = ({ psychologist }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [bookingStatus, setBookingStatus] = useState('');
  const [paymentError, setPaymentError] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (selectedDate) {
      const mockTimes = ['10:00', '11:00', '14:00', '15:00'];
      setAvailableTimes(mockTimes);
    }
  }, [selectedDate]);

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!psychologist || !selectedDate || !selectedTime) {
      setBookingStatus('Пожалуйста, выберите дату и время.');
      return;
    }

    if (!stripe || !elements) {
      setPaymentError('Stripe не инициализирован.');
      return;
    }

    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 5000,
          currency: 'eur',
        }),
      });
      const { clientSecret } = await response.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: psychologist,
          },
        },
      });

      if (result.error) {
        setPaymentError(result.error.message);
        setBookingStatus('');
      } else if (result.paymentIntent.status === 'succeeded') {
        setPaymentSuccess(true);
        setPaymentError('');
        setBookingStatus(`Резервация успешна! Вы записаны к ${psychologist} на ${selectedDate} в ${selectedTime}.`);
      }
    } catch (error) {
      setPaymentError('Произошла ошибка при обработке платежа.');
    }
  };

  return (
    <div className="booking-form" style={{ padding: '20px', fontFamily: 'Playfair Display, serif' }}>
      <h3 style={{ fontSize: '20px', color: '#8EB5BA', marginBottom: '20px' }}>
        Запишитесь на сессию с {psychologist}
      </h3>
      <form onSubmit={handleBooking}>
        <div style={{ marginBottom: '20px' }}>
          <AvailabilityCalendar
            psychologist={psychologist}
            onDateSelect={setSelectedDate}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '18px', color: '#2F4C66', display: 'block', marginBottom: '5px' }}>
            Выберите время:
          </label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            style={{ padding: '10px', width: '100%', fontSize: '16px' }}
            disabled={!selectedDate}
          >
            <option value="">Выберите время</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '18px', color: '#2F4C66', display: 'block', marginBottom: '5px' }}>
            Данные карты для оплаты:
          </label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#2F4C66',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!stripe}
          style={{
            padding: '10px 20px',
            backgroundColor: '#8EB5BA',
            color: '#fff',
            border: 'none',
            borderRadius: '30px',
            fontSize: '16px',
            fontFamily: 'Playfair Display, serif',
            cursor: 'pointer',
          }}
        >
          Забронировать и оплатить
        </button>
      </form>
      {bookingStatus && (
        <p style={{ marginTop: '20px', fontSize: '16px', color: '#2F4C66' }}>{bookingStatus}</p>
      )}
      {paymentError && (
        <p style={{ marginTop: '20px', fontSize: '16px', color: '#9e2146' }}>{paymentError}</p>
      )}
      {paymentSuccess && (
        <p style={{ marginTop: '20px', fontSize: '16px', color: '#2F4C66' }}>Платёж успешно выполнен!</p>
      )}
    </div>
  );
};

const BookingFormWithStripe = ({ psychologist }) => (
  <Elements stripe={stripePromise}>
    <BookingForm psychologist={psychologist} />
  </Elements>
);

export default BookingFormWithStripe;