import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 4000);
  };

  return (
    <section className="news" id="contact">
      <div className="section__container news__container">
        <h2 className="section__header">Mantente al día con las últimas novedades.</h2>
        {submitted ? (
          <div style={{ color: 'var(--primary-color)', fontWeight: '600', fontSize: '1.1rem' }}>
            ¡Gracias por suscribirte! Te mantendremos informado sobre nuestras novedades.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn" aria-label="Suscribirse al boletín">
              <i className="ri-send-plane-fill"></i>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
