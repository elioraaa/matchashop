const benefits = [
  'Matcha contains caffeine plus L-theanine for calm, steady energy without the crash.',
  'Rich in antioxidants that support your daily wellness routine and overall glow.',
  'A smooth ritual that can replace rushed coffee habits with something slower and brighter.',
];

function BenefitsSection() {
  return (
    <section className="benefits-section">
      <div className="section-heading centered">
        <p className="eyebrow">better benefits</p>
        <h2>MATCHA MUSE</h2>
      </div>

      <div className="benefit-grid">
        {benefits.map((benefit, index) => (
          <article key={benefit}>
            <div className="benefit-icon">{String(index + 1).padStart(2, '0')}</div>
            <p>{benefit}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BenefitsSection;
