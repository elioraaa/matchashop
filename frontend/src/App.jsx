import { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import PromoMarquee from './components/layout/PromoMarquee';
import Footer from './components/layout/Footer';
import AdminLoginModal from './components/layout/AdminLoginModal';
import { seedProducts } from './data/seedProducts';
import { getMatchaProducts } from './services/matchaApi';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(seedProducts);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [apiStatus, setApiStatus] = useState('loading');
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('isAdmin') === 'true');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const loadProducts = useCallback(async () => {
    try {
      const data = await getMatchaProducts();
      const activeProducts = data.filter((product) => product.is_active !== false);
      setProducts(activeProducts.length > 0 ? activeProducts : seedProducts);
      setApiStatus('connected');
    } catch {
      setProducts(seedProducts);
      setApiStatus('offline');
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    getMatchaProducts()
      .then((data) => {
        if (!isMounted) {
          return;
        }

        const activeProducts = data.filter((product) => product.is_active !== false);
        setProducts(activeProducts.length > 0 ? activeProducts : seedProducts);
        setApiStatus('connected');
      })
      .catch(() => {
        if (!isMounted) {
          return;
        }

        setProducts(seedProducts);
        setApiStatus('offline');
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id);

      if (existing) {
        return currentCart.map((item) => (
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ));
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      setCart((currentCart) => currentCart.filter((item) => item.id !== id));
      return;
    }

    setCart((currentCart) => currentCart.map((item) => (
      item.id === id ? { ...item, quantity } : item
    )));
  };

  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleAdminLogin = () => {
    setIsAdmin(true);
    setShowAdminLogin(false);
    navigate('/admin');
  };

  const handleLogout = () => {
    setIsAdmin(false);
    navigate('/');
  };

  useEffect(() => {
    localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');
  }, [isAdmin]);

  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const shouldShowFooter = !isAdminRoute;

  return (
    <div className="app">
      {!isAdminRoute ? (
        <>
          <PromoMarquee />
          <Navbar
            cartCount={cartCount}
            isAdmin={isAdmin}
            onAdminClick={() => setShowAdminLogin(true)}
            onLogout={handleLogout}
          />
        </>
      ) : (
        <div className="admin-topbar">
          <button type="button" className="primary-button admin-logout-button" onClick={handleLogout}>
            Log out
          </button>
        </div>
      )}

      {showAdminLogin && (
        <AdminLoginModal
          onClose={() => setShowAdminLogin(false)}
          onLoginSuccess={handleAdminLogin}
        />
      )}

      {apiStatus === 'offline' ? (
        <div className="api-banner">
          Backend is not connected, so demo matcha products are showing.
        </div>
      ) : null}

      <Outlet context={{
        products,
        cart,
        selectedProduct,
        setSelectedProduct,
        selectedCategory,
        setSelectedCategory,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        loadProducts,
        onLogout: handleLogout,
        isAdmin
      }} />

      {shouldShowFooter && <Footer onCategoryClick={setSelectedCategory} />}
    </div>
  );
}

export default App;
