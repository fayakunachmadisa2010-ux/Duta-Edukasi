# 🏢 Duta Edukasi - Website Distributor

Website B2B profesional untuk Duta Edukasi, distributor perlengkapan kantor, sekolah, alat pendidikan, fasilitas umum, dan peralatan keselamatan.

---

## 🚀 Cara Menjalankan Proyek (untuk Pemula)

### Langkah 1 — Install Node.js

Pergi ke https://nodejs.org dan download versi **LTS** (yang direkomendasikan). Install seperti biasa.

Cek apakah berhasil:
```bash
node --version   # contoh output: v20.10.0
npm --version    # contoh output: 10.2.3
```

---

### Langkah 2 — Download/Clone Proyek

Taruh folder `duta-edukasi` di komputer Anda, misalnya di `C:/Projects/duta-edukasi`

---

### Langkah 3 — Install Backend (Server)

Buka terminal/command prompt, lalu jalankan:

```bash
# Masuk ke folder server
cd duta-edukasi/server

# Install semua package yang dibutuhkan
npm install
```

---

### Langkah 4 — Install Frontend (Client)

Buka terminal BARU (jangan tutup yang lama), lalu:

```bash
# Masuk ke folder client
cd duta-edukasi/client

# Install semua package yang dibutuhkan
npm install
```

---

### Langkah 5 — Jalankan Backend

Di terminal pertama (folder `server`):

```bash
npm run dev
```

Anda akan melihat:
```
✅ Server running on http://localhost:5000
```

---

### Langkah 6 — Jalankan Frontend

Di terminal kedua (folder `client`):

```bash
npm run dev
```

Anda akan melihat:
```
  ➜  Local:   http://localhost:3000/
```

---

### Langkah 7 — Buka Website

Buka browser dan pergi ke: **http://localhost:3000**

✅ Website Duta Edukasi sudah berjalan!

---

## 📁 Struktur Proyek

```
duta-edukasi/
│
├── server/                    # Backend Express.js
│   ├── server.js              # File utama server
│   ├── routes/
│   │   ├── products.js        # Route /api/products
│   │   └── orders.js          # Route /api/orders
│   ├── controllers/
│   │   ├── productController.js
│   │   └── orderController.js
│   └── data/
│       ├── products.json      # 📦 DATABASE PRODUK - edit di sini!
│       └── orders.json        # Pesanan masuk disimpan di sini
│
└── client/                    # Frontend React.js
    ├── src/
    │   ├── App.jsx            # Router utama
    │   ├── pages/             # Halaman-halaman website
    │   ├── components/        # Komponen yang dipakai ulang
    │   ├── context/           # CartContext (state keranjang)
    │   └── services/          # api.js (panggil backend)
    └── ...
```

---

## ➕ Cara Menambahkan Produk Baru

Edit file: `server/data/products.json`

Tambahkan objek baru di dalam array, contoh:

```json
{
  "id": "16",
  "name": "Nama Produk Baru",
  "description": "Deskripsi produk yang jelas dan detail.",
  "category": "office-supplies",
  "categoryLabel": "Perlengkapan Kantor",
  "price": "Hubungi Kami",
  "unit": "pcs",
  "image": "https://link-gambar-produk.jpg",
  "inStock": true
}
```

**Pilihan `category` yang tersedia:**
- `office-supplies` → Perlengkapan Kantor
- `school-supplies` → Perlengkapan Sekolah
- `educational-equipment` → Alat Peraga Pendidikan
- `public-facility` → Fasilitas Umum
- `safety-equipment` → Peralatan Keselamatan

Setelah menyimpan file, **tidak perlu restart server** — data langsung terbaca.

---

## 🌐 API Endpoints

| Method | URL | Deskripsi |
|--------|-----|-----------|
| GET | `/api/products` | Ambil semua produk |
| GET | `/api/products?category=office-supplies` | Filter per kategori |
| GET | `/api/products/:id` | Ambil satu produk |
| POST | `/api/orders` | Kirim pesanan baru |

---

## 🎨 Branding System

Berdasarkan logo Duta Edukasi:

| Elemen | Nilai | Kode Hex |
|--------|-------|----------|
| Primary | Teal/Turquoise | `#2EC4B6` |
| Accent | Orange-Red | `#E8431A` |
| Background | Off-White | `#F9FAFB` |
| Text | Dark Gray | `#111827` |
| Font Heading | Playfair Display | Google Fonts |
| Font Body | DM Sans | Google Fonts |

---

## 📞 Support

WhatsApp: +62 812-3456-7890  
Email: info@dutaedukasi.com

