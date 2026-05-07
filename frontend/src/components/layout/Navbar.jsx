import { useNavigate, useLocation } from 'react-router-dom';

const pages = ['home', 'menu', 'about', 'cart'];

function Navbar({ cartCount, isAdmin, onAdminClick }) {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    return path.slice(1);
  };

  const activePage = getCurrentPage();

  const handleAdminClick = () => {
    if (isAdmin) {
      navigate('/admin');
    } else {
      onAdminClick();
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
            className={activePage === page ? 'nav-link active' : 'nav-link'}
            onClick={() => navigate(page === 'home' ? '/' : `/${page}`)}
          >
            {page === 'menu' ? 'Shop' : page}
            {page === 'cart' && cartCount > 0 ? <span className="cart-badge">{cartCount}</span> : null}
          </button>
        ))}
        <button
          className={activePage === 'admin' ? 'nav-link active' : 'nav-link'}
          onClick={handleAdminClick}
        >
          {isAdmin ? 'Admin' : 'Login'}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
