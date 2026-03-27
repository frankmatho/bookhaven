import React from 'react';

const About = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>

      {/* Hero */}
      <div style={{ background: '#85d17b', padding: '4rem 2rem 3rem', textAlign: 'center' }}>
        <span style={{
          display: 'inline-block', background: 'rgba(0,0,0,0.12)', color: '#1a1a1a',
          fontSize: '12px', padding: '4px 14px', borderRadius: '20px', marginBottom: '1.2rem'
        }}>
          Est. 2024 · Nairobi, Kenya
        </span>

        <h1 style={{ fontSize: '2.4rem', fontWeight: '500', color: '#1a1a1a', marginBottom: '1rem' }}>
          Your <span style={{ color: '#2563eb' }}>literary haven</span> awaits
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#2d2d2d', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.7' }}>
          BookHaven is where book lovers discover their next great read, connect with fellow bibliophiles,
          and celebrate the joy of storytelling.
        </p>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', maxWidth: '500px', margin: '0 auto' }}>
          {[
            { num: '500+', label: 'Books listed' },
            { num: '200+', label: 'Happy readers' },
            { num: '50+', label: 'Categories' },
          ].map((s) => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.45)', borderRadius: '8px', padding: '1rem' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: '500', color: '#1a1a1a' }}>{s.num}</div>
              <div style={{ fontSize: '12px', color: '#3a3a3a', marginTop: '2px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div style={{ padding: '3rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '500', marginBottom: '0.5rem' }}>Everything a reader needs</h2>
        <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}>
          From discovery to purchase, we've built tools to make your reading journey effortless.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {[
            { icon: '📚', title: 'Vast catalogue', desc: 'Browse hundreds of books across every genre — from fiction to academic texts.' },
            { icon: '🔍', title: 'Smart search', desc: 'Find exactly what you\'re looking for by title, author, or category in seconds.' },
            { icon: '💰', title: 'Best prices', desc: 'Buy and sell books at fair prices. We make reading accessible for everyone.' },
            { icon: '🛒', title: 'Easy checkout', desc: 'A smooth, secure buying experience from cart to confirmation.' },
          ].map((card) => (
            <div key={card.title} style={{
              background: '#fff', border: '0.5px solid #e5e5e5',
              borderRadius: '12px', padding: '1.25rem'
            }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '8px',
                background: '#eff6ff', display: 'flex', alignItems: 'center',
                justifyContent: 'center', marginBottom: '0.75rem', fontSize: '16px'
              }}>
                {card.icon}
              </div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: '500', marginBottom: '0.4rem' }}>{card.title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.5' }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '0.5px solid #e5e5e5', margin: '0 2rem' }} />

      {/* Mission */}
      <div style={{ background: '#f9f9f9', padding: '3rem 2rem' }}>
        <div style={{
          maxWidth: '900px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center'
        }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '500', marginBottom: '0.75rem' }}>Our mission</h2>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.7' }}>
              We believe every story deserves to be read, and every reader deserves to find their story.
              BookHaven was built to bridge that gap — creating a platform where books find new homes
              and readers find new worlds.
            </p>
          </div>
          <div style={{
            background: '#fff', borderLeft: '3px solid #85d17b',
            borderRadius: '0 8px 8px 0', padding: '1.25rem 1.5rem'
          }}>
            <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.7', fontStyle: 'italic' }}>
              "Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors."
            </p>
            <span style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.5rem', display: 'block' }}>
              — Charles W. Eliot
            </span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '500', marginBottom: '0.5rem' }}>Ready to find your next read?</h2>
        <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1.5rem' }}>
          Join hundreds of readers already using BookHaven.
        </p>
        <a href="/shop" style={{
          display: 'inline-block', background: '#85d17b', color: '#1a1a1a',
          fontSize: '0.95rem', fontWeight: '500', padding: '0.7rem 2rem',
          borderRadius: '8px', textDecoration: 'none'
        }}>
          Browse the shop →
        </a>
      </div>

    </div>
  );
};

export default About;