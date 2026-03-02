// api.js - All API calls to Express backend
const BASE_URL = "https://duta-edukasi-production.up.railway.app";

export const api = {
  // Get all products, optionally filtered by category
  getProducts: async (category = "") => {
    const url = category
      ? `${BASE_URL}/products?category=${category}`
      : `${BASE_URL}/products`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Gagal memuat produk");
    return res.json();
  },

  // Get single product by ID
  getProduct: async (id) => {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) throw new Error("Produk tidak ditemukan");
    const json = await res.json();
    return json.data;
  },

  // Submit an order
  submitOrder: async (orderData) => {
    const res = await fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Gagal mengirim pesanan");
    return data;
  },
};
