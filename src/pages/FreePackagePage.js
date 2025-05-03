import React from 'react';
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
import TestRadio from '../pages/tests/TestRadio';
import './FreePackagePage.css';

function FreePackagePage() {
  console.log("FreePackagePage component rendered");

  const tests = [
    { component: <BecksDepressionInventory key="BecksDepressionInventory" />, title: 'Инвентарь депрессии Бека, BDI' },
    { component: <RosenbergSelfEsteemScale key="RosenbergSelfEsteemScale" />, title: 'Шкала самооценки Розенберга, RSES' },
    { component: <RobsonSelfConceptQuestionnaire key="RobsonSelfConceptQuestionnaire" />, title: 'Шкала самооценки Робсона, RSCQ' },
    { component: <SelfCompassionScale key="SelfCompassionScale" />, title: 'Шкала Самосострадания, SCS' },
    { component: <ZungSelfRatingAnxietyScale key="ZungSelfRatingAnxietyScale" />, title: 'Шкала Самооценки Тревожности Занга, SAS' },
    { component: <RelationshipScalesQuestionnaire key="RelationshipScalesQuestionnaire" />, title: 'Relationship Scales Questionnaire, RSQ' },
    { component: <MaritalSatisfactionAssessment key="MaritalSatisfactionAssessment" />, title: 'Оценка Удовлетворенности Браком, MSA' },
    { component: <AttachmentStyleQuestionnaire key="AttachmentStyleQuestionnaire" />, title: 'Опросник Стиля Привязанности, ASQ' },
    { component: <LuscherColorTest key="LuscherColorTest" />, title: 'Тест Цветов Люшера' },
    { component: <CompACT key="CompACT" />, title: 'Comprehensive ACT, CompACT' },
    { component: <RRS key="RRS" />, title: 'Ruminative Responses Scale, RRS' },
    { component: <TestRadio key="TestRadio" />, title: 'Test Radio Buttons' },
  ];

  // Χωρίζουμε τα τεστ σε δύο ομάδες: 6 στην αριστερή στήλη, 6 στη δεξιά
  const leftColumnTests = tests.slice(0, 6);
  const rightColumnTests = tests.slice(6);

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
                {leftColumnTests.length > 0 ? (
                  leftColumnTests.map((test, index) => (
                    <div key={index} className="test-item">
                      {test.component}
                    </div>
                  ))
                ) : (
                  <p>Нет тестов в этой колонке.</p>
                )}
              </div>
            </div>
            <div className="free-package-column">
              <div className="free-package-sections">
                {rightColumnTests.length > 0 ? (
                  rightColumnTests.map((test, index) => (
                    <div key={index} className="test-item">
                      {test.component}
                    </div>
                  ))
                ) : (
                  <p>Нет тестов в этой колонке.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FreePackagePage;