function HeroSection({ setActivePage }) {
  return (
    <section className="hero-section bloom-hero">
      <div className="hero-copy">
        <p className="eyebrow">MATCHA MUSE</p>
        <h1>Ceremonial grade matcha for your daily ritual.</h1>
        <p>
          Start your matcha ritual with clean, vibrant blends made for steady
          energy, soft focus, and a little green ceremony in the middle of real life.
        </p>
        <div className="hero-actions">
          <button className="primary-button" onClick={() => setActivePage('menu')}>
            Shop Now
          </button>
          <button className="ghost-button" onClick={() => setActivePage('about')}>
            About Us
          </button>
        </div>
      </div>

      <div className="hero-card" aria-label="Featured matcha drink">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="flower-shape flower-one" />
        <div className="flower-shape flower-two" />
        <div className="cup-illustration">
          <span className="cup-steam" />
          <span className="cup-foam" />
          <span className="cup-body" />
        </div>
        <p>Premium first harvest</p>
        <h2>Matcha Tin</h2>
      </div>
    </section>
  );
}

export default HeroSection;
