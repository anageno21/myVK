// src/pages/BlogLibrary.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import blogPosts from '../data/blogPostsData'; // Εισαγωγή των δεδομένων των blog posts
import therapists from '../data/therapistsData'; // Εισαγωγή των δεδομένων των ψυχολόγων
import './BlogLibrary.css';

function BlogLibrary() {
  console.log("BlogLibrary component rendered");

  // State για το φιλτράρισμα ανά κατηγορία και author
  const [selectedCategory, setSelectedCategory] = useState('Все категории');
  const [selectedAuthor, setSelectedAuthor] = useState('Все авторы');
  // State για την τρέχουσα σελίδα
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8; // 8 blog posts ανά σελίδα

  // Κατηγορίες για το φιλτράρισμα (τραβιούνται από τα δεδομένα)
  const categories = ['Все категории', ...new Set(blogPosts.map(post => post.category))];

  // Συγγραφείς για το φιλτράρισμα (τραβιούνται από τα δεδομένα)
  const authors = ['Все авторы', ...new Set(blogPosts.map(post => {
    const author = therapists.find(therapist => therapist.id === post.authorId);
    return author ? author.name : 'Unknown';
  }))];

  // Φιλτράρισμα των blog posts με βάση την επιλεγμένη κατηγορία και author
  let filteredPosts = blogPosts.map(post => {
    const author = therapists.find(therapist => therapist.id === post.authorId);
    return {
      ...post,
      author: author ? author.name : 'Unknown', // Αντικατάσταση του hardcoded author με το όνομα από το therapistsData.js
    };
  });

  if (selectedCategory !== 'Все категории') {
    filteredPosts = filteredPosts.filter(post => post.category === selectedCategory);
  }

  if (selectedAuthor !== 'Все авторы') {
    filteredPosts = filteredPosts.filter(post => post.author === selectedAuthor);
  }

  // Υπολογισμός του συνολικού αριθμού σελίδων
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Υπολογισμός των posts που θα εμφανίζονται στην τρέχουσα σελίδα
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Λειτουργίες για την πλοήγηση
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Επαναφορά του scroll στην κορυφή
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="blog-library-page">
      <ProfileHeader />
      <main className="blog-library-content">
        <div className="container">
          <div className="blog-header">
            <h1>Психология на каждый день</h1>
            <h2>Откройте для себя идеи, советы и стратегии, которые помогут поддерживать ваше психическое здоровье и личностный рост.</h2>
          </div>
          <div className="blog-body">
            <div className="blog-content">
              <div className="blog-posts">
                {currentPosts.map((post, index) => (
                  <div className="blog-post" key={index}>
                    <div className="post-image">
                      <img src={post.image} alt={post.alt} />
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span className="date">{post.date}</span>
                        <span className="category">{post.category}</span>
                      </div>
                      <span style={{ display: 'block', fontSize: '14px', color: '#21aabc', fontFamily: "'Playfair Display', serif", marginBottom: '10px' }}>
                        {post.author}
                      </span>
                      <h3 className="post-title">
                        <Link to={post.link} className="post-title-link">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="post-excerpt">{post.excerpt || post.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="blog-sidebar">
                <div className="sidebar-widget sidebar-search">
                  <h3>Поиск</h3>
                  <div className="search-form">
                    <input type="text" placeholder="Искать среди статей..." />
                    <button type="button"><i className="las la-search"></i></button>
                  </div>
                </div>
                <div className="sidebar-widget sidebar-categories">
                  <h3>Категории</h3>
                  <ul>
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        onClick={() => { setSelectedCategory(category); setCurrentPage(1); }}
                        style={{
                          cursor: 'pointer',
                          fontWeight: selectedCategory === category ? 'bold' : 'normal',
                          color: selectedCategory === category ? '#21aabc' : '#173A37',
                        }}
                      >
                        {category} ({category === 'Все категории' ? blogPosts.length : blogPosts.filter(post => post.category === category).length})
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar-widget sidebar-authors">
                  <h3>Авторы</h3>
                  <ul>
                    {authors.map((author, index) => (
                      <li
                        key={index}
                        onClick={() => { setSelectedAuthor(author); setCurrentPage(1); }}
                        style={{
                          cursor: 'pointer',
                          fontWeight: selectedAuthor === author ? 'bold' : 'normal',
                          color: selectedAuthor === author ? '#21aabc' : '#173A37',
                        }}
                      >
                        {author} ({author === 'Все авторы' ? blogPosts.length : blogPosts.filter(post => {
                          const postAuthor = therapists.find(therapist => therapist.id === post.authorId);
                          return postAuthor && postAuthor.name === author;
                        }).length})
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar-widget sidebar-recent-posts">
                  <h3>Последние записи</h3>
                  <ul>
                    {blogPosts.slice(0, 3).map((post, index) => ( // Εμφανίζουμε τα 3 πιο πρόσφατα posts
                      <li key={index}>
                        <p>{post.title}</p>
                        <p>{new Date(post.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Δυναμική Pagination */}
            <div className="blog-pagination">
              {currentPage > 1 && (
                <button className="page-btn prev" onClick={handlePrevPage}>
                  <i className="las la-arrow-left"></i>
                </button>
              )}
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              {currentPage < totalPages && (
                <button className="page-btn next" onClick={handleNextPage}>
                  <i className="las la-arrow-right"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BlogLibrary;