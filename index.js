const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Mrudula');
});

const PORT = 7900;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});