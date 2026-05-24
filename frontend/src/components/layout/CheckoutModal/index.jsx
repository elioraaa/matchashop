import { useState } from 'react';
import { formatPrice } from '../../../utils/formatPrice';
import { createOrderService } from '../../../services/order';
import './CheckoutModal.css';

function CheckoutModal({ cart, total, onClose, onComplete }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        pickupDate: '',
        pickupTime: '',
    });
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
        } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Invalid phone number';
        }

        if (!formData.pickupDate) {
            newErrors.pickupDate = 'Pickup date is required';
        }

        if (!formData.pickupTime) {
            newErrors.pickupTime = 'Pickup time is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setApiError('');

        try {
            await createOrderService({
                customerName: formData.name,
                email: formData.email,
                phone: formData.phone,
                pickupDate: formData.pickupDate,
                pickupTime: formData.pickupTime,
                items: cart.map((item) => ({
                    productId: item.id,
                    quantity: item.quantity,
                    price: Number(item.price),
                })),
            });

            setOrderComplete(true);
        } catch (error) {
            setApiError('Unable to submit your order. Please try again.');
            setIsSubmitting(false);
        }
    };

    if (orderComplete) {
        return (
            <div className="app-modal-overlay" onClick={onClose}>
                <div className="app-modal-content checkout-modal success-modal" onClick={e => e.stopPropagation()}>
                    <div className="success-content">
                        <div className="success-icon">✓</div>
                        <h2>Order Confirmed!</h2>
                        <p>Thank you for your order, {formData.name}!</p>
                        <p className="pickup-info">
                            Your matcha will be ready for pickup on{' '}
                            <strong>{formData.pickupDate} at {formData.pickupTime}</strong>
                        </p>
                        <p className="confirmation-email">
                            A confirmation email has been sent to {formData.email}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Get minimum date (today)
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="app-modal-overlay" onClick={onClose}>
            <div className="app-modal-content checkout-modal" onClick={e => e.stopPropagation()}>
                <button type="button" className="modal-close" onClick={onClose} aria-label="Close checkout">&times;</button>

                <div className="checkout-header">
                    <h2>Checkout</h2>
                    <p>Complete your order for pickup</p>
                </div>

                <div className="checkout-summary">
                    <h4>Order Summary</h4>
                    <div className="summary-items">
                        {cart.map(item => (
                            <div key={item.id} className="summary-item">
                                <span>{item.name} x{item.quantity}</span>
                                <span>{formatPrice(Number(item.price) * item.quantity)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="summary-total">
                        <span>Total</span>
                        <strong>{formatPrice(total)}</strong>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="checkout-form">
                    <div className="checkout-form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className={errors.name ? 'error' : ''}
                        />
                        {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>

                    <div className="checkout-form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className={errors.email ? 'error' : ''}
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    <div className="checkout-form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="1234567890"
                            className={errors.phone ? 'error' : ''}
                        />
                        {errors.phone && <span className="error-text">{errors.phone}</span>}
                    </div>

                    <div className="form-row">
                        <div className="checkout-form-group">
                            <label htmlFor="pickupDate">Pickup Date</label>
                            <input
                                type="date"
                                id="pickupDate"
                                name="pickupDate"
                                min={today}
                                value={formData.pickupDate}
                                onChange={handleChange}
                                className={errors.pickupDate ? 'error' : ''}
                            />
                            {errors.pickupDate && <span className="error-text">{errors.pickupDate}</span>}
                        </div>

                        <div className="checkout-form-group">
                            <label htmlFor="pickupTime">Pickup Time</label>
                            <select
                                id="pickupTime"
                                name="pickupTime"
                                value={formData.pickupTime}
                                onChange={handleChange}
                                className={errors.pickupTime ? 'error' : ''}
                            >
                                <option value="">Select time</option>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="1:00 PM">1:00 PM</option>
                                <option value="2:00 PM">2:00 PM</option>
                                <option value="3:00 PM">3:00 PM</option>
                                <option value="4:00 PM">4:00 PM</option>
                                <option value="5:00 PM">5:00 PM</option>
                            </select>
                            {errors.pickupTime && <span className="error-text">{errors.pickupTime}</span>}
                        </div>
                    </div>

                    {apiError ? <div className="error-text checkout-error">{apiError}</div> : null}
                    <button type="submit" className="checkout-submit-button full-width" disabled={isSubmitting}>
                        {isSubmitting ? 'Processing...' : `Complete Order - ${formatPrice(total)}`}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CheckoutModal;
