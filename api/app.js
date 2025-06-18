const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.json());

app.get('/products', (req, res) => {
  res.json([{ id: 1, name: 'Sample Product' }]);
});

app.post('/save', (req, res) => {
  const dir = path.join(__dirname, 'data');

  // Create the directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const filePath = path.join(dir, 'message.txt');
  fs.writeFileSync(filePath, 'Hello Persistent Volume!');
  res.send('Data saved.');
});

module.exports = app;
