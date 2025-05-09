import React from 'react';

const SympathyEmpathyBlog = () => {
  return {
    title: 'Сочувствие и эмпатия: в чём разница и почему это важно понимать',
    date: '22 ноября 2024',
    category: 'Отношения',
    author: 'Viktoriia Kotenko',
    image: '/images/blog/blg006a.jpg',
    heroSliderContent: {
      type: 'image',
      src: '/images/blog/blg006a.jpg',
    },
    content: (
      <>
        {/* Введение */}
        <h4 className="section-heading">Мы часто используем слова «сочувствие» и «эмпатия» как синонимы</h4>
        <p className="text-1 lh-30 fw-4">
          Оба связаны с откликом на чувства другого человека, с желанием поддержать. Но в реальности эти понятия не только разные, но и по-разному влияют на отношения, эмоциональное выгорание и даже психологическую устойчивость. В этой статье мы разберём, в чём суть различий, какие процессы стоят за этими реакциями и почему понимание этой разницы важно для эмоционального здоровья.
        </p>

        {/* Что такое сочувствие? */}
        <h4 className="section-heading">Что такое сочувствие?</h4>
        <p className="text-1 lh-30 fw-4">
          Сочувствие — это способность откликнуться на боль другого, разделить его страдание, почувствовать жалость, тревогу, желание помочь. Оно чаще всего сопровождается эмоциональной вовлечённостью и, как правило, порождает дистанцированную поддержку: «Мне жаль тебя», «Я переживаю, что ты страдаешь».
        </p>
        <p className="text-1 lh-30 fw-4">
          Сочувствие:
        </p>
        <ul className="text-1 lh-30 fw-4">
          <li>активирует личный эмоциональный дискомфорт</li>
          <li>может привести к «перегоранию», особенно в помогающих профессиях</li>
          <li>нередко сопровождается чувством вины и тревоги</li>
        </ul>
        <blockquote className="quote">
          «Сочувствие легко переходит в жалость, а жалость редко становится основой подлинной близости»
        </blockquote>

        {/* Κлючевые различия */}
        <h4 className="section-heading">Ключевые различия</h4>

        <figure className={`section-image-wrapper ${false ? 'section-image-wrapper--square' : ''}`}>
          <img src="/images/blog/blg006b.jpg" alt="Иллюстрация сочувствия" className="section-image" />
        </figure>

        <table className="comparison-table" style={{ width: '100%', maxWidth: '920px', borderCollapse: 'collapse', margin: '20px auto' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}></th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Сочувствие</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Эмпатия</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Фокус</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>На страдании другого и своём ответе</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>На состоянии другого человека</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Отклик</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>«Мне жаль тебя»</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>«Я понимаю, что ты чувствуешь»</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Дистанция</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Часто создаёт дистанцию</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Создаёт ощущение принятия и связи</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Результат</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Может вызывать усталость</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Поддерживает контакт и устойчивость</td>
            </tr>
          </tbody>
        </table>
        <blockquote className="quote">
          «Эмпатия — это способность быть с болью другого, не пытаясь её немедленно устранить» — Brené Brown, Atlas of the Heart
        </blockquote>

        {/* Что такое эмпатия? */}
        <h4 className="section-heading">Что такое эмпатия?</h4>
        <p className="text-1 lh-30 fw-4">
          Эмпатия — это способность понимать чувства другого человека изнутри его опыта, не обязательно проживая их на себе. Это про осознанное присутствие рядом, когда мы способны быть с другим, не теряя себя.
        </p>
        <p className="text-1 lh-30 fw-4">
          Эмпатия включает:
        </p>
        <ul className="text-1 lh-30 fw-4">
          <li>когнитивный компонент (понимание, что чувствует другой)</li>
          <li>эмоциональный отклик (но не полное слияние)</li>
          <li>регуляцию собственного состояния, чтобы не «утонуть» в чужих чувствах</li>
        </ul>
        <p className="text-1 lh-30 fw-4">
          Исследования показывают, что именно эмпатия, а не сочувствие, связана с более высокой устойчивостью к выгоранию (Decety & Lamm, 2006).
        </p>

        {/* Почему это важно в повседневной жизни? */}
        <h4 className="section-heading">Почему это важно в повседневной жизни?</h4>
        <ul className="text-1 lh-30 fw-4">
          <li><strong>В личных отношениях:</strong> эмпатия укрепляет связь, а сочувствие может вызывать ощущение жалости или снисходительности.</li>
          <li><strong>В работе с людьми:</strong> избыток сочувствия приводит к эмоциональному истощению, тогда как эмпатия помогает оставаться включённым, сохраняя границы.</li>
          <li><strong>В воспитании:</strong> эмпатия учит детей распознавать и называть свои эмоции, а не избегать их.</li>
        </ul>

        {/* Как развивать эмпатию? */}
        <h4 className="section-heading">Как развивать эмпатию?</h4>
        <ul className="text-1 lh-30 fw-4">
          <li>Учитесь слушать не перебивая. Искреннее внимание — основа эмпатии.</li>
          <li>Замечайте чувства, а не только факты. Что стоит за словами?</li>
          <li>Регулярно практикуйте саморефлексию. Это помогает не срываться в автоматические реакции.</li>
          <li>Развивайте эмоциональный словарь. Чем точнее вы определяете чувства, тем глубже понимаете других.</li>
          <li>Работайте с внутренними ограничениями. Например, с убеждениями вроде «чувства — это слабость».</li>
        </ul>

        <figure className={`section-image-wrapper ${false ? 'section-image-wrapper--square' : ''}`}>
          <img src="/images/blog/blg006c.jpg" alt="Иллюстрация эмпатии" className="section-image" />
        </figure>

        {/* Заключение */}
        <h4 className="section-heading">Заключение</h4>
        <p className="text-1 lh-30 fw-4">
          Понимание разницы между сочувствием и эмпатией — важный шаг к зрелым, глубоким и устойчивым отношениям. Эмпатия не требует спасать другого — она требует быть рядом и понимать. Это навык, который можно развивать — и который делает нас по-настоящему ближе к другим и к себе.
        </p>

        {/* Источники */}
        <h4 className="section-heading">Источники:</h4>
        <ol className="text-1 lh-30 fw-4">
          <li>
            Brown, B. (2021). <i>Atlas of the Heart: Mapping Meaningful Connection and the Language of Human Experience</i>.{' '}
            <a href="https://brenebrown.com/book/atlas-of-the-heart/" target="_blank" rel="noopener noreferrer">
              https://brenebrown.com/book/atlas-of-the-heart/
            </a>
          </li>
          <li>
            Decety, J., & Lamm, C. (2006). Human empathy through the lens of social neuroscience. <i>Trends in Cognitive Sciences</i>, 10(10), 435–441.{' '}
            <a href="https://doi.org/10.1016/j.tics.2006.01.001" target="_blank" rel="noopener noreferrer">
              https://doi.org/10.1016/j.tics.2006.01.001
            </a>
          </li>
          <li>
            Riess, H., Bailey, R. W., Dunn, E. J., & Phillips, M. (2012). Empathy training for resident physicians: a randomized controlled trial of a neuroscience-informed curriculum. <i>Journal of General Internal Medicine</i>, 27(10), 1280–1286.{' '}
            <a href="https://doi.org/10.1007/s11606-012-2063-z" target="_blank" rel="noopener noreferrer">
              https://doi.org/10.1007/s11606-012-2063-z
            </a>
          </li>
        </ol>
      </>
    ),
  };
};

export default SympathyEmpathyBlog;