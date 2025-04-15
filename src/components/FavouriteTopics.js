// src/components/FavouriteTopics.js
import React from 'react';
import { Link } from 'react-router-dom';
import './FavouriteTopics.css';

const FavouriteTopics = () => {
  return (
    <section className="favourite-topics-section">
      <div className="container">
        <div className="section-header">
          <span className="sub-title">Favourite Topics</span>
          <h2>Anageno Blog & Resources</h2> {/* Αλλαγή από Healingy σε Anageno */}
          <p>Your go-to source for mental health insights, tools, and advice.</p>
        </div>
        <div className="topics-grid">
          <div className="topic-card">
            <div className="card-image">
              <span className="date">12 SEP</span>
              <img src="/images/blog/blog1.jpg" alt="Mindfulness for Better Mental Health" />
            </div>
            <div className="card-content">
              <span className="category">Therapy</span>
              <h3>Mindfulness for Better Mental Health: Simple Practices for Daily Peace</h3>
              <p>Learn how mindfulness techniques can reduce stress and improve your mental well-being daily.</p>
              <Link to="/blog/mindfulness" className="read-more">Read More <span className="arrow">→</span></Link>
            </div>
          </div>
          <div className="topic-card">
            <div className="card-image">
              <span className="date">12 SEP</span>
              <img src="/images/blog/blog2.jpg" alt="Self-Care for Emotional Well-being" />
            </div>
            <div className="card-content">
              <span className="category">Wellness</span>
              <h3>Self-Care for Emotional Well-being: Key Steps to Feeling Balanced</h3>
              <p>Explore how CBT techniques help manage stress and build resilience for a calmer life.</p>
              <Link to="/blog/self-care" className="read-more">Read More <span className="arrow">→</span></Link>
            </div>
          </div>
          <div className="topic-card">
            <div className="card-image">
              <span className="date">14 SEP</span>
              <img src="/images/blog/blog3.jpg" alt="How Therapy Helps with Trauma" />
            </div>
            <div className="card-content">
              <span className="category">Wellness</span>
              <h3>How Therapy Helps with Trauma: Pathways to Long-Term Healing</h3>
              <p>Find out how therapy can guide you through trauma recovery and foster long-term healing.</p>
              <Link to="/blog/trauma" className="read-more">Read More <span className="arrow">→</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavouriteTopics;