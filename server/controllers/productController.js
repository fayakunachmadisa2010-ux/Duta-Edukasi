// productController.js - Handle product-related logic
const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../data/products.json');

// GET all products (with optional category filter)
const getProducts = (req, res) => {
  try {
    const data = fs.readFileSync(productsPath, 'utf8');
    let products = JSON.parse(data);
    
    // Filter by category if query param provided
    const { category } = req.query;
    if (category) {
      products = products.filter(p => p.category === category);
    }
    
    res.json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Gagal memuat produk' });
  }
};

// GET single product by ID
const getProductById = (req, res) => {
  try {
    const data = fs.readFileSync(productsPath, 'utf8');
    const products = JSON.parse(data);
    const product = products.find(p => p.id === req.params.id);
    
    if (!product) {
      return res.status(404).json({ success: false, message: 'Produk tidak ditemukan' });
    }
    
    res.json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Gagal memuat produk' });
  }
};

module.exports = { getProducts, getProductById };
