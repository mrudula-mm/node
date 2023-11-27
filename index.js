const http = require('http');

// eslint-disable-next-line no-unused-vars
const server = http.createServer((req, res) => {
  // eslint-disable-next-line no-console
  console.log('Mrudula');
});

const PORT = 7900;

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
