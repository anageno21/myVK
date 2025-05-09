// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import ProfileHeader from '../components/ProfileHeader';
import AboutAnageno from '../components/AboutAnageno';
import SpecialisingSection from '../components/SpecialisingSection';
import FavouriteTopics from '../components/FavouriteTopics';
import ConnectWithUs from '../components/ConnectWithUs';
import '../components/HeroSlider.css';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Παρακολουθούμε το τρέχον slide

  const slides = [
    {
      type: 'video',
      src: '/videos/hero-video-1.mp4',
      title: 'Это профессиональная онлайн‑платформа, где вы можете:',
      text: '– учиться понимать себя и управлять своим состоянием,\n– получать практические инструменты и упражнения,\n– пройти путь самопомощи в удобном ритме',
    },
    {
      type: 'image',
      src: '/images/section/hero 2.png',
      title: 'Межличностные отношения',
      text: 'Научитесь слышать и не предавать себя в любых отношениях\nЗдесь мы разбираемся, почему повторяются болезненные сценарии, учимся говорить о своих чувствах и строить контакт — честно, спокойно и с уважением к себе.',
      link: '/services/relationships',
    },
    {
      type: 'image',
      src: '/images/section/hero 3.png',
      title: 'Самооценка и уверенность в себе',
      text: 'Строим уверенность, повышаем самооценку — шаг за шагом\nЗдесь вы разберётесь, откуда берётся внутренний критик, научитесь замечать свои сильные стороны и поддерживать себя в трудные моменты.\nВы получите реальные инструменты, чтобы опираться на себя, а не на чужую оценку.',
      link: '/services/self-confidence',
    },
    {
      type: 'image',
      src: '/images/section/hero 4.png',
      title: 'Адаптация',
      text: 'Как не потерять себя в новой реальности\nРазберётесь, как сохранить психическое равновесие в условиях перемен.\nНаучитесь гибкости мышления, приёму «маленьких шагов» и эмоциональной устойчивости.',
      link: '/services/adaptation',
    },
    {
      type: 'image',
      src: '/images/section/hero 5.png',
      title: 'Стресс и тревожность',
      text: 'Когда всё внутри слишком долго было в напряжении\nЗдесь вы разберётесь, как стресс и тревожность накапливаются, влияют на тело и поведение.\nВы научитесь восстанавливаться, регулировать напряжение и возвращать себе энергию — шаг за шагом.',
      link: '/services/stress-anxiety',
    },
  ];

  return (
    <div className="home-page">
      <ProfileHeader />
      <div className="hero-section" style={{ position: 'relative' }}>
        <HeroSlider
          contentType="video-then-slideshow"
          src={slides[0].src}
          images={slides.slice(1).map(slide => slide.src)}
          onSlideChange={setCurrentSlide} // Εξασφαλίζουμε ότι το prop περνιέται σωστά
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            maxWidth: '920px',
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
              whiteSpace: 'pre-line',
            }}
          >
            {slides[currentSlide].title}
          </h2>
          {slides[currentSlide].text && (
            <p
              style={{
                fontSize: '18px',
                lineHeight: '1.6',
                maxWidth: '500px',
                whiteSpace: 'pre-line',
                color: '#fff',
                marginBottom: '20px',
              }}
            >
              {slides[currentSlide].text}
            </p>
          )}
          {slides[currentSlide].link && (
            <Link
              to={slides[currentSlide].link}
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#8EB5BA',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '30px',
                fontSize: '16px',
                fontFamily: 'Playfair Display, serif',
                marginLeft: '0px',
                marginTop: '15px',
                transition: 'background-color 0.3s ease, color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#edbfab';
                e.target.style.color = '#143B64'; // Σκούρο μπλε κείμενο κατά το hover
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#8EB5BA';
                e.target.style.color = '#fff'; // Επαναφορά σε λευκό κείμενο
              }}
            >
              Узнать больше
            </Link>
          )}
        </div>
      </div>
      <AboutAnageno />
      <SpecialisingSection />
      <FavouriteTopics />
      <ConnectWithUs />
    </div>
  );
};

export default HomePage;