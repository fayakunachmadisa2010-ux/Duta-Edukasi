// orderController.js - Handle order submissions
const fs = require('fs');
const path = require('path');

const ordersPath = path.join(__dirname, '../data/orders.json');

// POST create new order
const createOrder = (req, res) => {
  try {
    const { customerName, phone, email, address, items, notes } = req.body;
    
    // Basic validation
    if (!customerName || !phone || !items || items.length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Nama, nomor HP, dan item pesanan wajib diisi' 
      });
    }
    
    // Read existing orders
    const data = fs.readFileSync(ordersPath, 'utf8');
    const orders = JSON.parse(data);
    
    // Create new order object
    const newOrder = {
      id: `ORD-${Date.now()}`,
      customerName,
      phone,
      email: email || '',
      address: address || '',
      notes: notes || '',
      items,
      status: 'pending',
      timestamp: new Date().toISOString()
    };
    
    // Add to orders array
    orders.push(newOrder);
    
    // Write back to file
    fs.writeFileSync(ordersPath, JSON.stringify(orders, null, 2));
    
    res.status(201).json({ 
      success: true, 
      message: 'Permintaan penawaran berhasil dikirim! Tim kami akan menghubungi Anda segera.',
      orderId: newOrder.id
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Gagal menyimpan pesanan' });
  }
};

module.exports = { createOrder };
