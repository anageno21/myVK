import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/TestStyles.css';

function RelationshipScalesQuestionnaire() {
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [answers, setAnswers] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null,
    q6: null, q7: null, q8: null, q9: null, q10: null,
    q11: null, q12: null, q13: null, q14: null, q15: null,
    q16: null, q17: null, q18: null, q19: null, q20: null,
    q21: null, q22: null, q23: null, q24: null, q25: null,
    q26: null, q27: null, q28: null, q29: null, q30: null,
    q31: null, q32: null,
  });
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 'q1',
      text: 'Я чувствую себя комфортно, когда нахожусь в одиночестве.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q2',
      text: 'Я часто беспокоюсь о том, что другие люди подумают обо мне.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q3',
      text: 'Я предпочитаю, чтобы другие принимали решения за меня.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q4',
      text: 'Мне трудно доверять другим людям.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q5',
      text: 'Я чувствую себя некомфортно, если кто-то становится слишком близким ко мне.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q6',
      text: 'Я часто чувствую, что мне нужно больше внимания от других.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q7',
      text: 'Я чувствую себя уверенно в своих отношениях с другими.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q8',
      text: 'Я боюсь, что меня покинут близкие люди.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q9',
      text: 'Я чувствую себя комфортно, когда полагаюсь на других.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q10',
      text: 'Я часто чувствую, что другие не заботятся обо мне так, как я забочусь о них.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q11',
      text: 'Я предпочитаю держать свои чувства при себе.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q12',
      text: 'Я часто чувствую себя уязвимым в близких отношениях.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q13',
      text: 'Я чувствую себя комфортно, когда другие полагаются на меня.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q14',
      text: 'Я часто беспокоюсь о том, что потеряю близких людей.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q15',
      text: 'Мне трудно быть открытым с другими.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q16',
      text: 'Я часто чувствую, что мне нужно больше близости в отношениях.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q17',
      text: 'Я чувствую себя комфортно, когда другие знают мои глубочайшие мысли и чувства.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q18',
      text: 'Я часто чувствую, что другие не понимают меня.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q19',
      text: 'Мне трудно сказать "нет" другим.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q20',
      text: 'Я часто чувствую, что должен быть идеальным, чтобы меня приняли другие.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q21',
      text: 'Я чувствую себя комфортно, будучи независимым.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q22',
      text: 'Я часто чувствую, что другие ненадежны.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q23',
      text: 'Я чувствую себя комфортно, делясь своими чувствами с другими.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q24',
      text: 'Я часто чувствую, что мне нужно быть рядом с другими, чтобы чувствовать себя в безопасности.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q25',
      text: 'Я чувствую себя комфортно, будучи самим собой в отношениях.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q26',
      text: 'Я часто чувствую, что другие не ценят меня.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q27',
      text: 'Я чувствую себя комфортно, устанавливая границы в отношениях.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q28',
      text: 'Я часто чувствую, что должен угождать другим, чтобы меня приняли.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q29',
      text: 'Я чувствую себя комфортно, будучи уязвимым с другими.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q30',
      text: 'Я часто чувствую, что другие недоступны, когда мне нужны.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q31',
      text: 'Я чувствую себя комфортно, прося о помощи, когда мне это нужно.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
      ],
    },
    {
      id: 'q32',
      text: 'Я часто чувствую, что должен доказывать свою ценность другим.',
      options: [
        { value: '1', text: 'Совершенно не похоже на меня' },
        { value: '2', text: 'Не похоже на меня' },
        { value: '3', text: 'Нейтрально' },
        { value: '4', text: 'Похоже на меня' },
        { value: '5', text: 'Совершенно похоже на меня' },
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

    if (totalScore <= 64) { // 1-2 μέσος όρος (32 ερωτήσεις x 2)
      recommendation = {
        level: 'Высокий уровень тревожности в отношениях',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'Твой уровень тревожности в отношениях может быть высоким. Наш расширенный пакет поможет тебе работать над этим.',
      };
    } else if (totalScore <= 96) { // 2-3 μέσος όρος (32 ερωτήσεις x 3)
      recommendation = {
        level: 'Средний уровень тревожности в отношениях',
        package: 'Базовый Пакет',
        packageLink: '/our-service',
        description: 'Твой уровень тревожности в отношениях находится на среднем уровне. Наш базовый пакет поможет тебе укрепить уверенность в отношениях.',
      };
    } else { // 3-5 μέσος όρος (32 ερωτήσεις x 5 = 160)
      recommendation = {
        level: 'Низкий уровень тревожности в отношениях',
        package: 'Бесплатный Вводный Пакет',
        packageLink: '/free-package',
        description: 'У тебя низкий уровень тревожности в отношениях! Наш бесплатный вводный пакет поможет тебе поддерживать здоровые отношения.',
      };
    }

    setResult({ score: totalScore, recommendation });
  };

  const closeTest = () => {
    setIsTestOpen(false);
    setCurrentQuestionIndex(0);
    setAnswers({
      q1: null, q2: null, q3: null, q4: null, q5: null,
      q6: null, q7: null, q8: null, q9: null, q10: null,
      q11: null, q12: null, q13: null, q14: null, q15: null,
      q16: null, q17: null, q18: null, q19: null, q20: null,
      q21: null, q22: null, q23: null, q24: null, q25: null,
      q26: null, q27: null, q28: null, q29: null, q30: null,
      q31: null, q32: null,
    });
    setResult(null);
    setShowShareOptions(false);
  };

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  const shareViaEmail = () => {
    if (!result) return;
    const subject = 'Мои результаты теста: Опросник шкал привязанности (RSQ)';
    const body = `Твой балл: ${result.score} из 160\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareViaWhatsApp = () => {
    if (!result) return;
    const text = `Мои результаты теста: Опросник шкал привязанности (RSQ)\nТвой балл: ${result.score} из 160\nУровень: ${result.recommendation.level}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const printResult = () => {
    if (!result) return;
    const printContent = `
      <h3>Результаты теста: Опросник шкал привязанности (RSQ)</h3>
      <p><strong>Твой балл:</strong> ${result.score} из 160</p>
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
    <div className="relationship-scales-test">
      <div className="free-package-section">
        <div className="section-content">
          <h3 className="section-title" onClick={() => setIsTestOpen(!isTestOpen)}>
            Опросник шкал привязанности (RSQ)
            <i className={`las la-angle-down dropdown-icon ${isTestOpen ? 'open' : ''}`}></i>
          </h3>
          <p className="section-description">
            Опросник шкал привязанности (RSQ) — валидированный психодиагностический инструмент, разработанный на основе теории привязанности взрослых (Bartholomew & Horowitz). Он предназначен для оценки индивидуальных различий в стилях привязанности, включая степень комфорта с эмоциональной близостью, склонность к избеганию и тревожности в отношениях. RSQ позволяет определить преобладающий стиль привязанности (безопасный, озабоченный, отвергающий или боязливо-избегающий), что даёт основу для более глубокого понимания паттернов межличностного взаимодействия. Пройди тест — и получи интерпретацию результатов с профессиональными рекомендациями по развитию устойчивых и осознанных форм привязанности.
            <span className="test-info">
              онлайн-тест | 32 пункта | около 5 минут
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
                          width: `${((result.score - 32) / 128) * 100}%`,
                          backgroundColor: result.score <= 64 ? '#ff4d4d' : result.score <= 96 ? '#ffd700' : '#32cd32',
                        }}
                      ></div>
                      <span className="score-label" style={{ position: 'absolute', left: `${((result.score - 32) / 128) * 100}%`, transform: 'translateX(-50%)' }}>
                        {result.score}
                      </span>
                    </div>
                    <div className="score-range">
                      <span>32</span>
                      <span>160</span>
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
                  <strong>Author:</strong> John Bowlby (1988)
                </p>
                <p className="disclaimer-info">
                  Test is provided for educational and entertainment use only. It is not intended to be a psychological advice of any kind, and come without any guarantee of accuracy or validity. Assessment is free and anonymous. You can save the direct link to your results.
                </p>
                <p>
                  <strong>References:</strong><br />
                  <a
                    href="https://www.psychology.sunysb.edu/attachment/measures/content/rsq.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reference-link"
                  >
                    Fraley, R. C., Waller, N. G., & Brennan, K. A. (2000). An item response theory analysis of self-report measures of adult attachment. Journal of Personality and Social Psychology, 78(2), 350-365.
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

export default RelationshipScalesQuestionnaire;