import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import BecksDepressionInventory from '../pages/tests/BecksDepressionInventory';
import RosenbergSelfEsteemScale from '../pages/tests/RosenbergSelfEsteemScale';
import GeneralSelfEfficacyScale from '../pages/tests/GeneralSelfEfficacyScale';
import './FreePackagePage.css';

function FreePackagePage() {
  console.log("FreePackagePage component rendered");

  return (
    <div className="free-package-page">
      <ProfileHeader />
      <main className="free-package-content">
        <div className="container">
          <div className="free-package-header">
            <h1>Бесплатный Вводный Пакет</h1>
            <h2>Начни заботиться о своём эмоциональном благополучии с нашими бесплатными материалами.</h2>
          </div>
          <div className="free-package-body">
            <div className="free-package-content">
              <div className="free-package-sections">
                {/* Αφαίρεση του freePackageContent, διατηρούμε μόνο τα τεστ */}
                <BecksDepressionInventory />
                <RosenbergSelfEsteemScale />
                <GeneralSelfEfficacyScale />
              </div>
              <div className="free-package-sidebar">
                <div className="sidebar-widget sidebar-search">
                  <h3>Поиск</h3>
                  <div className="search-form">
                    <input type="text" placeholder="Search articles..." />
                    <button type="button"><i className="las la-search"></i></button>
                  </div>
                </div>
                <div className="sidebar-widget sidebar-categories">
                  <h3>Категории</h3>
                  <ul>
                    <li style={{ color: '#173A37' }}>Отношения</li>
                    <li style={{ color: '#173A37' }}>Стресс / Тревога</li>
                    <li style={{ color: '#173A37' }}>Уверенность в себе / Самооценка</li>
                    <li style={{ color: '#173A37' }}>Адаптация</li>
                  </ul>
                </div>
                <div className="sidebar-widget sidebar-authors">
                  <h3>Авторы</h3>
                  <ul>
                    <li style={{ color: '#173A37' }}>Viktoriia Kotenko</li>
                    <li style={{ color: '#173A37' }}>Anageno</li>
                  </ul>
                </div>
                <div className="sidebar-widget sidebar-recent-posts">
                  <h3>Последние записи</h3>
                  <ul>
                    <li>
                      <p>Созависимость: как распознать и выйти из нездоровых отношений</p>
                      <p>5 ноября 2024</p>
                    </li>
                    <li>
                      <p>Эмоциональный интеллект: как понимать свои чувства и управлять ими</p>
                      <p>7 ноября 2024</p>
                    </li>
                    <li>
                      <p>Майндфулнесс: внимание, которое лечит</p>
                      <p>15 ноября 2024</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FreePackagePage;