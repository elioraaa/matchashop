function InnerCircle() {
  return (
    <section className="inner-circle">
      <div className="inner-circle-art">
        <span>花</span>
      </div>
      <div>
        <p className="eyebrow">BLOOM THE MATCHA</p>
        <h2>Join the Inner Circle</h2>
        <p>
          Subscribe to stay connected to new creations, limited releases,
          events, and the energy behind what we do.
        </p>
        <form className="subscribe-form">
          <input type="email" placeholder="Your email address" aria-label="Email address" />
          <button type="button">Subscribe</button>
        </form>
        <strong className="fanatic-line">For you, you matcha fanatics!</strong>
      </div>
    </section>
  );
}

export default InnerCircle;
