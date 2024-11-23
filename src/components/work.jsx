import React from 'react';
import './work.css';

const WorkWithUs = () => {
  return (
    <div className="work-container">
      <h1>Work With Us</h1>
      <p>Join our dynamic team and help us shape the future! We are committed to fostering a diverse and inclusive workplace where every team member is valued.</p>

      <h2>Why Work Here?</h2>
      <ul className="benefits-list">
        <li>Competitive salaries and benefits</li>
        <li>Flexible work hours and remote work options</li>
        <li>Opportunities for professional development</li>
        <li>Collaborative and innovative work environment</li>
        <li>Health and wellness programs</li>
        <li>Employee recognition and rewards</li>
      </ul>

      <h2>Current Openings</h2>
      <ul className="openings-list">
        <li>Software Engineer</li>
        <li>Product Manager</li>
        <li>Marketing Specialist</li>
        <li>Customer Support Representative</li>
        <li>Data Analyst</li>
      </ul>

      <h2>Ready to Apply?</h2>
      <p>If you’re excited about the opportunity to work with us, please send your resume to <a href="mailto:hr@company.com">hr@company.com</a>.</p>
    </div>
  );
};

export default WorkWithUs;
