// Assuming you have 'react-router-dom' imported at the top of your file
// Login.jsx

import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5173//login', { username, password });
      const { token } = response.data;
      localStorage.setItem('token', token); // Store token in local storage
      // Optionally, you can redirect the user to another page upon successful login
      window.location.href = '/dashboard';
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>{error && <p style={{ color: 'red' }}>{error}</p>}</div>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
