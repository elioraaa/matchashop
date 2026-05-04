import { formatPrice } from '../../utils/formatPrice';
import ProductVisual from './ProductVisual';

function ProductDetailPanel({ product, onClose, addToCart }) {
  return (
    <div className="detail-backdrop" role="presentation" onClick={onClose}>
      <aside className="detail-panel" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
        <button className="close-button" onClick={onClose}>Close</button>
        <ProductVisual product={product} large />
        <span className="pill">{product.category}</span>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="detail-meta">
          <strong>{formatPrice(product.price)}</strong>
          <span>{product.is_active ? 'Available today' : 'Currently hidden'}</span>
        </div>
        <button className="primary-button full-width" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </aside>
    </div>
  );
}

export default ProductDetailPanel;
