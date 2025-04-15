import React from 'react';

function NewsSectionHome() {
  return (
    <section className="section-news page-home-4 tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <p className="text-2 sub wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                <a href="#">Favourite Topics</a>
              </p>
              <h3 className="wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                Anageno Blog & Resources
              </h3>
              <p className="description text-1 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                Your go-to source for mental health insights, tools, and advice.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="article-blog-item hover-img wow fadeInLeft" data-wow-duration="1000" data-wow-delay="0s">
              <div className="image-wrap">
                <a href="/blog-details.html">
                  <img
                    className="lazyload"
                    data-src="/images/section/section-news-1.jpg"
                    src="/images/section/section-news-1.jpg"
                    alt="The Role Of Family Therapy Strengthening Relationships & Communication"
                  />
                </a>
                <div className="date-time">
                  <div className="content">
                    <p className="entry-day">12</p>
                    <p className="entry-month fw-book">SEP</p>
                  </div>
                </div>
              </div>
              <div className="content">
                <p className="sub"><a href="#">Therapy</a></p>
                <h4 className="title">
                  <a href="/blog-details.html">
                    The Role Of Family Therapy Strengthening Relationships & Communication
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="list-post">
              <div className="box-listings hover-img wow fadeInRight" data-wow-duration="1000" data-wow-delay="0s">
                <div className="image-wrap">
                  <a href="/blog-details.html">
                    <img src="/images/blog/blog-details-list-1.jpg" alt="How Cognitive Behavioral Therapy Can Transform Your Life" />
                  </a>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li className="text-2">October 17, 2024</li>
                    <li className="text-2"><a href="#">Therapy</a></li>
                  </ul>
                  <div className="title h5 fw-5">
                    <a href="/blog-details.html" className="line-clamp-2">
                      How Cognitive Behavioral Therapy Can Transform Your Life
                    </a>
                  </div>
                </div>
              </div>
              <div className="box-listings hover-img wow fadeInRight" data-wow-duration="1000" data-wow-delay="0s">
                <div className="image-wrap">
                  <a href="/blog-details.html">
                    <img src="/images/blog/blog-details-list-2.jpg" alt="Effective Strategies for Managing Anxiety and Building Resilience" />
                  </a>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>October 19, 2024</li>
                    <li><a href="/blog-details.html">Wellness</a></li>
                  </ul>
                  <div className="title h5 fw-5">
                    <a href="#" className="line-clamp-2">
                      Effective Strategies for Managing Anxiety and Building Resilience
                    </a>
                  </div>
                </div>
              </div>
              <div className="box-listings hover-img wow fadeInRight" data-wow-duration="1000" data-wow-delay="0s">
                <div className="image-wrap">
                  <a href="/blog-details.html">
                    <img src="/images/blog/blog-details-list-3.jpg" alt="Understanding Trauma: How Therapy Can Help You Heal" />
                  </a>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>October 22, 2024</li>
                    <li><a href="#">Therapy</a></li>
                  </ul>
                  <div className="title h5 fw-5">
                    <a href="/blog-details.html" className="line-clamp-2">
                      Understanding Trauma: How Therapy Can Help You Heal
                    </a>
                  </div>
                </div>
              </div>
              <div className="box-listings hover-img wow fadeInRight" data-wow-duration="1000" data-wow-delay="0s">
                <div className="image-wrap">
                  <a href="/blog-details.html">
                    <img src="/images/blog/blog-details-list-4.jpg" alt="Techniques for Everyday Stress Relief" />
                  </a>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>October 26, 2024</li>
                    <li><a href="#">Wellness</a></li>
                  </ul>
                  <div className="title h5 fw-5">
                    <a href="/blog-details.html" className="line-clamp-2">
                      Techniques for Everyday Stress Relief
                    </a>
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

export default NewsSectionHome;