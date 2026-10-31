const http = require('http');
const os = require('os');
const path = require('path');
const EventEmitter = require('events');

// Create Event
const event = new EventEmitter();

event.on('welcome', () => {
    console.log('Welcome to Node.js');
});

event.emit('welcome');

// OS Module
console.log('OS:', os.platform());
console.log('Architecture:', os.arch());

// Path Module
console.log('File Name:', path.basename(__filename));
console.log('Directory:', path.dirname(__filename));

// Create HTTP Server
const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write('<h1>Welcome to Node.js Server</h1>');
    res.write('<p>HTTP Server Created Successfully</p>');

    res.end();

});

// Start Server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});