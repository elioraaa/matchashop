const stats = [
  {
    value: '300%',
    label: 'more antioxidant energy than a typical coffee routine',
  },
  {
    value: '40%',
    label: 'less of that immediate caffeine spike feeling',
  },
  {
    value: '70%',
    label: 'gentler ritual for slow focus and nervous-system calm',
  },
];

function ComparisonSection() {
  return (
    <section className="comparison-section">
      <div>
        <h2>MATCHA VS. COFFEE</h2>
      </div>
      <div className="stat-grid">
        {stats.map((stat) => (
          <article key={stat.value}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ComparisonSection;
