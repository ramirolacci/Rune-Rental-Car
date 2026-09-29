import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter a valid email address.');
      return;
    }
    alert(`Thank you for subscribing! Updates will be sent to ${email}.`);
    setEmail('');
  };

  return (
    <section className="news" id="contact">
      <div className="section__container news__container">
        <h2 className="section__header">Stay up to date on all the latest news.</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn" aria-label="Subscribe to newsletter">
            <i className="ri-send-plane-fill"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
