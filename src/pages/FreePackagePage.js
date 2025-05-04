import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import BecksDepressionInventory from '../pages/tests/BecksDepressionInventory';
import RosenbergSelfEsteemScale from '../pages/tests/RosenbergSelfEsteemScale';
import RobsonSelfConceptQuestionnaire from '../pages/tests/RobsonSelfConceptQuestionnaire';
import SelfCompassionScale from '../pages/tests/SelfCompassionScale';
import ZungSelfRatingAnxietyScale from '../pages/tests/ZungSelfRatingAnxietyScale';
import RelationshipScalesQuestionnaire from '../pages/tests/RelationshipScalesQuestionnaire';
import MaritalSatisfactionAssessment from '../pages/tests/MaritalSatisfactionAssessment';
import AttachmentStyleQuestionnaire from '../pages/tests/AttachmentStyleQuestionnaire';
import LuscherColorTest from '../pages/tests/LuscherColorTest';
import CompACT from '../pages/tests/CompACT';
import RRS from '../pages/tests/RRS';
import './FreePackagePage.css';

function FreePackagePage() {
  console.log("FreePackagePage component rendered");

  const tests = [
    { component: BecksDepressionInventory, title: 'Инвентарь депрессии Бека, BDI', link: '/test-becks-depression-inventory', id: 'BecksDepressionInventory' },
    { component: RosenbergSelfEsteemScale, title: 'Шкала самооценки Розенберга, RSES', link: '/test-rosenberg-self-esteem-scale', id: 'RosenbergSelfEsteemScale' },
    { component: RobsonSelfConceptQuestionnaire, title: 'Шкала самооценки Робсона, RSCQ', link: '/test-robson-self-concept-questionnaire', id: 'RobsonSelfConceptQuestionnaire' },
    { component: SelfCompassionScale, title: 'Шкала Самосострадания, SCS', link: '/test-self-compassion-scale', id: 'SelfCompassionScale' },
    { component: ZungSelfRatingAnxietyScale, title: 'Шкала Самооценки Тревожности Занга, SAS', link: '/test-zung-self-rating-anxiety-scale', id: 'ZungSelfRatingAnxietyScale' },
    { component: RelationshipScalesQuestionnaire, title: 'Relationship Scales Questionnaire, RSQ', link: '/test-relationship-scales-questionnaire', id: 'RelationshipScalesQuestionnaire' },
    { component: MaritalSatisfactionAssessment, title: 'Оценка Удовлетворенности Браком, MSA', link: '/test-marital-satisfaction-assessment', id: 'MaritalSatisfactionAssessment' },
    { component: AttachmentStyleQuestionnaire, title: 'Опросник Стиля Привязанности, ASQ', link: '/test-attachment-style-questionnaire', id: 'AttachmentStyleQuestionnaire' },
    { component: LuscherColorTest, title: 'Тест Цветов Люшера', link: '/test-luscher-color-test', id: 'LuscherColorTest' },
    { component: CompACT, title: 'Comprehensive ACT, CompACT', link: '/test-compact', id: 'CompACT' },
    { component: RRS, title: 'Ruminative Responses Scale, RRS', link: '/test-rrs', id: 'RRS' },
  ];

  // Initialize showDropdown state for each test
  const initialDropdownState = tests.reduce((acc, test) => {
    acc[test.id] = false;
    return acc;
  }, {});
  
  const [showDropdown, setShowDropdown] = useState(initialDropdownState);

  const toggleDropdown = (testId) => {
    setShowDropdown(prev => ({
      ...prev,
      [testId]: !prev[testId],
    }));
  };

  const leftColumnTests = tests.slice(0, 5);
  const rightColumnTests = tests.slice(5);

  const renderTestButton = (testId, link) => (
    <div className="test-container">
      <button onClick={() => toggleDropdown(testId)} className="dropdown-button">
        Запустить тест
      </button>
      {showDropdown[testId] && (
        <div className="dropdown-content">
          <Link to={link} className="run-test-button">Запустить тест</Link>
        </div>
      )}
    </div>
  );

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
            <div className="free-package-column">
              <div className="free-package-sections">
                {leftColumnTests.map((test, index) => {
                  const TestComponent = test.component;
                  return (
                    <div key={index} className="test-item">
                      <TestComponent testButton={renderTestButton(test.id, test.link)} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="free-package-column">
              <div className="free-package-sections">
                {rightColumnTests.map((test, index) => {
                  const TestComponent = test.component;
                  return (
                    <div key={index} className="test-item">
                      <TestComponent testButton={renderTestButton(test.id, test.link)} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FreePackagePage;