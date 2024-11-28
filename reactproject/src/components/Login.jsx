import React, { useState } from 'react';
import { Card, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Login() {
    const users = [
        { username: 'admin@gmail.com', password: 'password', role: 'admin' },
        { username: 'user1@gmail.com', password: 'pass1', role: 'user' },
        { username: 'user2@gmail.com', password: 'pass2', role: 'user' },
        { username: 'user3@gmail.com', password: 'pass3', role: 'user' },
        { username: 'user4@gmail.com', password: 'pass4', role: 'user' },
        { username: 'user5@gmail.com', password: 'pass5', role: 'user' },
    ];

    const [username, setUsername] = useState('admin@gmail.com');
    const [password, setPassword] = useState('password');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validate username and password
        if (!username || !password) {
            setError('Please fill in all fields');
            return;
        }

        // Username and password matching
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            setSuccess('Login successful!');
            setTimeout(() => {
                // Navigate to AdminDashboard if the user is an admin
                if (user.role === 'admin') {
                    navigate('/admin', { state: { username,password } }); // to admin dashboard
                } else {
                    navigate('/', { state: { username ,password} }); // to home page for regular users
                }
            }, 1000);
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100 shadow-lg' style={{ background: 'linear-gradient(90deg, #00d2ff, #E907DA)', border: 'none' }}>
            <div style={{ position: 'absolute', top: '20px', width: '100%', textAlign: 'center' }}>
                {error && <div className="alert alert-danger mx-auto" style={{ maxWidth: '400px' }}>{error}</div>}
                {success && <div className="alert alert-success mx-auto" style={{ maxWidth: '400px' }}>{success}</div>}
            </div>
            <Card className='mb-5 shadow-sm text-center' style={{ width: '23rem', height: '27rem' }}>
                <Card.Body>
                    <Card.Title>Login Form</Card.Title>
                    <Card.Text>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username" className='d-flex mt-4'>Username</label>
                                <input 
                                    type="text" 
                                    className='d-flex form-control mt-2 shadow-lg rounded-0' 
                                    id="username" 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />

                                <label htmlFor="password" className='d-flex'>Password</label>
                                <input 
                                    type="password" 
                                    className='d-flex form-control mt-2 shadow-lg rounded-0' 
                                    id="password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span className='text-primary' style={{ cursor: 'pointer' }}>Forgot Password?</span>
                            </div>
                            <Button 
                                type="submit" 
                                style={{ background: 'linear-gradient(90deg, #00d2ff, #9D06E9)', border: 'none' }} 
                                className="mb-2 mt-4 w-100 rounded-0"
                            >
                                Login
                            </Button>
                        </form>
                    </Card.Text>
                    <span>Not a Member? <span className='text-primary' style={{ cursor: 'pointer' }}>Signup now</span></span>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Login;