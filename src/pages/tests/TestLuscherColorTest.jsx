import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../../components/ProfileHeader';
import './TestsStyleQuestionnaire.css';

function TestLuscherColorTest() {
  const [selectedColors, setSelectedColors] = useState([]);
  const [result, setResult] = useState(null);

  // Τα 8 χρώματα του Luscher Color Test
  const colors = [
    { name: 'Синий', color: '#0000FF', meaning: 'Спокойствие, гармония' },
    { name: 'Зеленый', color: '#008000', meaning: 'Уверенность, настойчивость' },
    { name: 'Красный', color: '#FF0000', meaning: 'Энергия, страсть' },
    { name: 'Желтый', color: '#FFFF00', meaning: 'Оптимизм, радость' },
    { name: 'Фиолетовый', color: '#800080', meaning: 'Интроспекция, творчество' },
    { name: 'Коричневый', color: '#8B4513', meaning: 'Стабильность, комфорт' },
    { name: 'Черный', color: '#000000', meaning: 'Сила, протест' },
    { name: 'Серый', color: '#808080', meaning: 'Нейтральность, отстраненность' },
  ];

  // Τα χρώματα που απομένουν για επιλογή
  const remainingColors = colors.filter(color => !selectedColors.includes(color.name));

  const handleColorSelect = (colorName) => {
    const newSelectedColors = [...selectedColors, colorName];
    setSelectedColors(newSelectedColors);

    if (newSelectedColors.length === colors.length) {
      calculateResult(newSelectedColors);
    }
  };

  const calculateResult = (finalSelections) => {
    const primaryColor = finalSelections[0];
    const secondaryColor = finalSelections[1];
    const leastPreferred = finalSelections[finalSelections.length - 1];

    const primaryMeaning = colors.find(c => c.name === primaryColor)?.meaning || '';
    const secondaryMeaning = colors.find(c => c.name === secondaryColor)?.meaning || '';
    const leastMeaning = colors.find(c => c.name === leastPreferred)?.meaning || '';

    let description = '';
    let recommendation = {};

    if (['Синий', 'Зеленый'].includes(primaryColor)) {
      description = `Ты склонен к спокойствию и стабильности. Твоя личность отражает стремление к гармонии и уверенности. Ты ценишь ${primaryMeaning.toLowerCase()} и ${secondaryMeaning.toLowerCase()}. Однако ты избегаешь ${leastMeaning.toLowerCase()}.`;
      recommendation = {
        level: 'Сбалансированное эмоциональное состояние',
        package: 'Бесплатный Вводный Пакет',
        packageLink: '/free-package',
        description: 'У тебя сбалансированное эмоциональное состояние! Наш бесплатный вводный пакет поможет тебе поддерживать внутреннюю гармонию.',
      };
    } else if (['Красный', 'Желтый'].includes(primaryColor)) {
      description = `Ты энергичен и полон жизни. Твоя личность отражает страсть и оптимизм. Ты ценишь ${primaryMeaning.toLowerCase()} и ${secondaryMeaning.toLowerCase()}. Однако ты избегаешь ${leastMeaning.toLowerCase()}.`;
      recommendation = {
        level: 'Высокая энергия и оптимизм',
        package: 'Базовый Пакет',
        packageLink: '/our-service',
        description: 'У тебя высокий уровень энергии и оптимизма. Наш базовый пакет поможет тебе направить эту энергию на достижение целей.',
      };
    } else if (['Фиолетовый', 'Коричневый'].includes(primaryColor)) {
      description = `Ты склонен к интроспекции и поиску комфорта. Твоя личность отражает творчество и стабильность. Ты ценишь ${primaryMeaning.toLowerCase()} и ${secondaryMeaning.toLowerCase()}. Однако ты избегаешь ${leastMeaning.toLowerCase()}.`;
      recommendation = {
        level: 'Интроспективное состояние',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'Ты склонен к глубоким размышлениям. Наш расширенный пакет поможет тебе лучше понять свои эмоции и найти внутренний баланс.',
      };
    } else {
      description = `Ты находишься в состоянии, где преобладает нейтральность или протест. Твоя личность отражает ${primaryMeaning.toLowerCase()} и ${secondaryMeaning.toLowerCase()}. Ты избегаешь ${leastMeaning.toLowerCase()}.`;
      recommendation = {
        level: 'Нейтральное или протестное состояние',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'Ты можешь испытывать внутреннее напряжение. Наш расширенный пакет поможет тебе справиться с этим состоянием.',
      };
    }

    setResult({
      primaryColor,
      secondaryColor,
      leastPreferred,
      description,
      recommendation,
    });
  };

  const closeTest = () => {
    setSelectedColors([]);
    setResult(null);
  };

  const shareViaEmail = () => {
    if (!result) return;
    const subject = 'Мои результаты теста: Цветовой тест Люшера';
    const body = `Мой результат: ${result.description}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareViaWhatsApp = () => {
    if (!result) return;
    const text = `Мои результаты теста: Цветовой тест Люшера\nМой результат: ${result.description}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const printResult = () => {
    if (!result) return;
    const printContent = `
      <h3>Результаты теста: Цветовой тест Люшера</h3>
      <p><strong>Самый предпочитаемый цвет:</strong> ${result.primaryColor}</p>
      <p><strong>Второй предпочитаемый цвет:</strong> ${result.secondaryColor}</p>
      <p><strong>Наименее предпочитаемый цвет:</strong> ${result.leastPreferred}</p>
      <p><strong>Описание:</strong> ${result.description}</p>
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

  return (
    <div className="attachment-style-test">
      <ProfileHeader />
      <div className="free-package-section">
        <div className="section-content">
          <h3 className="section-title">
            Цветовой тест Люшера
          </h3>
          <p className="section-description">
            Диагностика стресса и эмоционального состояния по реакции на цвет Цветовой тест Люшера — проективная методика, которая помогает выявить уровень стресса, скрытые эмоциональные напряжения и внутренние конфликты. Он основан на подсознательной реакции на цвет, минуя рациональные фильтры. Пройди тест — и получи объективный взгляд на своё психоэмоциональное состояние с рекомендациями, как восстановить внутренний баланс.
            <span className="test-info">
              онлайн-тест | 8 выборов | около 2 минут
            </span>
          </p>
          <div className="test-container">
            {result ? (
              <div className="test-result">
                <p className="score-info"><strong>Самый предпочитаемый цвет:</strong></p>
                <p>{result.primaryColor}</p>
                <p className="score-info"><strong>Второй предпочитаемый цвет:</strong></p>
                <p>{result.secondaryColor}</p>
                <p className="score-info"><strong>Наименее предпочитаемый цвет:</strong></p>
                <p>{result.leastPreferred}</p>
                <p><strong>Описание:</strong> {result.description}</p>
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
              <div className="test-question fade-in">
                <h3>Выбери цвет, который тебе больше всего нравится сейчас ({selectedColors.length + 1}/{colors.length})</h3>
                <p>Не ассоциируй цвет с чем-либо, например с одеждой, мебелью или автомобилями. Просто выбери цвет, к которому ты чувствуешь наибольшую симпатию.</p>
                <div className="color-options">
                  {remainingColors.length > 0 ? (
                    remainingColors.map((color, index) => (
                      <div
                        key={index}
                        className="color-card"
                        style={{
                          backgroundColor: color.color,
                        }}
                        onClick={() => handleColorSelect(color.name)}
                      >
                        {selectedColors.includes(color.name) && (
                          <svg
                            style={{
                              position: 'absolute',
                              top: '5px',
                              right: '5px',
                            }}
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                          >
                            <circle
                              cx="10"
                              cy="10"
                              r="9"
                              fill="none"
                              stroke="#143B64"
                              strokeWidth="2"
                            />
                            <circle
                              cx="10"
                              cy="10"
                              r="7"
                              fill="#21aabc"
                            />
                            <circle
                              cx="10"
                              cy="10"
                              r="4"
                              fill="#fff"
                            />
                          </svg>
                        )}
                      </div>
                    ))
                  ) : (
                    <p style={{ color: '#FF0000' }}>Ошибка: Нет доступных цветов для выбора. Пожалуйста, перезапусти тест.</p>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="test-footer-info">
            <p className="author-info">
              <strong>Автор:</strong> Max Luscher (1948, 1969)
            </p>
            <p className="disclaimer-info">
              Тест предоставляется исключительно в образовательных и развлекательных целях. Он не предназначен для психологических консультаций любого рода и не гарантирует точности или достоверности. Оценка бесплатна и анонимна. Вы можете сохранить прямую ссылку на свои результаты.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestLuscherColorTest;