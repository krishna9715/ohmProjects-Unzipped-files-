import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`about-wrapper ${fadeIn ? 'fade-in' : ''}`}>
      <section className="about-intro">
        <h1>About Our Company</h1>
        <p>
          We are committed to revolutionizing the property market by eliminating brokerage fees.
          Our platform connects property owners directly with buyers and renters.
        </p>
      </section>

      <section className="about-details">
        <h2>Our Mission</h2>
        <p>
          To provide a transparent and hassle-free experience for all property transactions.
        </p>

        <h2>Our Vision</h2>
        <p>
          To be the leading no-brokerage property platform, making property buying and renting accessible to everyone.
        </p>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-member fade-in-up">
          <h3>John Doe</h3>
          <p>CEO & Founder</p>
        </div>
        <div className="team-member fade-in-up">
          <h3>Jane Smith</h3>
          <p>CTO</p>
        </div>
        <div className="team-member fade-in-up">
          <h3>Emily Johnson</h3>
          <p>Marketing Director</p>
        </div>
      </section>
    </div>
  );
};

export default About;
