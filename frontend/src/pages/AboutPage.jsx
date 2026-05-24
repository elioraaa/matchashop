import React from 'react';
import '../assets/matcharitual.jpg';

function AboutPage() {
  return (
    <main className="page-shell">
  
      <section className="about-hero">
        <div className="hero-content">
          <p className="eyebrow">our story</p>
          <h1>Japanese-grown matcha for modern rituals.</h1>
          <p>
            Discover the art of mindful matcha, crafted with centuries of tradition
            and a commitment to purity, wellness, and slow living.
          </p>
          <button className="primary-button">Explore Our Matcha</button>
        </div>
        <div className="hero-visual">

          <div className="hero-image-placeholder">
            <image src="../assets/matcharitual.jpg" alt="Matcha Ceremony" />
          </div>
        </div>
      </section>


      <section className="brand-story">
        <div className="story-content">
          <h2>Our Journey Begins</h2>
          <p>
            Founded in 2020, Matcha Muse was born from a simple desire to bring
            the authentic experience of Japanese matcha to everyday life. Our founder,
            inspired by serene tea ceremonies in Kyoto, envisioned a brand that
            honors tradition while embracing modern wellness.
          </p>
          <p>
            We partner directly with small family farms in Uji, Japan, ensuring
            every leaf is shade-grown, stone-ground, and harvested at peak freshness.
            Our mission is to create moments of calm in a busy world, one cup at a time.
          </p>
        </div>
        <div className="story-visual">

          <div className="story-image-placeholder">
            <span>Japanese Farm Landscape</span>
          </div>
        </div>
      </section>


      <section className="philosophy-section">
        <div className="section-heading centered">
          <h2>Our Philosophy</h2>
          <p>Rooted in mindfulness, quality, and intentional living.</p>
        </div>
        <div className="philosophy-grid">
          <div className="philosophy-card">
            <h3>Mindfulness</h3>
            <p>
              Each sip is an invitation to pause, breathe, and connect with the present moment.
            </p>
          </div>
          <div className="philosophy-card">
            <h3>Slow Living</h3>
            <p>
              We believe in the power of deliberate rituals that nourish both body and soul.
            </p>
          </div>
          <div className="philosophy-card">
            <h3>Clean Energy</h3>
            <p>
              Experience sustained focus without the jitters, powered by nature's finest.
            </p>
          </div>
          <div className="philosophy-card">
            <h3>Quality First</h3>
            <p>
              From seed to cup, every step is guided by a commitment to excellence.
            </p>
          </div>
        </div>
      </section>


      <section className="sourcing-section">
        <div className="sourcing-content">
          <h2>Ceremonial Grade Matcha</h2>
          <p>
            Our matcha is sourced from the rolling hills of Uji, Japan, where tea has been
            cultivated for over 800 years. Shade-grown for 20-30 days before harvest,
            the leaves develop rich chlorophyll and amino acids, creating a vibrant,
            smooth powder.
          </p>
          <ul className="quality-list">
            <li>Stone-ground in small batches for optimal freshness</li>
            <li>Free from additives, preservatives, or artificial flavors</li>
            <li>Tested for purity and antioxidant content</li>
            <li>Sustainably harvested by experienced farmers</li>
          </ul>
        </div>
        <div className="sourcing-visual">
          
          <div className="sourcing-image-placeholder">
            <span>Matcha Powder Close-up</span>
          </div>
        </div>
      </section>

      
      <section className="benefits-section">
        <div className="section-heading centered">
          <h2>Why Matcha?</h2>
          <p>Experience the gentle power of nature's superfood.</p>
        </div>
        <div className="benefit-grid">
          <div className="benefit-item">
            <div className="benefit-icon">🌿</div>
            <h3>Calm Focus</h3>
            <p>Sustained mental clarity without the crash.</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🛡️</div>
            <h3>Antioxidants</h3>
            <p>More than green tea, packed with catechins.</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">☕</div>
            <h3>Smooth Energy</h3>
            <p>Gentle caffeine release for steady vitality.</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🧘</div>
            <h3>Daily Ritual</h3>
            <p>Transform your morning into a moment of peace.</p>
          </div>
        </div>
      </section>


      <section className="lifestyle-section">
        <div className="lifestyle-content">
          <h2>The Matcha Lifestyle</h2>
          <p>
            Beyond the cup, matcha is a way of life. Join a community that values
            intentional moments, from quiet mornings to mindful afternoons.
          </p>
        </div>
        <div className="lifestyle-grid">
          <div className="lifestyle-card">
            <div className="lifestyle-image-placeholder">
              <span>Morning Ritual</span>
            </div>
            <h3>Start Your Day Mindfully</h3>
            <p>Begin with a warm bowl and set intentions for the day ahead.</p>
          </div>
          <div className="lifestyle-card">
            <div className="lifestyle-image-placeholder">
              <span>Café Atmosphere</span>
            </div>
            <h3>Cozy Café Vibes</h3>
            <p>Find your calm in our serene spaces designed for reflection.</p>
          </div>
          <div className="lifestyle-card">
            <div className="lifestyle-image-placeholder">
              <span>Wellness Routine</span>
            </div>
            <h3>Holistic Wellness</h3>
            <p>Incorporate matcha into your daily self-care practices.</p>
          </div>
        </div>
      </section>


      <section className="sustainability-section">
        <div className="sustainability-content">
          <h2>Committed to Sustainability</h2>
          <p>
            We work closely with small Japanese farms to ensure ethical practices
            and minimal environmental impact. Our packaging is recyclable and
            designed to preserve freshness without excess materials.
          </p>
          <div className="sustainability-points">
            <div className="sustainability-point">
              <h4>Ethical Sourcing</h4>
              <p>Fair partnerships with local farmers.</p>
            </div>
            <div className="sustainability-point">
              <h4>Eco Packaging</h4>
              <p>Minimal, recyclable materials.</p>
            </div>
            <div className="sustainability-point">
              <h4>Carbon Conscious</h4>
              <p>Low-impact shipping and production.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="testimonials-section">
        <div className="section-heading centered">
          <h2>What Our Community Says</h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"Matcha Muse transformed my mornings. The calm energy is exactly what I needed."</p>
            <cite>- Sarah K., Wellness Coach</cite>
          </div>
          <div className="testimonial-card">
            <p>"Authentic, pure, and beautifully packaged. A true ritual in my daily life."</p>
            <cite>- Alex M., Designer</cite>
          </div>
          <div className="testimonial-card">
            <p>"The quality is unmatched. I feel connected to something timeless."</p>
            <cite>- Jamie L., Teacher</cite>
          </div>
        </div>
      </section>


      <section className="final-cta-section">
        <div className="cta-content">
          <h2>Start Your Daily Ritual</h2>
          <p>Join thousands who have discovered the art of mindful matcha.</p>
          <button className="primary-button">Shop Now</button>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;