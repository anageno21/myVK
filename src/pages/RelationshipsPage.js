import React from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import OurPackages from './OurPackages';
import './RelationshipsPage.css';

const RelationshipsPage = () => {
  return (
    <div className="relationships-page">
      <ProfileHeader />
      <div className="container">
        <section className="service-details-section">
          <div className="layout-wrapper">
            {/* Αριστερή Ενότητα (65%) */}
            <div className="content-section">
              <h1>Межличностные отношения</h1>
              <div className="service-image">
                <img src="/images/section/relationship.jpg" alt="Межличностные отношения" />
              </div>
              <p>
                Научитесь слышать и не предавать себя в любых отношениях. Мы разбираемся, почему повторяются болезненные сценарии, учимся говорить о своих чувствах и строить контакт — честно, спокойно и с уважением к себе.
              </p>
              <p>
                В этом разделе мы поможем вам понять, как строить здоровые отношения с окружающими, будь то семья, друзья или партнеры. Вы узнаете, как:
              </p>
              <ul>
                <li>Определять и выражать свои эмоции без страха осуждения.</li>
                <li>Разрешать конфликты конструктивно, не теряя связи с собой.</li>
                <li>Создавать границы, которые защищают ваше внутреннее пространство.</li>
                <li>Укреплять доверие и взаимопонимание с близкими людьми.</li>
              </ul>
              <p>
                Мы предлагаем пошаговые практики и упражнения, которые помогут вам глубже понять свои отношения и сделать их более гармоничными. Вы также получите доступ к аудиогидам, практическим чек-листам и мини-курсам, которые помогут вам применять новые навыки в повседневной жизни.
              </p>
              <h2>Почему это важно?</h2>
              <p>
                Здоровые отношения — это основа эмоционального благополучия. Когда мы чувствуем себя услышанными и уважаемыми, мы можем быть более открытыми и уверенными в себе. Наша цель — помочь вам создать такие отношения, которые поддерживают вас, а не истощают.
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
                <h3>Статьи по теме отношений</h3>
                <ul>
                  <li>
                    <Link to="/blog-details/codependency">Созависимость: как распознать и выйти из нездоровых отношений</Link>
                  </li>
                  <li>
                    <Link to="/blog-details/sympathy-empathy">Сочувствие и эмпатия: в чём разница и почему это важно</Link>
                  </li>
                  <li>
                    <Link to="/blog-details/effective-communication">Эффективное общение: как говорить, чтобы быть услышанным</Link>
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

export default RelationshipsPage;