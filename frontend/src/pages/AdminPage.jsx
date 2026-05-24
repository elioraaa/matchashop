import { Navigate, useOutletContext } from 'react-router-dom';
import MatchaDashboard from '../Admin/Matcha';

import { useState } from 'react';

function AdminPage() {
  const { loadProducts, isAdmin } = useOutletContext();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="page-shell admin-page-shell">
      <div className="admin-layout">
        <aside className="admin-aside">
          <div className="admin-aside-header">
            <span className="admin-badge">admin</span>
            <h2>Matcha Studio</h2>
            <p>Keep the shop menu fresh, update product visibility, and manage offerings fast.</p>
          </div>

          <nav className="admin-menu" aria-label="Admin navigation">
            <button
              type="button"
              className={activeTab === 'dashboard' ? 'admin-menu-item active' : 'admin-menu-item'}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <button
              type="button"
              className={activeTab === 'products' ? 'admin-menu-item active' : 'admin-menu-item'}
              onClick={() => setActiveTab('products')}
            >
              Products
            </button>
          </nav>

          <div className="admin-aside-note">
            <p>Use this space to update products quickly and keep your matcha catalog aligned with seasonal flavor drops.</p>
          </div>
        </aside>

        <section className="admin-main">
          <section className="page-intro compact admin-intro">
            <p className="eyebrow">admin studio</p>
            <h1>{activeTab === 'dashboard' ? 'Admin Dashboard' : 'Manage Product Catalog'}</h1>
            <p>
              {activeTab === 'dashboard'
                ? 'Quick overview of your matcha inventory and visibility settings.'
                : 'Edit, add, or remove items from the shop menu in one place.'}
            </p>
          </section>
          <MatchaDashboard onProductsChanged={loadProducts} showSummary={activeTab === 'dashboard'} />
        </section>
      </div>
    </main>
  );
}

export default AdminPage;
