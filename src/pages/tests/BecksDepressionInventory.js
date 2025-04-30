import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BecksDepressionInventory.css';

function BecksDepressionInventory() {
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [answers, setAnswers] = useState({
    sadness: null,
    pessimism: null,
    pastFailure: null,
    lossOfPleasure: null,
    guiltyFeelings: null,
    punishmentFeelings: null,
    selfDislike: null,
    selfCriticalness: null,
    suicidalThoughts: null,
    crying: null,
    agitation: null,
    lossOfInterest: null,
    indecisiveness: null,
    worthlessness: null,
    lossOfEnergy: null,
    changesInSleeping: null,
    changesInAppetite: null,
    concentrationDifficulty: null,
    tiredness: null,
    lossOfInterestInSex: null,
    physicalSymptoms: null,
  });
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 'sadness',
      text: 'Как ты себя чувствуешь в последнее время (грусть)?',
      options: [
        { value: 0, text: 'Не чувствую себя грустным.' },
        { value: 1, text: 'Иногда чувствую себя грустным.' },
        { value: 2, text: 'Часто чувствую себя грустным.' },
        { value: 3, text: 'Постоянно чувствую себя грустным и не могу это преодолеть.' },
      ],
    },
    {
      id: 'pessimism',
      text: 'Как ты оцениваешь своё будущее (пессимизм)?',
      options: [
        { value: 0, text: 'Не чувствую себя безнадёжным.' },
        { value: 1, text: 'Иногда чувствую себя безнадёжным.' },
        { value: 2, text: 'Часто чувствую себя безнадёжным.' },
        { value: 3, text: 'Чувствую себя совершенно безнадёжным.' },
      ],
    },
    {
      id: 'pastFailure',
      text: 'Как ты оцениваешь свои прошлые достижения (чувство неудачи)?',
      options: [
        { value: 0, text: 'Не чувствую себя неудачником.' },
        { value: 1, text: 'Иногда чувствую себя неудачником.' },
        { value: 2, text: 'Часто чувствую себя неудачником.' },
        { value: 3, text: 'Чувствую, что я полный неудачник.' },
      ],
    },
    {
      id: 'lossOfPleasure',
      text: 'Получаешь ли ты удовольствие от вещей, которые раньше любил (потеря удовольствия)?',
      options: [
        { value: 0, text: 'Получаю столько же удовольствия от вещей, как раньше.' },
        { value: 1, text: 'Получаю меньше удовольствия, чем раньше.' },
        { value: 2, text: 'Почти не получаю удовольствия от вещей.' },
        { value: 3, text: 'Совсем не получаю удовольствия от вещей.' },
      ],
    },
    {
      id: 'guiltyFeelings',
      text: 'Чувствуешь ли ты вину (чувство вины)?',
      options: [
        { value: 0, text: 'Не чувствую себя виноватым.' },
        { value: 1, text: 'Иногда чувствую себя виноватым.' },
        { value: 2, text: 'Часто чувствую себя виноватым.' },
        { value: 3, text: 'Постоянно чувствую себя виноватым.' },
      ],
    },
    {
      id: 'punishmentFeelings',
      text: 'Чувствуешь ли, что тебя наказывают (чувство наказания)?',
      options: [
        { value: 0, text: 'Не чувствую, что меня наказывают.' },
        { value: 1, text: 'Иногда чувствую, что меня наказывают.' },
        { value: 2, text: 'Ожидаю, что меня накажут.' },
        { value: 3, text: 'Чувствую, что меня наказывают.' },
      ],
    },
    {
      id: 'selfDislike',
      text: 'Как ты относишься к себе (неприязнь к себе)?',
      options: [
        { value: 0, text: 'Не испытываю неприязни к себе.' },
        { value: 1, text: 'Испытываю небольшую неприязнь к себе.' },
        { value: 2, text: 'Испытываю сильную неприязнь к себе.' },
        { value: 3, text: 'Ненавижу себя.' },
      ],
    },
    {
      id: 'selfCriticalness',
      text: 'Как часто ты критикуешь себя (самокритика)?',
      options: [
        { value: 0, text: 'Не критикую себя больше, чем обычно.' },
        { value: 1, text: 'Критикую себя больше, чем обычно.' },
        { value: 2, text: 'Постоянно критикую себя за свои ошибки.' },
        { value: 3, text: 'Вижу себя во всём виноватым.' },
      ],
    },
    {
      id: 'suicidalThoughts',
      text: 'Есть ли у тебя мысли о самоубийстве (суицидальные мысли)?',
      options: [
        { value: 0, text: 'У меня нет мыслей о самоубийстве.' },
        { value: 1, text: 'Иногда думаю о самоубийстве, но не собираюсь это делать.' },
        { value: 2, text: 'Часто думаю о самоубийстве.' },
        { value: 3, text: 'Хочу покончить с собой.' },
      ],
    },
    {
      id: 'crying',
      text: 'Как часто ты плачешь (плач)?',
      options: [
        { value: 0, text: 'Не плачу больше, чем обычно.' },
        { value: 1, text: 'Плачу чаще, чем обычно.' },
        { value: 2, text: 'Плачу почти каждый день.' },
        { value: 3, text: 'Хочу плакать, но не могу.' },
      ],
    },
    {
      id: 'agitation',
      text: 'Чувствуешь ли ты раздражительность (раздражительность)?',
      options: [
        { value: 0, text: 'Не чувствую себя раздражённым.' },
        { value: 1, text: 'Иногда чувствую себя раздражённым.' },
        { value: 2, text: 'Часто чувствую себя раздражённым.' },
        { value: 3, text: 'Постоянно чувствую себя раздражённым.' },
      ],
    },
    {
      id: 'lossOfInterest',
      text: 'Как обстоят дела с твоей социальной активностью (потеря интереса к общению)?',
      options: [
        { value: 0, text: 'Не потерял интерес к общению с людьми.' },
        { value: 1, text: 'Потерял небольшой интерес к общению.' },
        { value: 2, text: 'Потерял значительный интерес к общению.' },
        { value: 3, text: 'Совсем не хочу общаться с людьми.' },
      ],
    },
    {
      id: 'indecisiveness',
      text: 'Как ты принимаешь решения (нерешительность)?',
      options: [
        { value: 0, text: 'Принимаю решения так же, как раньше.' },
        { value: 1, text: 'Принимаю решения с большим трудом.' },
        { value: 2, text: 'Мне очень трудно принимать решения.' },
        { value: 3, text: 'Не могу принимать никакие решения.' },
      ],
    },
    {
      id: 'worthlessness',
      text: 'Чувствуешь ли ты себя бесполезным (чувство бесполезности)?',
      options: [
        { value: 0, text: 'Не чувствую себя бесполезным.' },
        { value: 1, text: 'Иногда чувствую себя бесполезным.' },
        { value: 2, text: 'Часто чувствую себя бесполезным.' },
        { value: 3, text: 'Чувствую себя совершенно бесполезным.' },
      ],
    },
    {
      id: 'lossOfEnergy',
      text: 'Каков твой уровень энергии (энергия)?',
      options: [
        { value: 0, text: 'У меня столько же энергии, как обычно.' },
        { value: 1, text: 'Чувствую себя более уставшим, чем обычно.' },
        { value: 2, text: 'Чувствую усталость почти весь день.' },
        { value: 3, text: 'Настолько устал, что ничего не могу делать.' },
      ],
    },
    {
      id: 'changesInSleeping',
      text: 'Как обстоят дела с твоим сном (изменения в сне)?',
      options: [
        { value: 0, text: 'Сплю нормально, как всегда.' },
        { value: 1, text: 'У меня небольшие проблемы со сном (трудно засыпать или просыпаюсь рано).' },
        { value: 2, text: 'У меня значительные проблемы со сном (сплю намного меньше или больше, чем обычно).' },
        { value: 3, text: 'Совсем не могу спать или сплю чрезмерно, не чувствуя отдыха.' },
      ],
    },
    {
      id: 'changesInAppetite',
      text: 'Как изменился твой аппетит (изменения в аппетите)?',
      options: [
        { value: 0, text: 'Мой аппетит не изменился.' },
        { value: 1, text: 'Мой аппетит немного изменился (ем больше или меньше, чем обычно).' },
        { value: 2, text: 'Мой аппетит значительно изменился.' },
        { value: 3, text: 'Совсем не хочу есть или ем намного больше, чем обычно.' },
      ],
    },
    {
      id: 'concentrationDifficulty',
      text: 'Как обстоят дела с твоей концентрацией (трудности с концентрацией)?',
      options: [
        { value: 0, text: 'Могу сосредотачиваться так же, как раньше.' },
        { value: 1, text: 'Мне немного труднее сосредотачиваться.' },
        { value: 2, text: 'Мне очень трудно сосредотачиваться.' },
        { value: 3, text: 'Не могу сосредотачиваться вообще.' },
      ],
    },
    {
      id: 'tiredness',
      text: 'Чувствуешь ли ты усталость (усталость)?',
      options: [
        { value: 0, text: 'Не чувствую себя более уставшим, чем обычно.' },
        { value: 1, text: 'Чувствую себя более уставшим, чем обычно.' },
        { value: 2, text: 'Чувствую усталость большую часть времени.' },
        { value: 3, text: 'Постоянно чувствую усталость.' },
      ],
    },
    {
      id: 'lossOfInterestInSex',
      text: 'Как обстоят дела с твоим интересом к сексу (потеря интереса к сексу)?',
      options: [
        { value: 0, text: 'Не потерял интерес к сексу.' },
        { value: 1, text: 'Потерял небольшой интерес к сексу.' },
        { value: 2, text: 'Потерял значительный интерес к сексу.' },
        { value: 3, text: 'Совсем не интересуюсь сексом.' },
      ],
    },
    {
      id: 'physicalSymptoms',
      text: 'Испытываешь ли ты физические симптомы (физические симптомы)?',
      options: [
        { value: 0, text: 'Не испытываю новых физических симптомов.' },
        { value: 1, text: 'Испытываю лёгкие физические симптомы (например, боли, дискомфорт).' },
        { value: 2, text: 'Испытываю умеренные физические симптомы, которые мешают.' },
        { value: 3, text: 'Испытываю серьёзные физические симптомы, которые сильно мешают.' },
      ],
    },
  ];

  useEffect(() => {
    setFadeIn(false);
    setTimeout(() => setFadeIn(true), 0);
  }, [currentQuestionIndex]);

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: parseInt(value),
    }));
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + (value || 0), 0);
    let recommendation = '';

    if (totalScore <= 13) {
      recommendation = {
        level: 'Минимальные признаки депрессии',
        package: 'Бесплатный Вводный Пакет',
        packageLink: '/free-package',
        description: 'Твоё эмоциональное состояние выглядит стабильным. Наш бесплатный вводный пакет поможет тебе укрепить внутреннее спокойствие и осознанность.',
      };
    } else if (totalScore <= 28) {
      recommendation = {
        level: 'Лёгкие или умеренные признаки депрессии',
        package: 'Базовый Пакет',
        packageLink: '/our-service',
        description: 'Ты можешь испытывать лёгкие или умеренные признаки депрессии. Наш базовый пакет поможет тебе справиться с этими чувствами и вернуть внутренний баланс.',
      };
    } else {
      recommendation = {
        level: 'Серьёзные признаки депрессии',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'Ты можешь испытывать серьёзные признаки депрессии. Наш расширенный пакет предложит тебе более глубокую поддержку и сопровождение.',
      };
    }

    setResult({ score: totalScore, recommendation });
  };

  const closeTest = () => {
    setIsTestOpen(false);
    setCurrentQuestionIndex(0);
    setAnswers({
      sadness: null,
      pessimism: null,
      pastFailure: null,
      lossOfPleasure: null,
      guiltyFeelings: null,
      punishmentFeelings: null,
      selfDislike: null,
      selfCriticalness: null,
      suicidalThoughts: null,
      crying: null,
      agitation: null,
      lossOfInterest: null,
      indecisiveness: null,
      worthlessness: null,
      lossOfEnergy: null,
      changesInSleeping: null,
      changesInAppetite: null,
      concentrationDifficulty: null,
      tiredness: null,
      lossOfInterestInSex: null,
      physicalSymptoms: null,
    });
    setResult(null);
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="depression-test">
      <div className="free-package-section">
        <div className="section-content">
          <h3 className="section-title" onClick={() => setIsTestOpen(!isTestOpen)}>
            Инвентарь депрессии Бека, BDI
            <i className={`las la-angle-down dropdown-icon ${isTestOpen ? 'open' : ''}`}></i>
          </h3>
          <p className="section-description">
            Пройди наш тест, чтобы оценить своё эмоциональное состояние. На основе результатов мы предложим тебе наиболее подходящий пакет поддержки, который поможет справиться с твоими текущими потребностями.
            <span className="test-info">
              онлайн-тест | 21 пункт | около 4 минут {/* Αλλαγή του κειμένου */}
            </span>
          </p>
          {isTestOpen && (
            <>
              <div className="test-container">
                {result ? (
                  <div className="test-result">
                    <h3>Результаты теста</h3>
                    <p className="score-info"><strong>Твой балл:</strong> {result.score} из 63</p>
                    <p className="level-info"><strong>Уровень:</strong> {result.recommendation.level}</p>
                    <p><strong>Рекомендация:</strong> {result.recommendation.description}</p>
                    <p>
                      <strong>Предлагаемый пакет:</strong>{' '}
                      <Link to={result.recommendation.packageLink} className="recommended-package-link">
                        {result.recommendation.package}
                      </Link>
                    </p>
                    <button onClick={closeTest} className="close-test-button">
                      Закрыть тест
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className={`test-question ${fadeIn ? 'fade-in' : ''}`}>
                      <h3>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].text}</h3>
                      <div className="options">
                        {questions[currentQuestionIndex].options.map((option, optionIndex) => (
                          <label key={optionIndex} className="option-label">
                            <input
                              type="radio"
                              name={questions[currentQuestionIndex].id}
                              value={option.value}
                              checked={answers[questions[currentQuestionIndex].id] === option.value}
                              onChange={() => handleAnswerChange(questions[currentQuestionIndex].id, option.value)}
                            />
                            {option.text}
                          </label>
                        ))}
                      </div>
                      {currentQuestionIndex === questions.length - 1 && (
                        <button
                          type="button"
                          onClick={calculateResult}
                          className="submit-test-button"
                          disabled={answers[questions[currentQuestionIndex].id] === null}
                        >
                          Узнать результаты
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
              <div className="test-footer-info">
                <p className="author-info">
                  <strong>Автор:</strong> Аарон Бек (1961, 1978)
                </p>
                <p className="disclaimer-info">
                  Тест предоставляется исключительно в образовательных и развлекательных целях. Он не предназначен для предоставления психологических советов любого рода и не гарантирует точности или достоверности. Оценка бесплатна и анонимна. Вы можете сохранить прямую ссылку на ваши результаты.
                </p>
                <p>
                  <strong>Ссылки:</strong><br />
                  <a
                    href="https://en.wikipedia.org/wiki/Beck_Depression_Inventory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reference-link"
                  >
                    А. Т. Бек, Р. А. Стир, М. Г. Карбин. Психометрические свойства Инвентаря депрессии Бека: двадцать пять лет оценки // Обзор клинической психологии, 1988. 8(1).
                  </a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BecksDepressionInventory;