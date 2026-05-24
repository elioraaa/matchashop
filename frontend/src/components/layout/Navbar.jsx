import { useNavigate, useLocation } from 'react-router-dom';

const pages = ['home', 'menu', 'about', 'cart'];

function Navbar({ cartCount, isAdmin, onAdminClick, onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    return path.slice(1);
  };

  const activePage = getCurrentPage();

  const getLabel = (page) => {
    switch (page) {
      case 'home':
        return 'Home';
      case 'menu':
        return 'Shop';
      case 'about':
        return 'About';
      case 'cart':
        return 'Cart';
      default:
        return page;
    }
  };

  return (
    <header className="site-header">
      <button className="brand" onClick={() => navigate('/')}>
        <span className="brand-mark">b</span>
        <span>MATCHA MUSE</span>
      </button>

      <nav className="nav-links" aria-label="Main navigation">
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            className={activePage === page ? 'nav-link active' : 'nav-link'}
            aria-current={activePage === page ? 'page' : undefined}
            onClick={() => navigate(page === 'home' ? '/' : `/${page}`)}
          >
            {getLabel(page)}
            {page === 'cart' && cartCount > 0 ? <span className="cart-badge">{cartCount}</span> : null}
          </button>
        ))}
        {isAdmin ? (
          <span className="admin-nav-actions">
            <button
              className={activePage === 'admin' ? 'nav-link login-link active' : 'nav-link login-link'}
              onClick={() => navigate('/admin')}
            >
              Admin
            </button>
            <button className="nav-link logout-link" onClick={onLogout}>
              Logout
            </button>
          </span>
        ) : (
          <button className="nav-link login-link" onClick={onAdminClick}>
            Login
          </button>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
