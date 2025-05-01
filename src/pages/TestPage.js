import React, { useState } from 'react';
import ProfileHeader from '../components/ProfileHeader';
import BecksDepressionInventory from '../pages/tests/BecksDepressionInventory';
import RosenbergSelfEsteemScale from '../pages/tests/RosenbergSelfEsteemScale';
import RobsonSelfConceptQuestionnaire from '../pages/tests/RobsonSelfConceptQuestionnaire';
import SelfCompassionScale from '../pages/tests/SelfCompassionScale';
import ZungSelfRatingAnxietyScale from '../pages/tests/ZungSelfRatingAnxietyScale';
import RelationshipScalesQuestionnaire from '../pages/tests/RelationshipScalesQuestionnaire'; // Προσθήκη του RSQ
import './TestPage.css';

function TestPage() {
  console.log("TestPage component rendered");

  // State για την τρέχουσα σελίδα
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // Υποθέτουμε ότι έχουμε 2 σελίδες για την ώρα

  // Λίστα τεστ
  const tests = [
    { component: <BecksDepressionInventory key="BecksDepressionInventory" />, title: 'Инвентарь депрессии Бека, BDI' },
    { component: <RosenbergSelfEsteemScale key="RosenbergSelfEsteemScale" />, title: 'Шкала самооценки Розенберга, RSES' },
    { component: <RobsonSelfConceptQuestionnaire key="RobsonSelfConceptQuestionnaire" />, title: 'Шкала самооценки Робсона, RSCQ' },
    { component: <SelfCompassionScale key="SelfCompassionScale" />, title: 'Шкала Самосострадания, SCS' },
    { component: <ZungSelfRatingAnxietyScale key="ZungSelfRatingAnxietyScale" />, title: 'Шкала Самооценки Тревожности Занга, SAS' },
    { component: <RelationshipScalesQuestionnaire key="RelationshipScalesQuestionnaire" />, title: 'Relationship Scales Questionnaire, RSQ' }, // Προσθήκη του RSQ
  ];

  // Υπολογισμός σελίδων και εμφάνιση τεστ για την τρέχουσα σελίδα
  const testsPerPage = 4;
  const startIndex = (currentPage - 1) * testsPerPage;
  const selectedTests = tests.slice(startIndex, startIndex + testsPerPage);

  // Συνάρτηση για την αλλαγή σελίδας
  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("Changing to page:", page);
  };

  return (
    <div className="test-page">
      <ProfileHeader />
      <main className="test-content">
        <div className="container">
          <div className="test-header">
            <h1>Бесплатный Вводный Пакет</h1>
            <h2>Начни заботиться о своём эмоциональном благополучии с нашими бесплатными материалами.</h2>
          </div>
          <div className="test-body">
            <div className="test-content">
              <div className="test-sections">
                {/* Εμφάνιση διαφορετικού περιεχομένου με βάση την τρέχουσα σελίδα */}
                {selectedTests.length > 0 ? (
                  selectedTests.map((test, index) => (
                    <div key={index}>
                      {test.component}
                    </div>
                  ))
                ) : (
                  <p>Нет тестов на этой странице.</p>
                )}
              </div>
              {tests.length > testsPerPage && (
                <div className="pagination-wrapper">
                  <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`pagination-link ${currentPage === index + 1 ? 'active' : ''}`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="test-sidebar">
              <div className="sidebar-widget sidebar-search-tests">
                <h3>Поиск тестов</h3>
                <div className="search-form">
                  <input type="text" placeholder="Поиск тестов..." disabled />
                  <button type="button" disabled><i className="las la-search"></i></button>
                </div>
              </div>
              <div className="sidebar-widget sidebar-test-categories">
                <h3>Категории тестов</h3>
                <ul>
                  <li className="active-category">Все категории</li>
                  <li style={{ color: '#173A37' }}>Стресс / Тревога</li>
                  <li style={{ color: '#173A37' }}>Уверенность в себе / Самооценка</li>
                  <li style={{ color: '#173A37' }}>Адаптация</li>
                  <li style={{ color: '#173A37' }}>Отношения</li>
                </ul>
              </div>
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
      </main>
    </div>
  );
}

export default TestPage;