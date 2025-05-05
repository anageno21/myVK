import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import './BlogLibrary.css'; // Χρησιμοποιούμε το BlogLibrary.css για συνέπεια

function TherapistLibrary() {
  console.log("TherapistLibrary component rendered");

  // Λίστα με όλους τους ψυχολόγους/θεραπευτές
  const allTherapists = [
    {
      name: "Viktoriia Kotenko",
      category: "Сертифицированный психотерапевт, эксперт по управлению стрессом и эмоциональной устойчивости",
      image: "/images/councillors/VK/Viktoriia Kotenko.jpg",
      alt: "Viktoriia Kotenko",
      link: "/victoria-kotenko",
    },
    {
      name: "Anna Ivanova",
      category: "Терапия пар",
      image: "https://via.placeholder.com/300x200?text=Anna+Ivanova",
      alt: "Anna Ivanova",
      link: "/therapist/anna-ivanova",
    },
    {
      name: "Elena Petrova",
      category: "Семейная терапия",
      image: "https://via.placeholder.com/300x200?text=Elena+Petrova",
      alt: "Elena Petrova",
      link: "/therapist/elena-petrova",
    },
  ];

  // State για το φιλτράρισμα ανά κατηγορία και θεραπευτή
  const [selectedCategory, setSelectedCategory] = useState('Все услуги');
  const [selectedAuthor, setSelectedAuthor] = useState('Все терапевты');

  // Κατηγορίες για το φιλτράρισμα (αντιστοιχούν στις υπηρεσίες από το footer)
  const categories = [
    'Все услуги',
    'Сертифицированный психотерапевт, эксперт по управлению стрессом и эмоциональной устойчивости',
    'Семейная терапия',
    'Терапия пар',
    'Групповая терапия',
  ];

  // Θεραπευτές για το φιλτράρισμα
  const authors = [
    'Все терапевты',
    'Viktoriia Kotenko',
    'Anna Ivanova',
    'Elena Petrova',
  ];

  // Φιλτράρισμα των θεραπευτών με βάση την επιλεγμένη κατηγορία και θεραπευτή
  let filteredTherapists = allTherapists;

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
                        <Link to={therapist.link} className="post-title-link">
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
                        {category} ({category === 'Все услуги' ? allTherapists.length : allTherapists.filter(therapist => therapist.category === category).length})
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
                        {author} ({author === 'Все терапевты' ? allTherapists.length : allTherapists.filter(therapist => therapist.name === author).length})
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar-widget sidebar-recent-posts">
                  <h3>Последние терапевты</h3>
                  <ul>
                    <li>
                      <p>Viktoriia Kotenko</p>
                    </li>
                    <li>
                      <p>Anna Ivanova</p>
                    </li>
                    <li>
                      <p>Elena Petrova</p>
                    </li>
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