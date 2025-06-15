const express = require('express');
const app = express();

app.use(express.json());

app.get('/products', (req, res) => {
  res.json([{ id: 1, name: 'Sample Product' }]);
});

module.exports = app;
