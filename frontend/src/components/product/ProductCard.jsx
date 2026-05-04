import { formatPrice } from '../../utils/formatPrice';
import ProductVisual from './ProductVisual';

function ProductCard({ product, addToCart, onVisualClick, compactAction = false }) {
  const visual = <ProductVisual product={product} />;

  return (
    <article className="product-card menu-card">
      {onVisualClick ? (
        <button className="visual-button" onClick={() => onVisualClick(product)}>
          {visual}
        </button>
      ) : visual}

      <div>
        <span className="pill">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>

      <div className="card-footer">
        <strong>{formatPrice(product.price)}</strong>
        <button onClick={() => addToCart(product)}>
          {compactAction ? 'Add' : 'Add to Cart'}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
