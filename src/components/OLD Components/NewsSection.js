// src/components/NewsSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const NewsSection = () => {
  return (
    <section className="section-news tf-spacing-1 style-pagination">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <p className="text-2 sub wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                <Link to="#">Favourite Topics</Link>
              </p>
              <h3 className="wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                Anageno Blog & Resources
              </h3>
              <p className="description text-1 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                Your go-to source for mental health insights, tools, and advice.
              </p>
            </div>
            <Swiper
              className="swiper-container slider-layout-3"
              modules={[Pagination]}
              pagination={{
                el: '.pagination-layout',
                clickable: true,
              }}
              loop={true}
              slidesPerView={3}
              spaceBetween={30}
            >
              <SwiperSlide className="swiper-slide">
                <div className="article-blog-item hover-img wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                  <div className="image-wrap">
                    <Link to="/blog-details">
                      <img
                        className="lazyload"
                        data-src="/images/blog/blog-1.jpg"
                        src="/images/blog/blog-1.jpg"
                        alt=""
                      />
                    </Link>
                    <div className="date-time">
                      <div className="content">
                        <p className="entry-day">12</p>
                        <p className="entry-month fw-book">SEP</p>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <p className="sub"><Link to="#">Therapy</Link></p>
                    <h5 className="title">
                      <Link to="/blog-details">
                        Mindfulness For Better Mental Health: Simple Practices for Daily Peace
                      </Link>
                    </h5>
                    <p>Learn how mindfulness techniques can reduce stress and improve your mental well-being daily.</p>
                  </div>
                  <Link to="/blog-details" className="tf-btn-link">
                    <span data-text="Read More">Read More</span>
                    <i className="icon-ArrowRight"></i>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="article-blog-item hover-img wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.1s">
                  <div className="image-wrap">
                    <Link to="/blog-details">
                      <img
                        className="lazyload"
                        data-src="/images/blog/blog-3.jpg"
                        src="/images/blog/blog-3.jpg"
                        alt=""
                      />
                    </Link>
                    <div className="date-time">
                      <div className="content">
                        <p className="entry-day">12</p>
                        <p className="entry-month fw-book">SEP</p>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <p className="sub"><Link to="#">Wellness</Link></p>
                    <h5 className="title">
                      <Link to="/blog-details">
                        Self-Care for Emotional Well-being: Key Steps to Feeling Balanced
                      </Link>
                    </h5>
                    <p>Explore how CBT techniques help manage stress and build resilience for a calmer life.</p>
                  </div>
                  <Link to="/blog-details" className="tf-btn-link">
                    <span data-text="Read More">Read More</span>
                    <i className="icon-ArrowRight"></i>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="article-blog-item hover-img wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.2s">
                  <div className="image-wrap">
                    <Link to="/blog-details">
                      <img
                        className="lazyload"
                        data-src="/images/blog/blog-4.jpg"
                        src="/images/blog/blog-4.jpg"
                        alt=""
                      />
                    </Link>
                    <div className="date-time">
                      <div className="content">
                        <p className="entry-day">14</p>
                        <p className="entry-month fw-book">SEP</p>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <p className="sub"><Link to="#">Wellness</Link></p>
                    <h5 className="title">
                      <Link to="/blog-details">
                        How Therapy Helps with Trauma: Pathways to Long-Term Healing
                      </Link>
                    </h5>
                    <p>Find out how therapy can guide you through trauma recovery and foster long-term healing.</p>
                  </div>
                  <Link to="/blog-details" className="tf-btn-link">
                    <span data-text="Read More">Read More</span>
                    <i className="icon-ArrowRight"></i>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination pagination-layout"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;