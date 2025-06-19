const express = require('express');
const router = express.Router();

const users = [
  { id: 1, name: 'Iyanu', email: 'iyanu@example.com' },
  { id: 2, name: 'Emmanuel', email: 'emmanuel@example.com' }
];

router.get('/', (req, res) => {
  res.json(users);
});

module.exports = router;
