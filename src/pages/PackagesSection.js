import React, { useState } from 'react';

const PackagesSection = () => {
  const [activeFeatures, setActiveFeatures] = useState({});

  const toggleFeature = (packageId, featureIndex) => {
    setActiveFeatures((prev) => ({
      ...prev,
      [packageId]: prev[packageId] === featureIndex ? null : featureIndex,
    }));
  };

  // Επεξηγήσεις για κάθε χαρακτηριστικό
  const featureDescriptions = {
    'аудиогида': 'Озвученные руководства, которые помогут вам глубже понять свои эмоции и поведение. Слушайте их в удобное время, чтобы получить пошаговые инструкции и советы по личностному росту.',
    'практических чек-листа': 'Список конкретных действий, которые вы можете выполнять ежедневно, чтобы применять полученные знания на практике. Чек-листы помогают отслеживать прогресс и внедрять новые привычки.',
    'мини-курсов': 'Короткие видеоуроки, которые объясняют ключевые концепции и техники. Каждый урок длится всего несколько минут, чтобы вы могли учиться в своем темпе.',
    'Персональная панель': 'Интерактивная панель, где вы можете отслеживать свои достижения, тестировать прогресс и получать персонализированные рекомендации для дальнейшего роста.',
    'Доступ к приватному сообществу': 'Эксклюзивная группа в Telegram, где вы можете общаться с единомышленниками, делиться опытом и получать поддержку от сообщества и экспертов.',
    'Индивидуальная психологическая консультация': 'Персональная сессия с психологом, где вы можете обсудить свои цели и получить индивидуальные рекомендации. Бронирование доступно через платформу раз в неделю.',
    'Персонализированный план работы': 'Индивидуальный план, разработанный на основе ваших потребностей, который поможет вам систематически работать над выбранной темой. Предоставляется на второй консультации.',
  };

  return (
    <section className="services-section packages-section">
      <div className="container">
        <div className="services-header">
          <span className="sub-title">Our Packages</span>
          <h3>Наши Пакеты</h3>
          <p>Исследуйте наши специализированные услуги, разработанные для поддержки вашего эмоционального благополучия и личностного роста.</p>
        </div>
        <div className="services-grid">
          <div className="service-item">
            <img src="/images/section/fundament.jpg" alt="Фундамент" className="package-image" />
            <h4 className="package-title">Фундамент</h4>
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
            <div className="package-price">€15</div>
          </div>
          <div className="service-item">
            <img src="/images/section/resilience.jpg" alt="Устойчивость" className="package-image" />
            <h4 className="package-title">Устойчивость</h4>
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
            <div className="package-price">€30</div>
          </div>
          <div className="service-item">
            <img src="/images/section/thriving.jpg" alt="Процветание" className="package-image" />
            <h4 className="package-title">Процветание</h4>
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
            <div className="package-price">€200</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;