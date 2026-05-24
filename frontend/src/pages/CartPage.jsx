import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import ProductVisual from '../components/product/ProductVisual';
import CheckoutModal from '../components/layout/CheckoutModal';
import { formatPrice } from '../utils/formatPrice';

function CartPage() {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, clearCart } = useOutletContext();
  const [showCheckout, setShowCheckout] = useState(false);
  const total = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  const handleCheckoutComplete = () => {
    clearCart();
    setShowCheckout(false);
    navigate('/');
  };

  return (
    <main className="page-shell">
      <section className="page-intro compact">
        <p className="eyebrow">your cart</p>
        <h1>Your matcha order.</h1>
      </section>

      {cart.length === 0 ? (
        <section className="empty-state">
          <h2>Your cart is peacefully empty.</h2>
          <p>Add a drink or product from the shop and it will appear here.</p>
          <button className="primary-button" onClick={() => navigate('/menu')}>Go to Shop</button>
        </section>
      ) : (
        <section className="cart-layout">
          <div className="cart-list">
            {cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <ProductVisual product={item} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{formatPrice(item.price)}</p>
                </div>
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
              </article>
            ))}
          </div>

          <aside className="checkout-card">
            <p className="eyebrow">summary</p>
            <div className="summary-row">
              <span>Subtotal</span>
              <strong>{formatPrice(total)}</strong>
            </div>
            <div className="summary-row">
              <span>Pickup</span>
              <strong>Free</strong>
            </div>
            <hr />
            <div className="summary-row total">
              <span>Total</span>
              <strong>{formatPrice(total)}</strong>
            </div>
            <button className="primary-button full-width" onClick={() => setShowCheckout(true)}>
              Checkout Now
            </button>
          </aside>
        </section>
      )}

      {showCheckout && (
        <CheckoutModal
          cart={cart}
          total={total}
          onClose={() => setShowCheckout(false)}
          onComplete={handleCheckoutComplete}
        />
      )}
    </main>
  );
}

export default CartPage;
