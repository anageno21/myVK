import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/TestStyles.css';

function CompACT() {
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [answers, setAnswers] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null,
    q6: null, q7: null, q8: null, q9: null, q10: null,
    q11: null, q12: null, q13: null, q14: null, q15: null,
    q16: null, q17: null, q18: null, q19: null, q20: null,
    q21: null, q22: null, q23: null,
  });
  const [result, setResult] = useState(null);

  const questions = [
    // Acceptance (Αποδοχή)
    {
      id: 'q1',
      text: 'Я принимаю свои негативные эмоции, не пытаясь их подавить.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'Acceptance',
    },
    {
      id: 'q2',
      text: 'Я позволяю себе чувствовать грусть или тревогу, не борясь с этими эмоциями.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'Acceptance',
    },
    {
      id: 'q3',
      text: 'Я принимаю свои мысли, даже если они неприятные.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'Acceptance',
    },
    // Experiential Avoidance (Αποφυγή Εμπειριών)
    {
      id: 'q4',
      text: 'Я стараюсь избегать ситуаций, которые вызывают у меня дискомфорт.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'Avoidance',
    },
    {
      id: 'q5',
      text: 'Я отвлекаюсь, чтобы не думать о своих проблемах.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'Avoidance',
    },
    {
      id: 'q6',
      text: 'Я избегаю разговоров о своих чувствах.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'Avoidance',
    },
    // Cognitive Defusion (Γνωστική Αποσύνδεση)
    {
      id: 'q7',
      text: 'Я замечаю свои мысли, не позволяя им управлять мной.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'Defusion',
    },
    {
      id: 'q8',
      text: 'Я могу отделять свои мысли от реальности.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'Defusion',
    },
    {
      id: 'q9',
      text: 'Я вижу свои мысли как временные, а не как абсолютную правду.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'Defusion',
    },
    // Present Moment Awareness (Παρούσα Στιγμή)
    {
      id: 'q10',
      text: 'Я полностью сосредотачиваюсь на текущем моменте.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'PresentMoment',
    },
    {
      id: 'q11',
      text: 'Я замечаю, что происходит вокруг меня, даже в стрессовых ситуациях.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'PresentMoment',
    },
    {
      id: 'q12',
      text: 'Я осознаю свои действия в настоящий момент.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'PresentMoment',
    },
    // Self-as-Context (Εαυτός ως Πλαίσιο)
    {
      id: 'q13',
      text: 'Я могу смотреть на свои мысли и чувства со стороны.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'SelfAsContext',
    },
    {
      id: 'q14',
      text: 'Я осознаю, что мои мысли и чувства не определяют меня полностью.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'SelfAsContext',
    },
    {
      id: 'q15',
      text: 'Я чувствую себя наблюдателем своих мыслей, а не их жертвой.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'SelfAsContext',
    },
    // Values (Αξίες)
    {
      id: 'q16',
      text: 'Я знаю, что для меня важно в жизни.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'Values',
    },
    {
      id: 'q17',
      text: 'Я действую в соответствии со своими ценностями.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'Values',
    },
    {
      id: 'q18',
      text: 'Мои действия отражают мои глубинные убеждения.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'Values',
    },
    // Committed Action (Δεσμευμένη Δράση)
    {
      id: 'q19',
      text: 'Я продолжаю двигаться к своим целям, даже если сталкиваюсь с трудностями.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'CommittedAction',
    },
    {
      id: 'q20',
      text: 'Я предпринимаю действия, которые приближают меня к моим целям.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'CommittedAction',
    },
    {
      id: 'q21',
      text: 'Я не сдаюсь, даже если сталкиваюсь с неудачами.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'CommittedAction',
    },
    // Mixed Subscales (για καλύτερη κάλυψη)
    {
      id: 'q22',
      text: 'Я позволяю себе испытывать трудные эмоции, чтобы двигаться вперед.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'Acceptance',
    },
    {
      id: 'q23',
      text: 'Я следую своим ценностям, даже если это вызывает у меня дискомфорт.',
      options: [
        { value: '1', text: 'Никогда' },
        { value: '2', text: 'Редко' },
        { value: '3', text: 'Иногда' },
        { value: '4', text: 'Часто' },
        { value: '5', text: 'Всегда' },
      ],
      subscale: 'Values',
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
      Acceptance: 0,
      Avoidance: 0,
      Defusion: 0,
      PresentMoment: 0,
      SelfAsContext: 0,
      Values: 0,
      CommittedAction: 0,
    };

    // Συγκέντρωση σκορ ανά υπο-διάσταση
    questions.forEach(question => {
      const answerValue = answers[question.id];
      if (answerValue) {
        // Αν η ερώτηση ανήκει στην υπο-διάσταση Avoidance, αντιστρέφουμε το σκορ
        if (question.subscale === 'Avoidance') {
          scores[question.subscale] += (6 - parseInt(answerValue)); // Αντιστροφή: 1->5, 2->4, 3->3, 4->2, 5->1
        } else {
          scores[question.subscale] += parseInt(answerValue);
        }
      }
    });

    // Υπολογισμός συνολικού σκορ ψυχολογικής ευελιξίας
    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);

    // Καθορισμός συστάσεων με βάση το συνολικό σκορ
    let recommendation = '';
    if (totalScore <= 46) { // 1-2 μέσος όρος (23 ερωτήσεις x 2)
      recommendation = {
        level: 'Низкий уровень психологической гибкости',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'Твой уровень психологической гибкости может быть низким. Наш расширенный пакет поможет тебе развить навыки принятия и осознанности.',
      };
    } else if (totalScore <= 69) { // 2-3 μέσος όρος (23 ερωτήσεις x 3)
      recommendation = {
        level: 'Средний уровень психологической гибкости',
        package: 'Базовый Пакет',
        packageLink: '/our-service',
        description: 'У тебя средний уровень психологической гибкости. Наш базовый пакет поможет тебе улучшить эти навыки.',
      };
    } else { // 3-5 μέσος όρος (23 ερωτήσεις x 5 = 115)
      recommendation = {
        level: 'Высокий уровень психологической гибкости',
        package: 'Бесплатный Вводный Пакет',
        packageLink: '/free-package',
        description: 'У тебя высокий уровень психологической гибкости! Наш бесплатный вводный пакет поможет тебе поддерживать и развивать эти навыки.',
      };
    }

    setResult({
      score: totalScore,
      recommendation,
      scores: {
        Acceptance: scores.Acceptance,
        Avoidance: scores.Avoidance,
        Defusion: scores.Defusion,
        PresentMoment: scores.PresentMoment,
        SelfAsContext: scores.SelfAsContext,
        Values: scores.Values,
        CommittedAction: scores.CommittedAction,
      },
    });
  };

  const closeTest = () => {
    setIsTestOpen(false);
    setCurrentQuestionIndex(0);
    setAnswers({
      q1: null, q2: null, q3: null, q4: null, q5: null,
      q6: null, q7: null, q8: null, q9: null, q10: null,
      q11: null, q12: null, q13: null, q14: null, q15: null,
      q16: null, q17: null, q18: null, q19: null, q20: null,
      q21: null, q22: null, q23: null,
    });
    setResult(null);
    setShowShareOptions(false);
  };

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  const shareViaEmail = () => {
    if (!result) return;
    const subject = 'Мои результаты теста: ACT-тест: оценка психологической гибкости и ориентации на ценности, CompACT';
    const body = `Твой балл: ${result.score} из 115\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareViaWhatsApp = () => {
    if (!result) return;
    const text = `Мои результаты теста: ACT-тест: оценка психологической гибкости и ориентации на ценности, CompACT\nТвой балл: ${result.score} из 115\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const printResult = () => {
    if (!result) return;
    const printContent = `
      <h3>Результаты теста: ACT-тест: оценка психологической гибкости и ориентации на ценности, CompACT</h3>
      <p><strong>Твой балл:</strong> ${result.score} из 115</p>
      <p><strong>Уровень:</strong> ${result.recommendation.level}</p>
      <p><strong>Принятие:</strong> ${result.scores.Acceptance} из 20</p>
      <p><strong>Избежание:</strong> ${result.scores.Avoidance} из 15</p>
      <p><strong>Когнитивная дефузия:</strong> ${result.scores.Defusion} из 15</p>
      <p><strong>Осознанность настоящего момента:</strong> ${result.scores.PresentMoment} из 15</p>
      <p><strong>Я как контекст:</strong> ${result.scores.SelfAsContext} из 15</p>
      <p><strong>Ценности:</strong> ${result.scores.Values} из 20</p>
      <p><strong>Приверженное действие:</strong> ${result.scores.CommittedAction} из 15</p>
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
    <div className="compact-test">
      <div className="free-package-section">
        <div className="section-content">
          <h3 className="section-title" onClick={() => setIsTestOpen(!isTestOpen)}>
            ACT-тест: оценка психологической гибкости и ориентации на ценности, CompACT
            <i className={`las la-angle-down dropdown-icon ${isTestOpen ? 'open' : ''}`}></i>
          </h3>
          <p className="section-description">
            Этот тест оценивает уровень твоей психологической гибкости — ключевого фактора психического здоровья и устойчивости. Он основан на подходе Acceptance and Commitment Therapy (ACT), эффективность которого подтверждена десятками клинических исследований. Тест помогает понять, насколько ты умеешь справляться с трудными переживаниями, действовать в соответствии со своими ценностями и оставаться в контакте с настоящим, даже когда непросто.
            <span className="test-info">
              онлайн-тест | 23 пункта | около 4 минут
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
                          width: `${(result.score / 115) * 100}%`,
                          backgroundColor: result.score <= 46 ? '#ff4d4d' : result.score <= 69 ? '#ffd700' : '#32cd32',
                        }}
                      ></div>
                      <span className="score-label" style={{ position: 'absolute', left: `${(result.score / 115) * 100}%`, transform: 'translateX(-50%)' }}>
                        {result.score}
                      </span>
                    </div>
                    <div className="score-range">
                      <span>0</span>
                      <span>115</span>
                    </div>
                    <p className="score-info"><strong>Подшкалы:</strong></p>
                    <div className="subscale-chart">
                      <div className="bar-container">
                        <span className="bar-label">Принятие</span>
                        <div className="bar">
                          <div
                            className="bar-fill"
                            style={{
                              width: `${((result.scores.Acceptance || 0) / 20) * 100}%`,
                              backgroundColor: '#21aabc',
                            }}
                          ></div>
                          <span className="bar-value">{result.scores.Acceptance || 0}</span>
                        </div>
                      </div>
                      <div className="bar-container">
                        <span className="bar-label">Избежание</span>
                        <div className="bar">
                          <div
                            className="bar-fill"
                            style={{
                              width: `${((result.scores.Avoidance || 0) / 15) * 100}%`,
                              backgroundColor: '#ff4d4d',
                            }}
                          ></div>
                          <span className="bar-value">{result.scores.Avoidance || 0}</span>
                        </div>
                      </div>
                      <div className="bar-container">
                        <span className="bar-label">Когнитивная дефузия</span>
                        <div className="bar">
                          <div
                            className="bar-fill"
                            style={{
                              width: `${((result.scores.Defusion || 0) / 15) * 100}%`,
                              backgroundColor: '#ffd700',
                            }}
                          ></div>
                          <span className="bar-value">{result.scores.Defusion || 0}</span>
                        </div>
                      </div>
                      <div className="bar-container">
                        <span className="bar-label">Осознанность настоящего момента</span>
                        <div className="bar">
                          <div
                            className="bar-fill"
                            style={{
                              width: `${((result.scores.PresentMoment || 0) / 15) * 100}%`,
                              backgroundColor: '#32cd32',
                            }}
                          ></div>
                          <span className="bar-value">{result.scores.PresentMoment || 0}</span>
                        </div>
                      </div>
                      <div className="bar-container">
                        <span className="bar-label">Я как контекст</span>
                        <div className="bar">
                          <div
                            className="bar-fill"
                            style={{
                              width: `${((result.scores.SelfAsContext || 0) / 15) * 100}%`,
                              backgroundColor: '#ff8c00',
                            }}
                          ></div>
                          <span className="bar-value">{result.scores.SelfAsContext || 0}</span>
                        </div>
                      </div>
                      <div className="bar-container">
                        <span className="bar-label">Ценности</span>
                        <div className="bar">
                          <div
                            className="bar-fill"
                            style={{
                              width: `${((result.scores.Values || 0) / 20) * 100}%`,
                              backgroundColor: '#6a5acd',
                            }}
                          ></div>
                          <span className="bar-value">{result.scores.Values || 0}</span>
                        </div>
                      </div>
                      <div className="bar-container">
                        <span className="bar-label">Приверженное действие</span>
                        <div className="bar">
                          <div
                            className="bar-fill"
                            style={{
                              width: `${((result.scores.CommittedAction || 0) / 15) * 100}%`,
                              backgroundColor: '#ff69b4',
                            }}
                          ></div>
                          <span className="bar-value">{result.scores.CommittedAction || 0}</span>
                        </div>
                      </div>
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
                  <strong>Авторы:</strong> A. Francis, D. Dawson, N. Golijani-Moghaddam (2016)
                </p>
                <p className="disclaimer-info">
                  Тест предоставляется исключительно в образовательных и развлекательных целях. Он не предназначен для психологических консультаций любого рода и не гарантирует точности или достоверности. Оценка бесплатна и анонимна. Вы можете сохранить прямую ссылку на свои результаты.
                </p>
                <p>
                  <strong>Ссылки:</strong><br />
                  <a
                    href="https://www.sciencedirect.com/science/article/abs/pii/S2212144716300152"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reference-link"
                  >
                    A. Francis, D. Dawson, N. Golijani-Moghaddam. The Development and Validation of the Comprehensive Assessment of Acceptance and Commitment Therapy Processes (CompACT) // Journal of Contextual Behavioral Science, May 2016
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

export default CompACT;