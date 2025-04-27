import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import './TherapistLibrary.css';

function TherapistLibrary() {
  console.log("TherapistLibrary component rendered");

  // Λίστα με όλους τους ψυχολόγους/θεραπευτές
  const allTherapists = [
    {
      name: "Viktoriia Kotenko",
      image: "/images/councillors/VK/Viktoriia Kotenko.jpg", // Διόρθωση της διαδρομής
      alt: "Viktoriia Kotenko",
      category: "Individual Counseling",
      title: "Viktoriia Kotenko",
      excerpt: "Ειδική στην ατομική συμβουλευτική, με εμπειρία σε θέματα σχέσεων και προσωπικής ανάπτυξης.",
      link: "/victoria-kotenko",
    },
    {
      name: "Anna Ivanova",
      image: "https://via.placeholder.com/300x200?text=Anna+Ivanova",
      alt: "Anna Ivanova",
      category: "Couples Therapy",
      title: "Anna Ivanova",
      excerpt: "Εξειδικεύεται στη θεραπεία ζευγαριών, βοηθώντας στην αντιμετώπιση άγχους και κατάθλιψης.",
      link: "/therapist/anna-ivanova",
    },
    {
      name: "Elena Petrova",
      image: "https://via.placeholder.com/300x200?text=Elena+Petrova",
      alt: "Elena Petrova",
      category: "Family Therapy",
      title: "Elena Petrova",
      excerpt: "Ειδική στην οικογενειακή θεραπεία, υποστηρίζει οικογένειες για καλύτερη επικοινωνία και επίλυση συγκρούσεων.",
      link: "/therapist/elena-petrova",
    },
  ];

  // State για το φιλτράρισμα ανά κατηγορία και author
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [selectedAuthor, setSelectedAuthor] = useState('All Therapists');

  // Κατηγορίες για το φιλτράρισμα (αντιστοιχούν στις υπηρεσίες από το footer)
  const categories = [
    'All Services',
    'Individual Counseling',
    'Family Therapy',
    'Couples Therapy',
    'Group Therapy',
  ];

  // Authors για το φιλτράρισμα
  const authors = [
    'All Therapists',
    'Viktoriia Kotenko',
    'Anna Ivanova',
    'Elena Petrova',
  ];

  // Φιλτράρισμα των θεραπευτών με βάση την επιλεγμένη κατηγορία και author
  let filteredTherapists = allTherapists;

  if (selectedCategory !== 'All Services') {
    filteredTherapists = filteredTherapists.filter(therapist => therapist.category === selectedCategory);
  }

  if (selectedAuthor !== 'All Therapists') {
    filteredTherapists = filteredTherapists.filter(therapist => therapist.name === selectedAuthor);
  }

  return (
    <div className="therapist-library-page">
      <ProfileHeader />
      <main className="therapist-library-content">
        <div className="container">
          <div className="therapist-library-header">
            <h1>Our Therapists</h1>
            <h2>Γνωρίστε τους έμπειρους ψυχολόγους και θεραπευτές μας που είναι εδώ για να σας βοηθήσουν.</h2>
          </div>
          <div className="therapist-library-body">
            <div className="therapist-library-content-section">
              <div className="therapist-library-posts">
                {filteredTherapists.map((therapist, index) => (
                  <div className="therapist-library-post" key={index}>
                    <div className="therapist-library-post-image">
                      <img src={therapist.image} alt={therapist.alt} />
                    </div>
                    <div className="therapist-library-post-content">
                      <div className="therapist-library-post-meta">
                        <span className="therapist-library-category">{therapist.category}</span>
                      </div>
                      <span style={{ display: 'block', fontSize: '14px', color: 'var(--primary-color)', fontFamily: "'Playfair Display', serif", marginBottom: '10px' }}>
                        {therapist.name}
                      </span>
                      <h3 className="therapist-library-post-title">
                        <Link to={therapist.link} className="therapist-library-post-title-link">
                          {therapist.title}
                        </Link>
                      </h3>
                      <p className="therapist-library-post-excerpt">{therapist.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="therapist-library-sidebar">
                <div className="therapist-library-sidebar-widget therapist-library-sidebar-search">
                  <h3>Поиск</h3>
                  <div className="therapist-library-search-form">
                    <input type="text" placeholder="Search therapists..." />
                    <button type="button"><i className="las la-search"></i></button>
                  </div>
                </div>
                <div className="therapist-library-sidebar-widget therapist-library-sidebar-categories">
                  <h3>Services</h3>
                  <ul>
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        onClick={() => setSelectedCategory(category)}
                        style={{
                          cursor: 'pointer',
                          fontWeight: selectedCategory === category ? 'bold' : 'normal',
                          color: selectedCategory === category ? 'var(--accent-color)' : 'var(--primary-color)',
                        }}
                      >
                        {category} ({category === 'All Services' ? allTherapists.length : allTherapists.filter(therapist => therapist.category === category).length})
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="therapist-library-sidebar-widget therapist-library-sidebar-authors">
                  <h3>Therapists</h3>
                  <ul>
                    {authors.map((author, index) => (
                      <li
                        key={index}
                        onClick={() => setSelectedAuthor(author)}
                        style={{
                          cursor: 'pointer',
                          fontWeight: selectedAuthor === author ? 'bold' : 'normal',
                          color: selectedAuthor === author ? 'var(--accent-color)' : 'var(--primary-color)',
                        }}
                      >
                        {author} ({author === 'All Therapists' ? allTherapists.length : allTherapists.filter(therapist => therapist.name === author).length})
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="therapist-library-sidebar-widget therapist-library-sidebar-recent-posts">
                  <h3>Πρόσφατοι Θεραπευτές</h3>
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
            <div className="therapist-library-pagination">
              <button className="therapist-library-page-btn active">1</button>
              <button className="therapist-library-page-btn">2</button>
              <button className="therapist-library-page-btn">3</button>
              <button className="therapist-library-page-btn next"><i className="las la-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TherapistLibrary;