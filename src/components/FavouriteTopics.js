// src/components/FavouriteTopics.js
import React from 'react';
import { Link } from 'react-router-dom';
import './FavouriteTopics.css';

const FavouriteTopics = () => {
  const blogPosts = [
    {
      date: "15 OCT",
      image: "/images/blog/blog1.jpg",
      alt: "Созависимость: как распознать нездоровые отношения и вернуть себя",
      category: "Отношения",
      title: "Созависимость: как распознать нездоровые отношения и вернуть себя",
      description: "Когда забота становится жертвой, а любовь — контролем, это не близость, а созависимость. Мы разбираем её признаки, причины и последствия, а главное — путь к исцелению через возвращение к себе. Практические шаги, психотерапевтические подходы и цитаты из ключевых источников.",
      link: "/blog/mindfulness",
    },
    {
      date: "16 OCT",
      image: "/images/blog/blog2.jpg",
      alt: "Эмоциональный интеллект: как понимать свои чувства и управлять ими",
      category: "Самооценка / Отношения",
      title: "Эмоциональный интеллект: как понимать свои чувства и управлять ими",
      description: "Умение понимать свои чувства и управлять ими — не врождённый дар, а развиваемый навык. В статье — как ЭИ влияет на отношения, стрессоустойчивость и самооценку, какие техники помогают его укрепить, и почему эмоции — это не враги, а компас. С примерами, практиками и научной базой.",
      link: "/blog/self-care",
    },
    {
      date: "17 OCT",
      image: "/images/blog/blog3.jpg",
      alt: "Майндфулнесс: внимание, которое лечит",
      category: "Самооценка / Отношения",
      title: "Майндфулнесс: внимание, которое лечит",
      description: "Осознанность — это не про идеальное спокойствие. Это про возвращение к себе. В статье — как майндфулнесс помогает снизить тревожность, научиться слышать своё тело и проживать жизнь, не теряя опору внутри. Практики, исследования и живой тон.",
      link: "/blog/trauma",
    },
  ];

  return (
    <section className="favourite-topics-section">
      <div className="container">
        <div className="section-header">
          <h2>Психология на каждый день</h2>
        </div>
        <div className="topics-grid">
          {blogPosts.map((post, index) => (
            <div className="topic-card" key={index}>
              <div className="card-image">
                <span className="date">{post.date}</span>
                <img src={post.image} alt={post.alt} />
              </div>
              <div className="card-content">
                <span className="category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <Link to={post.link} className="read-more">Читать больше <span className="arrow">→</span></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavouriteTopics;