// src/components/SpecialisingSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SpecialisingSection.css';

const SpecialisingSection = () => {
  return (
    <section className="specialising-section">
      <div className="container">
        <div className="section-header">
          <span className="sub-title">Specialising Services</span>
          <h2>Основные направления поддержки</h2>
          <p>
            Our all-female team provides specialized psychology services to support women in overcoming challenges and achieving emotional well-being.
          </p>
        </div>
        <div className="specialising-content">
          <div className="specialising-grid">
            <Link to="/relationship-service" className="specialising-card" title="Читать больше">
              <img src="/images/section/relationship.jpg" alt="Межличностные отношения" className="card-image" />
              <h3>Межличностные отношения</h3>
              <p>
                Научитесь слышать и не предавать себя в любых отношениях
              </p>
            </Link>
            <Link to="/learn-more" className="specialising-card" title="Читать больше">
              <img src="/images/section/stress-anxiety.jpg" alt="Стресс и тревожность" className="card-image" />
              <h3>Стресс и тревожность</h3>
              <p>
                Когда всё внутри слишком долго было в напряжении
              </p>
            </Link>
            <Link to="/learn-more" className="specialising-card" title="Читать больше">
              <img src="/images/section/Self-esteem.jpg" alt="Самооценка и уверенность в себе" className="card-image" />
              <h3>Самооценка и уверенность в себе</h3>
              <p>
                Строим уверенность, повышаем самооценку — шаг за шагом
              </p>
            </Link>
            <Link to="/learn-more" className="specialising-card" title="Читать больше">
              <img src="/images/section/Adaptation.jpg" alt="Адаптация" className="card-image" />
              <h3>Адаптация</h3>
              <p>
                Как не потерять себя в новой реальности
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialisingSection;