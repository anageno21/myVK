import React from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import OurPackages from './OurPackages';
import './StressAnxietyPage.css';

const StressAnxietyPage = () => {
  return (
    <div className="stress-anxiety-page">
      <ProfileHeader />
      <div className="container">
        <section className="service-details-section">
          <div className="layout-wrapper">
            {/* Αριστερή Ενότητα (65%) */}
            <div className="content-section">
              <h1>Стресс / Тревога</h1>
              <div className="service-image">
                <img src="/images/section/stress-anxiety.jpg" alt="Стресс / Тревога" />
              </div>
              <p>
                Тревога и стресс могут быть как тихими спутниками, так и громкими сигналами, которые влияют на твою жизнь. Мы поможем тебе разобраться в их причинах, научиться справляться с этими состояниями и вернуть внутреннее спокойствие.
              </p>
              <p>
                В этом разделе ты найдешь инструменты и практики, которые помогут:
              </p>
              <ul>
                <li>Осознать, что вызывает стресс и тревогу в твоей жизни.</li>
                <li>Научиться техникам релаксации и дыхательным практикам для снижения напряжения.</li>
                <li>Развить навыки управления эмоциями в сложных ситуациях.</li>
                <li>Создать устойчивые привычки, которые поддержат твоё эмоциональное здоровье.</li>
              </ul>
              <p>
                Мы предлагаем безопасное пространство, где ты можешь исследовать свои переживания, получить поддержку и найти эффективные способы справляться с тревогой и стрессом. Ты не один — мы здесь, чтобы помочь.
              </p>
              <h2>Почему это важно?</h2>
              <p>
                Постоянный стресс и тревога могут влиять на твоё физическое здоровье, отношения и общее самочувствие. Наша цель — помочь тебе вернуть баланс и уверенность, чтобы ты мог жить более спокойно и осознанно.
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
              {/* OurPackages χωρίς το δωреан πακέτο */}
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
                <h3>Статьи по теме стресса и тревоги</h3>
                <ul>
                  <li>
                    <Link to="/blog-details/mindfulness">Майндфулнесс: внимание, которое лечит</Link>
                  </li>
                  <li>
                    <Link to="/blog-details/rumination">Руминация: почему мы застреваем в мыслях и как это остановить</Link>
                  </li>
                  <li>
                    <Link to="/blog-details/stress">Стресс: когда он помогает, а когда разрушает</Link>
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

export default StressAnxietyPage;