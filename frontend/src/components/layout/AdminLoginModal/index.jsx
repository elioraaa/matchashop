import { useState } from 'react';

function AdminLoginModal({ onClose, onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);


        const validCredentials = {
            username: 'admin',
            password: 'matcha123'
        };


        await new Promise(resolve => setTimeout(resolve, 500));

        if (username === validCredentials.username && password === validCredentials.password) {
            onLoginSuccess({ username });
        } else {
            setError('Invalid credentials. Please try again.');
        }

        setIsLoading(false);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content login-modal" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="btn-primary" disabled={isLoading}>
                        {isLoading ? 'Verifying...' : 'Login'}
                    </button>
                </form>

                <div className="modal-footer">
                    <p className="hint">Demo: admin / matcha123</p>
                </div>
            </div>
        </div>
    );
}

export default AdminLoginModal;