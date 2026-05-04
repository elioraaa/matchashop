function RitualStrip() {
  return (
    <section className="ritual-strip" aria-label="Matcha ritual repeat text">
      <div>
        {Array.from({ length: 12 }).map((_, index) => (
          <span key={index}>MATCHA RITUAL</span>
        ))}
      </div>
    </section>
  );
}

export default RitualStrip;
