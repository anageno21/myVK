import React from 'react';

function BlogDetailsSection() {
  return (
    <section className="section-blog-details page-blog-details">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="wrap-blog-details">
              <div className="blog-details-content">
                <div className="image-wrap">
                  <img src="/images/blog/blog-details-1.jpg" alt="Blog Post" />
                </div>
                <ul className="meta">
                  <li className="text-2">Oct 17, 2024</li>
                  <li className="text-2">Mental Health</li>
                  <li className="text-2">By Admin</li>
                </ul>
                <h1 className="title">How Cognitive Behavioral Therapy Can Transform Your Life</h1>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <blockquote>
                    <p>
                      “The greatest discovery of my generation is that a human being can alter his life by altering his attitudes of mind.” – William James
                    </p>
                  </blockquote>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <h3>Understanding Cognitive Behavioral Therapy</h3>
                  <p>
                    Cognitive Behavioral Therapy (CBT) is a widely recognized psychological treatment that helps individuals identify and modify negative thought patterns and behaviors. It’s effective for a range of issues including anxiety, depression, and stress.
                  </p>
                  <div className="image-wrap">
                  <img src="blog-image.jpg" alt="Blog post" />
                  </div>
                  <h3>Benefits of CBT</h3>
                  <ul className="list">
                    <li>Improves emotional regulation</li>
                    <li>Reduces symptoms of anxiety and depression</li>
                    <li>Enhances problem-solving skills</li>
                    <li>Promotes healthier thought patterns</li>
                  </ul>
                  <p>
                    At Anageno, our therapists are trained to guide you through CBT, tailoring each session to your unique needs to ensure maximum benefit.
                  </p>
                </div>
                <div className="tags-share">
                  <div className="tags">
                    <h6>Tags:</h6>
                    <ul>
                    <li><button>Mental Health</button></li>
                      <li><a href="#">Therapy</a></li>
                      <li><a href="#">CBT</a></li>
                    </ul>
                  </div>
                  <div className="share">
                    <h6>Share:</h6>
                    <ul className="tf-social">
                      <li>
                        <a href="#"><i className="icon-Facebook"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="icon-Twitter"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="icon-Instagram"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="icon-LinkedIn"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-details-nav">
                  <div className="nav-item prev">
                    <a href="#" className="btn-nav">
                      <i className="icon-ArrowLeft"></i>
                      <span>Previous Post</span>
                    </a>
                    <h6><a href="#">Effective Strategies for Managing Anxiety</a></h6>
                  </div>
                  <div className="nav-item next">
                    <a href="#" className="btn-nav">
                      <span>Next Post</span>
                      <i className="icon-ArrowRight"></i>
                    </a>
                    <h6><a href="#">Building Stronger Relationships Through Therapy</a></h6>
                  </div>
                </div>
                <div className="comments-area">
                  <h4>Comments (3)</h4>
                  <ul className="comment-list">
                    <li className="comment-item">
                      <div className="comment-inner">
                        <div className="avatar">
                          <img src="/images/avatar/avatar-1.jpg" alt="Commenter" />
                        </div>
                        <div className="content">
                          <div className="comment-meta">
                            <h6>Sarah M.</h6>
                            <span className="text-2">Oct 18, 2024</span>
                          </div>
                          <p>
                            Great article! CBT has really helped me manage my stress levels. Thanks for sharing such valuable insights.
                          </p>
                          <a href="#" className="reply-link">Reply</a>
                        </div>
                      </div>
                    </li>
                    <li className="comment-item">
                      <div className="comment-inner">
                        <div className="avatar">
                          <img src="/images/avatar/avatar-2.jpg" alt="Commenter" />
                        </div>
                        <div className="content">
                          <div className="comment-meta">
                            <h6>John R.</h6>
                            <span className="text-2">Oct 19, 2024</span>
                          </div>
                          <p>
                            I appreciate the detailed explanation of CBT. It’s encouraging to know there are effective tools out there.
                          </p>
                          <a href="#" className="reply-link">Reply</a>
                        </div>
                      </div>
                    </li>
                    <li className="comment-item">
                      <div className="comment-inner">
                        <div className="avatar">
                          <img src="/images/avatar/avatar-3.jpg" alt="Commenter" />
                        </div>
                        <div className="content">
                          <div className="comment-meta">
                            <h6>Emily T.</h6>
                            <span className="text-2">Oct 20, 2024</span>
                          </div>
                          <p>
                            This post was very informative. I’m considering therapy now, thanks to this!
                          </p>
                          <a href="#" className="reply-link">Reply</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="comment-form">
                  <h4>Leave a Comment</h4>
                  <form className="form-comment" method="post" id="commentform" action="./contact/comment-process.php">
                    <div className="form-group">
                      <fieldset className="name">
                        <input
                          type="text"
                          name="name"
                          className="tf-input style-1"
                          placeholder="Your Name*"
                          aria-required="true"
                          required
                        />
                      </fieldset>
                      <fieldset className="email">
                        <input
                          type="email"
                          name="email"
                          className="tf-input style-1"
                          placeholder="Your Email*"
                          aria-required="true"
                          required
                        />
                      </fieldset>
                    </div>
                    <fieldset className="message">
                      <textarea
                        id="message"
                        className="tf-input"
                        name="message"
                        rows="5"
                        placeholder="Your Comment*"
                        aria-required="true"
                        required
                      ></textarea>
                    </fieldset>
                    <button className="tf-btn style-default btn-color-secondary pd-40 boder-8" type="submit">
                      <span>Post Comment</span>
                    </button>
                  </form>
                </div>
              </div>
              <div className="blog-details-sidebar">
                <div className="widget widget-search">
                  <h6>Search</h6>
                  <form className="search-form" method="get" action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit"><i className="icon-Search"></i></button>
                  </form>
                </div>
                <div className="widget widget-categories">
                  <h6>Categories</h6>
                  <ul>
                    <li><a href="#">Mental Health</a> (5)</li>
                    <li><a href="#">Anxiety</a> (3)</li>
                    <li><a href="#">Relationships</a> (4)</li>
                    <li><a href="#">Stress Relief</a> (6)</li>
                    <li><a href="#">Self-Care</a> (2)</li>
                    <li><a href="#">Trauma</a> (3)</li>
                  </ul>
                </div>
                <div className="widget widget-recent-posts">
                  <h6>Recent Posts</h6>
                  <ul>
                    <li>
                      <div className="post-item">
                        <div className="image-wrap">
                          <img src="/images/blog/blog-details-list-1.jpg" alt="Recent Post" />
                        </div>
                        <div className="content">
                          <h6><a href="/blog-details.html">How Cognitive Behavioral Therapy Can Transform</a></h6>
                          <span className="text-2">Oct 17, 2024</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="post-item">
                        <div className="image-wrap">
                          <img src="/images/blog/blog-details-list-2.jpg" alt="Recent Post" />
                        </div>
                        <div className="content">
                          <h6><a href="/blog-details.html">Effective Strategies for Managing Anxiety</a></h6>
                          <span className="text-2">Oct 19, 2024</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="post-item">
                        <div className="image-wrap">
                          <img src="/images/blog/blog-details-list-3.jpg" alt="Recent Post" />
                        </div>
                        <div className="content">
                          <h6><a href="/blog-details.html">Building Stronger Relationships Through Therapy</a></h6>
                          <span className="text-2">Oct 22, 2024</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-tags">
                  <h6>Popular Tags</h6>
                  <ul>
                    <li><a href="#">Mental Health</a></li>
                    <li><a href="#">Therapy</a></li>
                    <li><a href="#">CBT</a></li>
                    <li><a href="#">Anxiety</a></li>
                    <li><a href="#">Self-Care</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetailsSection;