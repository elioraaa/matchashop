import { useState } from 'react';
import axios from 'axios';

function AdminLoginModal({ onClose, onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                username,
                password,
            });

            if (response.data?.success) {
                onLoginSuccess({ username });
            } else {
                setError('Invalid credentials. Please try again.');
            }
        } catch (err) {
            setError('Login failed. Please check your username and password.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="app-modal-overlay" onClick={onClose}>
            <div className="app-modal-content login-modal" onClick={e => e.stopPropagation()}>
                <button type="button" className="modal-close" onClick={onClose} aria-label="Close login">
                    &times;
                </button>

                <div className="login-modal-header">
                    <h2>Sign in</h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="login-form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username/email"
                            autoComplete="username"
                            autoFocus
                            required
                        />
                    </div>

                    <div className="login-form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            autoComplete="current-password"
                            required
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="login-submit-button" disabled={isLoading}>
                        {isLoading ? 'Verifying...' : 'Login'}
                    </button>
                </form>

                <div className="login-modal-footer">
                    <p className="hint">Demo: admin / matcha123</p>
                </div>
            </div>
        </div>
    );
}

export default AdminLoginModal;
