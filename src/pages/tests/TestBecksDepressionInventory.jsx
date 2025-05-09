import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../../components/ProfileHeader';
import './TestsStyleQuestionnaire.css';

function TestBecksDepressionInventory() {
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
    q11: null,
    q12: null,
    q13: null,
    q14: null,
    q15: null,
    q16: null,
    q17: null,
    q18: null,
    q19: null,
    q20: null,
    q21: null,
  });
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 'q1',
      text: 'Печаль: Как вы себя чувствуете в последнее время?',
      options: [
        { value: '0', text: 'Я не чувствую себя грустно.' },
        { value: '1', text: 'Я чувствую себя грустно большую часть времени.' },
        { value: '2', text: 'Я чувствую себя грустно все время.' },
        { value: '3', text: 'Я настолько грустен, что не могу это выносить.' },
      ],
    },
    {
      id: 'q2',
      text: 'Пессимизм: Как вы смотрите на свое будущее?',
      options: [
        { value: '0', text: 'Я не чувствую пессимизма.' },
        { value: '1', text: 'Я чувствую себя немного пессимистично.' },
        { value: '2', text: 'Я не вижу ничего хорошего в будущем.' },
        { value: '3', text: 'Я чувствую, что будущее безнадежно.' },
      ],
    },
    {
      id: 'q3',
      text: 'Чувство неудачи: Как вы оцениваете свои достижения?',
      options: [
        { value: '0', text: 'Я не чувствую себя неудачником.' },
        { value: '1', text: 'Я чувствую, что у меня больше неудач, чем успехов.' },
        { value: '2', text: 'Я чувствую, что моя жизнь — сплошная неудача.' },
        { value: '3', text: 'Я чувствую себя полным неудачником.' },
      ],
    },
    {
      id: 'q4',
      text: 'Удовлетворенность: Насколько вы удовлетворены жизнью?',
      options: [
        { value: '0', text: 'Я чувствую удовлетворенность жизнью.' },
        { value: '1', text: 'Я не так доволен жизнью, как раньше.' },
        { value: '2', text: 'Я не получаю удовольствия от жизни.' },
        { value: '3', text: 'Я совершенно не удовлетворен жизнью.' },
      ],
    },
    {
      id: 'q5',
      text: 'Чувство вины: Чувствуете ли вы вину?',
      options: [
        { value: '0', text: 'Я не чувствую вины.' },
        { value: '1', text: 'Я иногда чувствую вину.' },
        { value: '2', text: 'Я часто чувствую вину.' },
        { value: '3', text: 'Я чувствую вину все время.' },
      ],
    },
    {
      id: 'q6',
      text: 'Чувство наказания: Чувствуете ли вы, что заслуживаете наказания?',
      options: [
        { value: '0', text: 'Я не чувствую, что заслуживаю наказания.' },
        { value: '1', text: 'Я думаю, что могу быть наказан.' },
        { value: '2', text: 'Я ожидаю наказания.' },
        { value: '3', text: 'Я чувствую, что уже наказан.' },
      ],
    },
    {
      id: 'q7',
      text: 'Самооценка: Как вы относитесь к себе?',
      options: [
        { value: '0', text: 'Я не чувствую недовольства собой.' },
        { value: '1', text: 'Я чувствую недовольство собой.' },
        { value: '2', text: 'Я ненавижу себя.' },
        { value: '3', text: 'Я чувствую отвращение к себе.' },
      ],
    },
    {
      id: 'q8',
      text: 'Самообвинение: Винит ли вас ваша совесть?',
      options: [
        { value: '0', text: 'Я не виню себя больше, чем обычно.' },
        { value: '1', text: 'Я виню себя больше, чем обычно.' },
        { value: '2', text: 'Я виню себя за все плохое, что происходит.' },
        { value: '3', text: 'Я чувствую, что я виноват во всем.' },
      ],
    },
    {
      id: 'q9',
      text: 'Суицидальные мысли: Есть ли у вас мысли о самоубийстве?',
      options: [
        { value: '0', text: 'У меня нет мыслей о самоубийстве.' },
        { value: '1', text: 'У меня есть мысли о самоубийстве, но я не собираюсь действовать.' },
        { value: '2', text: 'Я хотел бы покончить с собой.' },
        { value: '3', text: 'Я бы покончил с собой, если бы у меня была возможность.' },
      ],
    },
    {
      id: 'q10',
      text: 'Плач: Как часто вы плачете?',
      options: [
        { value: '0', text: 'Я не плачу чаще, чем обычно.' },
        { value: '1', text: 'Я плачу чаще, чем раньше.' },
        { value: '2', text: 'Я плачу большую часть времени.' },
        { value: '3', text: 'Я хочу плакать, но не могу.' },
      ],
    },
    {
      id: 'q11',
      text: 'Раздражительность: Чувствуете ли вы раздражение?',
      options: [
        { value: '0', text: 'Я не более раздражителен, чем обычно.' },
        { value: '1', text: 'Я более раздражителен, чем обычно.' },
        { value: '2', text: 'Я раздражаюсь по любому поводу.' },
        { value: '3', text: 'Я постоянно раздражен.' },
      ],
    },
    {
      id: 'q12',
      text: 'Интерес к людям: Как изменился ваш интерес к другим людям?',
      options: [
        { value: '0', text: 'Я не потерял интерес к людям.' },
        { value: '1', text: 'Я меньше интересуюсь людьми, чем раньше.' },
        { value: '2', text: 'Я почти полностью потерял интерес к людям.' },
        { value: '3', text: 'Я совершенно не интересуюсь людьми.' },
      ],
    },
    {
      id: 'q13',
      text: 'Принятие решений: Можете ли вы принимать решения?',
      options: [
        { value: '0', text: 'Я принимаю решения так же, как раньше.' },
        { value: '1', text: 'Мне труднее принимать решения, чем раньше.' },
        { value: '2', text: 'Я с большим трудом принимаю решения.' },
        { value: '3', text: 'Я не могу принимать решения.' },
      ],
    },
    {
      id: 'q14',
      text: 'Внешний вид: Как вы оцениваете свою внешность?',
      options: [
        { value: '0', text: 'Я не чувствую, что выгляжу хуже.' },
        { value: '1', text: 'Я беспокоюсь, что выгляжу хуже.' },
        { value: '2', text: 'Я чувствую, что выгляжу хуже.' },
        { value: '3', text: 'Я чувствую, что выгляжу ужасно.' },
      ],
    },
    {
      id: 'q15',
      text: 'Работоспособность: Как изменилась ваша способность работать?',
      options: [
        { value: '0', text: 'Я работаю так же, как раньше.' },
        { value: '1', text: 'Мне требуется больше усилий, чтобы работать.' },
        { value: '2', text: 'Я с трудом заставляю себя работать.' },
        { value: '3', text: 'Я не могу работать.' },
      ],
    },
    {
      id: 'q16',
      text: 'Сон: Как изменился ваш сон?',
      options: [
        { value: '0', text: 'Я сплю так же, как раньше.' },
        { value: '1', text: 'Я сплю хуже, чем раньше.' },
        { value: '2', text: 'Я просыпаюсь раньше и не могу уснуть.' },
        { value: '3', text: 'Я почти не сплю.' },
      ],
    },
    {
      id: 'q17',
      text: 'Усталость: Чувствуете ли вы усталость?',
      options: [
        { value: '0', text: 'Я не более устал, чем обычно.' },
        { value: '1', text: 'Я устаю быстрее, чем раньше.' },
        { value: '2', text: 'Я устаю от всего.' },
        { value: '3', text: 'Я слишком устал, чтобы что-то делать.' },
      ],
    },
    {
      id: 'q18',
      text: 'Аппетит: Как изменился ваш аппетит?',
      options: [
        { value: '0', text: 'Мой аппетит не изменился.' },
        { value: '1', text: 'У меня хуже аппетит, чем раньше.' },
        { value: '2', text: 'У меня почти нет аппетита.' },
        { value: '3', text: 'Я совсем не хочу есть.' },
      ],
    },
    {
      id: 'q19',
      text: 'Потеря веса: Потеряли ли вы вес без диеты?',
      options: [
        { value: '0', text: 'Я не потерял вес.' },
        { value: '1', text: 'Я потерял немного веса.' },
        { value: '2', text: 'Я потерял более 5 кг.' },
        { value: '3', text: 'Я потерял более 10 кг.' },
      ],
    },
    {
      id: 'q20',
      text: 'Здоровье: Беспокоитесь ли вы о своем здоровье?',
      options: [
        { value: '0', text: 'Я не беспокоюсь о здоровье больше, чем обычно.' },
        { value: '1', text: 'Я беспокоюсь о своем здоровье.' },
        { value: '2', text: 'Я очень беспокоюсь о своем здоровье.' },
        { value: '3', text: 'Я постоянно беспокоюсь о своем здоровье.' },
      ],
    },
    {
      id: 'q21',
      text: 'Интерес к сексу: Как изменился ваш интерес к сексу?',
      options: [
        { value: '0', text: 'Мой интерес к сексу не изменился.' },
        { value: '1', text: 'У меня меньше интереса к сексу.' },
        { value: '2', text: 'Я почти потерял интерес к сексу.' },
        { value: '3', text: 'Я полностью потерял интерес к сексу.' },
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

    if (totalScore <= 9) {
      recommendation = {
        level: 'Отсутствие депрессии',
        package: 'Бесплатный Вводный Пакет',
        packageLink: '/free-package',
        description: 'У тебя нет признаков депрессии. Наш бесплатный вводный пакет поможет поддерживать твое эмоциональное благополучие.',
      };
    } else if (totalScore <= 18) {
      recommendation = {
        level: 'Легкая депрессия',
        package: 'Базовый Пакет',
        packageLink: '/our-service',
        description: 'У тебя могут быть признаки легкой депрессии. Наш базовый пакет поможет справиться с этими симптомами.',
      };
    } else if (totalScore <= 29) {
      recommendation = {
        level: 'Умеренная депрессия',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'У тебя могут быть признаки умеренной депрессии. Наш расширенный пакет предложит более глубокую поддержку.',
      };
    } else {
      recommendation = {
        level: 'Тяжелая депрессия',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'У тебя могут быть признаки тяжелой депрессии. Наш расширенный пакет поможет тебе справиться с этим состоянием.',
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
      q11: null,
      q12: null,
      q13: null,
      q14: null,
      q15: null,
      q16: null,
      q17: null,
      q18: null,
      q19: null,
      q20: null,
      q21: null,
    });
    setResult(null);
  };

  const shareViaEmail = () => {
    if (!result) return;
    const subject = 'Мои результаты теста: Инвентарь депрессии Бека';
    const body = `Твой балл: ${result.score} из 63\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareViaWhatsApp = () => {
    if (!result) return;
    const text = `Мои результаты теста: Инвентарь депрессии Бека\nТвой балл: ${result.score} из 63\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const printResult = () => {
    if (!result) return;
    const printContent = `
      <h3>Результаты теста: Инвентарь депрессии Бека</h3>
      <p><strong>Твой балл:</strong> ${result.score} из 63</p>
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
            Инвентарь депрессии Бека
          </h3>
          <p className="section-description">
            Этот тест помогает оценить уровень депрессии, измеряя такие симптомы, как печаль, чувство вины, усталость и потеря интереса к жизни. Пройди тест — и получи рекомендации, которые помогут справиться с эмоциональными трудностями.
            <span className="test-info">
              онлайн-тест | 21 пункт | около 5 минут
            </span>
          </p>
          <div className="test-container" style={{ borderRadius: '20px', backgroundColor: '#fff', border: '1px solid #e0e0e0' }}>
            {result ? (
              <div className="test-result">
                <p className="score-info"><strong>Твой балл:</strong></p>
                <div className="score-bar">
                  <div
                    className={`score-progress ${result.score <= 9 ? 'score-progress-top' : result.score <= 18 ? 'score-progress-low' : result.score <= 29 ? 'score-progress-medium' : 'score-progress-high'}`}
                    style={{ width: `${(result.score / 63) * 100}%` }}
                  ></div>
                  <span className="score-label" style={{ left: `${(result.score / 63) * 100}%` }}>
                    {result.score}
                  </span>
                </div>
                <div className="score-range">
                  <span>0</span>
                  <span>63</span>
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
              <strong>Author:</strong> Aaron T. Beck (1961)
            </p>
            <p className="disclaimer-info">
              Test is provided for educational and entertainment use only. It is not intended to be a psychological advice of any kind, and come without any guarantee of accuracy or validity. Assessment is free and anonymous. You can save the direct link to your results.
            </p>
            <p>
              <strong>References:</strong><br />
              <a
                href="https://www.beckinstitute.org/beck-inventory-and-scales/"
                target="_blank"
                rel="noopener noreferrer"
                className="reference-link"
              >
                Beck, A. T., Ward, C. H., Mendelson, M., Mock, J., & Erbaugh, J. (1961). An inventory for measuring depression. Archives of General Psychiatry, 4(6), 561-571.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestBecksDepressionInventory;