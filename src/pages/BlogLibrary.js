import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import './BlogLibrary.css';

function BlogLibrary() {
  console.log("BlogLibrary component rendered");

  // Λίστα με όλα τα blog posts
  const allBlogPosts = [
    {
      date: "05 НОЯ",
      image: "/images/blog/blg001a.jpg",
      alt: "Созависимость: как распознать и выйти из нездоровых отношений",
      category: "Отношения",
      author: "Viktoriia Kotenko",
      title: "Созависимость: как распознать и выйти из нездоровых отношений",
      excerpt: "Когда забота становится жертвой, а любовь — контролем, это не близость, а созависимость. Мы разбираем её признаки, причины и последствия, а главное — путь к исцелению через возвращение к себе.",
      link: "/blog-details/codependency",
    },
    {
      date: "07 НОЯ",
      image: "/images/blog/blg002a.jpg",
      alt: "Эмоциональный интеллект: как понимать свои чувства и управлять ими",
      category: "Уверенность в себе / Самооценка",
      author: "Viktoriia Kotenko",
      title: "Эмоциональный интеллект: как понимать свои чувства и управлять ими",
      excerpt: "Узнайте, что такое эмоциональный интеллект и почему он важен для личного и профессионального роста.",
      link: "/blog-details/emotional-intelligence",
    },
    {
      date: "15 НОЯ",
      image: "/images/blog/blg003a.jpg",
      alt: "Майндфулнесс: внимание, которое лечит",
      category: "Стресс / Тревога",
      author: "Viktoriia Kotenko",
      title: "Майндфулнесс: внимание, которое лечит",
      excerpt: "Осознанность помогает снизить стресс и улучшить качество жизни. Узнайте, как практиковать mindfulness.",
      link: "/blog-details/mindfulness",
    },
    {
      date: "18 НОЯ",
      image: "/images/blog/blg004a.jpg",
      alt: "Руминация: почему мы застреваем в мыслях и как это остановить",
      category: "Стресс / Тревога",
      author: "Viktoriia Kotenko",
      title: "Руминация: почему мы застреваем в мыслях и как это остановить",
      excerpt: "Руминация — это бесконечный цикл негативных мыслей. Узнайте, как разорвать этот цикл.",
      link: "/blog-details/rumination",
    },
    {
      date: "20 НОЯ",
      image: "/images/blog/blg005a.jpg",
      alt: "Психосоматика: как тело говорит о том, что не осознаёт разум",
      category: "Стресс / Тревога",
      author: "Viktoriia Kotenko",
      title: "Психосоматика: как тело говорит о том, что не осознаёт разум",
      excerpt: "Узнайте, как подавленные чувства могут проявляться через телесные симптомы.",
      link: "/blog-details/psychosomatics",
    },
    {
      date: "22 НОЯ",
      image: "/images/blog/blg006a.jpg",
      alt: "Сочувствие и эмпатия: в чём разница и почему это важно понимать",
      category: "Отношения",
      author: "Viktoriia Kotenko",
      title: "Сочувствие и эмпатия: в чём разница и почему это важно понимать",
      excerpt: "Сочувствие и эмпатия — ключ к глубоким связям. Узнайте их различия.",
      link: "/blog-details/sympathy-empathy",
    },
    {
      date: "25 НОЯ",
      image: "/images/blog/blg007a.jpg",
      alt: "Стресс: когда он помогает, а когда разрушает",
      category: "Стресс / Тревога",
      author: "Viktoriia Kotenko",
      title: "Стресс: когда он помогает, а когда разрушает",
      excerpt: "Стресс может быть мотиватором и разрушителем. Узнайте, как справляться с ним.",
      link: "/blog-details/stress",
    },
    {
      date: "28 НОЯ",
      image: "/images/blog/blg008a.jpg",
      alt: "Эффективное общение: как говорить, чтобы быть услышанным",
      category: "Отношения",
      author: "Viktoriia Kotenko",
      title: "Эффективное общение: как говорить, чтобы быть услышанным",
      excerpt: "Эффективное общение — ключ к успешным отношениям. Узнайте, как быть услышанным.",
      link: "/blog-details/effective-communication",
    },
    {
      date: "30 НОЯ",
      image: "/images/blog/blg009a.jpg",
      alt: "Как нарушение сна влияет на психическое здоровье: научный взгляд",
      category: "Стресс / Тревога",
      author: "Viktoriia Kotenko",
      title: "Как нарушение сна влияет на психическое здоровье: научный взгляд",
      excerpt: "Нарушение сна усиливает тревогу и депрессию. Узнайте, как улучшить сон.",
      link: "/blog-details/sleep-mental-health",
    },
  ];

  // State για το φιλτράρισμα ανά κατηγορία και author
  const [selectedCategory, setSelectedCategory] = useState('Все категории');
  const [selectedAuthor, setSelectedAuthor] = useState('Все авторы');

  // Κατηγορίες για το φιλτράρισμα
  const categories = [
    'Все категории',
    'Отношения',
    'Стресс / Тревога',
    'Уверенность в себе / Самооценка',
  ];

  // Authors για το φιλτράρισμα
  const authors = [
    'Все авторы',
    'Viktoriia Kotenko',
    'Anageno',
  ];

  // Φιλτράρισμα των blog posts με βάση την επιλεγμένη κατηγορία και author
  let filteredPosts = allBlogPosts;

  if (selectedCategory !== 'Все категории') {
    filteredPosts = filteredPosts.filter(post => post.category === selectedCategory);
  }

  if (selectedAuthor !== 'Все авторы') {
    filteredPosts = filteredPosts.filter(post => post.author === selectedAuthor);
  }

  return (
    <div className="blog-library-page">
      <ProfileHeader />
      <main className="blog-library-content">
        <div className="container">
          <div className="blog-header">
            <h1>Anageno Blog</h1>
            <h2>Откройте для себя идеи, советы и стратегии, которые помогут поддерживать ваше психическое здоровье и личностный рост.</h2>
          </div>
          <div className="blog-body">
            <div className="blog-content">
              <div className="blog-posts">
                {filteredPosts.map((post, index) => (
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
                      <p className="post-excerpt">{post.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="blog-sidebar">
                <div className="sidebar-widget sidebar-search">
                  <h3>Поиск</h3>
                  <div className="search-form">
                    <input type="text" placeholder="Search articles..." />
                    <button type="button"><i className="las la-search"></i></button>
                  </div>
                </div>
                <div className="sidebar-widget sidebar-categories">
                  <h3>Категории</h3>
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
                        {category} ({category === 'Все категории' ? allBlogPosts.length : allBlogPosts.filter(post => post.category === category).length})
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
                        onClick={() => setSelectedAuthor(author)}
                        style={{
                          cursor: 'pointer',
                          fontWeight: selectedAuthor === author ? 'bold' : 'normal',
                          color: selectedAuthor === author ? '#21aabc' : '#173A37',
                        }}
                      >
                        {author} ({author === 'Все авторы' ? allBlogPosts.length : allBlogPosts.filter(post => post.author === author).length})
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar-widget sidebar-recent-posts">
                  <h3>Последние записи</h3>
                  <ul>
                    <li>
                      <p>Созависимость: как распознать и выйти из нездоровых отношений</p>
                      <p>5 ноября 2024</p>
                    </li>
                    <li>
                      <p>Эмоциональный интеллект: как понимать свои чувства и управлять ими</p>
                      <p>7 ноября 2024</p>
                    </li>
                    <li>
                      <p>Майндфулнесс: внимание, которое лечит</p>
                      <p>15 ноября 2024</p>
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

export default BlogLibrary;