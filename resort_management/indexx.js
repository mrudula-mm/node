/* eslint-disable no-console */
const express = require('express');

const app = express();
const mysql = require('mysql2');
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(cors());
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mrudula@555',
  database: 'resort_management',
  insecureAuth: true,
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.post('/signup', jsonParser, (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { age } = req.body;
  const { gender } = req.body;
  const { address } = req.body;
  // eslint-disable-next-line camelcase
  const { id_card_number } = req.body;
  const { username } = req.body;
  const { password } = req.body;

  // eslint-disable-next-line camelcase
  const qr = `insert into guest(id,name,age,gender,address,id_card_number,username,password) values('${id}','${name}','${age}','${gender}','${address}','${id_card_number}','${username}','${password}')`;
  con.query(qr, (err, result) => {
    if (err) {
      // console.log(err);
      res.send({ error: 'operation failed' });
    } else {
      res.send({ success: 'Operation completed' });
    }
  });
});

app.post('/login', jsonParser, (req, res) => {
  const { username } = req.body;
  const { password } = req.body;

  if (username && password) {
    const qr = `
    SELECT * FROM guest
    WHERE username = '${username}'
    AND password = '${password}';
    `;
    con.query(qr, [username, password], (err, result) => {
      if (err) {
        console.error(err);
        res.send({ error: 'Login failed' });
      } else if (result.length > 0) {
        res.send({ success: 'Login successful' });
      } else {
        res.send({ error: 'Invalid username or password' });
      }
    });
  } else {
    res.send({ error: 'Username and password are required.' });
  }
});

app.use((_req, res) => {
  // eslint-disable-next-line no-console
  console.log('Mrudula');
  res.send('Hello, world!');
});
const PORT = 3003;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
