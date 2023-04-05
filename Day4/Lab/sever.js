const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/sign-up', (req, res) => {
  const { email, password, username } = req.body;

  fs.readFile('users.json', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }

    const users = JSON.parse(data);

    if (users.some(user => user.email === email)) {
      res.status(400).send('Email already exists');
      return;
    }

    users.push({ email, password, username });

    fs.writeFile('users.json', JSON.stringify(users), err => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
        return;
      }

      res.status(200).send('User created successfully');
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  fs.readFile('users.json', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }

    const users = JSON.parse(data);
    const user = users.find(user => user.email === email);

    if (!user) {
      res.status(400).send('Email does not exist. Please sign up.');
      return;
    }

    if (user.password !== password) {
      res.status(400).send('Incorrect password');
      return;
    }

    res.redirect(`/profile?username=${user.username}`);
  });
});

app.get('/profile', (req, res) => {
  const { username } = req.query;

  res.send(`Welcome to your profile, ${username}!`);
});

app.use(express.static('public'));

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
