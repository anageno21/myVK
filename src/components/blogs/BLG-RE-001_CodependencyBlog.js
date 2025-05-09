// src/pages/blogs/BLG-RE-001_CodependencyBlog.js
import React from 'react';

const CodependencyBlog = () => {
  return {
    title: 'Созависимость: как распознать и выйти из нездоровых отношений',
    date: '5 ноября 2024',
    category: 'Отношения',
    image: '/images/blog/blg001a.jpg',
    heroSliderContent: {
      type: 'image',
      src: '/images/blog/blg001a.jpg',
    },
    authorId: 1, // Viktoria Kotenko
    content: (
      <>
        {/* Введение */}
        <h4 className="section-heading">Введение</h4>
        <p className="text-1 lh-30 fw-4">
          Созависимость — это не просто «слишком сильная привязанность» к другому человеку. Это глубокий психологический паттерн, при котором собственные потребности подменяются потребностями другого. Такие отношения могут выглядеть как самоотверженная забота, но внутри часто скрываются страх одиночества, низкая самооценка и стремление к контролю через спасение другого.<br />
          В этой статье мы разберём, что такое созависимость, как она формируется, по каким признакам её можно распознать и что делать, если вы узнали себя в этих описаниях.
        </p>

        {/* Что такое созависимость? */}
        <h4 className="section-heading">Что такое созависимость?</h4>
        <p className="text-1 lh-30 fw-4">
          Созависимость — это модель отношений, в которой один человек жертвует собой ради другого, теряя при этом связь со своими чувствами, желаниями и границами. Это не любовь, а скорее симбиоз, в котором один «даёт» до изнеможения, а другой — «берёт» без меры.<br />
          Созависимые отношения часто формируются в парах, где:
        </p>
        <ul className="text-1 lh-30 fw-4">
          <li>один партнёр испытывает зависимость (например, от веществ, работы, эмоциональных всплесков)</li>
          <li>другой — старается спасти, помочь, контролировать, забывая о себе</li>
        </ul>
        <blockquote className="quote">
          «Созависимость — это способ справляться с внутренней пустотой за счёт контроля над другим» — Melody Beattie, Codependent No More [1]
        </blockquote>

        {/* Как формируется созависимость? */}
        <h4 className="section-heading">Как формируется созависимость?</h4>
        <p className="text-1 lh-30 fw-4">
          Истоки часто уходут в детство:
        </p>
        <ul className="text-1 lh-30 fw-4">
          <li>Родители, которым нужно было «удобное» или «нужное» поведение ребёнка</li>
          <li>Отсутствие эмоциональной безопасности или непоследовательность в реакции на чувства</li>
          <li>Повышенная ответственность с раннего возраста («Ты должен заботиться о маме»)</li>
        </ul>
        <p className="text-1 lh-30 fw-4">
          В результате у человека формируется убеждение: «Я нужен, только если полезен другим», «Любовь — это когда я жертвую собой».<br /><br />
        </p>
        <blockquote className="quote">
          «Созависимость начинается там, где заканчиваются личные границы» — Pia Mellody, Facing Codependence [2]
        </blockquote>

        {/* Признаки созависимости */}
        <h4 className="section-heading">Признаки созависимости</h4>
        <ul className="text-1 lh-30 fw-4">
          <li>Постоянное чувство вины, если не помогаешь</li>
          <li>Зависимость самооценки от оценки партнёра</li>
          <li>Трудности с выражением гнева и несогласия</li>
          <li>Страх быть покинутым</li>
          <li>Желание контролировать эмоции и поступки другого</li>
          <li>Игнорирование собственных потребностей</li>
        </ul>
        <p className="text-1 lh-30 fw-4">
          Созависимость может проявляться не только в романтических отношениях, но и в дружбе, отношениях с родителями, детьми, коллегами.<br />
          Клиентка на одной из сессий сказала: «Я не понимаю, чего хочу. Я всегда жила чужими желаниями — сначала мамиными, потом мужа». Это типичная иллюстрация созависимого паттерна.
        </p>

        {/* Εικόνα blg001c.jpg πριν την ενότητα "Чем опасна созависимость?" */}
        <figure className={`section-image-wrapper ${false ? 'section-image-wrapper--square' : ''}`}>
          <img src="/images/blog/blg001c.jpg" alt="Codependency Illustration 1" className="section-image" />
        </figure>

        {/* Чем опасна созависимость? */}
        <h4 className="section-heading">Чем опасна созависимость?</h4>
        <ul className="text-1 lh-30 fw-4">
          <li>Постоянное эмоциональное истощение</li>
          <li>Потеря идентичности</li>
          <li>Высокий уровень тревожности и депрессии</li>
          <li>Развитие психосоматических симптомов</li>
          <li>Уход в крайности — от гиперконтроля до полной саможертвы</li>
        </ul>
        <p className="text-1 lh-30 fw-4">
          Созависимость — это не просто неудобный стиль отношений, это психоэмоциональное состояние, которое подрывает базу личности.<br />
        </p>
        <blockquote className="quote">
          «Созависимость — это эмоциональное рабство, где ты больше не принадлежишь себе» — Ross Rosenberg, The Human Magnet Syndrome [3]
        </blockquote>

        {/* Εικόνα blg001b.jpg ανάμεσα στο απόσпασма и την ενότητα "Как выйти из созависимости?" */}
        <figure className={`section-image-wrapper ${false ? 'section-image-wrapper--square' : ''}`}>
          <img src="/images/blog/blg001b.jpg" alt="Codependency Illustration 2" className="section-image" />
        </figure>

        {/* Как выйти из созависимости? */}
        <h4 className="section-heading">Как выйти из созависимости?</h4>
        <ol className="text-1 lh-30 fw-4">
          <li>Осознай проблему. Признание — это первый и самый важный шаг.</li>
          <li>Восстанавливай контакт с собой. Начни с простых вопросов: «Что я сейчас чувствую?», «Чего я хочу?»</li>
          <li>Учись отстаивать границы. Это не про агрессию, а про честность и уважение к себе.</li>
          <li>Развивай самоценность. Твоя ценность не в том, чтобы быть нужным, а в том, что ты есть.</li>
          <li>Обратиться за помощь. Психотерапия помогает разорвать старые сценарии и научиться строить зрелые, поддерживающие отношения.</li>
        </ol>
        <blockquote className="quote">
          «Отпустить контроль — это не значит стать безразличным. Это значит позволить другому быть отдельной личностью» — Pia Mellody [2]
        </blockquote>

        {/* Заключение */}
        <h4 className="section-heading">Заключение</h4>
        <p className="text-1 lh-30 fw-4">
          Созависимость — это не приговор. Это стратегия выживания, которую можно пересмотреть. Пройдя путь к себе, к своим чувствам и потребностям, вы сможете построить отношения, в которых будет место не только другому, но и себе. И это — настоящая близость.
        </p>

        {/* Источники */}
        <h4 className="section-heading">Источники</h4>
        <ol className="text-1 lh-30 fw-4">
          <li>Beattie, M. (1987). <i>Codependent No More: How to Stop Controlling Others and Start Caring for Yourself.</i> <a href="https://www.melodybeattie.com/" target="_blank" rel="noopener noreferrer">https://www.melodybeattie.com/</a></li>
          <li>Mellody, P., Miller, A. W., & Miller, K. (1989). <i>Facing Codependence: What It Is, Where It Comes from, How It Sabotages Our Lives.</i> <a href="https://www.goodreads.com/book/show/60989.Facing_Codependence" target="_blank" rel="noopener noreferrer">https://www.goodreads.com/book/show/60989.Facing_Codependence</a></li>
          <li>Rosenberg, R. (2013). <i>The Human Magnet Syndrome: Why We Love People Who Hurt Us.</i> <a href="https://humanmagnetsyndrome.com/" target="_blank" rel="noopener noreferrer">https://humanmagnetsyndrome.com/</a></li>
        </ol>
      </>
    ),
  };
};

export default CodependencyBlog;