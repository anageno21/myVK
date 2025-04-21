// src/components/ServiceTwoColumnSection.js
import React from 'react';
import './ServiceTwoColumnSection.css';

const ServiceTwoColumnSection = () => {
  return (
    <section className="service-two-column-section">
      <div className="container">
        <div className="service-two-column-grid">
          <div className="column-left">
            <img src="/images/section/Relationship.jpg" alt="Межличностные отношения" />
          </div>
          <div className="column-right">
            <h3>Межличностные отношения</h3>
            <p>
              Научитесь слышать и не предавать себя в любых отношениях. Здесь мы разбираемся, почему повторяются болезненные сценарии, учимся говорить о своих чувствах и строить контакт — честно, спокойно и с уважением к себе.
            </p>
            <p>
              Эта услуга поможет вам понять, как:
              <ul>
                <li>Распознавать и прерывать токсичные сценарии в отношениях.</li>
                <li>Говорить о своих потребностях и границах без страха осуждения.</li>
                <li>Строить здоровые и поддерживающие связи с близкими.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTwoColumnSection;