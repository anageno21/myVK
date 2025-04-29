import React, { useState, useEffect } from 'react';
import './OurPackages.css';

const OurPackages = () => {
  const [activeFeatures, setActiveFeatures] = useState({});
  const [activePackage, setActivePackage] = useState(null);

  // Log για να δούμε πότε γίνεται re-render
  useEffect(() => {
    console.log('Component re-rendered - activeFeatures:', activeFeatures);
  }, [activeFeatures]);

  const toggleFeature = (packageId, featureIndex) => {
    console.log('Πριν την εναλλαγή - packageId:', packageId, 'featureIndex:', featureIndex, 'activeFeatures:', activeFeatures);
    setActiveFeatures((prev) => {
      const newState = {
        ...prev,
        [packageId]: prev[packageId] === featureIndex ? null : featureIndex,
      };
      console.log('Μετά την εναλλαγή - νέο activeFeatures:', newState);
      return newState;
    });
  };

  const togglePackage = (packageId) => {
    console.log('Άνοιγμα πακέτου - packageId:', packageId, 'activePackage:', activePackage);
    setActivePackage(activePackage === packageId ? null : packageId);
  };

  const featureDescriptions = {
    'аудиогида': 'Озвученные руководства, которые помогут вам глубже понять свои эмоции и поведение. Слушайте их в удобное время, чтобы получить пошаговые инструкции и советы по личностному росту.',
    'практических чек-листа': 'Список конкретных действий, которые вы можете выполнять ежедневно, чтобы применять полученные знания на практике. Чек-листы помогают отслеживать прогресс и внедрять новые привычки.',
    'мини-курсов': 'Короткие видеоуроки, которые объясняют ключевые концепции и техники. Каждый урок длится всего несколько минут, чтобы вы могли учиться в своем темпе.',
    'Персональная панель': 'Интерактивная панель, где вы можете отслеживать свои достижения, тестировать прогресс и получать персонализированные рекомендации для дальнейшего роста.',
    'Доступ к приватному сообществу': 'Эксклюзивная группа в Telegram, где вы можете общаться с единомышленниками, делиться опытом и получать поддержку от сообщества и экспертов.',
    'Индивидуальная психологическая консультация': 'Персональная сессия с психологом, где вы можете обсудить свои цели и получить индивидуальные рекомендации. Бронирование доступно через платформу раз в неделю.',
    'Персонализированный план работы': 'Индивидуальный план, разработанный на основе ваших потребностей, который поможет вам систематически работать над выбранной темой. Предоставляется на второй консультации.',
  };

  const packageContents = {
    'free': (
      <div className="package-dropdown-content">
        <h4 className="package-title free-package-title">Бесплатный Вводный Пакет</h4>
        <h5>Доступ на 3 дня</h5>
        <p className="marketing-text">
          Попробуй бесплатно! Этот вводный пакет дает тебе доступ к базовым материалам на 3 дня, чтобы ты мог начать свой путь к личностному росту.
        </p>
        <div className="features-text">
          <div className="feature-item">
            <p className="feature-title" onClick={() => toggleFeature('free', 0)}>
              <i className="las la-headphones"></i> 1 аудиогид
            </p>
            {activeFeatures['free'] === 0 && (
              <div className="feature-description">
                <p>{featureDescriptions['аудиогида']}</p>
              </div>
            )}
          </div>
          <div className="feature-item">
            <p className="feature-title" onClick={() => toggleFeature('free', 1)}>
              <i className="las la-check-square"></i> 1 практический чек-лист
            </p>
            {activeFeatures['free'] === 1 && (
              <div className="feature-description">
                <p>{featureDescriptions['практических чек-листа']}</p>
              </div>
            )}
          </div>
        </div>
        <div className="package-price free-package-price">€0</div>
      </div>
    ),
    'fundament': (
      <div className="package-dropdown-content">
        <h4 className="package-title fundament-package-title">Фундамент</h4>
        <h5>Доступ на 1 неделю</h5>
        <p className="marketing-text">
          Начни свое путешествие! Идеально для новичков, этот пакет предоставляет необходимые инструменты для создания прочной основы в твоем личностном развитии всего за 1 неделю. С аудиогидами, чек-листами и мини-курсами ты быстро освоишь нужные навыки!
        </p>
        <div className="features-text">
          <div className="feature-item">
            <p className="feature-title" onClick={() => toggleFeature('fundament', 0)}>
              <i className="las la-headphones"></i> 2 аудиогида
            </p>
            {activeFeatures['fundament'] === 0 && (
              <div className="feature-description">
                <p>{featureDescriptions['аудиогида']}</p>
              </div>
            )}
          </div>
          <div className="feature-item">
            <p className="feature-title" onClick={() => toggleFeature('fundament', 1)}>
              <i className="las la-check-square"></i> 2 практических чек-листа
            </p>
            {activeFeatures['fundament'] === 1 && (
              <div className="feature-description">
                <p>{featureDescriptions['практических чек-листа']}</p>
              </div>
            )}
          </div>
          <div className="feature-item">
            <p className="feature-title" onClick={() => toggleFeature('fundament', 2)}>
              <i className="las la-video"></i> 3 мини-курса (короткие видеоуроки)
            </p>
            {activeFeatures['fundament'] === 2 && (
              <div className="feature-description">
                <p>{featureDescriptions['мини-курсов']}</p>
              </div>
            )}
          </div>
          <div className="feature-item">
            <p className="feature-title" onClick={() => toggleFeature('fundament', 3)}>
              <i className="las la-tachometer-alt"></i> Персональная панель с дополнительными инструментами (отслеживание, тестирование прогресса)
            </p>
            {activeFeatures['fundament'] === 3 && (
              <div className="feature-description">
                <p>{featureDescriptions['Персональная панель']}</p>
              </div>
            )}
          </div>
        </div>
        <div className="package-price fundament-package-price">€15</div>
      </div>
    ),
    'resilience': (
      <div className="package-dropdown-content">
        <h4 className="package-title resilience-package-title">Устойчивость</h4>
        <h5>Доступ на 1 месяц</h5>
        <p className="marketing-text">
          Поднимись на новый уровень! Этот пакет дает доступ к большему количеству инструментов и эксклюзивному сообществу в Telegram на целый месяц. С 5 мини-курсами и 3 аудиогидами ты научишься справляться со стрессом и развивать устойчивость!
        </p>
        <div className="features-text">
          <div className="feature-item">
            <p className="feature-title" onClick={() => toggleFeature('resilience', 0)}>
              <i className="las la-headphones"></i> 3 аудиогида
            </p>
            {activeFeatures['resilience'] === 0 && (
              <div className="feature-description">
                <p>{featureDescriptions['аудиогида']}</p>
              </div>
            )}
          </div>
          <div className="feature-item">
            <p className="feature-title" onClick={() => toggleFeature('resilience', 1)}>
              <i className="las la-check-square"></i> 3 практических чек-листа
            </p>
            {activeFeatures['resilience'] === 1 && (
              <div className="feature-description">
                <p>{featureDescriptions['практических чек-листа']}</p>
              </div>
            )}
          </div>
          <div className="feature-item">
            <p className="feature-title" onClick={() => toggleFeature('resilience', 2)}>
              <i className="las la-video"></i> 5 мини-курсов (короткие видеоуроки)
            </p>
            {activeFeatures['resilience'] === 2 && (
              <div className="feature-description">
                <p>{featureDescriptions['мини-курсов']}</p>
              </div>
            )}
          </div>
          <div className="feature-item">
            <p className="feature-title" onClick={() => toggleFeature('resilience', 3)}>
              <i className="las la-tachometer-alt"></i> Персональная панель с дополнительными инструментами (отслеживание, тестирование прогресса)
            </p>
            {activeFeatures['resilience'] === 3 && (
              <div className="feature-description">
                <p>{featureDescriptions['Персональная панель']}</p>
              </div>
            )}
          </div>
          <div className="feature-item">
            <p className="feature-title" onClick={() => toggleFeature('resilience', 4)}>
              <i className="las la-users"></i> Доступ к приватному сообществу в Telegram
            </p>
            {activeFeatures['resilience'] === 4 && (
              <div className="feature-description">
                <p>{featureDescriptions['Доступ к приватному сообществу']}</p>
              </div>
            )}
          </div>
        </div>
        <div className="package-price resilience-package-price">€70</div>
      </div>
    ),
    'thriving': (
      <div className="package-dropdown-content">
        <h4 className="package-title thriving-package-title">Процветание</h4>
        <h5>Доступ на 1 месяц</h5>
        <p className="marketing-text">
          Достигни вершины! Этот премиум-пакет предлагает персональное руководство с еженедельными сессиями психологической консультации и индивидуальный план работы. Ускорь свой прогресс с эксклюзивными инструментами и поддержкой нашего сообщества!
        </p>
        <div className="features-text">
          <div className="feature-item">
            <p className="feature-title" onClick={() => toggleFeature('thriving', 0)}>
              <i className="las la-headphones"></i> 3 аудиогида
            </p>
            {activeFeatures['thriving'] === 0 && (
              <div className="feature-description">
                <p>{featureDescriptions['аудиогида']}</p>
              </div>
            )}
          </div>
          <div className="feature-item">
            <p className="feature-title" onClick={() => toggleFeature('thriving', 1)}>
              <i className="las la-check-square"></i> 3 практических чек-листа
            </p>
            {activeFeatures['thriving'] === 1 && (
              <div className="feature-description">
                <p>{featureDescriptions['практических чек-листа']}</p>
              </div>
            )}
          </div>
          <div className="feature-item">
            <p className="feature-title" onClick={() => toggleFeature('thriving', 2)}>
              <i className="las la-video"></i> 5 мини-курсов (короткие видеоуроки)
            </p>
            {activeFeatures['thriving'] === 2 && (
              <div className="feature-description">
                <p>{featureDescriptions['мини-курсов']}</p>
              </div>
            )}
          </div>
          <div className="feature-item">
            <p className="feature-title" onClick={() => toggleFeature('thriving', 3)}>
              <i className="las la-tachometer-alt"></i> Персональная панель с дополнительными инструментами (отслеживание, тестирование прогресса)
            </p>
            {activeFeatures['thriving'] === 3 && (
              <div className="feature-description">
                <p>{featureDescriptions['Персональная панель']}</p>
              </div>
            )}
          </div>
          <div className="feature-item">
            <p className="feature-title" onClick={() => toggleFeature('thriving', 4)}>
              <i className="las la-users"></i> Доступ к приватному сообществу в Telegram
            </p>
            {activeFeatures['thriving'] === 4 && (
              <div className="feature-description">
                <p>{featureDescriptions['Доступ к приватному сообществу']}</p>
              </div>
            )}
          </div>
          <div className="feature-item">
            <p className="feature-title" onClick={() => toggleFeature('thriving', 5)}>
              <i className="las la-user-md"></i> Индивидуальная психологическая консультация (раз в неделю, бронирование доступно через платформу)
            </p>
            {activeFeatures['thriving'] === 5 && (
              <div className="feature-description">
                <p>{featureDescriptions['Индивидуальная психологическая консультация']}</p>
              </div>
            )}
          </div>
          <div className="feature-item">
            <p className="feature-title" onClick={() => toggleFeature('thriving', 6)}>
              <i className="las la-clipboard-list"></i> Персонализированный план работы по выбранной теме (разработан и предоставлен на второй консультации)
            </p>
            {activeFeatures['thriving'] === 6 && (
              <div className="feature-description">
                <p>{featureDescriptions['Персонализированный план работы']}</p>
              </div>
            )}
          </div>
        </div>
        <div className="package-price thriving-package-price">€200</div>
      </div>
    )
  };

  console.log('Rendering OurPackages - activePackage:', activePackage, 'activeFeatures:', activeFeatures);

  return (
    <section className="our-packages-section">
      <div className="container">
        <div className="section-header">
          <span className="sub-title">Our Packages</span>
          <h3>Наши Пакеты</h3>
          <p>Исследуйте наши специализированные услуги, разработанные для поддержки вашего эмоционального благополучия и личностного роста.</p>
        </div>
        
        <div className="header-grid">
          <div className="header-item header-item-1" onClick={() => togglePackage('free')}>
            <h4 className="package-title">Бесплатный Вводный Пакет</h4>
          </div>
          <div className="header-item header-item-2" onClick={() => togglePackage('fundament')}>
            <h4 className="package-title">Фундамент</h4>
          </div>
          <div className="header-item header-item-3" onClick={() => togglePackage('resilience')}>
            <h4 className="package-title">Устойчивость</h4>
          </div>
          <div className="header-item header-item-4" onClick={() => togglePackage('thriving')}>
            <h4 className="package-title">Процветание</h4>
          </div>
        </div>
        
        <div className="dropdown-container">
          {activePackage === 'free' && (
            <div className="package-dropdown">
              {packageContents['free']}
            </div>
          )}
          {activePackage === 'fundament' && (
            <div className="package-dropdown">
              {packageContents['fundament']}
            </div>
          )}
          {activePackage === 'resilience' && (
            <div className="package-dropdown">
              {packageContents['resilience']}
            </div>
          )}
          {activePackage === 'thriving' && (
            <div className="package-dropdown">
              {packageContents['thriving']}
            </div>
          )}
        </div>
        
        <div className="packages-grid" style={{display: 'none'}}>
          {/* ... your original packages grid content ... */}
        </div>
      </div>
    </section>
  );
};

export default OurPackages;