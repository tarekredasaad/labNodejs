const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const jsonfile=require('./users.json');

const users = [];

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);

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
    else if(req.url === '/login' && req.method === 'GET')
    {
        const filePath = path.join(__dirname, 'login.html');
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
    else if (req.url === '/login' && req.method === 'POST') {
        var body = '';
        req.on('data', chunk => {
            body += chunk.toString();
            console.log(body);
        });
        req.on('end', () => {
            
            let arr =body.split("&");
            var obj={};
            arr.reduce((prev,cur)=>
            {
                const [key,value]=cur.split("=");
                prev[key]=value;
                return prev;
            },obj);
            let existingUser = users.find(user => user.email === obj.email);
            fs.readFile('users.json', 'utf-8', (err, users) => {
                if (err) {
                  console.error(err);
                  return;
                }
              
                // Parse the JSON data
                const jsonData = JSON.parse(users);
              
                // Access an object in the JSON data
                const myObject = jsonData.obj;
              
                // Log the object to the console
                console.log(myObject);
              });
            if (!existingUser) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Email does not exist. Please sign up');
            } else if (existingUser.password !== obj.password) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Incorrect password');
            } else {
                res.writeHead(302, { 'Content-Type': 'text/plain', 'Location': `/profile?name=${existingUser.username}` });
                res.end();
            }
        });
    }

    else if(req.url === '/signup' && req.method === 'GET')
    {
        const filePath = path.join(__dirname, 'signup.html');
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
    else if (reqUrl.pathname === '/signup' && req.method === 'POST') {
        var body = '';
        req.on('data', chunk => {
            body += chunk.toString();
            console.log(body);
        });
        req.on('end', () => {
            
            let arr =body.split("&");
            var obj={};
            arr.reduce((prev,cur)=>
            {
                const [key,value]=cur.split("=");
                prev[key]=value;
                return prev;
            },obj);
            const existingUser = users.find(user => user.email === obj.email);
            if (existingUser) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Email already exists');
            } else {
                users.push(obj);

                fs.writeFile('users.json', JSON.stringify(users), err => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Internal server error');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/plain' });
                        res.end('User created successfully');
                        
                    }
                });
            }
        });
    }
    else if (reqUrl.pathname === '/profile') {
        // Profile endpoint
        const userName = reqUrl.query.name;
        if (userName) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<html><head><title>Profile</title></head><body><h1>Welcome ${userName}!</h1></body></html>`);
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Missing username parameter');
        }
    }
    else if (reqUrl.pathname.startsWith('/static/')) {
        // Static file endpoint
        const filePath = path.join(__dirname, reqUrl.pathname);
        const extname = path.extname(filePath);
        let contentType = 'text/plain';
        switch (extname) {
            case '.css':
                contentType = 'text/css';
                break;
        }
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('File not found');
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(data);
            }
        });

    }
    else {
        // Endpoint not found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Endpoint not found');
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});



