import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/TestStyles.css'; // Εισαγωγή του κοινού CSS

function RosenbergSelfEsteemScale() {
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
      text: 'Я чувствую, что я человек, достойный уважения, по крайней мере, не меньше, чем другие.',
      options: [
        { value: 3, text: 'Совершенно согласен' },
        { value: 2, text: 'Согласен' },
        { value: 1, text: 'Несогласен' },
        { value: 0, text: 'Совершенно не согласен' },
      ],
    },
    {
      id: 'q2',
      text: 'Я чувствую, что у меня есть ряд хороших качеств.',
      options: [
        { value: 3, text: 'Совершенно согласен' },
        { value: 2, text: 'Согласен' },
        { value: 1, text: 'Несогласен' },
        { value: 0, text: 'Совершенно не согласен' },
      ],
    },
    {
      id: 'q3',
      text: 'В целом, я склонен думать, что я неудачник.',
      options: [
        { value: 0, text: 'Совершенно согласен' },
        { value: 1, text: 'Согласен' },
        { value: 2, text: 'Несогласен' },
        { value: 3, text: 'Совершенно не согласен' },
      ],
    },
    {
      id: 'q4',
      text: 'Я способен делать вещи так же хорошо, как и большинство других людей.',
      options: [
        { value: 3, text: 'Совершенно согласен' },
        { value: 2, text: 'Согласен' },
        { value: 1, text: 'Несогласен' },
        { value: 0, text: 'Совершенно не согласен' },
      ],
    },
    {
      id: 'q5',
      text: 'Я чувствую, что у меня не так много поводов для гордости.',
      options: [
        { value: 0, text: 'Совершенно согласен' },
        { value: 1, text: 'Согласен' },
        { value: 2, text: 'Несогласен' },
        { value: 3, text: 'Совершенно не согласен' },
      ],
    },
    {
      id: 'q6',
      text: 'У меня позитивное отношение к себе.',
      options: [
        { value: 3, text: 'Совершенно согласен' },
        { value: 2, text: 'Согласен' },
        { value: 1, text: 'Несогласен' },
        { value: 0, text: 'Совершенно не согласен' },
      ],
    },
    {
      id: 'q7',
      text: 'В целом, я доволен собой.',
      options: [
        { value: 3, text: 'Совершенно согласен' },
        { value: 2, text: 'Согласен' },
        { value: 1, text: 'Несогласен' },
        { value: 0, text: 'Совершенно не согласен' },
      ],
    },
    {
      id: 'q8',
      text: 'Я хотел бы больше уважать себя.',
      options: [
        { value: 0, text: 'Совершенно согласен' },
        { value: 1, text: 'Согласен' },
        { value: 2, text: 'Несогласен' },
        { value: 3, text: 'Совершенно не согласен' },
      ],
    },
    {
      id: 'q9',
      text: 'Иногда я чувствую себя бесполезным.',
      options: [
        { value: 0, text: 'Совершенно согласен' },
        { value: 1, text: 'Согласен' },
        { value: 2, text: 'Несогласен' },
        { value: 3, text: 'Совершенно не согласен' },
      ],
    },
    {
      id: 'q10',
      text: 'Иногда я думаю, что я ни на что не годен.',
      options: [
        { value: 0, text: 'Совершенно согласен' },
        { value: 1, text: 'Согласен' },
        { value: 2, text: 'Несогласен' },
        { value: 3, text: 'Совершенно не согласен' },
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

    if (totalScore <= 14) {
      recommendation = {
        level: 'Низкая самооценка',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'Твоя самооценка может быть низкой. Наш расширенный пакет предложит тебе более глубокую поддержку для повышения уверенности в себе.',
      };
    } else if (totalScore <= 24) {
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
    const subject = 'Мои результаты теста: Шкала самооценки Розенберга, RSES';
    const body = `Твой балл: ${result.score} из 30\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareViaWhatsApp = () => {
    if (!result) return;
    const text = `Мои результаты теста: Шкала самооценки Розенберга, RSES\nТвой балл: ${result.score} из 30\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const printResult = () => {
    if (!result) return;
    const printContent = `
      <h3>Результаты теста: Шкала самооценки Розенберга, RSES</h3>
      <p><strong>Твой балл:</strong> ${result.score} из 30</p>
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
    <div className="self-esteem-test">
      <div className="free-package-section">
        <div className="section-content">
          <h3 className="section-title" onClick={() => setIsTestOpen(!isTestOpen)}>
            Шкала самооценки Розенберга, RSES
            <i className={`las la-angle-down dropdown-icon ${isTestOpen ? 'open' : ''}`}></i>
          </h3>
          <p className="section-description">
            Пройди наш тест, чтобы оценить уровень своей самооценки. На основе результатов мы предложим тебе подходящий пакет поддержки, который поможет укрепить твою уверенность в себе.
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
                    <p className="score-info"><strong>Твой балл:</strong> {result.score} из 30</p>
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
                  <strong>Author:</strong> M. Rosenberg (1965) {/* Ενημέρωση του author */}
                </p>
                <p className="disclaimer-info">
                  Test is provided for educational and entertainment use only. It is not intended to be a psychological advice of any kind, and come without any guarantee of accuracy or validity. Assesment is free and anonymous. You can save the direct link to your results. {/* Ενημέρωση του disclaimer */}
                </p>
                <p>
                  <strong>References:</strong><br />
                  <a
                    href="https://en.wikipedia.org/wiki/Rosenberg_self-esteem_scale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reference-link"
                  >
                    Rosenberg Self-Esteem Scale // University of Maryland<br />
                    Morris Rosenberg. Society and the adolescent self-image. NJ: Princeton University Press, 1965. {/* Ενημέρωση των αναφορών */}
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

export default RosenbergSelfEsteemScale;