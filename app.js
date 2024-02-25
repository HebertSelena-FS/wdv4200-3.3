const http = require('http');

// require for the .env file to call the variables defined
require('dotenv').config();

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // Simple operation as per instructions
    res.end(`This is my simple app. The secret is visable in the repo: ${process.env.SECRET_KEY}`);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});