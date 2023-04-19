const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<div style="text-align: center">');
  res.write('<h1>HELLO WORLD AND WELCOME TO WSD.</h1>');
  res.write('<p>TODAY IS A VERY GOOD DAY FOR US ALL. THANK YOU</p>');
  res.write('</div>');
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

