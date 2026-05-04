import { useEffect, useState } from 'react';
import CreateModal from './CreateModal';
import {
  deleteMatchaProduct,
  getMatchaProducts,
  updateMatchaProduct,
} from '../../services/matchaApi';

const emptyForm = {
  name: '',
  description: '',
  price: '',
  image: '',
  category: 'Signature Matcha',
  is_active: true,
};

function MatchaDashboard({ onProductsChanged }) {
  const [products, setProducts] = useState([]);
  const [formProduct, setFormProduct] = useState(emptyForm);
  const [editingProduct, setEditingProduct] = useState(null);
  const [openCreate, setOpenCreate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await getMatchaProducts();
      setProducts(data);
      setMessage('');
    } catch {
      setMessage('Start the backend to manage real matcha products.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const closeModal = () => {
    setOpenCreate(false);
    setEditingProduct(null);
    setFormProduct(emptyForm);
  };

  const refreshAfterChange = async () => {
    await loadProducts();
    if (onProductsChanged) {
      await onProductsChanged();
    }
  };

  const handleEditOpen = (product) => {
    setEditingProduct(product);
    setFormProduct({
      name: product.name || '',
      description: product.description || '',
      price: product.price || '',
      image: product.image || '',
      category: product.category || 'Signature Matcha',
      is_active: product.is_active !== false,
    });
    setOpenCreate(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteMatchaProduct(id);
      await refreshAfterChange();
      setMessage('Product removed from the menu.');
    } catch {
      setMessage('Could not delete that product yet.');
    }
  };

  const handleToggleActive = async (product) => {
    try {
      await updateMatchaProduct(product.id, { is_active: !product.is_active });
      await refreshAfterChange();
    } catch {
      setMessage('Could not update product visibility.');
    }
  };

  return (
    <section className="admin-panel">
      <div className="admin-toolbar">
        <div>
          <p className="eyebrow">backend products</p>
          <h2>Matcha Product Dashboard</h2>
        </div>
        <button className="primary-button" onClick={() => setOpenCreate(true)}>
          New Product
        </button>
      </div>

      {message ? <div className="admin-message">{message}</div> : null}

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5">Loading products...</td>
              </tr>
            ) : null}

            {!loading && products.length === 0 ? (
              <tr>
                <td colSpan="5">No products yet. Add your first matcha item.</td>
              </tr>
            ) : null}

            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <strong>{product.name}</strong>
                  <span>{product.description}</span>
                </td>
                <td>{product.category}</td>
                <td>${Number(product.price || 0).toFixed(2)}</td>
                <td>
                  <button
                    className={product.is_active ? 'status-pill active' : 'status-pill'}
                    onClick={() => handleToggleActive(product)}
                  >
                    {product.is_active ? 'Visible' : 'Hidden'}
                  </button>
                </td>
                <td>
                  <div className="admin-actions">
                    <button onClick={() => handleEditOpen(product)}>Edit</button>
                    <button className="danger-button" onClick={() => handleDelete(product.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CreateModal
        show={openCreate}
        close={closeModal}
        formProduct={formProduct}
        setFormProduct={setFormProduct}
        editingProduct={editingProduct}
        onSaved={refreshAfterChange}
        setMessage={setMessage}
      />
    </section>
  );
}

export default MatchaDashboard;
