// src/components/TwoColumnSection.js
import React from 'react';
import { Instagram, Facebook, Twitter } from 'react-feather';
import './TwoColumnSection.css';

const TwoColumnSection = ({ therapist }) => {
  // Εάν το therapist δεν υπάρχει, εμφανίζουμε κενό περιεχόμενο ή μήνυμα σφάλματος
  if (!therapist) {
    return <section className="two-column-section"><p>Ошибка: Психолог не найден.</p></section>;
  }

  return (
    <section className="two-column-section">
      <div className="two-column-content">
        <div className="left-column">
          <div className="media-frame">
            <img
              src="/images/councillors/VK/vkIntro.jpg"
              alt={`${therapist.name} Intro`}
              className="media-image"
            />
          </div>
          <div className="trust-section">
            <h4 className="why-trust-title">Почему мне можно доверять?</h4>
            <ul className="trust-points">
              <li>
                У меня высшее психологическое образование и глубокая
                теоретическая база — за последние годы я прошла более 10
                профессиональных обучений, в том числе по гештальт-подходу,
                КПТ, работе с психотравмой, тревожными и депрессивными
                состояниями, психосоматике, консультированию пар.
              </li>
              <li>
                До психологии я работала финансовым аналитиком и бухгалтером.
                Это научило меня видеть структуру там, где кажется — только
                хаос. Сейчас этот навык помогает мне работать с ментальными
                процессами: видеть неочевидное, выстраивать причинно-следственные
                связи, находить точки опоры.
              </li>
              <li>
                В терапии я не «учитель» и не «судья». Я — проводник, партнёр,
                внимательный собеседник. Иногда — зеркало. Иногда — поддержка.
                Но всегда — искренне заинтересованный человек рядом.
              </li>
            </ul>
            <p className="final-message">
              Каждая история для меня уникальна. И если вы сейчас в поиске —
              возможно, именно с этой точки начинается ваш путь к себе.
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="therapist-info">
            <h1>{therapist.name}</h1>
            <h2>{therapist.title}</h2>
            <p className="therapist-specialization">
              {therapist.category}
            </p>
            <h3 className="welcome-title">Добро пожаловать</h3>
            <p className="highlight-text">
              От баланса в финансах — к балансу в жизни. Я прошла этот путь и
              теперь готова сопровождать других.
            </p>
            <p>
              Меня зовут {therapist.name}. Я практикующий психолог, работающий в
              интегративном подходе — это значит, что в работе я опираюсь на
              разные современные школы психологии (гештальт,
              когнитивно-поведенческая терапия, психоанализ и другие), выбирая
              именно те методы, которые подходят конкретному человеку в его
              ситуации. Такой подход позволяет глубже понять проблему и найти
              путь к изменениям, опираясь на индивидуальные особенности и
              потребности клиента.
            </p>
            <p>
              Моя история — это не просто история смены профессии. Это путь
              переосмысления. Более 20 лет я помогала людям управлять
              финансами, пока не поняла, что настоящие инвестиции — это
              душевное здоровье. Эмиграция, одиночество, война в родной стране
              стали для меня личным кризисом, который открыл новую дорогу — к
              пониманию себя и к желанию помогать другим. Так я пришла в
              психологию — не из любопытства, а из личной потребности в глубине,
              в смысле, в настоящем контакте.
            </p>
            <p>
              Хотя мой путь в профессии только начинается, за плечами уже
              десятки курсов, часы супервизий и самое главное — живой интерес к
              людям. Я не воспринимаю клиента как "задачу", которую нужно
              решить. Я ищу с каждым человеком его собственный путь — с
              уважением, вниманием и верой в ресурсы, которые есть внутри.
            </p>
            <p className="highlight-text">
              Мои профессиональные ценности — эмпатия, конфиденциальность и
              партнёрство.
            </p>
            <p>
              Я стараюсь быть опорой в трудные моменты, иногда — ментором, а
              иногда просто тем, кто выслушает и поможет разобраться. Благодаря
              опыту в аналитической сфере я умею видеть структуру даже в
              сложных ситуациях, анализировать, находить смысл и план действий.
            </p>
            <p>
              Сегодня я сопровождаю тех, кто чувствует себя потерянным,
              тревожным, уставшим, тех, кто хочет разобраться в себе, наладить
              отношения, найти ресурс и направление. Я не даю готовых ответов —
              я помогаю найти ваши. С опорой, вниманием, уважением к темпу и
              особенностям каждого.
            </p>
            <div className="grid-container">
              <div className="grid-item">
                <h4 className="grid-title">Курсы повышения квалификации</h4>
                <p className="grid-text">
                  10 программ за 3 года — постоянное развитие и расширение
                  подходов
                </p>
              </div>
              <div className="grid-item">
                <h4 className="grid-title">Часы практики</h4>
                <p className="grid-text">
                  60+ часов индивидуальной и учебной терапии.
                </p>
              </div>
              <div className="grid-item">
                <h4 className="grid-title">Супервизия</h4>
                <p className="grid-text">
                  Регулярные встречи с опытным специалистом для
                  профессионального роста.
                </p>
              </div>
              <div className="grid-item">
                <h4 className="grid-title">260+ подписчиков в Instagram</h4>
                <p className="grid-text">
                  Первое сообщество, где делюсь личным и профессиональным
                  опытом.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-wrapper">
        <div className="cta-container">
          <img
            src="/images/councillors/VK/cat.png"
            alt="Cat Image"
            className="cta-image"
          />
          <p className="cta-title">Свяжитесь с {therapist.name}</p>
          <p className="cta-email">
            Отправить письмо: <a href="mailto:[Insert Email]">[Insert Email]</a>
          </p>
          <div className="cta-buttons">
            <button className="book-chat-button">Записаться на чат</button>
            <button className="book-session-button">Записаться на сессию</button>
          </div>
          <div className="social-links">
            <a href="https://www.instagram.com/viktoriia_cyprus_psy/" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} className="social-icon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61567082072960" target="_blank" rel="noopener noreferrer">
              <Facebook size={24} className="social-icon" />
            </a>
            <a href="[Insert Twitter Link]" target="_blank" rel="noopener noreferrer">
              <Twitter size={24} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSection;