import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules';
import 'swiper/css'; // Βασικό CSS για το Swiper
import 'swiper/css/navigation'; // CSS για navigation
import 'swiper/css/pagination'; // CSS για pagination

const Slider = ({ slides, options, thumbsSwiper }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, Thumbs]}
      {...options}
      thumbs={{ swiper: thumbsSwiper }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {slide.content}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;