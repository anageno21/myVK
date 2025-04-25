import React, { useState, useEffect } from 'react';
import ProfileHeader from './ProfileHeader';
import './MainHeroSlider.css';

const MainHeroSlider = ({ showOnlyVideo = false, videoSrc = '/videos/hero-video-1.mp4' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkBackground, setIsDarkBackground] = useState(true); // Αρχική τιμή: σκοτεινό background

  const slides = [
    {
      type: 'video',
      src: videoSrc,
      title: "выбрать формат сессий с терапевтом, если нужна личная поддержка",
      text: "At Anageno, our specialized therapy for children offers a safe and nurturing environment where your child can express their feelings, develop emotional resilience, and navigate life’s challenges with confidence.",
    },
    {
      type: 'image',
      src: '/images/section/hero 2.png',
      title: "Межличностные отношения",
      text: "Научитесь слышать и не предавать себя в любых отношениях",
      description: "Здесь мы разбираемся, почему повторяются болезненные сценарии, учимся говорить о своих чувствах и строить контакт — честно, спокойно и с уважением к себе.",
    },
    {
      type: 'image',
      src: '/images/section/hero 3.png',
      title: "Самооценка и уверенность в себе",
      text: "Строим уверенность, повышаем самооценку — шаг за шагом",
      description: "Здесь вы разберётесь, откуда берётся внутренний критик, научитесь замечать свои сильные стороны и поддерживать себя в трудные моменты. Вы получите реальные инструменты, чтобы опираться на себя, а не на чужую оценку.",
    },
    {
      type: 'image',
      src: '/images/section/hero 4.png',
      title: "Адаптация",
      text: "Как не потерять себя в новой реальности",
      description: "Разберётесь, как сохранить психическое равновесие в условиях перемен. Научитесь гибкости мышления, приёму «маленьких шагов» и эмоциональной устойчивости.",
    },
    {
      type: 'image',
      src: '/images/section/hero 5.png',
      title: "Стресс и тревожность",
      text: "Когда всё внутри слишком долго было в напряжении",
      description: "Здесь вы разберётесь, как стресс и тревожность накапливаются, влияют на тело и поведение. Вы научитесь восстанавливаться, регулировать напряжение и возвращать себе энергию — шаг за шагом.",
    },
  ];

  const displayedSlides = showOnlyVideo ? [slides[0]] : slides;

  // Υπολογισμός φωτεινότητας εικόνας
  const getImageLightness = (imageSrc, callback) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      let r, g, b, avg;
      let colorSum = 0;

      for (let i = 0; i < data.length; i += 4) {
        r = data[i];
        g = data[i + 1];
        b = data[i + 2];
        avg = (r + g + b) / 3;
        colorSum += avg;
      }

      const brightness = Math.floor(colorSum / (img.width * img.height));
      console.log('Image Brightness:', brightness);
      callback(brightness < 128);
    };
    img.onerror = () => {
      console.error('Failed to load image for brightness calculation:', imageSrc);
      callback(true);
    };
  };

  useEffect(() => {
    if (displayedSlides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % displayedSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [displayedSlides]);

  // Υπολογισμός φωτεινότητας για την τρέχουσα διαφάνεια
  useEffect(() => {
    const currentSlideData = displayedSlides[currentSlide];
    if (currentSlideData.type === 'image') {
      getImageLightness(currentSlideData.src, setIsDarkBackground);
    } else if (currentSlideData.type === 'video') {
      setIsDarkBackground(true); // Default για βίντεο: σκοτεινό background
    }
  }, [currentSlide, displayedSlides]);

  return (
    <div className="hero-slider">
      <ProfileHeader isDarkBackground={isDarkBackground} />
      {displayedSlides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          {slide.type === 'image' ? (
            <img src={slide.src} alt={`Hero Slide ${index + 1}`} className="slide-image" />
          ) : (
            <video
              className="slide-video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={slide.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="slide-overlay"></div>
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
            {slide.description && <p>{slide.description}</p>}
            <button className="read-more">Читать больше</button>
          </div>
        </div>
      ))}
      {displayedSlides.length > 1 && (
        <div className="pagination">
          {displayedSlides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainHeroSlider;