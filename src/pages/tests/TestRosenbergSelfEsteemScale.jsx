import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../../components/ProfileHeader';
import './TestsStyleQuestionnaire.css';

function TestRosenbergSelfEsteemScale() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
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
        { value: '3', text: 'Совершенно согласен' },
        { value: '2', text: 'Согласен' },
        { value: '1', text: 'Несогласен' },
        { value: '0', text: 'Совершенно не согласен' },
      ],
    },
    {
      id: 'q2',
      text: 'Я чувствую, что у меня есть ряд хороших качеств.',
      options: [
        { value: '3', text: 'Совершенно согласен' },
        { value: '2', text: 'Согласен' },
        { value: '1', text: 'Несогласен' },
        { value: '0', text: 'Совершенно не согласен' },
      ],
    },
    {
      id: 'q3',
      text: 'В целом, я склонен думать, что я неудачник.',
      options: [
        { value: '0', text: 'Совершенно согласен' },
        { value: '1', text: 'Согласен' },
        { value: '2', text: 'Несогласен' },
        { value: '3', text: 'Совершенно не согласен' },
      ],
    },
    {
      id: 'q4',
      text: 'Я способен делать вещи так же хорошо, как и большинство других людей.',
      options: [
        { value: '3', text: 'Совершенно согласен' },
        { value: '2', text: 'Согласен' },
        { value: '1', text: 'Несогласен' },
        { value: '0', text: 'Совершенно не согласен' },
      ],
    },
    {
      id: 'q5',
      text: 'Я чувствую, что у меня не так много поводов для гордости.',
      options: [
        { value: '0', text: 'Совершенно согласен' },
        { value: '1', text: 'Согласен' },
        { value: '2', text: 'Несогласен' },
        { value: '3', text: 'Совершенно не согласен' },
      ],
    },
    {
      id: 'q6',
      text: 'У меня позитивное отношение к себе.',
      options: [
        { value: '3', text: 'Совершенно согласен' },
        { value: '2', text: 'Согласен' },
        { value: '1', text: 'Несогласен' },
        { value: '0', text: 'Совершенно не согласен' },
      ],
    },
    {
      id: 'q7',
      text: 'В целом, я доволен собой.',
      options: [
        { value: '3', text: 'Совершенно согласен' },
        { value: '2', text: 'Согласен' },
        { value: '1', text: 'Несогласен' },
        { value: '0', text: 'Совершенно не согласен' },
      ],
    },
    {
      id: 'q8',
      text: 'Я хотел бы больше уважать себя.',
      options: [
        { value: '0', text: 'Совершенно согласен' },
        { value: '1', text: 'Согласен' },
        { value: '2', text: 'Несогласен' },
        { value: '3', text: 'Совершенно не согласен' },
      ],
    },
    {
      id: 'q9',
      text: 'Иногда я чувствую себя бесполезным.',
      options: [
        { value: '0', text: 'Совершенно согласен' },
        { value: '1', text: 'Согласен' },
        { value: '2', text: 'Несогласен' },
        { value: '3', text: 'Совершенно не согласен' },
      ],
    },
    {
      id: 'q10',
      text: 'Иногда я думаю, что я ни на что не годен.',
      options: [
        { value: '0', text: 'Совершенно согласен' },
        { value: '1', text: 'Согласен' },
        { value: '2', text: 'Несогласен' },
        { value: '3', text: 'Совершенно не согласен' },
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

    if (totalScore <= 14) {
      recommendation = {
        level: 'Низкая самооценка',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'Твоя самооценка может быть низкой. Наш расширенный paket предложит тебе более глубокую поддержку для повышения уверенности в себе.',
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
    <div className="attachment-style-test">
      <ProfileHeader />
      <div className="free-package-section">
        <div className="section-content">
          <h3 className="section-title">
            Шкала самооценки Розенберга, RSES
          </h3>
          <p className="section-description">
            Насколько ты уверен(а) в себе — и как это влияет на твои решения, отношения и эмоциональное состояние? Шкала самооценки Розенберга — один из самых широко используемых и валидированных психологических тестов в мире. Она оценивает общее чувство собственного достоинства и отношение человека к самому себе. Самооценка влияет на всё: от выбора партнёра и карьерных шагов до способности справляться с критикой и стрессом. Пройди тест — и получи релевантные рекомендации, с чего начать укрепление своей самооценки и внутренней опоры.
            <span className="test-info">
              онлайн-тест | 10 пунктов | около 3 минут
            </span>
          </p>
          <div className="test-container" style={{ borderRadius: '20px', backgroundColor: '#fff', border: '1px solid #e0e0e0' }}>
            {result ? (
              <div className="test-result">
                <p className="score-info"><strong>Твой балл:</strong></p>
                <div className="score-bar">
                  <div
                    className={`score-progress ${result.score <= 14 ? 'score-progress-low' : result.score <= 24 ? 'score-progress-medium' : 'score-progress-top'}`}
                    style={{ width: `${(result.score / 30) * 100}%` }}
                  ></div>
                  <span className="score-label" style={{ left: `${(result.score / 30) * 100}%` }}>
                    {result.score}
                  </span>
                </div>
                <div className="score-range">
                  <span>0</span>
                  <span>30</span>
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
                      className="las la-envelope share-icon"
                      onClick={shareViaEmail}
                      title="Поделиться через Email"
                    ></i>
                    <i
                      className="las la-whatsapp share-icon"
                      onClick={shareViaWhatsApp}
                      title="Поделиться через WhatsApp"
                    ></i>
                    <i
                      className="las la-print share-icon"
                      onClick={printResult}
                      title="Печать результатов"
                    ></i>
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
                          className="custom-radio"
                        />
                        <span>{option.text}</span>
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
              <strong>Author:</strong> M. Rosenberg (1965)
            </p>
            <p className="disclaimer-info">
              Test is provided for educational and entertainment use only. It is not intended to be a psychological advice of any kind, and come without any guarantee of accuracy or validity. Assessment is free and anonymous. You can save the direct link to your results.
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
                Morris Rosenberg. Society and the adolescent self-image. NJ: Princeton University Press, 1965.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestRosenbergSelfEsteemScale;