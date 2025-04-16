import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

function TestimonialsSection() {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  return (
    <section className="section-testimonials bg-1 page-home-1 tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <p className="text-2 sub wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                Client Testimonials
              </p>
              <h3 className="wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                What Our Clients Are Saying
              </h3>
              <p className="description text-1 lh-30 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                Hear firsthand accounts of healing and positive change.
              </p>
            </div>
            <div className="content-inner">
              <div className="wrap-testimonials">
                <Swiper
                  modules={[Thumbs]}
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={3}
                  freeMode={true}
                  watchSlidesProgress={true}
                  className="slider-testimonial-thumbs"
                >
                  <SwiperSlide>
                    <div className="image-wrap effec-overlay">
                      <img
                        className="lazyload"
                        data-src="/images/section/testimonials-1.jpg"
                        src="/images/section/testimonials-1.jpg"
                        alt="Client Testimonial"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="image-wrap effec-overlay">
                      <img
                        className="lazyload"
                        data-src="/images/section/testimonials-1.jpg"
                        src="/images/section/testimonials-1.jpg"
                        alt="Client Testimonial"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="image-wrap effec-overlay">
                      <img
                        className="lazyload"
                        data-src="/images/section/testimonials-1.jpg"
                        src="/images/section/testimonials-1.jpg"
                        alt="Client Testimonial"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  modules={[Navigation, Pagination, Thumbs]}
                  thumbs={{ swiper: thumbsSwiper }}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  className="slider-testimonial style-pagination"
                >
                  <SwiperSlide>
                    <div className="wg-testimonial">
                      <div className="rating">
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                      </div>
                      <div className="content">
                        <p className="text text-4 fw-5 mb-16">
                          "We Sincerely Appreciate The Outstanding Support And Guidance Your Team Provided. Special Thanks To Susan And Vaibhav For Their Dedication"
                        </p>
                        <div className="bot">
                          <div className="info">
                            <h6 className="title">
                              <a href="/therapists-details.html">John Smith</a>
                            </h6>
                            <p>CEO THEMES FLAT</p>
                          </div>
                          <a href="/therapists-details.html" className="tf-btn-link">
                            <span data-text="Read More Stories">Read More Stories</span>
                            <i className="icon-ArrowRight"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="wg-testimonial">
                      <div className="rating">
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                      </div>
                      <div className="content">
                        <p className="text text-4 fw-5 mb-16">
                          "We Sincerely Appreciate The Outstanding Support And Guidance Your Team Provided. Special Thanks To Susan And Vaibhav For Their Dedication"
                        </p>
                        <div className="bot">
                          <div className="info">
                            <h6 className="title">
                              <a href="/therapists-details.html">John Smith</a>
                            </h6>
                            <p>CEO THEMES FLAT</p>
                          </div>
                          <a href="/therapists-details.html" className="tf-btn-link">
                            <span data-text="Read More Stories">Read More Stories</span>
                            <i className="icon-ArrowRight"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="wg-testimonial">
                      <div className="rating">
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                      </div>
                      <div className="content">
                        <p className="text text-4 fw-5 mb-16">
                          "We sincerely appreciate the outstanding support and guidance your team provided. Special thanks to Susan and Vaibhav for their dedication"
                        </p>
                        <div className="bot">
                          <div className="info">
                            <h6 className="title">
                              <a href="#">John Smith</a>
                            </h6>
                            <p>CEO THEMES FLAT</p>
                          </div>
                          <a href="/therapists-details.html" className="tf-btn-link">
                            <span data-text="Read More Stories">Read More Stories</span>
                            <i className="icon-ArrowRight"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="wrap-counter">
                <div className="counter-item">
                  <div className="count">
                    <div className="counter-number">
                      <div className="odometer style-1-1">0</div>
                      <span className="sub">Years</span>
                    </div>
                    <p>Years experiences</p>
                  </div>
                </div>
                <div className="counter-item">
                  <div className="count">
                    <div className="counter-number">
                      <div className="odometer style-1-2">0</div>
                      <span className="sub">k</span>
                    </div>
                    <p>Happy customers</p>
                  </div>
                </div>
                <div className="counter-item">
                  <div className="count">
                    <div className="counter-number">
                      <div className="odometer style-1-3">10</div>
                    </div>
                    <p>Project completed</p>
                  </div>
                </div>
                <div className="counter-item">
                  <div className="count">
                    <div className="counter-number">
                      <div className="odometer style-1-4">0</div>
                    </div>
                    <p>Awards achievement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;