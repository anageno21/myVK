import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import '../components/ServicesSection.css';

const ServicesPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeFeatures, setActiveFeatures] = useState({});

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
    <div className="services-page">
      <HeroSlider showOnlyVideo={true} videoSrc="/videos/services.mp4" />
      {/* Πρώτη Ενότητα "Our Services" */}
      <section className="services-section">
        <div className="container">
          <div className="services-header">
            <span className="sub-title">Our Services</span>
            <h3>Основные направления поддержки</h3>
            <p>Исследуйте наши специализированные услуги, разработанные для поддержки вашего эмоционального благополучия и личностного роста.</p>
          </div>
          <div className="services-grid">
            <div className="service-item">
              <img src="/images/section/relationship.jpg" alt="Межличностные отношения" />
              <h5><Link to="/service-details">Межличностные отношения</Link></h5>
              <p>Научитесь слышать и не предавать себя в любых отношениях. Мы разбираемся, почему повторяются болезненные сценарии, учимся говорить о своих чувствах и строить контакт — честно, спокойно и с уважением к себе.</p>
              <Link to="/service-details" className="read-more">Читать больше</Link>
            </div>
            <div className="service-item">
              <img src="/images/section/stress-anxiety.jpg" alt="Стресс и тревожность" />
              <h5><Link to="/service-details">Стресс и тревожность</Link></h5>
              <p>Когда всё внутри слишком долго было в напряжении. Разберётесь, как стресс и тревожность накапливаются, влияют на тело и поведение. Вы научитесь восстанавливаться и регулировать напряжение.</p>
              <Link to="/service-details" className="read-more">Читать больше</Link>
            </div>
            <div className="service-item">
              <img src="/images/section/Self-esteem.jpg" alt="Самооценка и уверенность в себе" />
              <h5><Link to="/service-details">Самооценка и уверенность в себе</Link></h5>
              <p>Строим уверенность, повыхаем самооценку — шаг за шагом. Узнайте, как замечать свои сильные стороны и поддерживать себя в трудные моменты.</p>
              <Link to="/service-details" className="read-more">Читать больше</Link>
            </div>
            <div className="service-item">
              <img src="/images/section/Adaptation.jpg" alt="Адаптация" />
              <h5><Link to="/service-details">Адаптация</Link></h5>
              <p>Как не потерять себя в новой реальности. Научитесь сохранять психическое равновесие в условиях перемен с техниками гибкости мышления.</p>
              <Link to="/service-details" className="read-more">Читать больше</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Δεύτερη Εнότητα "Our Method" */}
      <section className="services-section method-section">
        <div className="container">
          <div className="services-header">
            <span className="sub-title">Our Method</span>
            <h3>Наш Подход: Пошаговый План Прогресса</h3>
            <p>Мы разработали структурированный подход, который помогает вам двигаться к личностному росту и эмоциональному благополучию через последовательные этапы. Вот как это работает:</p>
          </div>
          <div className="services-grid">
            <div className="progress-grid">
              <div className="progress-step">
                <div className="progress-circle">1</div>
                <h6>Шаг 1: Пройдите диагностику</h6>
                <p>Краткий тест поможет определить, с чего лучше начать путь к внутреннему балансу.</p>
              </div>
              <div className="progress-step">
                <div className="progress-circle">2</div>
                <h6>Шаг 2: Рекомендованный блок</h6>
                <p>На основе твоих ответов мы предложим тематическое направление, подходящее именно тебе.</p>
              </div>
              <div className="progress-step">
                <div className="progress-circle">3</div>
                <h6>Шаг 3: Выбери формат поддержки</h6>
                <p>Подписка на материалы или индивидуальная работа с психологом — ты выбираешь то, что подходит сейчас.</p>
              </div>
              <div className="progress-step">
                <div className="progress-circle">4</div>
                <h6>Шаг 4: Забронируй консультацию</h6>
                <p>Если ты выбрал формат сессий — легко запишись онлайн в удобное время.</p>
              </div>
              <div className="progress-step">
                <div className="progress-circle">5</div>
                <h6>Начни путь к изменениям</h6>
                <p>Получи доступ ко всем материалам и начни практики в своём темпе — с нашей поддержкой.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Τρίτη Εнότητα "Our Packages" */}
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
          {/* Εнότητα FAQ */}
          <section className="faq-section">
            <div className="section-header">
              <span className="sub-title">Help Center</span>
              <h2>Часто Задаваемые Вопросы</h2>
              <p>Find answers to the most commonly asked questions about our services.</p>
            </div>
            <div className="faq-list">
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(0)}>
                  <h3>Чем уникальна эта платформа и почему ей можно доверять?</h3>
                </div>
                {activeIndex === 0 && (
                  <div className="faq-answer">
                    <p>Многие приходят к психологу в поисках «волшебной таблетки» — и наша платформа максимально близка к ней. Всё, что нужно — пройти курс и следовать чётким, проверенным рекомендациям. Мы заранее продумали маршрут, собрали рабочие инструменты, чтобы вы могли сосредоточиться на главном — на себе. Мы ценим ваше доверие и бережно относимся к информации, которую вы нам открываете. Платформа построена на надёжных технических решениях, включая элементы блокчейн-систем и смарт-контрактов. Это не просто слова — это способ создать для вас пространство, где можно чувствовать себя защищённо и спокойно.</p>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(1)}>
                  <h3>Как понять, подойдут ли мне терапевтические пакеты?</h3>
                </div>
                {activeIndex === 1 && (
                  <div className="faq-answer">
                    <p>Сомневаться — нормально. Часто перед началом работы возникает вопрос: «А поможет ли мне это?» Именно поэтому на платформе уже доступен бесплатный контент — текстовые и видео-материалы, чтобы вы могли почувствовать атмосферу, философию подхода и понять, насколько он вам откликается. Если говорить о пакетах, мы предлагаем три варианта: Пакет Базовый — недельная программа самопомощи. Подходит для тех, кто хочет протестировать формат с минимальными вложениями. Это оптимальное соотношение пользы, цены и качества на старте. Пакет Расширенный — включает одну онлайн-сессию в месяц и круглосуточный доступ к инструментам самопомощи. Хорошо подходит тем, кто предпочитает двигаться самостоятельно, но хочет периодически сверяться с терапевтом. Пакет Премиум — регулярные еженедельные онлайн-встречи и полный доступ ко всем материалам выбранного блока. Это формат глубокого сопровождения и максимальной вовлечённости. Если вы не уверены, с чего начать — мы рекомендуем протестировать Базовый пакет. Он даст ясное представление, как работает платформа, как вы себя чувствуете в таком формате, и стоит ли двигаться дальше — к расширенной поддержке или личной терапии. Подробное описание всех пакетов доступно в разделе «Подписки».</p>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(2)}>
                  <h3>Что входит в базовую подписку?</h3>
                </div>
                {activeIndex === 2 && (
                  <div className="faq-answer">
                    <p>Это недельная программа самопомощи — ваш пробный шаг. Вы получаете доступ к основным материалам, знакомитесь с подходом и решаете, хотите ли двигаться дальше. Этот пакет создан как символический старт с минимальной ценой.</p>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(3)}>
                  <h3>Как проходят ваши сессии?</h3>
                </div>
                {activeIndex === 3 && (
                  <div className="faq-answer">
                    <p>Сессии проходят онлайн и длятся один академический час — 50 минут. Это время, целиком посвящённое вам. Мы создаём безопасное и поддерживающее пространство, в котором можно быть собой — без критики, осуждения и давления. Здесь не нужно соответствовать ожиданиям или скрывать свои переживания. Наша цель — построить доверительные отношения и работать в тандеме, потому что устойчивые перемены возможны только в настоящем контакте. Чего ожидать? На сессии я буду задавать вопросы — иногда простые, иногда непростые, возможно, даже болезненные. Это естественная часть процесса. Но вы всегда можете сказать: «Я не готов(а) обсуждать это сейчас». Это не ошибка — это важный сигнал для нас обоих. Тогда мы будем искать внутренние опоры и помогать вам постепенно находить ресурс. Психотерапия работает, когда мы включены в процесс вместе: вы — через рефлексию и осмысление, я — через внимание, поддержку и профессиональный фокус. Только в этом сотрудничестве рождаются подлинные изменения.</p>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(4)}>
                  <h3>Сколько сессий нужно, чтобы почувствовать результат?</h3>
                </div>
                {activeIndex === 4 && (
                  <div className="faq-answer">
                    <p>Как и в любом курсе терапии, важно придерживаться рекомендованной последовательности. Минимальный эффективный цикл — это 5 сессий, которые дают возможность понять себя глубже и наметить вектор движения: 1 — знакомство и установление контакта 2 — сбор информации о вашей истории и текущем состоянии 3 — выявление ключевых потребностей 4 — совместное составление плана работы 5 — подведение первых итогов, рекомендации и ориентиры на будущее Эти 5 встреч — важное начало. После них у вас появляется чёткое понимание, что именно происходит, как с этим работать и в каком направлении двигаться дальше. Это может стать отправной точкой для продолжения регулярной терапии или самостоятельной работы — с опорой на план, рекомендации и инструменты, которые вы получите на платформе. Мы заранее предусмотрели всё необходимое для этих двух сценариев — и для глубокого сопровождения, и для самостоятельной трансформации в удобном вам темпе.</p>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(5)}>
                  <h3>Можно ли отменить подписку?</h3>
                </div>
                {activeIndex === 5 && (
                  <div className="faq-answer">
                    <p>Мы стремимся сделать платформу максимально удобной и гибкой, поэтому вы можете отменить автопродление подписки в любой момент — без скрытых условий. Если подписка уже оплачена и доступ к материалам открыт, возврат средств, к сожалению, не предусмотрен. Мы стараемся поддерживать баланс между прозрачностью сервиса и его устойчивостью. Наша команда постоянно работает над улучшением платформы, и в будущем мы планируем внедрять более гибкие варианты заморозки или переноса подписки — чтобы вы чувствовали себя ещё более свободно и уверенно.</p>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(6)}>
                  <h3>Что, если я не смогу прийти на сессию?</h3>
                </div>
                {activeIndex === 6 && (
                  <div className="faq-answer">
                    <p>Иногда обстоятельства меняются — это нормально. Если вы понимаете, что не сможете присутствовать на встрече, пожалуйста, сообщите об этом минимум за 24 часа — в этом случае вы можете бесплатно отменить или перенести сессию. Если уведомление пришло менее чем за 12 часов, мы можем вернуть 50% стоимости, чтобы частично компенсировать вашу бронь. А если вы просто не успели предупредить заранее — вы всегда можете перенести сессию на другое удобное время. Это простой и надёжный способ сохранить и ваше время, и вложенные средства. Мы на вашей стороне и готовы подстроиться под жизненные реалии — главное, чтобы работа не прерывалась.</p>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(7)}>
                  <h3>Могу ли я изменить тему подписки, если уже начал работать с одним блоком?</h3>
                </div>
                {activeIndex === 7 && (
                  <div className="faq-answer">
                    <p>Это очень естественно — интересы и фокус меняются по мере внутренней работы. На данный момент смена блока внутри активной подписки пока недоступна, но мы активно развиваем платформу, и в будущем такая возможность, возможно, появится. А пока мы с радостью предложим вам оформить новую (последующую) подписку на нужный блок со скидкой 10% — для любого выбранного пакета. Это удобный способ продолжить путь в том направлении, которое сейчас особенно важно для вас.</p>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(8)}>
                  <h3>А если у меня нет опыта в терапии — подойдёт ли мне эта платформа?</h3>
                </div>
                {activeIndex === 8 && (
                  <div className="faq-answer">
                    <p>Конечно! Вам не нужен никакой специальный опыт, чтобы начать. Все материалы объясняются простым и понятным языком, без перегруза. Если что-то вызовет вопросы — вы всегда можете обратиться за поддержкой. Здесь безопасно начинать с самого начала, в своём темпе.</p>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(9)}>
                  <h3>Можно ли с вами поработать индивидуально?</h3>
                </div>
                {activeIndex === 9 && (
                  <div className="faq-answer">
                    <p>Да, конечно. Если вы почувствуете, что вам нужна более глубокая личная поддержка — вы всегда можете записаться на индивидуальную консультацию. Это можно сделать как в рамках подписки через премиум пакет, так и отдельно. Мы обсудим ваш запрос, выберем удобное время и начнём путь, в котором вы получите профессиональное сопровождение.</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;