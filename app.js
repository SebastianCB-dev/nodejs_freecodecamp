const http = require('http')

const server = http.createServer((req, res) => {
  console.log(`===> req (solicitud)`);
  console.log(`URL: ${req.url}`);
  console.log(`Method: ${req.method}`);
  console.log(req.headers);
  res.end('Hello, world!');
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`El servidor esta escuchando en el puerto: ${PORT} para ir: http://localhost:${PORT}`);
});