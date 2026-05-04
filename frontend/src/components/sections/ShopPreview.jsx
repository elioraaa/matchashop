import ProductCard from '../product/ProductCard';

function ShopPreview({ products, addToCart }) {
  return (
    <section className="section-block">
      <div className="section-heading">
        <p className="eyebrow">shop section</p>
        <h2>Visit our shop for an explosion of flavour.</h2>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            compactAction
          />
        ))}
      </div>
    </section>
  );
}

export default ShopPreview;
