import React from 'react';

const MindfulnessBlog = () => {
  return {
    title: 'Майндфулнесс: внимание, которое лечит',
    date: '15 ноября 2024',
    category: 'Стресс / Тревога',
    author: 'Viktoriia Kotenko',
    image: '/images/blog/blg003a.jpg',
    heroSliderContent: {
      type: 'image',
      src: '/images/blog/blg003a.jpg',
    },
    content: (
      <>
        {/* Введение */}
        <h4 className="section-heading">Ты когда-нибудь замечала, как сложно просто… побыть здесь?</h4>
        <p className="text-1 lh-30 fw-4">
          Ты когда-нибудь замечала, как сложно просто… побыть здесь? Без прокручивания мыслей, без планов, без «надо». Мысль уносит в прошлое, тревога — в будущее. А тело? Оно остаётся. Здесь. Но мы не всегда в нём. И вот тогда начинается расфокус, усталость, раздражительность. Иногда — даже тревога или панические ощущения без видимой причины.
        </p>
        <p className="text-1 lh-30 fw-4">
          Майндфулнесс — это не про восточную философию. Это про возвращение к себе. К телу. К моменту. К тому, что происходит прямо сейчас. Научно обоснованная практика, которая помогает снижать уровень стресса, регулировать эмоции и даже менять работу мозга.
        </p>

        {/* Что это вообще такое? */}
        <h4 className="section-heading">Что это вообще такое?</h4>
        <p className="text-1 lh-30 fw-4">
          Майндфулнесс (осознанность) — это состояние, в котором мы сознательно направляем внимание на то, что происходит здесь и сейчас. Без осуждения. Без стремления сразу изменить, исправить или убежать. Просто быть.
        </p>
        <p className="text-1 lh-30 fw-4">
          Эта практика уходит корнями в буддийскую медитацию, но в её современном виде она активно используется в психотерапии, в том числе в таких подходах, как MBCT (Mindfulness-Based Cognitive Therapy) и MBSR (Mindfulness-Based Stress Reduction).
        </p>

        {/* Что об этом говорит наука? */}
        <h4 className="section-heading">Что об этом говорит наука?</h4>
        <p className="text-1 lh-30 fw-4">
          Исследования подтверждают, что регулярная практика майндфулнесс:
        </p>
        <ul className="text-1 lh-30 fw-4">
          <li>снижает уровень кортизола (гормона стресса)</li>
          <li>активизирует области мозга, отвечающие за саморегуляцию и эмпатию</li>
          <li>уменьшает симптомы тревожности и депрессии</li>
          <li>улучшает качество сна и концентрацию</li>
        </ul>
        <p className="text-1 lh-30 fw-4">
          В метаанализе более 200 исследований установлено, что майндфулнесс помогает в лечении депрессии, тревожных расстройств и хронической боли (Khoury et al., 2013).
        </p>

        {/* Почему это работает? */}
        <h4 className="section-heading">Почему это работает?</h4>
        <p className="text-1 lh-30 fw-4">
          Потому что осознанность — это противоположность автоматизму. Мы часто живём в «режиме робота»: еда — фоном к сериалу, прогулка — с телефоном в руках, разговор — с мыслями о «что сказать потом». Майндфулнесс помогает остановиться и вернуть себе момент. А вместе с ним — контакт с собой.
        </p>

        {/* Μετακίνηση της blg003b.jpg εδώ */}
        <figure className={`section-image-wrapper ${false ? 'section-image-wrapper--square' : ''}`}>
          <img src="/images/blog/blg003b.jpg" alt="Иллюстрация научных данных о майндфулнесс" className="section-image" />
        </figure>

        {/* С чего начать? */}
        <h4 className="section-heading">С чего начать?</h4>
        <p className="text-1 lh-30 fw-4">
          Вот несколько простых способов практиковать осознанность без коврика и свечей:
        </p>
        <ul className="text-1 lh-30 fw-4">
          <li><strong>Дыхание.</strong> Просто остановись и обрати внимание на вдох и выдох. Без попытки дышать «правильно». Просто наблюдай.</li>
          <li><strong>Тело.</strong> Пройди вниманием от макушки до пяток. Где напряжение? Где тепло? Где покалывание?</li>
          <li><strong>Осознанная прогулка.</strong> Замедлись. Заметь, как ноги касаются земли. Как воздух касается кожи.</li>
          <li><strong>Еда.</strong> Один приём пищи в день — без экрана. Почувствуй вкус, аромат, текстуру.</li>
          <li><strong>Пауза.</strong> Перед тем как ответить, вдохни. Спроси себя: «Это моя реакция или автоматизм?»</li>
        </ul>

        {/* Μετακίνηση της blg003c.jpg εδώ */}
        <figure className={`section-image-wrapper ${false ? 'section-image-wrapper--square' : ''}`}>
          <img src="/images/blog/blg003c.jpg" alt="Иллюстрация осознанности в повседневной жизни" className="section-image" />
        </figure>

        {/* Это не про идеальность */}
        <h4 className="section-heading">Это не про идеальность</h4>
        <p className="text-1 lh-30 fw-4">
          Ты будешь отвлекаться. Это нормально. Внимание уходит — и ты мягко возвращаешь его обратно. Майндфулнесс — это не про «всё под контролем», а про «я вижу, что происходит».
        </p>
        <blockquote className="quote">
          «Осознанность — это не то, что мы делаем идеально. Это то, что мы выбираем снова и снова» — Jon Kabat-Zinn
        </blockquote>

        {/* Μετακίνηση της blg003d.jpg εδώ */}
        <figure className={`section-image-wrapper ${false ? 'section-image-wrapper--square' : ''}`}>
          <img src="/images/blog/blg003d.jpg" alt="Иллюстрация практики майндфулнесс" className="section-image" />
        </figure>

        {/* Когда стоит попробовать майндфулнесс */}
        <h4 className="section-heading">Когда стоит попробовать майндфулнесс</h4>
        <ul className="text-1 lh-30 fw-4">
          <li>При тревожности, когда мысли не останавливаются</li>
          <li>При хроническом стрессе</li>
          <li>Если сложно «слышать» свои желания и потребности</li>
          <li>При переедании, прокрастинации, потере фокуса</li>
          <li>Просто — чтобы стать ближе к себе</li>
        </ul>

        {/* Полезные ссылки и источники */}
        <h4 className="section-heading">Полезные ссылки и источники</h4>
        <ol className="text-1 lh-30 fw-4">
          <li>
            Kabat-Zinn, J. (1990). <i>Full Catastrophe Living</i>.
          </li>
          <li>
            Khoury, B., et al. (2013). Mindfulness-based therapy: A comprehensive meta-analysis. <i>Clinical Psychology Review</i>, 33(6), 763–771.{' '}
            <a href="https://doi.org/10.1016/j.cpr.2013.05.005" target="_blank" rel="noopener noreferrer">
              https://doi.org/10.1016/j.cpr.2013.05.005
            </a>
          </li>
          <li>
            Tang, Y.-Y., et al. (2015). The neuroscience of mindfulness meditation. <i>Nature Reviews Neuroscience</i>, 16, 213–225.{' '}
            <a href="https://doi.org/10.1038/nrn3916" target="_blank" rel="noopener noreferrer">
              https://doi.org/10.1038/nrn3916
            </a>
          </li>
        </ol>
      </>
    ),
  };
};

export default MindfulnessBlog;