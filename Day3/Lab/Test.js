const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    // handle login endpoint
    if (reqUrl.pathname === '/') {
        const filePath = path.join(__dirname, 'home.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal server error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
    else if (req.url === '/login' && req.method === 'GET') {
        // Render the login form
        res.setHeader('Content-Type', 'text/html');
        res.write(`
      <html>
        <head>
          <title>Login</title>
        </head>
        <body>
          <h1>Login</h1>
          <form method="POST" action="/login">
            <label>Username:</label>
            <input type="text" name="username">
            <br>
            <label>Password:</label>
            <input type="password" name="password">
            <br>
            <button type="submit">Login</button>
          </form>
        </body>
      </html>
    `);
        res.end();
    }
    else if (req.url === '/login' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            // do authentication logic here with the data in the body
            const username = body.split('=')[1];
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`Welcome, ${username}!`);
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Endpoint not found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
