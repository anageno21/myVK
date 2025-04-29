import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import ProfileHeader from '../components/ProfileHeader';
import OurPackages from './OurPackages'; // Εισαγωγή του νέου component
import FAQSection from './FAQSection';
import '../components/HeroSlider.css';
import '../components/ServicesSection.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <ProfileHeader />
      <HeroSlider
        contentType="video"
        src="/videos/services.mp4"
        images={[]}
      />
      {/* Πρώτο Grid με 4 πλαίσια (2x2) - Με κείμενα και υπάρχουσες εικόνες */}
      <section className="new-services-grid-section">
        <div className="new-services-grid">
          <Link to="/service-details" className="service-item" title="Читать больше">
            <div className="image-wrapper">
              <img src="/images/section/relationship.jpg" alt="Межличностные отношения" />
              <div className="image-overlay"></div>
              <h5>Межличностные отношения</h5>
            </div>
            <p>Научитесь слышать и не предавать себя в любых отношениях. Мы разбираемся, почему повторяются болезненные сценарии, учимся говорить о своих чувствах и строить контакт — честно, спокойно и с уважением к себе.</p>
          </Link>
          <Link to="/service-details" className="service-item" title="Читать больше">
            <div className="image-wrapper">
              <img src="/images/section/stress-anxiety.jpg" alt="Стресс и тревожность" />
              <div className="image-overlay"></div>
              <h5>Стресс и тревожность</h5>
            </div>
            <p>Когда всё внутри слишком долго было в напряжении. Разберётесь, как стресс и тревожность накапливаются, влияют на тело и поведение. Вы научитесь восстанавливаться и регулировать напряжение.</p>
          </Link>
          <Link to="/service-details" className="service-item" title="Читать больше">
            <div className="image-wrapper">
              <img src="/images/section/Self-esteem.jpg" alt="Самооценка и уверенность в себе" />
              <div className="image-overlay"></div>
              <h5>Самооценка и уверенность в себе</h5>
            </div>
            <p>Строим уверенность, повыхаем самооценку — шаг за шагом. Узнайте, как замечать свои сильные стороны и поддерживать себя в трудные моменты.</p>
          </Link>
          <Link to="/service-details" className="service-item" title="Читать больше">
            <div className="image-wrapper">
              <img src="/images/section/Adaptation.jpg" alt="Адаптация" />
              <div className="image-overlay"></div>
              <h5>Адаптация</h5>
            </div>
            <p>Как не потерять себя в новой реальности. Научитесь сохранять психическое равновесие в условиях перемен с техниками гибкости мышления.</p>
          </Link>
        </div>
      </section>
      {/* Δεύτερη Εнότητα "Our Method" */}
      <section className="services-section method-section">
        <div className="container">
          <div className="services-header">
            <span className="sub-title">Our Method</span>
            <h3>Наш Подход: Пошаговый План Прогресса</h3>
            <p>Мы разработали структурированный подход, который помогает вам двигаться к личностному росту и эмоциональному благополучию через последовательные этапы. Вот как это работает:</p>
          </div>
          <div className="services-grid">
            <div className="progress-grid">
              <div className="progress-step">
                <div className="progress-circle">1</div>
                <h6>Шаг 1: Пройдите диагностику</h6>
                <p>Краткий тест поможет определить, с чего лучше начать путь к внутреннему балансу.</p>
              </div>
              <div className="progress-step">
                <div className="progress-circle">2</div>
                <h6>Шаг 2: Рекомендованный блок</h6>
                <p>На основе твоих ответов мы предложим тематическое направление, подходящее именно тебе.</p>
              </div>
              <div className="progress-step">
                <div className="progress-circle">3</div>
                <h6>Шаг 3: Выбери формат поддержки</h6>
                <p>Подписка на материалы или индивидуальная работа с психологом — ты выбираешь то, что подходит сейчас.</p>
              </div>
              <div className="progress-step">
                <div className="progress-circle">4</div>
                <h6>Шаг 4: Забронируй консультацию</h6>
                <p>Если ты выбрал формат сессий — легко запишись онлайн в удобное время.</p>
              </div>
              <div className="progress-step">
                <div className="progress-circle">5</div>
                <h6>Начни путь к изменениям</h6>
                <p>Получи доступ ко всем материалам и начни практики в своём темпе — с нашей поддержкой.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Κλήση του νέου component OurPackages */}
      <OurPackages />
      <FAQSection />
    </div>
  );
};

export default ServicesPage;