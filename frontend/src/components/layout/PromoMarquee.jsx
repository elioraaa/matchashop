function PromoMarquee() {
  return (
    <div className="promo-marquee" aria-label="Promotional announcement">
      <div className="promo-track">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index}>Start your matcha ritual today</span>
        ))}
      </div>
    </div>
  );
}

export default PromoMarquee;
