import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/TestStyles.css'; // Εισαγωγή του κοινού CSS

function LuscherColorTest() {
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);
  const [result, setResult] = useState(null);
  const [showShareOptions, setShowShareOptions] = useState(false);

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

  console.log("Remaining Colors:", remainingColors);

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
    setIsTestOpen(false);
    setSelectedColors([]);
    setResult(null);
    setShowShareOptions(false);
  };

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  const shareViaEmail = () => {
    if (!result) return;
    const subject = 'Мои результаты теста: Цветовой тест Люшера'; // Ενημερωμένος τίτλος
    const body = `Мой результат: ${result.description}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareViaWhatsApp = () => {
    if (!result) return;
    const text = `Мои результаты теста: Цветовой тест Люшера\nМой результат: ${result.description}\nРекомендация: ${result.recommendation.description}\nПредлагаемый пакет: ${result.recommendation.package}`; // Ενημερωμένος τίτλος
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const printResult = () => {
    if (!result) return;
    const printContent = `
      <h3>Результаты теста: Цветовой тест Люшера</h3> <!-- Ενημερωμένος τίτλος -->
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
    <div className="luscher-color-test">
      <div className="free-package-section">
        <div className="section-content">
          <h3 className="section-title" onClick={() => setIsTestOpen(!isTestOpen)}>
            Цветовой тест Люшера {/* Ενημερωμένος τίτλος */}
            <i className={`las la-angle-down dropdown-icon ${isTestOpen ? 'open' : ''}`}></i>
          </h3>
          <p className="section-description">
            Диагностика стресса и эмоционального состояния по реакции на цвет
            Цветовой тест Люшера — проективная методика, которая помогает выявить уровень стресса, скрытые эмоциональные напряжения и внутренние конфликты. Он основан на подсознательной реакции на цвет, минуя рациональные фильтры. Пройди тест — и получи объективный взгляд на своё психоэмоциональное состояние с рекомендациями, как восстановить внутренний баланс.
            <span className="test-info">
              онлайн-тест | 8 выборов | около 2 минут
            </span>
          </p>
          {isTestOpen && (
            <>
              <div
                style={{
                  padding: '20px',
                  background: '#ffffff',
                  borderRadius: '10px',
                  marginTop: '10px',
                }}
              >
                {result ? (
                  <div
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#143B64',
                        marginBottom: '15px',
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      Результаты теста
                    </h3>
                    <p
                      style={{
                        fontSize: '18px',
                        lineHeight: '1.6',
                        color: '#2F4C66',
                        fontFamily: "'Playfair Display', serif",
                        marginBottom: '10px',
                      }}
                    >
                      <strong>Самый предпочитаемый цвет:</strong> {result.primaryColor}
                    </p>
                    <p
                      style={{
                        fontSize: '18px',
                        lineHeight: '1.6',
                        color: '#2F4C66',
                        fontFamily: "'Playfair Display', serif",
                        marginBottom: '10px',
                      }}
                    >
                      <strong>Второй предпочитаемый цвет:</strong> {result.secondaryColor}
                    </p>
                    <p
                      style={{
                        fontSize: '18px',
                        lineHeight: '1.6',
                        color: '#2F4C66',
                        fontFamily: "'Playfair Display', serif",
                        marginBottom: '10px',
                      }}
                    >
                      <strong>Наименее предпочитаемый цвет:</strong> {result.leastPreferred}
                    </p>
                    <p
                      style={{
                        fontSize: '18px',
                        lineHeight: '1.6',
                        color: '#2F4C66',
                        fontFamily: "'Playfair Display', serif",
                        marginBottom: '10px',
                      }}
                    >
                      <strong>Описание:</strong> {result.description}
                    </p>
                    <p
                      style={{
                        fontSize: '16px',
                        lineHeight: '1.6',
                        color: '#2F4C66',
                        fontFamily: "'Playfair Display', serif",
                        marginBottom: '10px',
                      }}
                    >
                      <strong>Рекомендация:</strong> {result.recommendation.description}
                    </p>
                    <p
                      style={{
                        fontSize: '16px',
                        lineHeight: '1.6',
                        color: '#2F4C66',
                        fontFamily: "'Playfair Display', serif",
                        marginBottom: '10px',
                      }}
                    >
                      <strong>Предлагаемый пакет:</strong>{' '}
                      <Link to={result.recommendation.packageLink} style={{ color: '#21aabc', textDecoration: 'none', fontWeight: '600' }}>
                        {result.recommendation.package}
                      </Link>
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '20px',
                        marginTop: '20px',
                      }}
                    >
                      <button
                        onClick={closeTest}
                        style={{
                          padding: '10px 20px',
                          backgroundColor: '#FF6F61',
                          color: 'white',
                          borderRadius: '15px',
                          textDecoration: 'none',
                          fontWeight: '600',
                          fontFamily: "'Playfair Display', serif",
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        Закрыть тест
                      </button>
                      <div style={{ position: 'relative' }}>
                        <i
                          className="las la-share share-icon"
                          onClick={toggleShareOptions}
                          style={{
                            fontSize: '24px',
                            color: '#143B64',
                            cursor: 'pointer',
                          }}
                        ></i>
                        {showShareOptions && (
                          <div
                            style={{
                              position: 'absolute',
                              top: '30px',
                              right: '0',
                              background: '#ffffff',
                              border: '1px solid #e0e0e0',
                              borderRadius: '5px',
                              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                              display: 'flex',
                              flexDirection: 'column',
                              zIndex: '10',
                            }}
                          >
                            <button
                              onClick={shareViaEmail}
                              style={{
                                padding: '8px 16px',
                                background: 'none',
                                border: 'none',
                                color: '#143B64',
                                fontFamily: "'Playfair Display', serif",
                                fontSize: '14px',
                                cursor: 'pointer',
                              }}
                            >
                              Email
                            </button>
                            <button
                              onClick={printResult}
                              style={{
                                padding: '8px 16px',
                                background: 'none',
                                border: 'none',
                                color: '#143B64',
                                fontFamily: "'Playfair Display', serif",
                                fontSize: '14px',
                                cursor: 'pointer',
                              }}
                            >
                              Печать
                            </button>
                            <button
                              onClick={shareViaWhatsApp}
                              style={{
                                padding: '8px 16px',
                                background: 'none',
                                border: 'none',
                                color: '#143B64',
                                fontFamily: "'Playfair Display', serif",
                                fontSize: '14px',
                                cursor: 'pointer',
                              }}
                            >
                              WhatsApp
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div style={{ marginBottom: '20px' }}>
                    <h3
                      style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#143B64',
                        marginBottom: '15px',
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      Выбери цвет, который тебе больше всего нравится сейчас ({selectedColors.length + 1}/{colors.length})
                    </h3>
                    <p
                      style={{
                        fontSize: '16px',
                        color: '#2F4C66',
                        fontFamily: "'Playfair Display', serif",
                        marginBottom: '15px',
                      }}
                    >
                      Не ассоциируй цвет с чем-либо, например с одеждой, мебелью или автомобилями. Просто выбери цвет, к которому ты чувствуешь наибольшую симпатию.
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '15px',
                        marginTop: '20px',
                      }}
                    >
                      {remainingColors.length > 0 ? (
                        remainingColors.map((color, index) => (
                          <div
                            key={index}
                            style={{
                              position: 'relative',
                              backgroundColor: color.color,
                              width: '80px',
                              height: '80px',
                              borderRadius: '5px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            }}
                            onClick={() => handleColorSelect(color.name)}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)';
                              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            {/* Προσθήκη SVG για ένδειξη επιλογής */}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LuscherColorTest;