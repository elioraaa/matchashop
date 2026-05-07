import React, { useState } from 'react';

function AboutPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'How do I add products to the shop?',
      answer: 'Go to the admin page, fill out the form with product details, and submit. Your new product will appear in the shop immediately.',
    },
    {
      question: 'Is this connected to a real backend?',
      answer: 'Yes, this frontend is designed to work with a backend API. You can set up your own backend or use a mock server for testing.',
    },
    {
      question: 'How do I place an order?',
      answer: 'Browse the shop, add items to your cart, and proceed to checkout. You can choose a pickup time and complete your order.',
    },
    
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="page-shell">
      <section className="page-intro">
        <p className="eyebrow">about bloom matcha</p>
        <h1>A bold matcha ritual built around calm energy.</h1>
        <p>
          This page gives your brand personality while your menu and admin products
          stay connected to the backend.
        </p>
      </section>

      <section className="story-grid">
        <article className="story-card tall">
          <h2>F.A.Q. (How it works)</h2>
          <p>Here are some common questions about how this project works:</p>

          <div className="faq-list">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

        </article>
        <article className="story-card">
          <span>02</span>
          <h2>Simple ingredients</h2>
          <p>Clean drinks, fresh milk options, fruit creams, and products that keep the matcha flavor visible.</p>
        </article>
        <article className="story-card dark">
          <span>03</span>
          <h2>Designed to grow</h2>
          <p>Later you can add login, real checkout, orders, categories, and customer accounts.</p>
        </article>
      </section>
    </main>
  );
}
export default AboutPage;