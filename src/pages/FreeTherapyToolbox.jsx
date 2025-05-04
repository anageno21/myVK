import React from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import NewFooter from '../components/NewFooter';
import '../components/ServicesSection.css';

const FreeTherapyToolbox = () => {
  // Λίστα με τα δεδομένα των τεστ
  const testsData = [
    {
      title: 'Тест на стиль привязанности',
      description: 'Этот тест поможет определить твой стиль привязанности — как ты взаимодействуешь в близких отношениях.',
      url: '/test-attachment-style',
    },
    {
      title: 'Шкала самосострадания',
      description: 'Этот тест поможет оценить, как ты относишься к себе в трудные моменты.',
      url: '/test-self-compassion-scale',
    },
    {
      title: 'Шкала тревожности Занга',
      description: 'Определи свой уровень тревожности и получи рекомендации.',
      url: '/test-zung-self-rating-anxiety-scale',
    },
    {
      title: 'Шкала самооценки Розенберга',
      description: 'Оцени свою самооценку и узнай, как укрепить уверенность.',
      url: '/test-rosenberg-self-esteem-scale',
    },
    {
      title: 'Инвентарь депрессии Бека',
      description: 'Этот тест помогает оценить уровень депрессии, измеряя такие симптомы, как печаль, чувство вины, усталость и потеря интереса к жизни.',
      url: '/test-becks-depression-inventory',
    },
    {
      title: 'Шкала общей самоэффективности',
      description: 'Этот тест измеряет твою веру в способность справляться с жизненными вызовами.',
      url: '/test-general-self-efficacy-scale',
    },
    {
      title: 'Цветовой тест Люшера',
      description: 'Диагностика стресса и эмоционального состояния по реакции на цвет.',
      url: '/test-luscher-color-test',
    },
    {
      title: 'Оценка удовлетворенности браком',
      description: 'Этот тест помогает оценить уровень удовлетворенности твоим браком — от общения до разделения обязанностей.',
      url: '/test-marital-satisfaction-assessment',
    },
    {
      title: 'Опросник шкалы отношений',
      description: 'Этот тест помогает оценить качество твоих отношений с партнером — насколько ты чувствуешь близость, доверие и удовлетворенность.',
      url: '/test-relationship-scales-questionnaire',
    },
    {
      title: 'Опросник самоконцепции Робсона',
      description: 'Этот тест оценивает твое восприятие себя — насколько ты принимаешь себя, чувствуешь уверенность и видишь свою жизнь осмысленной.',
      url: '/test-robson-self-concept-questionnaire',
    },
    {
      title: 'Шкала руминативных реакций (RRS)',
      description: 'Этот тест помогает выявить склонность к руминации — привычке застревать в негативных мыслях и переживаниях.',
      url: '/test-rrs',
    },
  ];

  return (
    <div
      className="free-therapy-toolbox-page"
      style={{
        minHeight: '100vh',
        overflow: 'visible',
      }}
    >
      <ProfileHeader />
      <div className="hero-section" style={{ position: 'relative' }}>
        <img
          src="/images/section/freetoolbox.png"
          alt="Free Therapy Toolbox"
          style={{
            display: 'block',
            width: '100%',
            height: '580px',
            objectFit: 'cover',
            position: 'relative',
            zIndex: 5,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            maxWidth: '1020px',
            margin: '0 auto',
            left: '0',
            right: '0',
            transform: 'translateY(-50%)',
            color: '#fff',
            textAlign: 'left',
            zIndex: 6,
            fontFamily: 'Playfair Display, serif',
          }}
        >
          <h2
            style={{
              fontSize: '62px',
              lineHeight: '1.0',
              maxWidth: '500px',
              marginBottom: '20px',
              color: '#fff',
            }}
          >
            Добро пожаловать в пространство, созданное именно для тебя.
          </h2>
        </div>
      </div>
      {/* Νέο μπλοκ κειμένου κάτω από την εικόνα και πάνω από τη διάταξη */}
      <section
        style={{
          maxWidth: '1020px',
          margin: '0 auto',
          padding: '20px 0',
          marginTop: '40px',
          fontFamily: 'Playfair Display, serif',
          fontSize: '24px',
          lineHeight: '1.5',
          color: '#2F4C66',
          textAlign: 'left',
        }}
      >
        <p>
          Здесь ты найдёшь бесплатные материалы, инструменты и практичные гиды, которые помогут лучше понять современные терапевтические модели — и главное, как применять их на практике, будь то для себя или в работе с другими.
        </p>
        <p>
          Только начинаешь путь самопознания? Или уже работаешь с людьми? Мы позаботились, чтобы у тебя было всё необходимое: просто, понятно, доступно.
        </p>
        <p>
          Загляни внутрь — возможно, именно здесь ты найдёшь то, что поможет сделать следующий шаг.
        </p>
      </section>
      {/* Διάταξη με 2 στήλες (flex) */}
      <section
        className="new-services-grid-section"
        style={{
          overflow: 'visible',
          marginBottom: '100px', // Σταθερή απόσταση από το τέλος του μακρύτερου πλαισίου
          backgroundColor: '#f2f1f0',
        }}
      >
        <div
          className="new-services-grid"
          style={{
            display: 'flex',
            flexWrap: 'nowrap', // Εξασφαλίζει ότι οι στήλες δεν θα τυλίγονται
            gap: '20px',
            maxWidth: '1020px',
            margin: '0 auto',
          }}
        >
          {/* Αριστερή στήλη */}
          <div
            style={{
              width: '50%', // Σταθερό πλάτος για κάθε στήλη
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {/* Πρώτο αριστερό πλαίσιο: Λίστα τεστ */}
            <div
              className="service-item"
              style={{
                backgroundColor: '#f5f5f5',
                borderRadius: '30px',
                padding: '20px',
                textDecoration: 'none',
                color: '#2F4C66',
                textAlign: 'left',
                boxSizing: 'border-box',
              }}
            >
              <h3
                style={{
                  fontSize: '28px',
                  lineHeight: '1.0',
                  marginBottom: '20px',
                  color: '#8EB5BA',
                  fontFamily: 'Playfair Display, serif',
                }}
              >
                Психологические тесты. Онлайн-оценка
              </h3>
              <div style={{ height: '40px' }}></div>
              {testsData.map((test, index) => (
                <Link
                  key={index}
                  to={test.url}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    color: '#2F4C66',
                    marginBottom: '20px',
                    marginTop: '0',
                    transition: 'color 0.3s ease',
                  }}
                >
                  <h5
                    style={{
                      fontSize: '20px',
                      marginBottom: '10px',
                      marginTop: '0',
                      overflowWrap: 'break-word',
                      transition: 'text-decoration 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#8EB5BA';
                      e.target.style.textDecoration = 'underline';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#2F4C66';
                      e.target.style.textDecoration = 'none';
                    }}
                  >
                    {test.title}
                  </h5>
                </Link>
              ))}
            </div>
            {/* Δεύτερο αριστερό πλαίσιο: Аудиоподдержка */}
            <div
              className="service-item"
              style={{
                backgroundColor: '#f5f5f5',
                borderRadius: '30px',
                boxSizing: 'border-box',
                padding: '20px', // Προσθήκη padding για συνέπεια
              }}
            >
              <h3
                style={{
                  fontSize: '28px',
                  lineHeight: '1.0',
                  marginBottom: '20px',
                  color: '#8EB5BA',
                  fontFamily: 'Playfair Display, serif',
                  textAlign: 'left',
                }}
              >
                Аудиоподдержка
              </h3>
              <div style={{ height: '40px' }}></div>
            </div>
          </div>
          {/* Δεξιά στήλη */}
          <div
            style={{
              width: '50%', // Σταθερό πλάτος για κάθε στήλη
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {/* Πρώτο δεξί πλαίσιο: Βίντεο */}
            <div
              className="service-item"
              style={{
                backgroundColor: '#f5f5f5',
                borderRadius: '30px',
                boxSizing: 'border-box',
                padding: '20px',
              }}
            >
              <h3
                style={{
                  fontSize: '28px',
                  lineHeight: '1.0',
                  marginBottom: '20px',
                  color: '#8EB5BA',
                  fontFamily: 'Playfair Display, serif',
                  textAlign: 'left',
                }}
              >
                видео
              </h3>
              <div style={{ height: '40px' }}></div>
              {/* Διάταξη για τα μικρά παράθυρα βίντεο */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  justifyContent: 'space-between',
                }}
              >
                {/* Πρώτη σειρά: 3 βίντεο */}
                <Link to="/test-zung-self-rating-anxiety-scale">
                  <video
                    src="/videos/VK/vkIntro.mp4"
                    controls
                    style={{
                      width: '140px',
                      height: '249px',
                      borderRadius: '10px',
                      objectFit: 'cover',
                    }}
                  />
                </Link>
                <Link to="/test-zung-self-rating-anxiety-scale">
                  <video
                    src="/videos/VK/vkIntro.mp4"
                    controls
                    style={{
                      width: '140px',
                      height: '249px',
                      borderRadius: '10px',
                      objectFit: 'cover',
                    }}
                  />
                </Link>
                <Link to="/test-zung-self-rating-anxiety-scale">
                  <video
                    src="/videos/VK/vkIntro.mp4"
                    controls
                    style={{
                      width: '140px',
                      height: '249px',
                      borderRadius: '10px',
                      objectFit: 'cover',
                    }}
                  />
                </Link>
                {/* Δεύτερη σειρά: 3 βίντεο */}
                <Link to="/test-zung-self-rating-anxiety-scale">
                  <video
                    src="/videos/VK/vkIntro.mp4"
                    controls
                    style={{
                      width: '140px',
                      height: '249px',
                      borderRadius: '10px',
                      objectFit: 'cover',
                    }}
                  />
                </Link>
                <Link to="/test-zung-self-rating-anxiety-scale">
                  <video
                    src="/videos/VK/vkIntro.mp4"
                    controls
                    style={{
                      width: '140px',
                      height: '249px',
                      borderRadius: '10px',
                      objectFit: 'cover',
                    }}
                  />
                </Link>
                <Link to="/test-zung-self-rating-anxiety-scale">
                  <video
                    src="/videos/VK/vkIntro.mp4"
                    controls
                    style={{
                      width: '140px',
                      height: '249px',
                      borderRadius: '10px',
                      objectFit: 'cover',
                    }}
                  />
                </Link>
                {/* Τρίτη σειρά: 3 βίντεο */}
                <Link to="/test-zung-self-rating-anxiety-scale">
                  <video
                    src="/videos/VK/vkIntro.mp4"
                    controls
                    style={{
                      width: '140px',
                      height: '249px',
                      borderRadius: '10px',
                      objectFit: 'cover',
                    }}
                  />
                </Link>
                <Link to="/test-zung-self-rating-anxiety-scale">
                  <video
                    src="/videos/VK/vkIntro.mp4"
                    controls
                    style={{
                      width: '140px',
                      height: '249px',
                      borderRadius: '10px',
                      objectFit: 'cover',
                    }}
                  />
                </Link>
                <Link to="/test-zung-self-rating-anxiety-scale">
                  <video
                    src="/videos/VK/vkIntro.mp4"
                    controls
                    style={{
                      width: '140px',
                      height: '249px',
                      borderRadius: '10px',
                      objectFit: 'cover',
                    }}
                  />
                </Link>
              </div>
            </div>
            {/* Δεύτερο δεξί πλαίσιο: Библиотека */}
            <div
              className="service-item"
              style={{
                backgroundColor: '#f5f5f5',
                borderRadius: '30px',
                boxSizing: 'border-box',
                padding: '20px', // Προσθήκη padding για συνέπεια
              }}
            >
              <h3
                style={{
                  fontSize: '28px',
                  lineHeight: '1.0',
                  marginBottom: '20px',
                  color: '#8EB5BA',
                  fontFamily: 'Playfair Display, serif',
                  textAlign: 'left',
                }}
              >
                Библиотека
              </h3>
              <div style={{ height: '40px' }}></div>
            </div>
          </div>
        </div>
      </section>
      <NewFooter
        style={{
          position: 'relative',
          clear: 'both',
          width: '100%',
        }}
      />
    </div>
  );
};

export default FreeTherapyToolbox;