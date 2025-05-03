import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/TestStyles.css';

function MaritalSatisfactionAssessment() {
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [answers, setAnswers] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null,
    q6: null, q7: null, q8: null, q9: null, q10: null,
    q11: null, q12: null, q13: null, q14: null, q15: null,
  });
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 'q1',
      text: 'Я чувствую, что мой партнер понимает мои эмоции и чувства.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
    },
    {
      id: 'q2',
      text: 'Мы с партнером открыто обсуждаем наши проблемы и разногласия.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
    },
    {
      id: 'q3',
      text: 'Я доволен тем, как мы делим домашние обязанности.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
    },
    {
      id: 'q4',
      text: 'Я чувствую эмоциональную близость с моим партнером.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
    },
    {
      id: 'q5',
      text: 'Мы с партнером проводим достаточно времени вместе.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
    },
    {
      id: 'q6',
      text: 'Я чувствую, что мой партнер поддерживает мои цели и мечты.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
    },
    {
      id: 'q7',
      text: 'Мы с партнером часто ссоримся из-за мелочей.',
      options: [
        { value: '5', text: 'Никогда' },
        { value: '4', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '2', text: 'Часто' },
        { value: '1', text: 'Всегда' },
      ],
    },
    {
      id: 'q8',
      text: 'Я чувствую, что мой партнер ценит меня как личность.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
    },
    {
      id: 'q9',
      text: 'Мы с партнером имеем общие интересы и хобби.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
    },
    {
      id: 'q10',
      text: 'Я часто чувствую раздражение по отношению к партнеру.',
      options: [
        { value: '5', text: 'Никогда' },
        { value: '4', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '2', text: 'Часто' },
        { value: '1', text: 'Всегда' },
      ],
    },
    {
      id: 'q11',
      text: 'Я доволен нашей сексуальной жизнью.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
    },
    {
      id: 'q12',
      text: 'Я чувствую, что мы с партнером доверяем друг другу.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
    },
    {
      id: 'q13',
      text: 'Я чувствую себя одиноким в нашем браке.',
      options: [
        { value: '5', text: 'Никогда' },
        { value: '4', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '2', text: 'Часто' },
        { value: '1', text: 'Всегда' },
      ],
    },
    {
      id: 'q14',
      text: 'Мы с партнером уважаем личное пространство друг друга.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
    },
    {
      id: 'q15',
      text: 'Я верю, что наш брак может преодолеть любые трудности.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
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

    if (totalScore <= 30) {
      recommendation = {
        level: 'Низкий уровень удовлетворенности браком',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'Твой уровень удовлетворенности браком может быть низким. Наш расширенный пакет поможет вам с партнером укрепить отношения.',
      };
    } else if (totalScore <= 45) {
      recommendation = {
        level: 'Средний уровень удовлетворенности браком',
        package: 'Базовый Пакет',
        packageLink: '/our-service',
        description: 'Твой уровень удовлетворенности браком находится на среднем уровне. Наш базовый пакет поможет вам улучшить взаимопонимание.',
      };
    } else {
      recommendation = {
        level: 'Высокий уровень удовлетворенности браком',
        package: 'Бесплатный Вводный Пакет',
        packageLink: '/free-package',
        description: 'У тебя высокий уровень удовлетворенности браком! Наш бесплатный вводный пакет поможет вам поддерживать гармонию в отношениях.',
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
    });
    setResult(null);
    setShowShareOptions(false);
  };

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  const shareViaEmail = () => {
    if (!result) return;
    const subject = 'Мои результаты теста: Оценка удовлетворенности браком, MSA';
    const body = `Твой балл: ${result.score} из 75\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareViaWhatsApp = () => {
    if (!result) return;
    const text = `Мои результаты теста: Оценка удовлетворенности браком, MSA\nТвой балл: ${result.score} из 75\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const printResult = () => {
    if (!result) return;
    const printContent = `
      <h3>Результаты теста: Оценка удовлетворенности браком, MSA</h3>
      <p><strong>Твой балл:</strong> ${result.score} из 75</p>
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
    <div className="marital-satisfaction-test">
      <div className="free-package-section">
        <div className="section-content">
          <h3 className="section-title" onClick={() => setIsTestOpen(!isTestOpen)}>
            Оценка удовлетворенности браком, MSA
            <i className={`las la-angle-down dropdown-icon ${isTestOpen ? 'open' : ''}`}></i>
          </h3>
          <p className="section-description">
            Онлайн-версия теста на удовлетворенность браком (MSA) помогает оценить уровень гармонии и взаимопонимания в отношениях.
            <span className="test-info">
              онлайн-тест | 15 пунктов | около 3 минут
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
                          width: `${((result.score - 15) / 60) * 100}%`,
                          backgroundColor: result.score <= 30 ? '#ff4d4d' : result.score <= 45 ? '#ffd700' : '#32cd32',
                        }}
                      ></div>
                      <span className="score-label" style={{ position: 'absolute', left: `${((result.score - 15) / 60) * 100}%`, transform: 'translateX(-50%)' }}>
                        {result.score}
                      </span>
                    </div>
                    <div className="score-range">
                      <span>15</span>
                      <span>75</span>
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
                  <strong>Author:</strong> V. V. Stalin, T. L. Romanova, G. P. Butenko
                </p>
                <p className="disclaimer-info">
                  Test is provided for educational and entertainment use only. It is not intended to be a psychological advice of any kind, and come without any guarantee of accuracy or validity. Assessment is free and anonymous. You can save the direct link to your results.
                </p>
                <p>
                  <strong>References:</strong><br />
                  <a
                    href="https://stud.com.ua/46080/psihologiya/testopituvannik_zadovolenosti_shlyubom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reference-link"
                  >
                    Stalin, V. V., Romanova, T. L., & Butenko, G. P. Test-Questionnaire of Marital Satisfaction.
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

export default MaritalSatisfactionAssessment;