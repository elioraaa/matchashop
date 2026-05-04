function ProductVisual({ product, large = false }) {
  if (product.image) {
    return (
      <img
        className={large ? 'product-image product-image-large' : 'product-image'}
        src={product.image}
        alt={product.name}
      />
    );
  }

  return (
    <div className={large ? 'matcha-placeholder matcha-placeholder-large' : 'matcha-placeholder'}>
      <span>{product.category || 'Matcha'}</span>
      <strong>{product.name?.slice(0, 2) || 'M'}</strong>
    </div>
  );
}

export default ProductVisual;
