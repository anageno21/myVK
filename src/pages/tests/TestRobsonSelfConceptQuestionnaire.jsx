import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../../components/ProfileHeader';
import './TestsStyleQuestionnaire.css';

function TestRobsonSelfConceptQuestionnaire() {
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
      text: 'Я доволен своей внешностью.',
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
      text: 'Я чувствую себя уверенно в социальных ситуациях.',
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
      id: 'q3',
      text: 'Я часто чувствую себя бесполезным.',
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
      id: 'q4',
      text: 'Я принимаю себя таким, какой я есть.',
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
      id: 'q5',
      text: 'Я чувствую, что не могу справляться с жизненными трудностями.',
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
      id: 'q6',
      text: 'У меня есть чувство собственного достоинства.',
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
      text: 'Я чувствую себя комфортно, когда нахожусь один.',
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
      id: 'q8',
      text: 'Я часто сравниваю себя с другими и чувствую себя хуже.',
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
      id: 'q9',
      text: 'Я верю в свои способности достигать целей.',
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
      id: 'q10',
      text: 'Я чувствую, что моя жизнь имеет смысл.',
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
        level: 'Низкий уровень самоконцепции',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'Твой уровень самоконцепции может быть низким. Наш расширенный пакет поможет тебе работать над принятием себя и повышением уверенности.',
      };
    } else if (totalScore <= 50) {
      recommendation = {
        level: 'Средний уровень самоконцепции',
        package: 'Базовый Пакет',
        packageLink: '/our-service',
        description: 'Твой уровень самоконцепции находится на среднем уровне. Наш базовый пакет поможет тебе укрепить уверенность в себе и чувство собственного достоинства.',
      };
    } else {
      recommendation = {
        level: 'Высокий уровень самоконцепции',
        package: 'Бесплатный Вводный Пакет',
        packageLink: '/free-package',
        description: 'У тебя высокий уровень самоконцепции! Наш бесплатный вводный пакет поможет тебе продолжать развивать позитивное отношение к себе.',
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
    const subject = 'Мои результаты теста: Опросник самоконцепции Робсона';
    const body = `Твой балл: ${result.score} из 70\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareViaWhatsApp = () => {
    if (!result) return;
    const text = `Мои результаты теста: Опросник самоконцепции Робсона\nТвой балл: ${result.score} из 70\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const printResult = () => {
    if (!result) return;
    const printContent = `
      <h3>Результаты теста: Опросник самоконцепции Робсона</h3>
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
            Опросник самоконцепции Робсона
          </h3>
          <p className="section-description">
            Этот тест оценивает твое восприятие себя — насколько ты принимаешь себя, чувствуешь уверенность и видишь свою жизнь осмысленной. Самоконцепция влияет на твои решения, отношения и эмоциональное благополучие. Пройди тест — и получи рекомендации, которые помогут укрепить твою внутреннюю уверенность и гармонию.
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
              <strong>Author:</strong> Peter Robson (1989)
            </p>
            <p className="disclaimer-info">
              Test is provided for educational and entertainment use only. It is not intended to be a psychological advice of any kind, and come without any guarantee of accuracy or validity. Assessment is free and anonymous. You can save the direct link to your results.
            </p>
            <p>
              <strong>References:</strong><br />
              <a
                href="https://www.tandfonline.com/doi/abs/10.1080/00207598908247894"
                target="_blank"
                rel="noopener noreferrer"
                className="reference-link"
              >
                Robson, P. J. (1989). Development of a new self-report questionnaire to measure self-concept. Psychological Medicine, 19(2), 513-518.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestRobsonSelfConceptQuestionnaire;