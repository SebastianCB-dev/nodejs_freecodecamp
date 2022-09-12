const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, there 😊!');
});

const PORT = 9999;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});