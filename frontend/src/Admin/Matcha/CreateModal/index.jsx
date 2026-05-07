import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {
  createMatchaProduct,
  updateMatchaProduct,
} from '../../../services/matchaApi';

const categories = [
  'Signature Matcha',
  'Iced Matcha',
  'Hot Matcha',
  'Fruit Matcha',
  'Dessert',
  'Retail',
];

function CreateModal({
  show,
  close,
  formProduct,
  setFormProduct,
  editingProduct,
  onSaved,
  setMessage,
}) {
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormProduct((currentProduct) => ({
      ...currentProduct,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      ...formProduct,
      price: Number(formProduct.price),
    };

    try {
      if (editingProduct) {
        await updateMatchaProduct(editingProduct.id, payload);
        setMessage('Matcha product updated.');
      } else {
        await createMatchaProduct(payload);
        setMessage('New matcha product created.');
      }

      await onSaved();
      close();
    } catch {
      setMessage('Could not save the product. Check that the backend is running.');
    }
  };

  return (
    <Modal show={show} onHide={close} centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>{editingProduct ? 'Edit Matcha Product' : 'Create Matcha Product'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="productName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={formProduct.name}
              onChange={handleChange}
              type="text"
              placeholder="e.g., Strawberry Cloud Matcha"
              required
              autoFocus
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="productDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              value={formProduct.description}
              onChange={handleChange}
              as="textarea"
              rows={3}
              placeholder="Short, tasty description for the product card."
              required
            />
          </Form.Group>

          <div className="form-grid">
            <Form.Group className="mb-3" controlId="productPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="price"
                value={formProduct.price}
                onChange={handleChange}
                type="number"
                step="0.01"
                min="0"
                placeholder="5.90"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="productCategory">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={formProduct.category}
                onChange={handleChange}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="productImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              name="image"
              value={formProduct.image}
              onChange={handleChange}
              type="url"
              placeholder="You can add real photos later"
            />
          </Form.Group>

          <Form.Check
            name="is_active"
            checked={formProduct.is_active}
            onChange={handleChange}
            type="switch"
            id="productActive"
            label="Show this product on the public menu"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={close}>
            Cancel
          </Button>
          <Button className="modal-save-button" type="submit">
            {editingProduct ? 'Save Changes' : 'Create Product'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default CreateModal;
