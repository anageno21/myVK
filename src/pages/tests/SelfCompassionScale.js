import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SelfCompassionScale.css';

function SelfCompassionScale() {
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [answers, setAnswers] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null,
    q6: null, q7: null, q8: null, q9: null, q10: null,
    q11: null, q12: null, q13: null, q14: null, q15: null,
    q16: null, q17: null, q18: null, q19: null, q20: null,
    q21: null, q22: null, q23: null, q24: null, q25: null,
    q26: null,
  });
  const [result, setResult] = useState(null);

  const questions = [
    // Self-Kindness (5 items)
    {
      id: 'q1',
      text: 'Я стараюсь быть понимающим и терпеливым к тем аспектам моей личности, которые мне не нравятся.',
      options: [
        { value: 1, text: 'Почти никогда' },
        { value: 2, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 4, text: 'Часто' },
        { value: 5, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q2',
      text: 'Я добр к себе, когда переживаю страдания.',
      options: [
        { value: 1, text: 'Почти никогда' },
        { value: 2, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 4, text: 'Часто' },
        { value: 5, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q3',
      text: 'Когда я переживаю трудное время, я даю себе заботу и нежность, в которых нуждаюсь.',
      options: [
        { value: 1, text: 'Почти никогда' },
        { value: 2, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 4, text: 'Часто' },
        { value: 5, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q4',
      text: 'Я терпим к своим недостаткам и слабостям.',
      options: [
        { value: 1, text: 'Почти никогда' },
        { value: 2, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 4, text: 'Часто' },
        { value: 5, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q5',
      text: 'Я стараюсь быть любящим к себе, когда чувствую эмоциональную боль.',
      options: [
        { value: 1, text: 'Почти никогда' },
        { value: 2, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 4, text: 'Часто' },
        { value: 5, text: 'Почти всегда' },
      ],
    },
    // Self-Judgment (5 items, reverse scored)
    {
      id: 'q6',
      text: 'Когда я вижу аспекты себя, которые мне не нравятся, я становлюсь строг к себе.',
      options: [
        { value: 5, text: 'Почти никогда' },
        { value: 4, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 2, text: 'Часто' },
        { value: 1, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q7',
      text: 'Когда времена действительно трудные, я склонен быть жестким к себе.',
      options: [
        { value: 5, text: 'Почти никогда' },
        { value: 4, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 2, text: 'Часто' },
        { value: 1, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q8',
      text: 'Я могу быть немного холодным к себе, когда переживаю страдания.',
      options: [
        { value: 5, text: 'Почти никогда' },
        { value: 4, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 2, text: 'Часто' },
        { value: 1, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q9',
      text: 'Я осуждаю себя за свои недостатки и слабости.',
      options: [
        { value: 5, text: 'Почти никогда' },
        { value: 4, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 2, text: 'Часто' },
        { value: 1, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q10',
      text: 'Когда я чувствую эмоциональную боль, я склонен критиковать себя.',
      options: [
        { value: 5, text: 'Почти никогда' },
        { value: 4, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 2, text: 'Часто' },
        { value: 1, text: 'Почти всегда' },
      ],
    },
    // Common Humanity (4 items)
    {
      id: 'q11',
      text: 'Я стараюсь видеть свои неудачи как часть человеческого опыта.',
      options: [
        { value: 1, text: 'Почти никогда' },
        { value: 2, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 4, text: 'Часто' },
        { value: 5, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q12',
      text: 'Когда дела идут плохо, я вижу трудности как часть жизни, которую переживают все.',
      options: [
        { value: 1, text: 'Почти никогда' },
        { value: 2, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 4, text: 'Часто' },
        { value: 5, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q13',
      text: 'Когда я чувствую себя неадекватно, я напоминаю себе, что это чувство разделяют многие люди.',
      options: [
        { value: 1, text: 'Почти никогда' },
        { value: 2, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 4, text: 'Часто' },
        { value: 5, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q14',
      text: 'Когда я переживаю трудности, я напоминаю себе, что многие люди чувствуют то же самое.',
      options: [
        { value: 1, text: 'Почти никогда' },
        { value: 2, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 4, text: 'Часто' },
        { value: 5, text: 'Почти всегда' },
      ],
    },
    // Isolation (4 items, reverse scored)
    {
      id: 'q15',
      text: 'Когда я думаю о своих недостатках, я чувствую себя оторванным от остального мира.',
      options: [
        { value: 5, text: 'Почти никогда' },
        { value: 4, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 2, text: 'Часто' },
        { value: 1, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q16',
      text: 'Когда я переживаю неудачу, я чувствую себя изолированным от других.',
      options: [
        { value: 5, text: 'Почти никогда' },
        { value: 4, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 2, text: 'Часто' },
        { value: 1, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q17',
      text: 'Когда я чувствую боль, я ощущаю себя отделенным от других людей.',
      options: [
        { value: 5, text: 'Почти никогда' },
        { value: 4, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 2, text: 'Часто' },
        { value: 1, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q18',
      text: 'Когда я переживаю трудности, мне кажется, что я единственный, кто страдает.',
      options: [
        { value: 5, text: 'Почти никогда' },
        { value: 4, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 2, text: 'Часто' },
        { value: 1, text: 'Почти всегда' },
      ],
    },
    // Mindfulness (4 items)
    {
      id: 'q19',
      text: 'Когда что-то болезненное происходит, я стараюсь смотреть на ситуацию уравновешенно.',
      options: [
        { value: 1, text: 'Почти никогда' },
        { value: 2, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 4, text: 'Часто' },
        { value: 5, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q20',
      text: 'Когда я расстроен, я стараюсь сохранять свои эмоции в балансе.',
      options: [
        { value: 1, text: 'Почти никогда' },
        { value: 2, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 4, text: 'Часто' },
        { value: 5, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q21',
      text: 'Я принимаю свои чувства, даже если они болезненные.',
      options: [
        { value: 1, text: 'Почти никогда' },
        { value: 2, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 4, text: 'Часто' },
        { value: 5, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q22',
      text: 'Я стараюсь осознавать свои эмоции, не позволяя им захлестнуть меня.',
      options: [
        { value: 1, text: 'Почти никогда' },
        { value: 2, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 4, text: 'Часто' },
        { value: 5, text: 'Почти всегда' },
      ],
    },
    // Over-Identification (4 items, reverse scored)
    {
      id: 'q23',
      text: 'Когда что-то меня расстраивает, я позволяю своим чувствам захлестнуть меня.',
      options: [
        { value: 5, text: 'Почти никогда' },
        { value: 4, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 2, text: 'Часто' },
        { value: 1, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q24',
      text: 'Когда я чувствую себя подавленным, я склонен зацикливаться на всем, что идет не так.',
      options: [
        { value: 5, text: 'Почти никогда' },
        { value: 4, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 2, text: 'Часто' },
        { value: 1, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q25',
      text: 'Когда случается что-то болезненное, я склонен преувеличивать ситуацию.',
      options: [
        { value: 5, text: 'Почти никогда' },
        { value: 4, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 2, text: 'Часто' },
        { value: 1, text: 'Почти всегда' },
      ],
    },
    {
      id: 'q26',
      text: 'Когда я терплю неудачу в чем-то важном, я погружаюсь в чувства неадекватности.',
      options: [
        { value: 5, text: 'Почти никогда' },
        { value: 4, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 2, text: 'Часто' },
        { value: 1, text: 'Почти всегда' },
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

    if (totalScore <= 65) { // 1-2.5 μέσος όρος (26 ερωτήσεις x 2.5)
      recommendation = {
        level: 'Низкий уровень самосострадания',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'Твой уровень самосострадания может быть низким. Наш расширенный пакет предложит тебе более глубокую поддержку для развития доброты к себе.',
      };
    } else if (totalScore <= 91) { // 2.5-3.5 μέσος όρος (26 ερωτήσεις x 3.5)
      recommendation = {
        level: 'Средний уровень самосострадания',
        package: 'Базовый Пакет',
        packageLink: '/our-service',
        description: 'Твой уровень самосострадания находится на среднем уровне. Наш базовый пакет поможет тебе укрепить заботу о себе.',
      };
    } else { // 3.5-5 μέσος όρος (26 ερωτήσεις x 5 = 130)
      recommendation = {
        level: 'Высокий уровень самосострадания',
        package: 'Бесплатный Вводный Пакет',
        packageLink: '/free-package',
        description: 'У тебя высокий уровень самосострадания! Наш бесплатный вводный пакет поможет тебе поддерживать заботу о себе и достигать новых целей.',
      };
    }

    setResult({ score: totalScore, recommendation });
  };

  const closeTest = () => {
    setIsTestOpen(false);
    setCurrentQuestionIndex(0);
    setAnswers({
      q1: null, q2: null, q3: null, q4: null, q5: null,
      q6: null, q7: null, q8: null, q9: null, q10: null,
      q11: null, q12: null, q13: null, q14: null, q15: null,
      q16: null, q17: null, q18: null, q19: null, q20: null,
      q21: null, q22: null, q23: null, q24: null, q25: null,
      q26: null,
    });
    setResult(null);
    setShowShareOptions(false);
  };

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  const shareViaEmail = () => {
    if (!result) return;
    const subject = 'Мои результаты теста: Шкала Самосострадания, SCS';
    const body = `Твой балл: ${result.score} из 130\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareViaWhatsApp = () => {
    if (!result) return;
    const text = `Мои результаты теста: Шкала Самосострадания, SCS\nТвой балл: ${result.score} из 130\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const printResult = () => {
    if (!result) return;
    const printContent = `
      <h3>Результаты теста: Шкала Самосострадания, SCS</h3>
      <p><strong>Твой балл:</strong> ${result.score} из 130</p>
      <p><strong>Уровень:</strong> ${result.recommendation.level}</p>
      <p><strong>Рекомендация:</strong> ${result.recommendation.description}</p>
      <p><strong>Предлагаемый пакет:</strong> ${result.recommendation.package}</p>
    `;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Результаты теста</title>
          <style>
            body { font-family: 'Playfair Display', serif; text-align: left; }
            h3 { font-size: 20px; color: #143B64; }
            p { font-size: 16px; color: #2F4C66; }
          </style>
        </head>
        <body>
          ${printContent}
          <script>window.print(); window.close();</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="self-compassion-test">
      <div className="free-package-section">
        <div className="section-content">
          <h3 className="section-title" onClick={() => setIsTestOpen(!isTestOpen)}>
            Шкала Самосострадания, SCS
            <i className={`las la-angle-down dropdown-icon ${isTestOpen ? 'open' : ''}`}></i>
          </h3>
          <p className="section-description">
            Online version of the Self-Compassion Scale (SCS) by Kristin Neff measures the construct of self-compassion, which involves relating to ourselves with self-kindness and less self-judgment, feelings of common humanity and fewer feelings of isolation, mindfulness and decreased overidentification in situations of perceived failure, inadequacy, or personal suffering.
            <span className="test-info">
              онлайн-тест | 26 пунктов | около 5 минут
            </span>
          </p>
          {isTestOpen && (
            <>
              <div className="test-container">
                {result ? (
                  <div className="test-result">
                    <h3>Результаты теста</h3>
                    <p className="score-info"><strong>Твой балл:</strong> {result.score} из 130</p>
                    <p className="level-info"><strong>Уровень:</strong> {result.recommendation.level}</p>
                    <p><strong>Рекомендация:</strong> {result.recommendation.description}</p>
                    <p>
                      <strong>Предлагаемый пакет:</strong>{' '}
                      <Link to={result.recommendation.packageLink} className="recommended-package-link">
                        {result.recommendation.package}
                      </Link>
                    </p>
                    <div className="share-section">
                      <button onClick={closeTest} className="close-test-button">
                        Закрыть тест
                      </button>
                      <div className="share-container">
                        <i
                          className="las la-share share-icon"
                          onClick={toggleShareOptions}
                          title="Поделиться результатами"
                        ></i>
                        {showShareOptions && (
                          <div className="share-options">
                            <button onClick={shareViaEmail}>Email</button>
                            <button onClick={printResult}>Печать</button>
                            <button onClick={shareViaWhatsApp}>WhatsApp</button>
                          </div>
                        )}
                      </div>
                    </div>
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
                  <strong>Author:</strong> Kristin Neff (2003)
                </p>
                <p className="disclaimer-info">
                  Test is provided for educational and entertainment use only. It is not intended to be a psychological advice of any kind, and come without any guarantee of accuracy or validity. Assessment is free and anonymous. You can save the direct link to your results.
                </p>
                <p>
                  <strong>References:</strong><br />
                  <a
                    href="https://www.tandfonline.com/doi/abs/10.1080/15298860309027"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reference-link"
                  >
                    K. D. Neff. Development and validation of a scale to measure self-compassion // Self and Identity, 2003. 2
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

export default SelfCompassionScale;