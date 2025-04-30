import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RosenbergSelfEsteemScale.css';

function RosenbergSelfEsteemScale() {
  // State για το dropdown (ανοιχτό/κλειστό)
  const [isTestOpen, setIsTestOpen] = useState(false);

  // State για την τρέχουσα ερώτηση
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // State για το fade-in εφέ
  const [fadeIn, setFadeIn] = useState(false);

  // State για τις απαντήσεις του χρήστη
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

  // State για το αποτέλεσμα του τεστ
  const [result, setResult] = useState(null);

  // Ερωτήσεις του τεστ (10 ερωτήσεις από το RSES)
  const questions = [
    {
      id: 'q1',
      text: 'Чувствую, что я человек, достойный уважения, по крайней мере, не меньше, чем другие.',
      positive: true, // Θετική δήλωση
      options: [
        { value: 0, text: 'Совсем не согласен' },
        { value: 1, text: 'Слегка согласен' },
        { value: 2, text: 'Достаточно согласен' },
        { value: 3, text: 'Полностью согласен' },
      ],
    },
    {
      id: 'q2',
      text: 'Чувствую, что у меня есть ряд положительных качеств.',
      positive: true,
      options: [
        { value: 0, text: 'Совсем не согласен' },
        { value: 1, text: 'Слегка согласен' },
        { value: 2, text: 'Достаточно согласен' },
        { value: 3, text: 'Полностью согласен' },
      ],
    },
    {
      id: 'q3',
      text: 'В целом, я склонен думать, что я неудачник.',
      positive: false, // Αρνητική δήλωση
      options: [
        { value: 0, text: 'Совсем не согласен' },
        { value: 1, text: 'Слегка согласен' },
        { value: 2, text: 'Достаточно согласен' },
        { value: 3, text: 'Полностью согласен' },
      ],
    },
    {
      id: 'q4',
      text: 'Я способен делать вещи так же хорошо, как и большинство других людей.',
      positive: true,
      options: [
        { value: 0, text: 'Совсем не согласен' },
        { value: 1, text: 'Слегка согласен' },
        { value: 2, text: 'Достаточно согласен' },
        { value: 3, text: 'Полностью согласен' },
      ],
    },
    {
      id: 'q5',
      text: 'Чувствую, что у меня не так много поводов для гордости.',
      positive: false,
      options: [
        { value: 0, text: 'Совсем не согласен' },
        { value: 1, text: 'Слегка согласен' },
        { value: 2, text: 'Достаточно согласен' },
        { value: 3, text: 'Полностью согласен' },
      ],
    },
    {
      id: 'q6',
      text: 'У меня положительное отношение к себе.',
      positive: true,
      options: [
        { value: 0, text: 'Совсем не согласен' },
        { value: 1, text: 'Слегка согласен' },
        { value: 2, text: 'Достаточно согласен' },
        { value: 3, text: 'Полностью согласен' },
      ],
    },
    {
      id: 'q7',
      text: 'В целом, я доволен собой.',
      positive: true,
      options: [
        { value: 0, text: 'Совсем не согласен' },
        { value: 1, text: 'Слегка согласен' },
        { value: 2, text: 'Достаточно согласен' },
        { value: 3, text: 'Полностью согласен' },
      ],
    },
    {
      id: 'q8',
      text: 'Мне бы хотелось больше уважать себя.',
      positive: false,
      options: [
        { value: 0, text: 'Совсем не согласен' },
        { value: 1, text: 'Слегка согласен' },
        { value: 2, text: 'Достаточно согласен' },
        { value: 3, text: 'Полностью согласен' },
      ],
    },
    {
      id: 'q9',
      text: 'Иногда я чувствую себя бесполезным.',
      positive: false,
      options: [
        { value: 0, text: 'Совсем не согласен' },
        { value: 1, text: 'Слегка согласен' },
        { value: 2, text: 'Достаточно согласен' },
        { value: 3, text: 'Полностью согласен' },
      ],
    },
    {
      id: 'q10',
      text: 'Иногда я думаю, что я ни на что не годен.',
      positive: false,
      options: [
        { value: 0, text: 'Совсем не согласен' },
        { value: 1, text: 'Слегка согласен' },
        { value: 2, text: 'Достаточно согласен' },
        { value: 3, text: 'Полностью согласен' },
      ],
    },
  ];

  // Εφέ fade-in με CSS
  useEffect(() => {
    setFadeIn(false); // Αρχικοποίηση του εφέ
    setTimeout(() => setFadeIn(true), 0); // Ενεργοποίηση του εφέ μετά από μικρή καθυστέρηση
  }, [currentQuestionIndex]);

  // Συνάρτηση για την ενημέρωση των απαντήσεων
  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: parseInt(value),
    }));
    // Προχωράμε στην επόμενη ερώτηση
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Συνάρτηση για τον υπολογισμό του αποτελέσματος
  const calculateResult = () => {
    const totalScore = Object.keys(answers).reduce((sum, questionId) => {
      const questionIndex = parseInt(questionId.replace('q', '')) - 1;
      const question = questions[questionIndex];
      let score = answers[questionId];
      
      // Αντιστροφή της βαθμολογίας για αρνητικές δηλώσεις
      if (!question.positive) {
        score = 3 - score; // Αντιστροφή: 0 -> 3, 1 -> 2, 2 -> 1, 3 -> 0
      }
      
      return sum + (score || 0);
    }, 0);

    let recommendation = '';

    if (totalScore <= 14) {
      recommendation = {
        level: 'Низкая самооценка',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'Твоя самооценка может быть низкой. Наш расширенный пакет предложит тебе более глубокую поддержку для повышения уверенности в себе.',
      };
    } else if (totalScore <= 25) {
      recommendation = {
        level: 'Нормальная самооценка',
        package: 'Базовый Пакет',
        packageLink: '/our-service',
        description: 'Твоя самооценка находится в нормальном диапазоне. Наш базовый пакет поможет тебе укрепить уверенность в себе.',
      };
    } else {
      recommendation = {
        level: 'Высокая самооценка',
        package: 'Бесплатный Вводный Пакет',
        packageLink: '/free-package',
        description: 'У тебя высокая самооценка! Наш бесплатный вводный пакет поможет тебе поддерживать внутреннюю уверенность и осознанность.',
      };
    }

    setResult({ score: totalScore, recommendation });
  };

  // Συνάρτηση για το κλείσιμο του dropdown
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
  };

  // Υπολογισμός προόδου
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="self-esteem-test">
      <div className="free-package-section">
        <div className="section-content">
          <h3 className="section-title" onClick={() => setIsTestOpen(!isTestOpen)}>
            Пройди тест на уровень самооценки
            <i className={`las la-angle-down dropdown-icon ${isTestOpen ? 'open' : ''}`}></i>
          </h3>
          <p className="section-description">
            Пройди наш тест, чтобы оценить уровень своей самооценки. На основе результатов мы предложим тебе подходящий пакет поддержки, который поможет укрепить твою уверенность.
          </p>
          {isTestOpen && (
            <div className="test-container">
              {result ? (
                <div className="test-result">
                  <h3>Результаты теста</h3>
                  <p><strong>Твой балл:</strong> {result.score} из 30</p>
                  <p><strong>Уровень:</strong> {result.recommendation.level}</p>
                  <p><strong>Рекомендация:</strong> {result.recommendation.description}</p>
                  <p>
                    <strong>Предлагаемый пакет:</strong>{' '}
                    <Link to={result.recommendation.packageLink} className="recommended-package-link">
                      {result.recommendation.package}
                    </Link>
                  </p>
                  <button onClick={closeTest} className="close-test-button">
                    Закрыть тест
                  </button>
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
          )}
        </div>
      </div>
    </div>
  );
}

export default RosenbergSelfEsteemScale;