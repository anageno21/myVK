import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RobsonSelfConceptQuestionnaire.css';

function RobsonSelfConceptQuestionnaire() {
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [answers, setAnswers] = useState({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null,
    q7: null,
    q8: null,
    q9: null,
    q10: null,
  });
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 'q1',
      text: 'Я доволен своей внешностью.',
      options: [
        { value: 0, text: 'Совсем не верно' },
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' },
        { value: 4, text: '4' },
        { value: 5, text: '5' },
        { value: 6, text: '6' },
        { value: 7, text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q2',
      text: 'Я чувствую себя уверенно в социальных ситуациях.',
      options: [
        { value: 0, text: 'Совсем не верно' },
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' },
        { value: 4, text: '4' },
        { value: 5, text: '5' },
        { value: 6, text: '6' },
        { value: 7, text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q3',
      text: 'Я часто чувствую себя бесполезным.',
      options: [
        { value: 7, text: 'Совсем не верно' },
        { value: 6, text: '1' },
        { value: 5, text: '2' },
        { value: 4, text: '3' },
        { value: 3, text: '4' },
        { value: 2, text: '5' },
        { value: 1, text: '6' },
        { value: 0, text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q4',
      text: 'Я принимаю себя таким, какой я есть.',
      options: [
        { value: 0, text: 'Совсем не верно' },
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' },
        { value: 4, text: '4' },
        { value: 5, text: '5' },
        { value: 6, text: '6' },
        { value: 7, text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q5',
      text: 'Я чувствую, что не могу справляться с жизненными трудностями.',
      options: [
        { value: 7, text: 'Совсем не верно' },
        { value: 6, text: '1' },
        { value: 5, text: '2' },
        { value: 4, text: '3' },
        { value: 3, text: '4' },
        { value: 2, text: '5' },
        { value: 1, text: '6' },
        { value: 0, text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q6',
      text: 'У меня есть чувство собственного достоинства.',
      options: [
        { value: 0, text: 'Совсем не верно' },
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' },
        { value: 4, text: '4' },
        { value: 5, text: '5' },
        { value: 6, text: '6' },
        { value: 7, text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q7',
      text: 'Я чувствую себя комфортно, когда нахожусь один.',
      options: [
        { value: 0, text: 'Совсем не верно' },
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' },
        { value: 4, text: '4' },
        { value: 5, text: '5' },
        { value: 6, text: '6' },
        { value: 7, text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q8',
      text: 'Я часто чувствую себя подавленным.',
      options: [
        { value: 7, text: 'Совсем не верно' },
        { value: 6, text: '1' },
        { value: 5, text: '2' },
        { value: 4, text: '3' },
        { value: 3, text: '4' },
        { value: 2, text: '5' },
        { value: 1, text: '6' },
        { value: 0, text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q9',
      text: 'Я доволен своими достижениями.',
      options: [
        { value: 0, text: 'Совсем не верно' },
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' },
        { value: 4, text: '4' },
        { value: 5, text: '5' },
        { value: 6, text: '6' },
        { value: 7, text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q10',
      text: 'Я чувствую себя неуверенно в своих способностях.',
      options: [
        { value: 7, text: 'Совсем не верно' },
        { value: 6, text: '1' },
        { value: 5, text: '2' },
        { value: 4, text: '3' },
        { value: 3, text: '4' },
        { value: 2, text: '5' },
        { value: 1, text: '6' },
        { value: 0, text: 'Совершенно верно' },
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

    if (totalScore <= 20) {
      recommendation = {
        level: 'Низкая самооценка',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'Твоя самооценка может быть низкой. Наш расширенный пакет предложит тебе более глубокую поддержку для повышения уверенности в себе.',
      };
    } else if (totalScore <= 40) {
      recommendation = {
        level: 'Средняя самооценка',
        package: 'Базовый Пакет',
        packageLink: '/our-service',
        description: 'Твоя самооценка находится на среднем уровне. Наш базовый пакет поможет тебе укрепить чувство собственного достоинства.',
      };
    } else {
      recommendation = {
        level: 'Высокая самооценка',
        package: 'Бесплатный Вводный Пакет',
        packageLink: '/free-package',
        description: 'У тебя высокая самооценка! Наш бесплатный вводный пакет поможет тебе поддерживать уверенность в себе и достигать новых целей.',
      };
    }

    setResult({ score: totalScore, recommendation });
  };

  const closeTest = () => {
    setIsTestOpen(false);
    setCurrentQuestionIndex(0);
    setAnswers({
      q1: null,
      q2: null,
      q3: null,
      q4: null,
      q5: null,
      q6: null,
      q7: null,
      q8: null,
      q9: null,
      q10: null,
    });
    setResult(null);
    setShowShareOptions(false);
  };

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  const shareViaEmail = () => {
    if (!result) return;
    const subject = 'Мои результаты теста: Шкала самооценки Робсона, RSCQ';
    const body = `Твой балл: ${result.score} из 70\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareViaWhatsApp = () => {
    if (!result) return;
    const text = `Мои результаты теста: Шкала самооценки Робсона, RSCQ\nТвой балл: ${result.score} из 70\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const printResult = () => {
    if (!result) return;
    const printContent = `
      <h3>Результаты теста: Шкала самооценки Робсона, RSCQ</h3>
      <p><strong>Твой балл:</strong> ${result.score} из 70</p>
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
            body { font-family: 'Playfair Display', serif; text-align: center; }
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
    <div className="self-concept-test">
      <div className="free-package-section">
        <div className="section-content">
          <h3 className="section-title" onClick={() => setIsTestOpen(!isTestOpen)}>
            Шкала самооценки Робсона, RSCQ
            <i className={`las la-angle-down dropdown-icon ${isTestOpen ? 'open' : ''}`}></i>
          </h3>
          <p className="section-description">
            Online version of the Robson Self-Concept Questionnaire (RSCQ), a self-report instrument for measuring self-esteem.
            <span className="test-info">
              онлайн-тест | 10 пунктов | около 3 минут
            </span>
          </p>
          {isTestOpen && (
            <>
              <div className="test-container">
                {result ? (
                  <div className="test-result">
                    <h3>Результаты теста</h3>
                    <p className="score-info"><strong>Твой балл:</strong> {result.score} из 70</p>
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
                  <strong>Author:</strong> P. Robson (1989)
                </p>
                <p className="disclaimer-info">
                  Test is provided for educational and entertainment use only. It is not intended to be a psychological advice of any kind, and come without any guarantee of accuracy or validity. Assessment is free and anonymous. You can save the direct link to your results.
                </p>
                <p>
                  <strong>References:</strong><br />
                  <a
                    href="https://www.cambridge.org/core/journals/psychological-medicine/article/development-of-a-new-selfreport-questionnaire-to-measure-self-esteem/7A1E99E0A08D5A5C9B0C5A1B0E4D5F3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reference-link"
                  >
                    P. Robson. Development of a new self-report questionnaire to measure self esteem // Psychological Medicine, 1989. 19
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

export default RobsonSelfConceptQuestionnaire;