import React from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import OurPackages from './OurPackages';
import './AdaptationPage.css';

const AdaptationPage = () => {
  return (
    <div className="adaptation-page">
      <ProfileHeader />
      <div className="container">
        <section className="service-details-section">
          <div className="layout-wrapper">
            {/* Αριστερή Ενότητα (65%) */}
            <div className="content-section">
              <h1>Адаптация</h1>
              <div className="service-image">
                <img src="/images/section/adaptation.jpg" alt="Адаптация" />
              </div>
              <p>
                Переезд, смена работы, новые жизненные обстоятельства — адаптация к переменам может быть сложной. Мы поможем тебе пройти этот путь с меньшим стрессом и большей уверенностью.
              </p>
              <p>
                В этом разделе ты научишься:
              </p>
              <ul>
                <li>Понимать свои эмоции во время перемен и справляться с ними.</li>
                <li>Создавать новые привычки, которые поддержат тебя в переходный период.</li>
                <li>Находить внутренние ресурсы для адаптации к новым условиям.</li>
                <li>Строить поддерживающие отношения в новой среде.</li>
              </ul>
              <p>
                Мы предлагаем инструменты и сопровождение, которые помогут тебе адаптироваться к изменениям, сохраняя внутренний баланс и уверенность. Ты можешь пройти этот путь в своём темпе.
              </p>
              <h2>Почему это важно?</h2>
              <p>
                Адаптация к переменам — это не только про выживание, но и про развитие. Наша цель — помочь тебе не просто справиться, а найти новые возможности и почувствовать себя комфортно в новой реальности.
              </p>
              {/* Divider */}
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
                <Link to="/free-package" className="cta-button">
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
                <h3>Статьи по теме адаптации</h3>
                <ul>
                  <li>
                    <Link to="/blog-details/stress">Стресс: когда он помогает, а когда разрушает</Link>
                  </li>
                  <li>
                    <Link to="/blog-details/psychosomatics">Психосоматика: как тело говорит о том, что не осознаёт разум</Link>
                  </li>
                  <li>
                    <Link to="/blog-details/sleep-mental-health">Как нарушение сна влияет на психическое здоровье: научный взгляд</Link>
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

export default AdaptationPage;