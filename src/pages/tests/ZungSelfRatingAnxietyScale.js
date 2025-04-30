import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ZungSelfRatingAnxietyScale.css';

function ZungSelfRatingAnxietyScale() {
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [answers, setAnswers] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null,
    q6: null, q7: null, q8: null, q9: null, q10: null,
    q11: null, q12: null, q13: null, q14: null, q15: null,
    q16: null, q17: null, q18: null, q19: null, q20: null,
  });
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 'q1',
      text: 'Я чувствую себя более нервным и беспокойным, чем обычно.',
      options: [
        { value: 1, text: 'Редко' },
        { value: 2, text: 'Иногда' },
        { value: 3, text: 'Часто' },
        { value: 4, text: 'Постоянно' },
      ],
    },
    {
      id: 'q2',
      text: 'Я чувствую страх без видимой причины.',
      options: [
        { value: 1, text: 'Редко' },
        { value: 2, text: 'Иногда' },
        { value: 3, text: 'Часто' },
        { value: 4, text: 'Постоянно' },
      ],
    },
    {
      id: 'q3',
      text: 'Я легко расстраиваюсь или паникую.',
      options: [
        { value: 1, text: 'Редко' },
        { value: 2, text: 'Иногда' },
        { value: 3, text: 'Часто' },
        { value: 4, text: 'Постоянно' },
      ],
    },
    {
      id: 'q4',
      text: 'Мне кажется, что я могу развалиться на части.',
      options: [
        { value: 1, text: 'Редко' },
        { value: 2, text: 'Иногда' },
        { value: 3, text: 'Часто' },
        { value: 4, text: 'Постоянно' },
      ],
    },
    {
      id: 'q5',
      text: 'Я чувствую, что все в порядке, и ничего страшного не случится.',
      options: [
        { value: 4, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 2, text: 'Часто' },
        { value: 1, text: 'Постоянно' },
      ],
    },
    {
      id: 'q6',
      text: 'Мои руки и ноги дрожат.',
      options: [
        { value: 1, text: 'Редко' },
        { value: 2, text: 'Иногда' },
        { value: 3, text: 'Часто' },
        { value: 4, text: 'Постоянно' },
      ],
    },
    {
      id: 'q7',
      text: 'Меня беспокоят головные боли, боли в шее и спине.',
      options: [
        { value: 1, text: 'Редко' },
        { value: 2, text: 'Иногда' },
        { value: 3, text: 'Часто' },
        { value: 4, text: 'Постоянно' },
      ],
    },
    {
      id: 'q8',
      text: 'Я чувствую слабость и легко устаю.',
      options: [
        { value: 1, text: 'Редко' },
        { value: 2, text: 'Иногда' },
        { value: 3, text: 'Часто' },
        { value: 4, text: 'Постоянно' },
      ],
    },
    {
      id: 'q9',
      text: 'Я чувствую себя спокойным и могу сидеть спокойно.',
      options: [
        { value: 4, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 2, text: 'Часто' },
        { value: 1, text: 'Постоянно' },
      ],
    },
    {
      id: 'q10',
      text: 'Я чувствую, что мое сердце бьется быстрее, чем обычно.',
      options: [
        { value: 1, text: 'Редко' },
        { value: 2, text: 'Иногда' },
        { value: 3, text: 'Часто' },
        { value: 4, text: 'Постоянно' },
      ],
    },
    {
      id: 'q11',
      text: 'У меня бывают приступы головокружения.',
      options: [
        { value: 1, text: 'Редко' },
        { value: 2, text: 'Иногда' },
        { value: 3, text: 'Часто' },
        { value: 4, text: 'Постоянно' },
      ],
    },
    {
      id: 'q12',
      text: 'Я испытываю приступы дурноты или обмороки.',
      options: [
        { value: 1, text: 'Редко' },
        { value: 2, text: 'Иногда' },
        { value: 3, text: 'Часто' },
        { value: 4, text: 'Постоянно' },
      ],
    },
    {
      id: 'q13',
      text: 'Я могу дышать легко и свободно.',
      options: [
        { value: 4, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 2, text: 'Часто' },
        { value: 1, text: 'Постоянно' },
      ],
    },
    {
      id: 'q14',
      text: 'Я чувствую онемение или покалывание в пальцах рук и ног.',
      options: [
        { value: 1, text: 'Редко' },
        { value: 2, text: 'Иногда' },
        { value: 3, text: 'Часто' },
        { value: 4, text: 'Постоянно' },
      ],
    },
    {
      id: 'q15',
      text: 'Меня беспокоят боли в желудке или проблемы с пищеварением.',
      options: [
        { value: 1, text: 'Редко' },
        { value: 2, text: 'Иногда' },
        { value: 3, text: 'Часто' },
        { value: 4, text: 'Постоянно' },
      ],
    },
    {
      id: 'q16',
      text: 'Мне приходится часто мочиться.',
      options: [
        { value: 1, text: 'Редко' },
        { value: 2, text: 'Иногда' },
        { value: 3, text: 'Часто' },
        { value: 4, text: 'Постоянно' },
      ],
    },
    {
      id: 'q17',
      text: 'Мои руки обычно сухие и теплые.',
      options: [
        { value: 4, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 2, text: 'Часто' },
        { value: 1, text: 'Постоянно' },
      ],
    },
    {
      id: 'q18',
      text: 'Мое лицо становится горячим и красным.',
      options: [
        { value: 1, text: 'Редко' },
        { value: 2, text: 'Иногда' },
        { value: 3, text: 'Часто' },
        { value: 4, text: 'Постоянно' },
      ],
    },
    {
      id: 'q19',
      text: 'Я легко засыпаю и хорошо высыпаюсь ночью.',
      options: [
        { value: 4, text: 'Редко' },
        { value: 3, text: 'Иногда' },
        { value: 2, text: 'Часто' },
        { value: 1, text: 'Постоянно' },
      ],
    },
    {
      id: 'q20',
      text: 'У меня бывают кошмары.',
      options: [
        { value: 1, text: 'Редко' },
        { value: 2, text: 'Иногда' },
        { value: 3, text: 'Часто' },
        { value: 4, text: 'Постоянно' },
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

    if (totalScore <= 35) { // < 35: Ελάχιστη ή καθόλου ανησυχία
      recommendation = {
        level: 'Минимальный уровень тревожности',
        package: 'Бесплатный Вводный Пакет',
        packageLink: '/free-package',
        description: 'Твой уровень тревожности выглядит низким. Наш бесплатный вводный пакет поможет тебе поддерживать внутреннее спокойствие и осознанность.',
      };
    } else if (totalScore <= 50) { // 36-50: Ήπια έως μέτρια ανησυχία
      recommendation = {
        level: 'Лёгкий или умеренный уровень тревожности',
        package: 'Базовый Пакет',
        packageLink: '/our-service',
        description: 'Ты можешь испытывать лёгкий или умеренный уровень тревожности. Наш базовый пакет поможет тебе справиться с этими чувствами и вернуть внутренний баланс.',
      };
    } else { // > 50: Σοβαρή ανησυχία
      recommendation = {
        level: 'Высокий уровень тревожности',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'Ты можешь испытывать высокий уровень тревожности. Наш расширенный пакет предложит тебе более глубокую поддержку и сопровождение.',
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
    });
    setResult(null);
    setShowShareOptions(false);
  };

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  const shareViaEmail = () => {
    if (!result) return;
    const subject = 'Мои результаты теста: Шкала Самооценки Тревожности Занга, SAS';
    const body = `Твой балл: ${result.score} из 80\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareViaWhatsApp = () => {
    if (!result) return;
    const text = `Мои результаты теста: Шкала Самооценки Тревожности Занга, SAS\nТвой балл: ${result.score} из 80\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const printResult = () => {
    if (!result) return;
    const printContent = `
      <h3>Результаты теста: Шкала Самооценки Тревожности Занга, SAS</h3>
      <p><strong>Твой балл:</strong> ${result.score} из 80</p>
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
    <div className="zung-anxiety-test">
      <div className="free-package-section">
        <div className="section-content">
          <h3 className="section-title" onClick={() => setIsTestOpen(!isTestOpen)}>
            Шкала Самооценки Тревожности Занга, SAS
            <i className={`las la-angle-down dropdown-icon ${isTestOpen ? 'open' : ''}`}></i>
          </h3>
          <p className="section-description">
            Online version of the Zung Self-Rating Anxiety Scale (SAS), developed by Dr. William W. K. Zung for measuring the patient's level of anxiety.
            <span className="test-info">
              онлайн-тест | 20 пунктов | около 4 минут
            </span>
          </p>
          {isTestOpen && (
            <>
              <div className="test-container">
                {result ? (
                  <div className="test-result">
                    <h3>Результаты теста</h3>
                    <p className="score-info"><strong>Твой балл:</strong> {result.score} из 80</p>
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
                  <strong>Author:</strong> William Zung (1971)
                </p>
                <p className="disclaimer-info">
                  Test is provided for educational and entertainment use only. It is not intended to be a psychological advice of any kind, and come without any guarantee of accuracy or validity. Assessment is free and anonymous. You can save the direct link to your results.
                </p>
                <p>
                  <strong>See also:</strong><br />
                  Zung Self-Rating Depression Scale, SDS
                </p>
                <p>
                  <strong>References:</strong><br />
                  <a
                    href="https://www.sciencedirect.com/science/article/abs/pii/S0033318271713716"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reference-link"
                  >
                    William W. K. Zung. A rating instrument for anxiety disorders // Psychosomatics, 1971. 12(6)
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

export default ZungSelfRatingAnxietyScale;