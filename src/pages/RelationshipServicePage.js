// src/pages/RelationshipServicePage.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import ServiceTwoColumnSection from '../components/ServiceTwoColumnSection';
import VideoHighlightSection from '../components/VideoHighlightSection';
import '../components/VictoriaKotenkoProfilePage.css';

const RelationshipServicePage = () => {
  // Scroll στην κορυφή της σελίδας όταν φορτώνεται
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Το [] εξασφαλίζει ότι αυτό εκτελείται μόνο όταν φορτώνεται η σελίδα

  return (
    <div className="victoria-kotenko-profile-page">
      <ProfileHeader />
      <ServiceTwoColumnSection />
      <VideoHighlightSection />
      <main className="therapist-profile-content">
        <div className="container">
          <div className="profile-body">
            <h3>Подробности Услуги</h3>
            <p>
              <strong>Межличностные отношения</strong> — это программа, που σας βοηθά να βελτιώσετε τις σχέσεις σας με τον εαυτό σας και τους άλλους. 
              Научитесь слышать и не предавать себя в любых отношениях. Здесь мы разбираемся, почему повторяются болезненные сценарии, учимся говорить о своих чувствах и строить контакт — честно, спокойно и с уважением к себе.
            </p>
            <p>
              Через эту услугу вы узнаете, как:
              <ul>
                <li>Распознавать и прерывать токсичные сценарии в отношениях.</li>
                <li>Говорить о своих потребностях и границах без страха осуждения.</li>
                <li>Строить здоровые и поддерживающие связи с близкими.</li>
              </ul>
            </p>
            <p>
              Наши сессии проходят онлайн и длятся один академический час (50 минут). Это время, целиком посвящённое вам. Мы создаём безопасное пространство, где вы можете быть собой и работать над своими отношениями.
            </p>
            <button className="book-session-button">Записаться на Сессию</button>
            <Link to="/" className="learn-more-button">
              Вернуться к Услугам
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RelationshipServicePage;