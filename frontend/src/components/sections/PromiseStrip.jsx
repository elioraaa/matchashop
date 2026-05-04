const promises = [
  'Wide range of recipes',
  'High quality product',
  'Individual advice',
];

function PromiseStrip() {
  return (
    <section className="promise-strip bloom-list">
      {promises.map((promise, index) => (
        <div key={promise}>
          <strong>{index + 1}</strong>
          <span>{promise}</span>
        </div>
      ))}
    </section>
  );
}

export default PromiseStrip;
