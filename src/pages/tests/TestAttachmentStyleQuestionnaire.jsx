import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../../components/ProfileHeader';
import './TestsStyleQuestionnaire.css';

function TestAttachmentStyleQuestionnaire() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [answers, setAnswers] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null,
    q6: null, q7: null, q8: null, q9: null,
  });
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 'q1',
      text: 'Я чувствую себя комфортно, когда близкие люди находятся рядом со мной.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Не согласен' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Согласен' },
        { value: '5', text: 'Совершенно согласен' },
      ],
    },
    {
      id: 'q2',
      text: 'Я часто беспокоюсь, что близкие люди меня покинут.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Не согласен' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Согласен' },
        { value: '5', text: 'Совершенно согласен' },
      ],
    },
    {
      id: 'q3',
      text: 'Мне трудно доверять другим людям.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Не согласен' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Согласен' },
        { value: '5', text: 'Совершенно согласен' },
      ],
    },
    {
      id: 'q4',
      text: 'Я чувствую себя комфортно, когда делюсь своими чувствами с другими.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Не согласен' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Согласен' },
        { value: '5', text: 'Совершенно согласен' },
      ],
    },
    {
      id: 'q5',
      text: 'Я часто чувствую, что мне нужно больше внимания от близких людей.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Не согласен' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Согласен' },
        { value: '5', text: 'Совершенно согласен' },
      ],
    },
    {
      id: 'q6',
      text: 'Я предпочитаю быть независимым и не полагаться на других.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Не согласен' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Согласен' },
        { value: '5', text: 'Совершенно согласен' },
      ],
    },
    {
      id: 'q7',
      text: 'Я часто чувствую, что другие не заботятся обо мне так, как я о них.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Не согласен' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Согласен' },
        { value: '5', text: 'Совершенно согласен' },
      ],
    },
    {
      id: 'q8',
      text: 'Я чувствую себя комфортно, когда другие полагаются на меня.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Не согласен' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Согласен' },
        { value: '5', text: 'Совершенно согласен' },
      ],
    },
    {
      id: 'q9',
      text: 'Я часто чувствую себя уязвимым в близких отношениях.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Не согласен' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Согласен' },
        { value: '5', text: 'Совершенно согласен' },
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

    if (totalScore <= 21) {
      recommendation = {
        level: 'Склонность к избегающему или тревожному стилю привязанности',
        package: 'Процветание',
        packageLink: '/protsvetanie-package',
        description: 'Твоя низкая оценка указывает на возможные трудности в близких отношениях. Наш пакет "Процветание" поможет тебе развить более здоровые эмоциональные связи.',
      };
    } else if (totalScore <= 30) {
      recommendation = {
        level: 'Переходный стиль привязанности',
        package: 'Устойчивость',
        packageLink: '/ustoychivost-package',
        description: 'Твоя оценка указывает на переходный стиль привязанности. Наш пакет "Устойчивость" поможет тебе достичь большего баланса в отношениях.',
      };
    } else if (totalScore <= 38) {
      recommendation = {
        level: 'Смешанный стиль привязанности',
        package: 'Фундамент',
        packageLink: '/fundament-package',
        description: 'Твоя оценка показывает смешанные черты стиля привязанности. Наш пакет "Фундамент" поможет тебе укрепить эмоциональную стабильность.',
      };
    } else {
      recommendation = {
        level: 'Склонность к безопасному стилю привязанности',
        package: 'Бесплатный Вводный Пакет',
        packageLink: '/free-package',
        description: 'Твоя высокая оценка указывает на здоровый стиль привязанности! Наш "Бесплатный Вводный Пакет" поможет поддерживать здоровые отношения.',
      };
    }

    setResult({ score: totalScore, recommendation });
  };

  const closeTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers({
      q1: null, q2: null, q3: null, q4: null, q5: null,
      q6: null, q7: null, q8: null, q9: null,
    });
    setResult(null);
  };

  const shareViaEmail = () => {
    if (!result) return;
    const subject = 'Мои результаты теста: Тест на стиль привязанности';
    const body = `Твой балл: ${result.score} из 45\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareViaWhatsApp = () => {
    if (!result) return;
    const text = `Мои результаты теста: Тест на стиль привязанности\nТвой балл: ${result.score} из 45\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const printResult = () => {
    if (!result) return;
    const printContent = `
      <h3>Результаты теста: Тест на стиль привязанности</h3>
      <p><strong>Твой балл:</strong> ${result.score} из 45</p>
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
            Тест на стиль привязанности
          </h3>
          <p className="section-description">
            Этот тест поможет определить твой стиль привязанности — как ты взаимодействуешь в близких отношениях. Основанный на теории привязанности, он выявляет, склоняешься ли ты к безопасному, тревожному или избегающему стилю. Понимание своего стиля привязанности может помочь улучшить отношения и укрепить эмоциональную связь. Пройди тест — и узнай, как твой стиль влияет на твою жизнь.
            <span className="test-info">
              онлайн-тест | 9 пунктов | около 3 минут
            </span>
          </p>
          <div className="test-container">
            {result ? (
              <div className="test-result">
                <p className="score-info"><strong>Твой балл:</strong></p>
                <div className="score-bar">
                  <div
                    className={`score-progress ${result.score <= 21 ? 'score-progress-low' : result.score <= 30 ? 'score-progress-high' : result.score <= 38 ? 'score-progress-medium' : 'score-progress-top'}`}
                    style={{ width: `${((result.score - 9) / 36) * 100}%` }}
                  ></div>
                  <span className="score-label" style={{ left: `${((result.score - 9) / 36) * 100}%` }}>
                    {result.score}
                  </span>
                </div>
                <div className="score-range">
                  <span>9</span>
                  <span>45</span>
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
              <strong>Автор:</strong> John Bowlby (1988)
            </p>
            <p className="disclaimer-info">
              Тест предоставляется исключительно в образовательных и развлекательных целях. Он не предназначен для предоставления психологических советов любого рода и не гарантирует точности или достоверности. Оценка бесплатна и анонимна. Вы можете сохранить прямую ссылку на ваши результаты.
            </p>
            <p>
              <strong>Ссылки:</strong><br />
              <a
                href="https://www.psychology.sunysb.edu/attachment/measures/content/asq.html"
                target="_blank"
                rel="noopener noreferrer"
                className="reference-link"
              >
                Bartholomew, K., & Horowitz, L. M. (1991). Attachment styles among young adults: A test of a four-category model. Journal of Personality and Social Psychology, 61(2), 226-244.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestAttachmentStyleQuestionnaire;