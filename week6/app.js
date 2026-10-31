const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(cookieParser());

app.use(session({
    secret: 'abc',
    resave: false,
    saveUninitialized: true
}));

//npm init -y
//npm install express cookie-parser express-session
// Home
app.get('/', (req, res) => {
    res.send('<h1>Session Tracking</h1><a href="/cookie">Cookie</a><br><a href="/session">Session</a>');
});

// Create Cookie
app.get('/cookie', (req, res) => {
    res.cookie('name', 'Sunny');
    res.send('Cookie Created');
});

// Create Session
app.get('/session', (req, res) => {
    req.session.name = 'Sunny';
    res.send('Session Created: ' + req.session.name);
});

// Destroy Session
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('Session Destroyed');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});