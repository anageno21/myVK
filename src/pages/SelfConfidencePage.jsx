import React from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import OurPackages from './OurPackages';
import './RelationshipsPage.css'; // Χρησιμοποιούμε το ίδιο CSS για συνέπεια

const SelfConfidencePage = () => {
  return (
    <div className="self-confidence-page">
      <ProfileHeader />
      <div className="container">
        <section className="service-details-section">
          <div className="layout-wrapper">
            {/* Αριστερή Ενότητα (65%) */}
            <div className="content-section">
              <h1>Самооценка и уверенность в себе</h1>
              <div className="service-image">
                <img src="/images/section/Self-esteem.jpg" alt="Самооценка и уверенность в себе" />
              </div>
              <p>
                Строим уверенность, повышаем самооценку — шаг за шагом. Узнайте, как замечать свои сильные стороны и поддерживать себя в трудные моменты.
              </p>
              <p>
                В этом разделе мы поможем вам развить здоровую самооценку и уверенность в себе. Вы узнаете, как:
              </p>
              <ul>
                <li>Признавать свои достижения и ценить себя без сравнения с другими.</li>
                <li>Преодолевать внутреннего критика и негативные убеждения.</li>
                <li>Развивать позитивное отношение к себе через ежедневные практики.</li>
                <li>Укреплять уверенность в общении и принятии решений.</li>
              </ul>
              <p>
                Мы предлагаем пошаговые упражнения, которые помогут вам глубже понять себя и почувствовать внутреннюю силу. Вы также получите доступ к аудиогидам, практическим чек-листам и мини-курсам, которые помогут вам применять новые навыки в повседневной жизни.
              </p>
              <h2>Почему это важно?</h2>
              <p>
                Здоровая самооценка — это основа для уверенной и счастливой жизни. Когда мы верим в себя, мы можем достигать своих целей, строить гармоничные отношения и справляться с трудностями. Наша цель — помочь вам почувствовать себя сильным и ценным, независимо от внешних обстоятельств.
              </p>
              {/* Προсθήκη Divider */}
              <hr className="content-divider" />
              {/* Νέο τμήμα κειμένου */}
              <div className="support-model-section">
                <h3>Модель поддержки, которую мы тебе предлагаем</h3>
                <p>
                  Создана с уважением, заботой и полной конфиденциальностью — чтобы по-настоящему откликаться на твои потребности в этот момент. Если ты ищешь поддержку для укрепления самооценки, снижения тревожности или восстановления баланса в отношениях — здесь ты найдёшь пространство, время и сопровождение, чтобы вернуться к себе. Доверься процессу. Выбери то, что подходит именно тебе. <span className="support-packages-text">Посмотреть пакеты поддержки</span>
                </p>
              </div>
              {/* OurPackages χωρίς το δωρεάν πακέτο */}
              <OurPackages hideHeader={true} excludePackages={['free']} />
            </div>

            {/* Δεξιά Ενότητα (35%) */}
            <div className="sidebar-section">
              <div className="cta-block">
                <h3>Прислушайтесь к себе — нежно и с любовью.</h3>
                <p>Выберите подходящий вам тест и получите теплую рекомендацию о том, какая поддержка подойдет вам лучше всего. Вы заслуживаете того, чтобы чувствовать себя лучше. Все начинается с мягкого понимания.</p>
                <Link to="/free-therapy-toolbox" className="cta-button">
                  Бесплатный Вводный Пакет
                </Link>
              </div>
              <div className="cta-block">
                <h3>Нужна личная поддержка?</h3>
                <Link to="/therapist-details" className="cta-button">
                  Забронируйте сессию с психологом
                </Link>
              </div>
              <div className="info-block">
                <h3>Рекомендуемые статьи</h3>
                <ul>
                  <li>
                    <Link to="/blog-details/healthy-boundaries">Как установить здоровые границы в отношениях</Link>
                  </li>
                  <li>
                    <Link to="/blog-details/communication-tips">5 советов для эффективного общения</Link>
                  </li>
                </ul>
              </div>
              {/* Info-block για σχετικά blog posts στα Ρωσικά */}
              <div className="info-block">
                <h3>Статьи по теме самооценки</h3>
                <ul>
                  <li>
                    <Link to="/blog-details/self-worth">Как развить чувство собственной ценности</Link>
                  </li>
                  <li>
                    <Link to="/blog-details/overcome-self-criticism">Преодоление самокритики: 3 шага к принятию себя</Link>
                  </li>
                  <li>
                    <Link to="/blog-details/building-confidence">Построение уверенности: практики для ежедневной жизни</Link>
                  </li>
                </ul>
              </div>
              <div className="info-block">
                <h3>Наши психологи</h3>
                <ul>
                  <li>
                    <Link to="/victoria-kotenko">Виктория Котенко</Link>
                  </li>
                  <li>
                    <Link to="/therapist-details">Другие специалисты</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SelfConfidencePage;