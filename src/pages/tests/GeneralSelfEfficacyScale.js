import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/TestStyles.css';

function GeneralSelfEfficacyScale() {
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
      text: 'Могу всегда справиться с трудными проблемами, если постараюсь.',
      options: [
        { value: '1', text: 'Совсем не верно' },
        { value: '2', text: 'Едва верно' },
        { value: '3', text: 'Умеренно верно' },
        { value: '4', text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q2',
      text: 'Если я приложу достаточно усилий, я смогу решить большинство проблем.',
      options: [
        { value: '1', text: 'Совсем не верно' },
        { value: '2', text: 'Едва верно' },
        { value: '3', text: 'Умеренно верно' },
        { value: '4', text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q3',
      text: 'Мне легко придерживаться своих целей и достигать их.',
      options: [
        { value: '1', text: 'Совсем не верно' },
        { value: '2', text: 'Едва верно' },
        { value: '3', text: 'Умеренно верно' },
        { value: '4', text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q4',
      text: 'Я уверен, что могу эффективно справляться с неожиданными событиями.',
      options: [
        { value: '1', text: 'Совсем не верно' },
        { value: '2', text: 'Едва верно' },
        { value: '3', text: 'Умеренно верно' },
        { value: '4', text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q5',
      text: 'Благодаря своей находчивости, я могу справляться с непредвиденными ситуациями.',
      options: [
        { value: '1', text: 'Совсем не верно' },
        { value: '2', text: 'Едва верно' },
        { value: '3', text: 'Умеренно верно' },
        { value: '4', text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q6',
      text: 'Я могу найти выход из любой ситуации, независимо от того, что происходит.',
      options: [
        { value: '1', text: 'Совсем не верно' },
        { value: '2', text: 'Едва верно' },
        { value: '3', text: 'Умеренно верно' },
        { value: '4', text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q7',
      text: 'Я могу сохранять спокойствие, сталкиваясь с трудностями, потому что полагаюсь на свои способности.',
      options: [
        { value: '1', text: 'Совсем не верно' },
        { value: '2', text: 'Едва верно' },
        { value: '3', text: 'Умеренно верно' },
        { value: '4', text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q8',
      text: 'Когда я сталкиваюсь с проблемой, я обычно знаю, как её решить.',
      options: [
        { value: '1', text: 'Совсем не верно' },
        { value: '2', text: 'Едва верно' },
        { value: '3', text: 'Умеренно верно' },
        { value: '4', text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q9',
      text: 'Если что-то идёт не так, я уверен, что найду способ справиться.',
      options: [
        { value: '1', text: 'Совсем не верно' },
        { value: '2', text: 'Едва верно' },
        { value: '3', text: 'Умеренно верно' },
        { value: '4', text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q10',
      text: 'Я верю, что могу справиться с любой задачей, если захочу.',
      options: [
        { value: '1', text: 'Совсем не верно' },
        { value: '2', text: 'Едва верно' },
        { value: '3', text: 'Умеренно верно' },
        { value: '4', text: 'Совершенно верно' },
      ],
    },
  ];

  useEffect(() => {
    setFadeIn(false);
    setTimeout(() => setFadeIn(true), 0);
  }, [currentQuestionIndex]);

  const handleAnswerChange = (questionId, value) => {
    if (answers[questionId] !== value) {
      setAnswers(prev => ({
        ...prev,
        [questionId]: value,
      }));
    }
  };

  const handleNextQuestion = () => {
    if (answers[questions[currentQuestionIndex].id] !== null && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + (parseInt(value) || 0), 0);
    let recommendation = '';

    if (totalScore <= 20) {
      recommendation = {
        level: 'Низкая уверенность в своих силах',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'Твоя уверенность в своих силах может быть низкой. Наш расширенный пакет предложит тебе более глубокую поддержку для повышения уверенности в своих возможностях.',
      };
    } else if (totalScore <= 30) {
      recommendation = {
        level: 'Средняя уверенность в своих силах',
        package: 'Базовый Пакет',
        packageLink: '/our-service',
        description: 'Твоя уверенность в своих силах находится на среднем уровне. Наш базовый пакет поможет тебе укрепить веру в свои возможности.',
      };
    } else {
      recommendation = {
        level: 'Высокая уверенность в своих силах',
        package: 'Бесплатный Вводный Пакет',
        packageLink: '/free-package',
        description: 'У тебя высокая уверенность в своих силах! Наш бесплатный вводный пакет поможет тебе поддерживать эту уверенность и достигать новых целей.',
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
    const subject = 'Мои результаты теста: Шкала общей самоэффективности, GSE';
    const body = `Твой балл: ${result.score} из 40\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareViaWhatsApp = () => {
    if (!result) return;
    const text = `Мои результаты теста: Шкала общей самоэффективности, GSE\nТвой балл: ${result.score} из 40\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const printResult = () => {
    if (!result) return;
    const printContent = `
      <h3>Результаты теста: Шкала общей самоэффективности, GSE</h3>
      <p><strong>Твой балл:</strong> ${result.score} из 40</p>
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
  const allQuestionsAnswered = Object.values(answers).every(answer => answer !== null);

  return (
    <div className="self-efficacy-test">
      <div className="free-package-section">
        <div className="section-content">
          <h3 className="section-title" onClick={() => setIsTestOpen(!isTestOpen)}>
            Шкала общей самоэффективности, GSE
            <i className={`las la-angle-down dropdown-icon ${isTestOpen ? 'open' : ''}`}></i>
          </h3>
          <p className="section-description">
            Пройди наш тест, чтобы оценить свою уверенность в способности справляться с различными жизненными ситуациями. На основе результатов мы предложим тебе подходящий пакет поддержки, который поможет укрепить твою веру в себя.
            <span className="test-info">
              онлайн-тест | 10 пунктов | около 3 минут
            </span>
          </p>
          {isTestOpen && (
            <>
              <div className="test-container">
                {result ? (
                  <div className="test-result">
                    <p className="score-info"><strong>Твой балл:</strong></p>
                    <div className="score-bar">
                      <div
                        className="score-progress"
                        style={{
                          width: `${((result.score - 10) / 30) * 100}%`,
                          backgroundColor: result.score <= 20 ? '#ff4d4d' : result.score <= 30 ? '#ffd700' : '#32cd32',
                        }}
                      ></div>
                      <span className="score-label" style={{ position: 'absolute', left: `${((result.score - 10) / 30) * 100}%`, transform: 'translateX(-50%)' }}>
                        {result.score}
                      </span>
                    </div>
                    <div className="score-range">
                      <span>10</span>
                      <span>40</span>
                    </div>
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
                          <label key={optionIndex} className="option-label" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <input
                              type="radio"
                              name={questions[currentQuestionIndex].id}
                              value={option.value}
                              checked={answers[questions[currentQuestionIndex].id] === option.value}
                              onChange={() => handleAnswerChange(questions[currentQuestionIndex].id, option.value)}
                              className="custom-radio"
                            />
                            <span style={{ marginLeft: '10px' }}>{option.text}</span>
                          </label>
                        ))}
                      </div>
                      {currentQuestionIndex < questions.length - 1 ? (
                        <button
                          type="button"
                          onClick={handleNextQuestion}
                          className="submit-test-button"
                          disabled={answers[questions[currentQuestionIndex].id] === null}
                        >
                          Следующий вопрос
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={calculateResult}
                          className="submit-test-button"
                          disabled={!allQuestionsAnswered}
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
                  <strong>Автор:</strong> Ральф Шварцер и Маттиас Иерусалем (1995)
                </p>
                <p className="disclaimer-info">
                  Тест предоставляется исключительно в образовательных и развлекательных целях. Он не предназначен для предоставления психологических советов любого рода и не гарантирует точности или достоверности. Оценка бесплатна и анонимна. Вы можете сохранить прямую ссылку на ваши результаты.
                </p>
                <p>
                  <strong>Ссылки:</strong><br />
                  <a
                    href="https://en.wikipedia.org/wiki/Self-efficacy#Measurement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reference-link"
                  >
                    Schwarzer, R., & Jerusalem, M. (1995). Generalized Self-Efficacy scale. In J. Weinman, S. Wright, & M. Johnston, Measures in health psychology: A user’s portfolio. Causal and control beliefs (pp. 35-37). Windsor, UK: NFER-NELSON.
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

export default GeneralSelfEfficacyScale;