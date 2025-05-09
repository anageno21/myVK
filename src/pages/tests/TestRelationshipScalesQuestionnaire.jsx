import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../../components/ProfileHeader';
import './TestsStyleQuestionnaire.css';

function TestRelationshipScalesQuestionnaire() {
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
      text: 'Я чувствую, что мой партнер действительно понимает меня.',
      options: [
        { value: '0', text: 'Совсем не верно' },
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' },
        { value: '5', text: '5' },
        { value: '6', text: '6' },
        { value: '7', text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q2',
      text: 'Я часто чувствую себя одиноко, даже когда я с партнером.',
      options: [
        { value: '7', text: 'Совсем не верно' },
        { value: '6', text: '1' },
        { value: '5', text: '2' },
        { value: '4', text: '3' },
        { value: '3', text: '4' },
        { value: '2', text: '5' },
        { value: '1', text: '6' },
        { value: '0', text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q3',
      text: 'Я могу свободно делиться своими мыслями и чувствами с партнером.',
      options: [
        { value: '0', text: 'Совсем не верно' },
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' },
        { value: '5', text: '5' },
        { value: '6', text: '6' },
        { value: '7', text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q4',
      text: 'Я часто боюсь, что мой партнер меня покинет.',
      options: [
        { value: '7', text: 'Совсем не верно' },
        { value: '6', text: '1' },
        { value: '5', text: '2' },
        { value: '4', text: '3' },
        { value: '3', text: '4' },
        { value: '2', text: '5' },
        { value: '1', text: '6' },
        { value: '0', text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q5',
      text: 'Я чувствую, что мы с партнером хорошо дополняем друг друга.',
      options: [
        { value: '0', text: 'Совсем не верно' },
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' },
        { value: '5', text: '5' },
        { value: '6', text: '6' },
        { value: '7', text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q6',
      text: 'Я чувствую, что мой партнер принимает меня таким, какой я есть.',
      options: [
        { value: '0', text: 'Совсем не верно' },
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' },
        { value: '5', text: '5' },
        { value: '6', text: '6' },
        { value: '7', text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q7',
      text: 'Я часто ссорюсь с партнером по мелочам.',
      options: [
        { value: '7', text: 'Совсем не верно' },
        { value: '6', text: '1' },
        { value: '5', text: '2' },
        { value: '4', text: '3' },
        { value: '3', text: '4' },
        { value: '2', text: '5' },
        { value: '1', text: '6' },
        { value: '0', text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q8',
      text: 'Я чувствую, что могу доверять своему партнеру.',
      options: [
        { value: '0', text: 'Совсем не верно' },
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' },
        { value: '5', text: '5' },
        { value: '6', text: '6' },
        { value: '7', text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q9',
      text: 'Я часто чувствую, что мой партнер меня не ценит.',
      options: [
        { value: '7', text: 'Совсем не верно' },
        { value: '6', text: '1' },
        { value: '5', text: '2' },
        { value: '4', text: '3' },
        { value: '3', text: '4' },
        { value: '2', text: '5' },
        { value: '1', text: '6' },
        { value: '0', text: 'Совершенно верно' },
      ],
    },
    {
      id: 'q10',
      text: 'Я счастлив в наших отношениях.',
      options: [
        { value: '0', text: 'Совсем не верно' },
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' },
        { value: '5', text: '5' },
        { value: '6', text: '6' },
        { value: '7', text: 'Совершенно верно' },
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

    if (totalScore <= 35) {
      recommendation = {
        level: 'Низкий уровень удовлетворенности отношениями',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'Твой уровень удовлетворенности отношениями может быть низким. Наш расширенный пакет поможет тебе работать над улучшением связи с партнером.',
      };
    } else if (totalScore <= 50) {
      recommendation = {
        level: 'Средний уровень удовлетворенности отношениями',
        package: 'Базовый Пакет',
        packageLink: '/our-service',
        description: 'Твой уровень удовлетворенности отношениями находится на среднем уровне. Наш базовый пакет поможет укрепить ваши отношения.',
      };
    } else {
      recommendation = {
        level: 'Высокий уровень удовлетворенности отношениями',
        package: 'Бесплатный Вводный Пакет',
        packageLink: '/free-package',
        description: 'У тебя высокий уровень удовлетворенности отношениями! Наш бесплатный вводный пакет поможет вам продолжать развивать гармонию.',
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
    const subject = 'Мои результаты теста: Опросник шкалы отношений';
    const body = `Твой балл: ${result.score} из 70\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareViaWhatsApp = () => {
    if (!result) return;
    const text = `Мои результаты теста: Опросник шкалы отношений\nТвой балл: ${result.score} из 70\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const printResult = () => {
    if (!result) return;
    const printContent = `
      <h3>Результаты теста: Опросник шкалы отношений</h3>
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
            Опросник шкалы отношений
          </h3>
          <p className="section-description">
            Этот тест помогает оценить качество твоих отношений с партнером — насколько ты чувствуешь близость, доверие и удовлетворенность. Пройди тест — и получи рекомендации, которые помогут улучшить ваши отношения.
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
                    className={`score-progress ${result.score <= 35 ? 'score-progress-low' : result.score <= 50 ? 'score-progress-medium' : 'score-progress-top'}`}
                    style={{ width: `${((result.score - 0) / 70) * 100}%` }}
                  ></div>
                  <span className="score-label" style={{ left: `${((result.score - 0) / 70) * 100}%` }}>
                    {result.score}
                  </span>
                </div>
                <div className="score-range">
                  <span>0</span>
                  <span>70</span>
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
              <strong>Author:</strong> Susan S. Hendrick (1988)
            </p>
            <p className="disclaimer-info">
              Test is provided for educational and entertainment use only. It is not intended to be a psychological advice of any kind, and come without any guarantee of accuracy or validity. Assessment is free and anonymous. You can save the direct link to your results.
            </p>
            <p>
              <strong>References:</strong><br />
              <a
                href="https://doi.org/10.1037/0022-3514.54.6.1063"
                target="_blank"
                rel="noopener noreferrer"
                className="reference-link"
              >
                Hendrick, S. S. (1988). A generic measure of relationship satisfaction. Journal of Marriage and the Family, 50(1), 93-98.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestRelationshipScalesQuestionnaire;