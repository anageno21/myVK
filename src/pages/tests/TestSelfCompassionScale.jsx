import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../../components/ProfileHeader';
import './TestsStyleQuestionnaire.css';

function TestSelfCompassionScale() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
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
    {
      id: 'q1',
      text: 'Я стараюсь быть понимающим и терпеливым к тем аспектам моей личности, которые мне не нравятся.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q2',
      text: 'Когда со мной случается что-то болезненное, я пытаюсь взглянуть на ситуацию сбалансированно.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q3',
      text: 'Когда я терплю неудачу, я склонен переоценивать ее масштаб (делаю из мухи слона).',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q4',
      text: 'Я стараюсь относиться к себе с добротой, когда переживаю эмоциональную боль.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q5',
      text: 'Когда я переживаю трудный период, я даю себе заботу и поддержку, в которой нуждаюсь.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q6',
      text: 'Когда я чувствую себя неадекватно, я напоминаю себе, что большинство людей иногда чувствуют то же самое.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q7',
      text: 'Я очень нетерпим к своим недостаткам.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q8',
      text: 'Когда я чувствую себя подавленным, я склонен зацикливаться на всем, что идет не так.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q9',
      text: 'Когда я терплю неудачу, я чувствую, что я единственный, кто сталкивается с такими проблемами.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q10',
      text: 'Я стараюсь осознавать свои эмоции, не позволяя им захлестнуть меня.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q11',
      text: 'Когда я чувствую себя грустно, я часто изолируюсь от других.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q12',
      text: 'Я считаю, что трудности – это часть жизни, с которой сталкиваются все.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q13',
      text: 'Когда я расстроен, я часто виню себя за свои ошибки.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q14',
      text: 'Я стараюсь относиться к своим трудностям с пониманием, как если бы это были трудности друга.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q15',
      text: 'Когда я переживаю трудный период, я склонен преувеличивать его влияние на мою жизнь.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q16',
      text: 'Я стараюсь сохранять баланс между своими эмоциями, даже когда мне тяжело.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q17',
      text: 'Когда я чувствую себя подавленным, я склонен думать, что это никогда не пройдет.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q18',
      text: 'Я часто чувствую себя оторванным от других, когда переживаю трудности.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q19',
      text: 'Я стараюсь относиться к своим проблемам с добротой и пониманием.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q20',
      text: 'Когда я расстроен, я часто сравниваю себя с другими.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q21',
      text: 'Я принимаю свои недостатки как часть человеческого опыта.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q22',
      text: 'Когда я чувствую себя плохо, я часто думаю, что другие справляются лучше меня.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q23',
      text: 'Я стараюсь замечать свои эмоции, не вовлекаясь в них чрезмерно.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q24',
      text: 'Когда я переживаю трудный период, я чувствую, что это моя вина.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q25',
      text: 'Я часто думаю, что мои проблемы уникальны и никто не может меня понять.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
      ],
    },
    {
      id: 'q26',
      text: 'Я стараюсь относиться к себе с той же добротой, с которой отношусь к другим.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Почти всегда' },
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

    if (totalScore <= 65) {
      recommendation = {
        level: 'Низкий уровень самосострадания',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'Твой уровень самосострадания может быть низким. Наш расширенный пакет предложит тебе более глубокую поддержку для развития доброты к себе.',
      };
    } else if (totalScore <= 91) {
      recommendation = {
        level: 'Средний уровень самосострадания',
        package: 'Базовый Пакет',
        packageLink: '/our-service',
        description: 'Твой уровень самосострадания находится на среднем уровне. Наш базовый пакет поможет тебе укрепить заботу о себе.',
      };
    } else {
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
  const allQuestionsAnswered = Object.values(answers).every(answer => answer !== null);

  return (
    <div className="attachment-style-test">
      <ProfileHeader />
      <div className="free-package-section">
        <div className="section-content">
          <h3 className="section-title">
            Шкала Самосострадания, SCS
          </h3>
          <p className="section-description">
            Шкала самосострадания — валидированная методика, разработанная психологом Кристин Нефф, которая оценивает, как ты относишься к себе в трудные моменты. Исследования показывают, что высокий уровень самосострадания связан с улучшением психоэмоционального состояния, снижением тревожности и депрессии, а также повышением устойчивости к стрессу. Пройди тест — и получи рекомендации, которые помогут укрепить твою внутреннюю опору и благополучие.
            <span className="test-info">
              онлайн-тест | 26 пунктов | около 5 минут
            </span>
          </p>
          <div className="test-container" style={{ borderRadius: '20px', backgroundColor: '#fff', border: '1px solid #e0e0e0' }}>
            {result ? (
              <div className="test-result">
                <p className="score-info"><strong>Твой балл:</strong></p>
                <div className="score-bar">
                  <div
                    className={`score-progress ${result.score <= 65 ? 'score-progress-low' : result.score <= 91 ? 'score-progress-medium' : 'score-progress-top'}`}
                    style={{ width: `${((result.score - 26) / 104) * 100}%` }}
                  ></div>
                  <span className="score-label" style={{ left: `${((result.score - 26) / 104) * 100}%` }}>
                    {result.score}
                  </span>
                </div>
                <div className="score-range">
                  <span>26</span>
                  <span>130</span>
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
              <strong>Автор:</strong> Kristin Neff (2003)
            </p>
            <p className="disclaimer-info">
              Тест предоставляется исключительно в образовательных и развлекательных целях. Он не предназначен для психологических консультаций любого рода и не гарантирует точности или достоверности. Оценка бесплатна и анонимна. Вы можете сохранить прямую ссылку на свои результаты.
            </p>
            <p>
              <strong>Ссылки:</strong><br />
              <a
                href="https://self-compassion.org/the-self-compassion-scale/"
                target="_blank"
                rel="noopener noreferrer"
                className="reference-link"
              >
                Neff, K. D. (2003). The Development and Validation of a Scale to Measure Self-Compassion. Self and Identity, 2(3), 223-250.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestSelfCompassionScale;