// src/components/FAQ.js
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Η δεύτερη ερώτηση είναι ανοιχτή αρχικά

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <span className="sub-title">Help Center</span>
          <h2>Questions And Answers</h2>
          <p>Find answers to the most commonly asked questions about our services.</p>
        </div>
        <div className="faq-list">
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(0)}>
              <h3>What types of therapy do you offer at Anageno?</h3>
              <span className="toggle-icon">{activeIndex === 0 ? '−' : '+'}</span>
            </div>
            {activeIndex === 0 && (
              <div className="faq-answer">
                <p>We offer a range of therapies including individual therapy, family therapy, and specialized programs for stress, anxiety, and trauma.</p>
              </div>
            )}
          </div>
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(1)}>
              <h3>How do I know if therapy is right for me?</h3>
              <span className="toggle-icon">{activeIndex === 1 ? '−' : '+'}</span>
            </div>
            {activeIndex === 1 && (
              <div className="faq-answer">
                <p>Therapy is useful for managing stress, anxiety, or life challenges. It offers support and helps with personal growth. A consultation can help you decide if it’s the right fit.</p>
              </div>
            )}
          </div>
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(2)}>
              <h3>What should I expect during my first therapy session?</h3>
              <span className="toggle-icon">{activeIndex === 2 ? '−' : '+'}</span>
            </div>
            {activeIndex === 2 && (
              <div className="faq-answer">
                <p>Your first session will involve discussing your goals and challenges with your therapist to create a personalized plan for your healing journey.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;