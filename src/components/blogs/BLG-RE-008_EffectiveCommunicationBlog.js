import React from 'react';

const EffectiveCommunicationBlog = () => {
  return {
    title: 'Эффективное общение: как говорить, чтобы быть услышанным',
    date: '15 декабря 2024',
    category: 'Стресс / Тревога',
    author: 'Viktoriia Kotenko',
    image: '/images/blog/blg008a.jpg',
    heroSliderContent: {
      type: 'image',
      src: '/images/blog/blg008a.jpg',
    },
    content: (
      <>
        {/* Введение */}
        <h4 className="section-heading">Говорить — не значит успешно коммуницировать: как построить настоящее общение</h4>
        <p className="text-1 lh-30 fw-4">
          Все умеют говорить. Но не все умеют доносить. И уж тем более — слышать. Настоящее общение — это не просто подбор слов. Это процесс. Это контакт. Это про «быть с другим» и при этом — не терять себя.
        </p>
        <p className="text-1 lh-30 fw-4">
          Мы учимся алфавиту, диктанту, интонациям. Но не учим, как говорить о границах. Как выражать боль. Как спорить, не уничтожая. Как говорить «нет» без вины. И как слышать — даже когда не согласны.
        </p>
        <p className="text-1 lh-30 fw-4">
          Хочу поговорить об этом. Без «правильных скриптов». Просто — как человек, который часто работает с тем, где диалог заканчивается и начинается стена.
        </p>

        {/* Почему мы не слышим друг друга? */}
        <h4 className="section-heading">Почему мы не слышим друг друга?</h4>
        <p className="text-1 lh-30 fw-4">
          У каждого — свои фильтры. Опыт, травмы, уязвимости, тонкости темперамента. Слова могут быть одни, а слышатся — по-разному.
        </p>
        <ul className="text-1 lh-30 fw-4">
          <li>Когда ты говоришь «мне плохо», другой может слышать «ты виноват»</li>
          <li>Когда ты молчишь, другой может думать, что ты безразлична</li>
          <li>Когда ты стараешься быть вежливой, другой считывает это как отстранённость</li>
        </ul>
        <p className="text-1 lh-30 fw-4">
          Коммуникация — это не то, что мы говорим. Это то, как это принимается.
        </p>

        {/* Μετακίνηση της blg008b.jpg εδώ */}
        <figure className={`section-image-wrapper ${false ? 'section-image-wrapper--square' : ''}`}>
          <img src="/images/blog/blg008b.jpg" alt="Иллюстрация общения 1" className="section-image" />
        </figure>

        {/* Что делает общение настоящим? */}
        <h4 className="section-heading">Что делает общение настоящим?</h4>
        <ol className="text-1 lh-30 fw-4">
          <li><strong>Ясность.</strong> Когда ты говоришь прямо, без намёков и недосказанностей. Это не грубость — это забота о себе и другом.</li>
          <li><strong>Ответственность.</strong> Я сообщаю о своих чувствах и потребностях — и не перекладываю их на собеседника. Например: <br />✖️ «Ты меня игнорируешь» <br />✔️ «Я чувствую себя невидимой, когда не получаю ответа»</li>
          <li><strong>Эмпатия.</strong> Не соглашаться, но понимать. Видеть, что за реакцией стоит чувство.</li>
          <li><strong>Внутреннее замедление.</strong> Иногда важно не ответить сразу. Остановиться. Осмыслить. Не бросать в лицо слова на эмоциях.</li>
          <li><strong>Телесная включённость.</strong> Настоящий контакт — это не только речь. Это голос. Темп. Поза. Микропауза. Улыбка. Взгляд.</li>
        </ol>
        <blockquote className="quote">
          «Человеческое общение начинается не с ответа, а с присутствия»
        </blockquote>

        {/* Что говорит наука */}
        <h4 className="section-heading">Что говорит наука</h4>
        <ul className="text-1 lh-30 fw-4">
          <li>По данным исследований Harvard Business Review, качество общения напрямую влияет на уровень удовлетворённости отношениями и снижает конфликты в парах и командах.</li>
          <li>Эмпатическое слушание снижает физиологические маркеры стресса у обоих участников диалога (Kross et al., 2014).</li>
          <li>Люди, умеющие выражать чувства словами, имеют более высокий уровень эмоциональной регуляции (Lieberman et al., 2007).</li>
        </ul>

        {/* Μετακίνηση της blg008c.jpg εδώ */}
        <figure className={`section-image-wrapper ${false ? 'section-image-wrapper--square' : ''}`}>
          <img src="/images/blog/blg008c.jpg" alt="Иллюстрация общения 2" className="section-image" />
        </figure>

        {/* Что можно начать делать уже сегодня */}
        <h4 className="section-heading">Что можно начать делать уже сегодня</h4>
        <ul className="text-1 lh-30 fw-4">
          <li>Замени реактивные фразы на описания своих чувств: вместо «ты всегда...» — «я замечаю, что...»</li>
          <li>Оцени не только смысл слов, но и тон, жесты, паузы. Что стоит за словами?</li>
          <li>Проверь: ты хочешь понять — или выиграть? Одно исключает другое.</li>
          <li>Не бойся тишины. В диалоге пауза — это не враг, а пространство.</li>
          <li>Задавай уточняющие вопросы. Иногда «расскажи больше» — это акт любви.</li>
        </ul>

        {/* Важное */}
        <h4 className="section-heading">Важное</h4>
        <p className="text-1 lh-30 fw-4">
          Общение — это не навык только для «говорящих профессий». Это основа связей. И когда ты учишься говорить ясно, мягко, с собой и другими — ты не просто «развиваешь навык». Ты строишь жизнь, в которой тебя слышат. И в которой ты не теряешь себя.
        </p>

        {/* Источники */}
        <h4 className="section-heading">Источники:</h4>
        <ol className="text-1 lh-30 fw-4">
          <li>
            Kross, E., et al. (2014). Self-talk as a regulatory mechanism. <i>Journal of Personality and Social Psychology</i>, 106(2), 304–324.{' '}
            <a href="https://doi.org/10.1037/a0035570" target="_blank" rel="noopener noreferrer">
              https://doi.org/10.1037/a0035570
            </a>
          </li>
          <li>
            Lieberman, M. D., et al. (2007). Putting feelings into words: affect labeling disrupts amygdala activity. <i>Psychological Science</i>, 18(5), 421–428.{' '}
            <a href="https://doi.org/10.1111/j.1467-9280.2007.01916.x" target="_blank" rel="noopener noreferrer">
              https://doi.org/10.1111/j.1467-9280.2007.01916.x
            </a>
          </li>
          <li>
            Groysberg, B., & Slind, M. (2012). <i>Talk Inc.: How Trusted Leaders Use Conversation to Power Their Organizations</i>. Harvard Business Review Press.
          </li>
        </ol>
      </>
    ),
  };
};

export default EffectiveCommunicationBlog;