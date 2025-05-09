// src/components/AboutAnageno.js
import React from 'react';
import { Link } from 'react-router-dom';
import therapists from '../data/therapistsData';
import './AboutAnageno.css';

const AboutAnageno = () => {
  const viktoria = therapists.find(therapist => therapist.id === 1);

  return (
    <section className="about-anageno">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="image-frame">
              <img src="/images/section/aboutAnagenoVK.jpg" alt="About Anageno" />
              <div className="image-content">
                <h3>{viktoria.name}</h3> {/* "Виктория Котенко" */}
                <p>{viktoria.title}</p>
                <Link to={viktoria.profileLink} className="read-more">Узнать больше</Link>
              </div>
            </div>
          </div>
          <div className="therapy-frame">
            <div className="frame-content">
              <h2>Надежные профессионалы, посвятившие себя вашему душевному здоровью</h2>
              <p>
                Anageno — это уважаемый центр консультаций и психологической терапии с командой опытных профессионалов, готовых выслушать и поддержать вас. Мы верим, что каждый способен исцелиться и расти при правильном руководстве.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAnageno;