// routes/orders.js - Order API routes
const express = require('express');
const router = express.Router();
const { createOrder } = require('../controllers/orderController');

router.post('/', createOrder);  // POST /api/orders

module.exports = router;
