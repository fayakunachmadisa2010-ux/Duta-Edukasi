// routes/products.js - Product API routes
const express = require('express');
const router = express.Router();
const { getProducts, getProductById } = require('../controllers/productController');

router.get('/', getProducts);         // GET /api/products
router.get('/:id', getProductById);   // GET /api/products/:id

module.exports = router;
