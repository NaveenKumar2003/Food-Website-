// server.js

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;

// Dummy user data (replace with your actual user database)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, 'secret_key');
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
