import './Footer.css';

function Footer({ activePage, setActivePage, onCategoryClick }) {
    const currentYear = new Date().getFullYear();

    const handleShopClick = (category) => {
        setActivePage('menu');
        if (onCategoryClick) {
            onCategoryClick(category);
        }
    };

    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <span className="brand-mark">MM</span>
                        <span>MATCHA MUSE</span>
                    </div>
                    <p className="footer-tagline">Premium ceremonial matcha for mindful moments.</p>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Shop</h4>
                        <button onClick={() => handleShopClick(null)}>All Products</button>
                        <button onClick={() => handleShopClick('ceremonial')}>Ceremonial Grade</button>
                        <button onClick={() => handleShopClick('culinary')}>Culinary Grade</button>
                        <button onClick={() => handleShopClick('accessories')}>Accessories</button>
                    </div>

                    <div className="footer-column">
                        <h4>Company</h4>
                        <button onClick={() => setActivePage('about')}>About Us</button>
                        <button onClick={() => setActivePage('about')}>Our Story</button>
                        <button onClick={() => setActivePage('about')}>Sustainability</button>
                    </div>

                    <div className="footer-column">
                        <h4>Support</h4>
                        <button onClick={() => setActivePage('about')}>FAQ</button>
                        <button onClick={() => setActivePage('about')}>Shipping</button>
                        <button onClick={() => setActivePage('about')}>Returns</button>
                        <button onClick={() => setActivePage('about')}>Contact</button>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-social">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
                    </div>
                    <p className="copyright">
                        © {currentYear} Matcha Muse. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;