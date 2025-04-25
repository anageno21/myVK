import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeroSlider from './HeroSlider';
import ProfileHeader from './ProfileHeader';
import { FiInstagram, FiMail, FiMusic, FiMessageCircle, FiTwitter, FiFacebook } from 'react-icons/fi';
import './BlogDetailsSection.css';
import './HeroSlider.css';

// Mapping of slugs to blog module paths
const blogModules = {
  codependency: () => import('./blogs/BLG-RE-001_CodependencyBlog'),
  'emotional-intelligence': () => import('./blogs/BLG-SC-002_EmotionalIntelligenceBlog'),
  mindfulness: () => import('./blogs/BLG-SA-003_MindfulnessBlog'),
  rumination: () => import('./blogs/BLG-SA-004_RuminationBlog'),
  psychosomatics: () => import('./blogs/BLG-SA-005_PsychosomaticsBlog'),
  'sympathy-empathy': () => import('./blogs/BLG-RE-006_SympathyEmpathyBlog'),
  stress: () => import('./blogs/BLG-SA-007_StressBlog'),
  'effective-communication': () => import('./blogs/BLG-RE-008_EffectiveCommunicationBlog'),
  'sleep-mental-health': () => import('./blogs/BLG-SA-009_SleepMentalHealthBlog'),
};

const BlogDetailsSection = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogModule = blogModules[slug];
    if (loadBlogModule) {
      loadBlogModule()
        .then((module) => {
          const blogData = module.default();
          setPost(blogData);
          console.log(`Loaded blogData for slug "${slug}":`, blogData);
          console.log(`HeroSliderContent for slug "${slug}":`, blogData.heroSliderContent);
        })
        .catch((err) => {
          console.error(`Failed to load blog module for slug "${slug}":`, err);
          setError(`Не удалось загрузить статью: ${err.message}`);
          setPost({
            title: 'Статья не найдена',
            date: '',
            category: '',
            image: '',
            content: <p>Запрашиваемая статья не существует. Ошибка: {err.message}</p>,
          });
        });
    } else {
      setPost({
        title: 'Статья не найдена',
        date: '',
        category: '',
        image: '',
        content: <p>Запрашиваемая статья не существует.</p>,
      });
    }
  }, [slug]);

  const featuredPosts = [
    {
      date: "05 НОЯ",
      image: "/images/blog/blg001a.jpg",
      alt: "Созависимость: как распознать и выйти из нездоровых отношений",
      category: "Отношения",
      title: "Созависимость: как распознать и выйти из нездоровых отношений",
      description: "Когда забота становится жертвой, а любовь — контролем, это не близость, а созависимость. Мы разбираем её признаки, причины и последствия, а главное — путь к исцелению через возвращение к себе.",
      link: "/blog-details/codependency",
    },
    {
      date: "07 НОЯ",
      image: "/images/blog/emotional-intelligence.jpg",
      alt: "Эмоциональный интеллект: как понимать свои чувства и управлять ими",
      category: "Уверенность в себе / Самооценка",
      title: "Эмоциональный интеллект: как понимать свои чувства и управлять ими",
      description: "Узнайте, что такое эмоциональный интеллект и почему он важен для личного и профессионального роста.",
      link: "/blog-details/emotional-intelligence",
    },
    {
      date: "15 НОЯ",
      image: "/images/blog/placeholder.jpg",
      alt: "Майндфулнесс: внимание, которое лечит",
      category: "Стресс / Тревога",
      title: "Майндфулнесс: внимание, которое лечит",
      description: "Осознанность помогает снизить стресс и улучшить качество жизни. Узнайте, как практиковать mindfulness.",
      link: "/blog-details/mindfulness",
    },
    {
      date: "18 НОЯ",
      image: "/images/blog/rumination.jpg",
      alt: "Руминация: почему мы застреваем в мыслях и как это остановить",
      category: "Стресс / Тревога",
      title: "Руминация: почему мы застреваем в мыслях и как это остановить",
      description: "Руминация — это бесконечный цикл негативных мыслей. Узнайте, как разорвать этот цикл.",
      link: "/blog-details/rumination",
    },
    {
      date: "20 НОЯ",
      image: "/images/blog/psychosomatics.jpg",
      alt: "Психосоматика: как тело говорит о том, что не осознаёт разум",
      category: "Стресс / Тревога",
      title: "Психосоматика: как тело говорит о том, что не осознаёт разум",
      description: "Узнайте, как подавленные чувства могут проявляться через телесные симптомы.",
      link: "/blog-details/psychosomatics",
    },
    {
      date: "22 НОЯ",
      image: "/images/blog/sympathy-empathy.jpg",
      alt: "Сочувствие и эмпатия: в чём разница и почему это важно понимать",
      category: "Отношения",
      title: "Сочувствие и эмпатия: в чём разница и почему это важно понимать",
      description: "Сочувствие и эмпатия — ключ к глубоким связям. Узнайте их различия.",
      link: "/blog-details/sympathy-empathy",
    },
    {
      date: "25 НОЯ",
      image: "/images/blog/blg007a.jpg",
      alt: "Стресс: когда он помогает, а когда разрушает",
      category: "Стресс / Тревога",
      title: "Стресс: когда он помогает, а когда разрушает",
      description: "Стресс может быть как мотиватором, так и разрушителем. Узнайте, как отличить полезный стресс от вредного, и какие стратегии помогут справляться с ним, чтобы сохранить здоровье и продуктивность.",
      link: "/blog-details/stress",
    },
    {
      date: "28 НОЯ",
      image: "/images/blog/blg008a.jpg",
      alt: "Эффективное общение: как говорить, чтобы быть услышанным",
      category: "Отношения",
      title: "Эффективное общение: как говорить, чтобы быть услышанным",
      description: "Эффективное общение — ключ к успешным отношениям. Узнайте, как быть услышанным.",
      link: "/blog-details/effective-communication",
    },
    {
      date: "30 НОЯ",
      image: "/images/blog/blg009a.jpg",
      alt: "Как нарушение сна влияет на психическое здоровье: научный взгляд",
      category: "Стресс / Тревога",
      title: "Как нарушение сна влияет на психическое здоровье: научный взгляд",
      description: "Нарушение сна усиливает тревогу и депрессию. Узнайте, как улучшить сон.",
      link: "/blog-details/sleep-mental-health",
    },
  ];

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    text: '',
    name: '',
    email: '',
  });
  const [replyInputs, setReplyInputs] = useState({});

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.text.trim() === '' || newComment.name.trim() === '' || newComment.email.trim() === '') return;

    const comment = {
      id: Date.now(),
      text: newComment.text,
      author: newComment.name,
      email: newComment.email,
      timestamp: new Date().toLocaleString(),
      replies: [],
    };

    setComments([...comments, comment]);
    setNewComment({ text: '', name: '', email: '' });
  };

  const handleReplyChange = (commentId, field, value) => {
    setReplyInputs({
      ...replyInputs,
      [commentId]: {
        ...replyInputs[commentId],
        [field]: value,
      },
    });
  };

  const handleReplySubmit = (e, commentId) => {
    e.preventDefault();
    const replyData = replyInputs[commentId] || { text: '', name: '', email: '' };
    if (replyData.text?.trim() === '' || replyData.name?.trim() === '' || replyData.email?.trim() === '') return;

    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: Date.now(),
              text: replyData.text,
              author: replyData.name,
              email: replyData.email,
              timestamp: new Date().toLocaleString(),
            },
          ],
        };
      }
      return comment;
    });

    setComments(updatedComments);
    setReplyInputs({ ...replyInputs, [commentId]: { text: '', name: '', email: '' } });
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  const heroContentType = post.heroSliderContent?.type || 'video';
  const heroContentSrc = post.heroSliderContent?.src || '/videos/blog001.mp4';
  const heroImages = post.heroSliderContent?.images || [];
  console.log('HeroSlider Props:', { contentType: heroContentType, src: heroContentSrc, images: heroImages });
  console.log('Rendering BlogDetailsSection for slug:', slug);

  return (
    <div className="blog-details-page">
      <ProfileHeader />
      <HeroSlider
        contentType={heroContentType}
        src={heroContentSrc}
        images={heroImages}
      />
      <div className="page-title page-details-2">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <ul className="breadcrumbs">
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/blog-library">Блог</Link></li>
                <li className="line-clamp-1">{post.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content page-blog-details-2">
        <section className="section-blog-post blog-details-2">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="content-inner">
                  <div className="heading-blog">
                    <span className="tag text-2">{post.category}</span>
                    <h3 className="title">{post.title}</h3>
                    <ul className="meta">
                      <li className="meta-item">
                        <i className="icon-CalendarBlank"></i>
                        <p>{post.date}</p>
                      </li>
                      <li className="meta-item">
                        <i className="icon-User"></i>
                        <p>by <Link to="/victoria-kotenko">Viktoriia Kotenko</Link></p>
                      </li>
                    </ul>
                  </div>
                  <div className="wrap-paragrahp">
                    {post.content}
                  </div>
                  <div className="wrap-tag">
                    <div className="tags">
                      <p>Теги:</p>
                      <Link to="#">{post.category}</Link>,
                      <Link to="#">Психическое здоровье</Link>
                    </div>
                    <div className="wrap-social">
                      <p>Поделиться этим постом:</p>
                      <ul className="tf-social style-1">
                        <li><Link to="#"><FiInstagram size={18} /></Link></li>
                        <li><Link to="#"><FiMail size={18} /></Link></li>
                        <li><Link to="#"><FiMusic size={18} /></Link></li>
                        <li><Link to="#"><FiMessageCircle size={18} /></Link></li>
                        <li><Link to="#"><FiTwitter size={18} /></Link></li>
                        <li><Link to="#"><FiFacebook size={18} /></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="related-articles-section">
          <div className="container">
            <div className="section-header">
              <span className="sub-title">Похожие статьи</span>
            </div>
            <div className="related-topics-grid">
              {featuredPosts.map((post, index) => (
                <div className="related-topic-card" key={index}>
                  <div className="related-card-image">
                    <span className="date">{post.date}</span>
                    <img src={post.image} alt={post.alt} />
                  </div>
                  <div className="related-card-content">
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
        <section className="comments-section">
          <div className="container">
            <div className="section-header">
              <span className="sub-title">Комментарии</span>
            </div>
            <div className="comment-form">
              <form onSubmit={handleCommentSubmit}>
                <input
                  type="text"
                  name="name"
                  value={newComment.name}
                  onChange={handleCommentChange}
                  placeholder="Ваше имя"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={newComment.email}
                  onChange={handleCommentChange}
                  placeholder="Ваш email"
                  required
                />
                <textarea
                  name="text"
                  value={newComment.text}
                  onChange={handleCommentChange}
                  placeholder="Оставить комментарий..."
                  rows="4"
                  required
                />
                <button type="submit">Отправить</button>
              </form>
            </div>
            <div className="comments-list">
              {comments.length === 0 ? (
                <p className="no-comments">Пока нет комментариев. Будьте первым!</p>
              ) : (
                comments.map((comment) => (
                  <div key={comment.id} className="comment">
                    <div className="comment-header">
                      <span className="comment-author">{comment.author}</span>
                      <span className="comment-timestamp">{comment.timestamp}</span>
                    </div>
                    <p className="comment-text">{comment.text}</p>
                    <button
                      className="reply-button"
                      onClick={() => setReplyInputs({ ...replyInputs, [comment.id]: replyInputs[comment.id] || { text: '', name: '', email: '' } })}
                    >
                      Ответить
                    </button>
                    {replyInputs[comment.id] && (
                      <div className="reply-form">
                        <form onSubmit={(e) => handleReplySubmit(e, comment.id)}>
                          <input
                            type="text"
                            name="name"
                            value={replyInputs[comment.id].name || ''}
                            onChange={(e) => handleReplyChange(comment.id, 'name', e.target.value)}
                            placeholder="Ваше имя"
                            required
                          />
                          <input
                            type="email"
                            name="email"
                            value={replyInputs[comment.id].email || ''}
                            onChange={(e) => handleReplyChange(comment.id, 'email', e.target.value)}
                            placeholder="Ваш email"
                            required
                          />
                          <textarea
                            name="text"
                            value={replyInputs[comment.id].text || ''}
                            onChange={(e) => handleReplyChange(comment.id, 'text', e.target.value)}
                            placeholder="Ваш ответ..."
                            rows="2"
                            required
                          />
                          <button type="submit">Отправить ответ</button>
                        </form>
                      </div>
                    )}
                    {comment.replies.length > 0 && (
                      <div className="replies">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="reply">
                            <div className="reply-header">
                              <span className="reply-author">{reply.author}</span>
                              <span className="reply-timestamp">{reply.timestamp}</span>
                            </div>
                            <p className="reply-text">{reply.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogDetailsSection;