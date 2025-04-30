import React from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import OurPackages from './OurPackages';
import './SelfConfidencePage.css';

const SelfConfidencePage = () => {
  return (
    <div className="self-confidence-page">
      <ProfileHeader />
      <div className="container">
        <section className="service-details-section">
          <div className="layout-wrapper">
            {/* Αριστερή Ενότητα (65%) */}
            <div className="content-section">
              <h1>Уверенность в себе / Самооценка</h1>
              <div className="service-image">
                <img src="/images/section/self-confidence.jpg" alt="Уверенность в себе / Самооценка" />
              </div>
              <p>
                Уверенность в себе — это не врождённое качество, а навык, который можно развить. Мы поможем тебе укрепить самооценку, преодолеть внутренние сомнения и почувствовать свою ценность.
              </p>
              <p>
                В этом разделе ты научишься:
              </p>
              <ul>
                <li>Распознавать и менять негативные установки о себе.</li>
                <li>Устанавливать здоровые границы и говорить «нет» без чувства вины.</li>
                <li>Развивать внутреннюю уверенность через практики осознанности.</li>
                <li>Принимать себя с любовью, даже в моменты несовершенства.</li>
              </ul>
              <p>
                Мы создаём безопасное пространство, где ты можешь исследовать свои сильные стороны, работать над внутренними барьерами и строить здоровую самооценку шаг за шагом.
              </p>
              <h2>Почему это важно?</h2>
              <p>
                Уверенность в себе напрямую влияет на твои отношения, карьеру и общее благополучие. Когда ты ценишь себя, ты можешь жить более свободно и принимать решения, которые соответствуют твоим истинным желаниям.
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
              {/* OurPackages χωρίς το δωρεан πακέτο */}
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
                <h3>Статьи по теме уверенности и самооценки</h3>
                <ul>
                  <li>
                    <Link to="/blog-details/emotional-intelligence">Эмоциональный интеллект: как понимать свои чувства и управлять ими</Link>
                  </li>
                  <li>
                    <Link to="/blog-details/mindfulness">Майндфулнесс: внимание, которое лечит</Link>
                  </li>
                  <li>
                    <Link to="/blog-details/psychosomatics">Психосоматика: как тело говорит о том, что не осознаёт разум</Link>
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