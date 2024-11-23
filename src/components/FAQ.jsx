import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "What is your return policy?",
    answer: "You can return items within 30 days of receipt for a full refund.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping typically takes 5-7 business days.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, our customer support team is available 24/7 to assist you.",
  },
  {
    question: "Can I change my order after it's been placed?",
    answer: "Orders can be changed within 1 hour of placing them.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
              <span className={`arrow ${openIndex === index ? 'open' : ''}`}>▶</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
