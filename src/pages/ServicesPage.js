// src/pages/ServicesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/ServicesSection.css';

const ServicesPage = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <span className="sub-title">Our Services</span>
          <h3>Основные направления поддержки</h3>
          <p>Explore our specialized services designed to support your emotional well-being and personal growth.</p>
        </div>
        <div className="services-grid">
          <div className="service-item">
            <img src="/images/section/relationship.jpg" alt="Межличностные отношения" />
            <h5><Link to="/service-details">Межличностные отношения</Link></h5>
            <p>Научитесь слышать и не предавать себя в любых отношениях. Мы разбираемся, почему повторяются болезненные сценарии, учимся говорить о своих чувствах и строить контакт — честно, спокойно и с уважением к себе.</p>
            <Link to="/service-details" className="read-more">Читать больше</Link>
          </div>
          <div className="service-item">
            <img src="/images/section/stress-anxiety.jpg" alt="Стресс и тревожность" />
            <h5><Link to="/service-details">Стресс и тревожность</Link></h5>
            <p>Когда всё внутри слишком долго было в напряжении. Разберётесь, как стресс и тревожность накапливаются, влияют на тело и поведение. Вы научитесь восстанавливаться и регулировать напряжение.</p>
            <Link to="/service-details" className="read-more">Читать больше</Link>
          </div>
          <div className="service-item">
            <img src="/images/section/Self-esteem.jpg" alt="Самооценка и уверенность в себе" />
            <h5><Link to="/service-details">Самооценка и уверенность в себе</Link></h5>
            <p>Строим уверенность, повышаем самооценку — шаг за шагом. Узнайте, как замечать свои сильные стороны и поддерживать себя в трудные моменты.</p>
            <Link to="/service-details" className="read-more">Читать больше</Link>
          </div>
          <div className="service-item">
            <img src="/images/section/Adaptation.jpg" alt="Адаптация" />
            <h5><Link to="/service-details">Адаптация</Link></h5>
            <p>Как не потерять себя в новой реальности. Научитесь сохранять психическое равновесие в условиях перемен с τεχνικές гибкости мышления.</p>
            <Link to="/service-details" className="read-more">Читать больше</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;