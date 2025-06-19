const express = require('express');
const router = express.Router();

const orders = [
  { id: 1, userId: 1, productId: 2, quantity: 1 },
  { id: 2, userId: 2, productId: 3, quantity: 2 }
];

router.get('/', (req, res) => {
  res.json(orders);
});

module.exports = router;
