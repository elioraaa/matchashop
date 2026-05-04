import MatchaDashboard from '../Admin/Matcha';

function AdminPage({ onProductsChanged, onLogout }) {
  return (
    <main className="page-shell">
      <div className="admin-header">
        <section className="page-intro compact">
          <p className="eyebrow">admin studio</p>
          <h1>Manage the matcha menu.</h1>
          <p>Create, update, or remove products from the backend.</p>
        </section>
        <button className="btn-logout" onClick={onLogout}>
          Logout
        </button>
      </div>
      <MatchaDashboard onProductsChanged={onProductsChanged} />
    </main>
  );
}

export default AdminPage;
