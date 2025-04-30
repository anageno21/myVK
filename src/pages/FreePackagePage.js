import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import BecksDepressionInventory from '../pages/tests/BecksDepressionInventory';
import RosenbergSelfEsteemScale from '../pages/tests/RosenbergSelfEsteemScale';
import RobsonSelfConceptQuestionnaire from '../pages/tests/RobsonSelfConceptQuestionnaire';
import SelfCompassionScale from '../pages/tests/SelfCompassionScale';
import ZungSelfRatingAnxietyScale from '../pages/tests/ZungSelfRatingAnxietyScale';
import './FreePackagePage.css';

function FreePackagePage() {
  console.log("FreePackagePage component rendered");

  // Λήψη του αριθμού σελίδας από το URL
  const { page = '1' } = useParams();
  const currentPage = parseInt(page, 10);

  // Κατηγορίες και τεστ
  const testCategories = {
    'Стресс / Тревога': [
      { component: <ZungSelfRatingAnxietyScale key="ZungSelfRatingAnxietyScale" />, title: 'Шкала Самооценки Тревожности Занга, SAS' },
    ],
    'Уверенность в себе / Самооценка': [
      { component: <RosenbergSelfEsteemScale key="RosenbergSelfEsteemScale" />, title: 'Шкала самооценки Розенберга, RSES' },
      { component: <RobsonSelfConceptQuestionnaire key="RobsonSelfConceptQuestionnaire" />, title: 'Шкала самооценки Робсона, RSCQ' },
      { component: <SelfCompassionScale key="SelfCompassionScale" />, title: 'Шкала Самосострадания, SCS' },
    ],
    'Адаптация': [
      { component: <BecksDepressionInventory key="BecksDepressionInventory" />, title: 'Инвентарь депрессии Бека, BDI' },
    ],
    'Отношения': [],
  };

  // Όλα τα τεστ για υπολογισμό pagination
  const allTests = Object.values(testCategories).flat();

  // Κατάσταση για αναζήτηση και φιλτράρισμα
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все категории');

  // Φιλτράρισμα τεστ με βάση την αναζήτηση και την κατηγορία
  let filteredTests = allTests;
  if (selectedCategory !== 'Все категории') {
    filteredTests = testCategories[selectedCategory] || [];
  }
  if (searchQuery) {
    filteredTests = filteredTests.filter(test =>
      test.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Υπολογισμός σελίδων και εμφάνιση τεστ για την τρέχουσα σελίδα
  const testsPerPage = 4;
  const totalPages = Math.ceil(filteredTests.length / testsPerPage);
  const startIndex = (currentPage - 1) * testsPerPage;
  const selectedTests = filteredTests.slice(startIndex, startIndex + testsPerPage);

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
    {selectedTests.length > 0 ? (
      selectedTests.map(test => test.component)
    ) : (
      <p>Нет тестов, соответствующих критериям.</p>
    )}
  </div>
  {/* Προσθήκη wrapper για το pagination */}
  {filteredTests.length > testsPerPage && (
    <div className="pagination-wrapper">
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <Link
            key={index + 1}
            to={`/free-package/page/${index + 1}`}
            className={`pagination-link ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </Link>
        ))}
      </div>
    </div>
  )}
</div>
            <div className="free-package-sidebar">
              {/* Αναζήτηση για τα τεστ */}
              <div className="sidebar-widget sidebar-search-tests">
                <h3>Поиск тестов</h3>
                <div className="search-form">
                  <input
                    type="text"
                    placeholder="Поиск тестов..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="button"><i className="las la-search"></i></button>
                </div>
              </div>
              {/* Θεματικές Ενότητες για τα τεστ */}
              <div className="sidebar-widget sidebar-test-categories">
                <h3>Категории тестов</h3>
                <ul>
                  <li
                    className={selectedCategory === 'Все категории' ? 'active-category' : ''}
                    onClick={() => setSelectedCategory('Все категории')}
                  >
                    Все категории
                  </li>
                  {Object.keys(testCategories).map(category => (
                    <li
                      key={category}
                      className={selectedCategory === category ? 'active-category' : ''}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Υπάρχουσα αναζήτηση για blogs */}
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

export default FreePackagePage;