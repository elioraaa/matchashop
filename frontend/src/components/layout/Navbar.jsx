const pages = ['home', 'menu', 'about', 'cart'];

function Navbar({ activePage, setActivePage, cartCount, isAdmin, onAdminClick }) {
  const handleAdminClick = () => {
    if (isAdmin) {
      setActivePage('admin');
    } else {
      onAdminClick();
    }
  };

  return (
    <header className="site-header">
      <button className="brand" onClick={() => setActivePage('home')}>
        <span className="brand-mark">b</span>
        <span>MATCHA MUSE</span>
      </button>

      <nav className="nav-links" aria-label="Main navigation">
        {pages.map((page) => (
          <button
            key={page}
            className={activePage === page ? 'nav-link active' : 'nav-link'}
            onClick={() => setActivePage(page)}
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
