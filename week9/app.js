const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const secret = 'mysecret';

// Login
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username === 'admin' && password === '1234') {
        const token = jwt.sign(
            { username: username },
            secret,
            { expiresIn: '1h' }
        );

        res.json({ token: token });

    } else {
        res.send('Invalid Username or Password');
    }
});

// Protected Route
app.get('/profile', (req, res) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.send('Access Denied');
    }

    const token = authHeader.split(' ')[1];

    try {
        const data = jwt.verify(token, secret);

        res.send('Welcome ' + data.username);

    } catch (error) {
        res.send('Invalid Token');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});