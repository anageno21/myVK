// src/components/BlogDetailsSection.js
import React from 'react';

function BlogDetailsSection() {
  // Function to handle social sharing (example)
  const handleShare = (platform) => {
    // Add logic to share on social media (e.g., open a share window)
    console.log(`Sharing on ${platform}`);
    // Example: Open a share window for Twitter
    if (platform === 'Twitter') {
      window.open('https://twitter.com/intent/tweet?text=Check out this article on Cognitive Behavioral Therapy!&url=https://vk-anageno.netlify.app/blog-details.html', '_blank');
    }
    // Add similar logic for other platforms
  };

  // Function to handle comment reply (example)
  const handleReply = (commentId) => {
    console.log(`Replying to comment ${commentId}`);
  };

  return (
    <section className="section-blog-details page-blog-details">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="wrap-blog-details">
              <div className="blog-details-content">
                <div className="image-wrap">
                  <img src="/images/blog/blog-details-1.jpg" alt="Cognitive Behavioral Therapy Illustration" />
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
                    <img src="/images/blog/blog-details-2.jpg" alt="Cognitive Behavioral Therapy Benefits" />
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
                      <li><button className="tag-button">Mental Health</button></li>
                      <li><button className="tag-button">Therapy</button></li>
                      <li><button className="tag-button">CBT</button></li>
                    </ul>
                  </div>
                  <div className="share">
                    <h6>Share:</h6>
                    <ul className="tf-social">
                      <li>
                        <button onClick={() => handleShare('Facebook')} className="share-button">
                          <i className="icon-Facebook"></i>
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleShare('Twitter')} className="share-button">
                          <i className="icon-Twitter"></i>
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleShare('Instagram')} className="share-button">
                          <i className="icon-Instagram"></i>
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleShare('LinkedIn')} className="share-button">
                          <i className="icon-LinkedIn"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-details-nav">
                  <div className="nav-item prev">
                    <button className="btn-nav">
                      <i className="icon-ArrowLeft"></i>
                      <span>Previous Post</span>
                    </button>
                    <h6><button className="nav-title">Effective Strategies for Managing Anxiety</button></h6>
                  </div>
                  <div className="nav-item next">
                    <button className="btn-nav">
                      <span>Next Post</span>
                      <i className="icon-ArrowRight"></i>
                    </button>
                    <h6><button className="nav-title">Building Stronger Relationships Through Therapy</button></h6>
                  </div>
                </div>
                <div className="comments-area">
                  <h4>Comments (3)</h4>
                  <ul className="comment-list">
                    <li className="comment-item">
                      <div className="comment-inner">
                        <div className="avatar">
                          <img src="/images/avatar/avatar-1.jpg" alt="Sarah M." />
                        </div>
                        <div className="content">
                          <div className="comment-meta">
                            <h6>Sarah M.</h6>
                            <span className="text-2">Oct 18, 2024</span>
                          </div>
                          <p>
                            Great article! CBT has really helped me manage my stress levels. Thanks for sharing such valuable insights.
                          </p>
                          <button onClick={() => handleReply(1)} className="reply-link">Reply</button>
                        </div>
                      </div>
                    </li>
                    <li className="comment-item">
                      <div className="comment-inner">
                        <div className="avatar">
                          <img src="/images/avatar/avatar-2.jpg" alt="John R." />
                        </div>
                        <div className="content">
                          <div className="comment-meta">
                            <h6>John R.</h6>
                            <span className="text-2">Oct 19, 2024</span>
                          </div>
                          <p>
                            I appreciate the detailed explanation of CBT. It’s encouraging to know there are effective tools out there.
                          </p>
                          <button onClick={() => handleReply(2)} className="reply-link">Reply</button>
                        </div>
                      </div>
                    </li>
                    <li className="comment-item">
                      <div className="comment-inner">
                        <div className="avatar">
                          <img src="/images/avatar/avatar-3.jpg" alt="Emily T." />
                        </div>
                        <div className="content">
                          <div className="comment-meta">
                            <h6>Emily T.</h6>
                            <span className="text-2">Oct 20, 2024</span>
                          </div>
                          <p>
                            This post was very informative. I’m considering therapy now, thanks to this!
                          </p>
                          <button onClick={() => handleReply(3)} className="reply-link">Reply</button>
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
                    <li><button className="category-button">Mental Health (5)</button></li>
                    <li><button className="category-button">Anxiety (3)</button></li>
                    <li><button className="category-button">Relationships (4)</button></li>
                    <li><button className="category-button">Stress Relief (6)</button></li>
                    <li><button className="category-button">Self-Care (2)</button></li>
                    <li><button className="category-button">Trauma (3)</button></li>
                  </ul>
                </div>
                <div className="widget widget-recent-posts">
                  <h6>Recent Posts</h6>
                  <ul>
                    <li>
                      <div className="post-item">
                        <div className="image-wrap">
                          <img src="/images/blog/blog-details-list-1.jpg" alt="Cognitive Behavioral Therapy Article" />
                        </div>
                        <div className="content">
                          <h6><button className="post-title">How Cognitive Behavioral Therapy Can Transform</button></h6>
                          <span className="text-2">Oct 17, 2024</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="post-item">
                        <div className="image-wrap">
                          <img src="/images/blog/blog-details-list-2.jpg" alt="Managing Anxiety Article" />
                        </div>
                        <div className="content">
                          <h6><button className="post-title">Effective Strategies for Managing Anxiety</button></h6>
                          <span className="text-2">Oct 19, 2024</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="post-item">
                        <div className="image-wrap">
                          <img src="/images/blog/blog-details-list-3.jpg" alt="Relationships Through Therapy Article" />
                        </div>
                        <div className="content">
                          <h6><button className="post-title">Building Stronger Relationships Through Therapy</button></h6>
                          <span className="text-2">Oct 22, 2024</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-tags">
                  <h6>Popular Tags</h6>
                  <ul>
                    <li><button className="tag-button">Mental Health</button></li>
                    <li><button className="tag-button">Therapy</button></li>
                    <li><button className="tag-button">CBT</button></li>
                    <li><button className="tag-button">Anxiety</button></li>
                    <li><button className="tag-button">Self-Care</button></li>
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