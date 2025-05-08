// src/pages/TherapistLibrary.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import therapists from '../data/therapistsData'; // Εισαγωγή των δεδομένων
import './BlogLibrary.css';

function TherapistLibrary() {
  console.log("TherapistLibrary component rendered");

  // State για το φιλτράρισμα ανά κατηγορία και θεραπευτή
  const [selectedCategory, setSelectedCategory] = useState('Все услуги');
  const [selectedAuthor, setSelectedAuthor] = useState('Все терапевты');

  // Κατηγορίες για το φιλτράρισμα (τραβιούνται από τα δεδομένα)
  const categories = ['Все услуги', ...new Set(therapists.map(therapist => therapist.category))];

  // Θεραπευτές για το φιλτράρισμα (τραβιούνται από τα δεδομένα)
  const authors = ['Все терапевты', ...therapists.map(therapist => therapist.name)];

  // Φιλτράρισμα των θεραπευτών με βάση την επιλεγμένη κατηγορία και θεραπευτή
  let filteredTherapists = therapists;

  if (selectedCategory !== 'Все услуги') {
    filteredTherapists = filteredTherapists.filter(therapist => therapist.category === selectedCategory);
  }

  if (selectedAuthor !== 'Все терапевты') {
    filteredTherapists = filteredTherapists.filter(therapist => therapist.name === selectedAuthor);
  }

  return (
    <div className="blog-library-page">
      <ProfileHeader />
      <main className="blog-library-content">
        <div className="container">
          <div className="blog-header">
            <h1>Наши терапевты</h1>
            <h2>Познакомьтесь с нашими опытными психологами и терапевтами, которые здесь, чтобы помочь вам.</h2>
          </div>
          <div className="blog-body">
            <div className="blog-content">
              <div className="blog-posts">
                {filteredTherapists.map((therapist, index) => (
                  <div className="blog-post" key={index}>
                    <div className="post-image">
                      <img src={therapist.image} alt={therapist.alt} />
                    </div>
                    <div className="post-content">
                      <h3 className="post-title">
                        <Link to={therapist.profileLink} className="post-title-link">
                          {therapist.name}
                        </Link>
                      </h3>
                      <p className="therapist-category">{therapist.category}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="blog-sidebar">
                <div className="sidebar-widget sidebar-search">
                  <h3>Поиск</h3>
                  <div className="search-form">
                    <input type="text" placeholder="Искать терапевтов..." />
                    <button type="button"><i className="las la-search"></i></button>
                  </div>
                </div>
                <div className="sidebar-widget sidebar-categories">
                  <h3>Услуги</h3>
                  <ul>
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        onClick={() => setSelectedCategory(category)}
                        style={{
                          cursor: 'pointer',
                          fontWeight: selectedCategory === category ? 'bold' : 'normal',
                          color: selectedCategory === category ? '#21aabc' : '#173A37',
                        }}
                      >
                        {category} ({category === 'Все услуги' ? therapists.length : therapists.filter(therapist => therapist.category === category).length})
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar-widget sidebar-authors">
                  <h3>Терапевты</h3>
                  <ul>
                    {authors.map((author, index) => (
                      <li
                        key={index}
                        onClick={() => setSelectedAuthor(author)}
                        style={{
                          cursor: 'pointer',
                          fontWeight: selectedAuthor === author ? 'bold' : 'normal',
                          color: selectedAuthor === author ? '#21aabc' : '#173A37',
                        }}
                      >
                        {author} ({author === 'Все терапевты' ? therapists.length : therapists.filter(therapist => therapist.name === author).length})
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar-widget sidebar-recent-posts">
                  <h3>Последние терапевты</h3>
                  <ul>
                    {therapists.slice(0, 3).map((therapist, index) => ( // Εμφανίζουμε τους πρώτους 3 ψυχολόγους
                      <li key={index}>
                        <p>{therapist.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="blog-pagination">
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <button className="page-btn next"><i className="las la-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TherapistLibrary;