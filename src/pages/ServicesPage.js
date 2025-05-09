import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import ProfileHeader from '../components/ProfileHeader';
import OurPackages from './OurPackages';
import FAQ from '../components/FAQ';
import NewFooter from '../components/NewFooter';
import '../components/HeroSlider.css';
import '../components/ServicesSection.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <ProfileHeader />
      <div className="hero-section" style={{ position: 'relative' }}>
        <HeroSlider
          contentType="video"
          src="/videos/services.mp4"
          images={[]}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            maxWidth: '1020px',
            margin: '0 auto',
            left: '0',
            right: '0',
            transform: 'translateY(-50%)',
            color: '#fff',
            textAlign: 'left',
            zIndex: 6,
            fontFamily: 'Playfair Display, serif',
          }}
        >
          <h2
            style={{
              fontSize: '62px',
              lineHeight: '1.0',
              maxWidth: '500px',
              marginBottom: '20px',
              color: '#fff',
            }}
          >
            Добро пожаловать в пространство, созданное именно для тебя.
          </h2>
        </div>
      </div>
      <section
        style={{
          maxWidth: '1020px',
          margin: '0 auto',
          padding: '40px 0',
          fontFamily: 'Playfair Display, serif',
          textAlign: 'left',
        }}
      >
        <h3
          style={{
            fontSize: '26px',
            lineHeight: '1.0',
            marginBottom: '20px',
            color: '#8EB5BA',
            fontFamily: 'Playfair Display, serif',
          }}
        >
          В Anageno мы верим, что каждое изменение начинается с правильного сопровождения.
        </h3>
        <p
          style={{
            fontSize: '20px',
            lineHeight: '1.5',
            color: '#2F4C66',
            fontFamily: 'Playfair Display, serif',
            textAlign: 'left',
          }}
        >
          Наши партнёры — не просто специалисты, а настоящие спутники на каждом этапе личностного роста. Обладая знаниями, эмпатией и опытом, они предлагают целенаправленные услуги, охватывающие четыре ключевых направления личного и профессионального развития.
        </p>
        <p
          style={{
            fontSize: '20px',
            lineHeight: '1.5',
            color: '#2F4C66',
            fontFamily: 'Playfair Display, serif',
            textAlign: 'left',
          }}
        >
          Нужна ли тебе ясность, поддержка или пространство, чтобы вновь найти себя — мы рядом.
        </p>
        <p
          style={{
            fontSize: '20px',
            lineHeight: '1.5',
            color: '#2F4C66',
            fontFamily: 'Playfair Display, serif',
            textAlign: 'left',
          }}
        >
          Изучи наши направления и открой для себя, куда может привести твой следующий шаг.
        </p>
      </section>
      <section className="new-services-grid-section" style={{ backgroundColor: '#f2f1f0' }}>
        <div className="new-services-grid">
          <Link to="/services/relationships" className="service-item" title="Читать больше">
            <div className="image-wrapper">
              <img src="/images/section/relationship.jpg" alt="Межличностные отношения" />
              <div className="image-overlay"></div>
              <h5>Межличностные отношения</h5>
            </div>
            <p>Научитесь слышать и не предавать себя в любых отношениях. Мы разбираемся, почему повторяются болезненные сценарии, учимся говорить о своих чувствах и строить контакт — честно, спокойно и с уважением к себе.</p>
          </Link>
          <Link to="/services/stress-anxiety" className="service-item" title="Читать больше">
            <div className="image-wrapper">
              <img src="/images/section/stress-anxiety.jpg" alt="Стресс и тревожность" />
              <div className="image-overlay"></div>
              <h5>Стресс и тревожность</h5>
            </div>
            <p>Когда всё внутри слишком долго было в напряжении. Разберётесь, как стресс и тревожность накапливаются, влияют на тело и поведение. Вы научитесь восстанавливаться и регулировать напряжение.</p>
          </Link>
          <Link to="/services/self-confidence" className="service-item" title="Читать больше">
            <div className="image-wrapper">
              <img src="/images/section/Self-esteem.jpg" alt="Самооценка и уверенность в себе" />
              <div className="image-overlay"></div>
              <h5>Самооценка и уверенность в себе</h5>
            </div>
            <p>Строим уверенность, повыхаем самооценку — шаг за шагом. Узнайте, как замечать свои сильные стороны и поддерживать себя в трудные моменты.</p>
          </Link>
          <Link to="/services/adaptation" className="service-item" title="Читать больше">
            <div className="image-wrapper">
              <img src="/images/section/Adaptation.jpg" alt="Адаптация" />
              <div className="image-overlay"></div>
              <h5>Адаптация</h5>
            </div>
            <p>Как не потерять себя в новой реальности. Научитесь сохранять психическое равновесие в условиях перемен с техниками гибкости мышления.</p>
          </Link>
        </div>
      </section>
      <section className="services-section method-section">
        <div className="container">
          <div className="services-header">
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
      <OurPackages hideHeader={true} />
      <FAQ hideHeader={true} />
      <NewFooter
        style={{
          position: 'relative',
          clear: 'both',
          width: '100%',
          marginTop: '50px',
        }}
      />
    </div>
  );
};

export default ServicesPage;