const express = require('express');
const router = express.Router();

const products = [
  { id: 1, name: 'Phone', price: 300 },
  { id: 2, name: 'Laptop', price: 1000 },
  { id: 3, name: 'Headphones', price: 50 }
];

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
