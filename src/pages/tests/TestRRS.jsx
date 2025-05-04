import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../../components/ProfileHeader';
import './TestsStyleQuestionnaire.css';

function TestRRS() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [answers, setAnswers] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null,
    q6: null, q7: null, q8: null, q9: null, q10: null,
    q11: null, q12: null, q13: null, q14: null, q15: null,
    q16: null, q17: null, q18: null, q19: null, q20: null,
    q21: null, q22: null,
  });
  const [result, setResult] = useState(null);

  const questions = [
    // Self-focused rumination (Αυτο-εστίαση)
    {
      id: 'q1',
      text: 'Я часто думаю о том, почему я чувствую себя так, как чувствую.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'SelfFocus',
    },
    {
      id: 'q2',
      text: 'Я размышляю о том, почему я не могу справиться с ситуацией лучше.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'SelfFocus',
    },
    {
      id: 'q3',
      text: 'Я думаю о том, что я мог бы сделать иначе в прошлом.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'SelfFocus',
    },
    {
      id: 'q4',
      text: 'Я анализирую свои действия, чтобы понять, почему я сделал что-то не так.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'SelfFocus',
    },
    // Symptom-focused rumination (Εστίαση στα συμπτώματα)
    {
      id: 'q5',
      text: 'Я думаю о том, насколько я чувствую себя грустно.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'SymptomFocus',
    },
    {
      id: 'q6',
      text: 'Я сосредотачиваюсь на своих чувствах усталости или апатии.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'SymptomFocus',
    },
    {
      id: 'q7',
      text: 'Я думаю о том, насколько мне не хватает энергии.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'SymptomFocus',
    },
    {
      id: 'q8',
      text: 'Я размышляю о своей раздражительности или тревоге.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'SymptomFocus',
    },
    // Causes/Consequences rumination (Εστίαση στις αιτίες/συνέπειες)
    {
      id: 'q9',
      text: 'Я думаю о том, почему у меня такие проблемы.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'CausesConsequences',
    },
    {
      id: 'q10',
      text: 'Я размышляю о том, что могло бы случиться, если бы я поступил иначе.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'CausesConsequences',
    },
    {
      id: 'q11',
      text: 'Я думаю о том, как мои действия привели к текущей ситуации.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'CausesConsequences',
    },
    {
      id: 'q12',
      text: 'Я анализирую, что пошло не так в моей жизни.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'CausesConsequences',
    },
    // Mixed Items (για καλύτερη κάλυψη)
    {
      id: 'q13',
      text: 'Я думаю о своих недостатках.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'SelfFocus',
    },
    {
      id: 'q14',
      text: 'Я сосредотачиваюсь на том, что мне следовало бы сделать.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'SelfFocus',
    },
    {
      id: 'q15',
      text: 'Я думаю о том, как мне одиноко.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'SymptomFocus',
    },
    {
      id: 'q16',
      text: 'Я размышляю о своей неспособности сосредоточиться.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'SymptomFocus',
    },
    {
      id: 'q17',
      text: 'Я думаю о том, почему я всегда реагирую таким образом.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'CausesConsequences',
    },
    {
      id: 'q18',
      text: 'Я размышляю о том, как мои действия повлияли на других.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'CausesConsequences',
    },
    {
      id: 'q19',
      text: 'Я часто возвращаюсь мыслями к прошлым ошибкам.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'SelfFocus',
    },
    {
      id: 'q20',
      text: 'Я думаю о том, насколько я подавлен.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'SymptomFocus',
    },
    {
      id: 'q21',
      text: 'Я размышляю о том, почему я не могу начать действовать.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'CausesConsequences',
    },
    {
      id: 'q22',
      text: 'Я думаю о том, как мои чувства влияют на мою жизнь.',
      options: [
        { value: '1', text: 'Почти никогда' },
        { value: '2', text: 'Иногда' },
        { value: '3', text: 'Часто' },
        { value: '4', text: 'Почти всегда' },
      ],
      subscale: 'CausesConsequences',
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
    // Υπολογισμός σκορ για κάθε υπο-διάσταση
    const scores = {
      SelfFocus: 0,
      SymptomFocus: 0,
      CausesConsequences: 0,
    };

    // Συγκέντρωση σκορ ανά υπο-διάσταση
    questions.forEach(question => {
      const answerValue = answers[question.id];
      if (answerValue) {
        scores[question.subscale] += parseInt(answerValue);
      }
    });

    // Υπολογισμός συνολικού σκορ
    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);

    // Καθορισμός συστάσεων με βάση το συνολικό σκορ
    let recommendation = '';
    if (totalScore <= 44) { // 1-2 μέσος όρος (22 ερωτήσεις x 2)
      recommendation = {
        level: 'Низкий уровень руминации',
        package: 'Бесплатный Вводный Пакет',
        packageLink: '/free-package',
        description: 'У тебя низкий уровень руминации. Наш бесплатный вводный пакет поможет тебе поддерживать здоровые способы справляться с эмоциями.',
      };
    } else if (totalScore <= 66) { // 2-3 μέсος όρος (22 ερωτήσεις x 3)
      recommendation = {
        level: 'Средний уровень руминации',
        package: 'Базовый Пакет',
        packageLink: '/our-service',
        description: 'У тебя средний уровень руминации. Наш базовый пакет поможет тебе уменьшить повторяющиеся негативные мысли.',
      };
    } else { // 3-4 μέσος όρος (22 ερωτήσεις x 4 = 88)
      recommendation = {
        level: 'Высокий уровень руминации',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'Твой уровень руминации высокий, что может влиять на твое эмоциональное состояние. Наш расширенный пакет поможет тебе справиться с этим.',
      };
    }

    setResult({
      score: totalScore,
      recommendation,
      scores: {
        SelfFocus: scores.SelfFocus,
        SymptomFocus: scores.SymptomFocus,
        CausesConsequences: scores.CausesConsequences,
      },
    });
  };

  const closeTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers({
      q1: null, q2: null, q3: null, q4: null, q5: null,
      q6: null, q7: null, q8: null, q9: null, q10: null,
      q11: null, q12: null, q13: null, q14: null, q15: null,
      q16: null, q17: null, q18: null, q19: null, q20: null,
      q21: null, q22: null,
    });
    setResult(null);
  };

  const shareViaEmail = () => {
    if (!result) return;
    const subject = 'Мои результаты теста: Шкала руминативных реакций (RRS)';
    const body = `Твой балл: ${result.score} из 88\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareViaWhatsApp = () => {
    if (!result) return;
    const text = `Мои результаты теста: Шкала руминативных реакций (RRS)\nТвой балл: ${result.score} из 88\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const printResult = () => {
    if (!result) return;
    const printContent = `
      <h3>Результаты теста: Шкала руминативных реакций (RRS)</h3>
      <p><strong>Твой балл:</strong> ${result.score} из 88</p>
      <p><strong>Уровень:</strong> ${result.recommendation.level}</p>
      <p><strong>Само-фокусировка:</strong> ${result.scores.SelfFocus} из 28</p>
      <p><strong>Фокусировка на симптомах:</strong> ${result.scores.SymptomFocus} из 24</p>
      <p><strong>Фокусировка на причинах/последствиях:</strong> ${result.scores.CausesConsequences} из 36</p>
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
            Шкала руминативных реакций (RRS)
          </h3>
          <p className="section-description">
            Этот тест помогает выявить склонность к руминации — привычке застревать в негативных мыслях и переживаниях, которая усиливает стресс и повышает риск депрессии. Тест позволяет оценить, насколько часто ты возвращаешься к одним и тем же мыслям, пытаясь «пережёвывать» проблему, вместо того чтобы двигаться вперёд. Пройди тест — и получи рекомендации, которые помогут выйти из замкнутого круга мыслей и освободить ментальное пространство для жизни.
            <span className="test-info">
              онлайн-тест | 22 пункта | около 4 минут
            </span>
          </p>
          <div className="test-container" style={{ borderRadius: '20px', backgroundColor: '#fff', border: '1px solid #e0e0e0' }}>
            {result ? (
              <div className="test-result">
                <p className="score-info"><strong>Твой балл:</strong></p>
                <div className="score-bar">
                  <div
                    className={`score-progress ${result.score <= 44 ? 'score-progress-top' : result.score <= 66 ? 'score-progress-medium' : 'score-progress-low'}`}
                    style={{ width: `${((result.score - 22) / 66) * 100}%` }}
                  ></div>
                  <span className="score-label" style={{ left: `${((result.score - 22) / 66) * 100}%` }}>
                    {result.score}
                  </span>
                </div>
                <div className="score-range">
                  <span>22</span>
                  <span>88</span>
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
              <strong>Автор:</strong> S. Nolen-Hoeksema et al. (1999)
            </p>
            <p className="disclaimer-info">
              Тест предоставляется исключительно в образовательных и развлекательных целях. Он не предназначен для психологических консультаций любого рода и не гарантирует точности или достоверности. Оценка бесплатна и анонимна. Вы можете сохранить прямую ссылку на свои результаты.
            </p>
            <p>
              <strong>Ссылки:</strong><br />
              <a
                href="https://link.springer.com/article/10.1023/A:1025321418310"
                target="_blank"
                rel="noopener noreferrer"
                className="reference-link"
              >
                W. Treynor, R. Gonzalez, S. Nolen-Hoeksema. Rumination Reconsidered: A Psychometric Analysis // Cognitive Therapy and Research, 2003. 27(3)
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestRRS;