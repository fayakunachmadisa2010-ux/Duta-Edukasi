// CartPage.jsx - Dark mode aware
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { api } from '../services/api';

export default function CartPage() {
  const { cart, removeItem, updateQuantity, clearCart } = useCart();
  const [form, setForm] = useState({ customerName: '', phone: '', email: '', address: '', notes: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!form.customerName || !form.phone) { setError('Nama dan nomor HP wajib diisi.'); return; }
    setError(''); setLoading(true);
    try {
      const res = await api.submitOrder({ ...form, items: cart.map(item => ({ id: item.id, name: item.name, quantity: item.quantity, unit: item.unit, category: item.categoryLabel })) });
      setSuccess(res); clearCart();
    } catch (e) { setError(e.message); } finally { setLoading(false); }
  };

  if (success) return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center py-20 px-4 transition-colors">
      <div className="card p-10 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">✅</div>
        <h2 className="font-heading text-2xl text-neutral-900 dark:text-white mb-3">Permintaan Terkirim!</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-2">{success.message}</p>
        <p className="text-sm text-neutral-500 mb-6">ID: <span className="font-mono font-semibold text-primary">{success.orderId}</span></p>
        <Link to="/catalog" className="btn-primary w-full">Kembali ke Katalog</Link>
      </div>
    </div>
  );

  return (
    <div className="py-10 bg-neutral-50 dark:bg-neutral-950 min-h-screen transition-colors">
      <div className="container-main">
        <h1 className="section-title mb-2">Keranjang Permintaan</h1>
        <p className="text-neutral-500 dark:text-neutral-400 mb-8">Tinjau item Anda, lalu isi form untuk mengirim permintaan penawaran.</p>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🛒</div>
            <h3 className="font-body font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Keranjang kosong</h3>
            <p className="text-neutral-500 mb-6">Tambahkan produk dari katalog.</p>
            <Link to="/catalog" className="btn-primary">Lihat Katalog</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="card overflow-hidden">
                {cart.map((item, idx) => (
                  <div key={item.id} className={`flex items-center gap-4 p-4 ${idx !== 0 ? 'border-t border-neutral-100 dark:border-neutral-800' : ''}`}>
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl flex-shrink-0"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/64x64?text=P'; }} />
                    <div className="flex-1 min-w-0">
                      <p className="font-body font-medium text-neutral-800 dark:text-neutral-100 text-sm truncate">{item.name}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{item.categoryLabel}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-lg border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:border-primary hover:text-primary text-sm">−</button>
                      <span className="w-8 text-center text-sm font-medium dark:text-white">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-lg border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:border-primary hover:text-primary text-sm">+</button>
                    </div>
                    <span className="text-xs text-neutral-500 hidden sm:block">{item.unit}</span>
                    <button onClick={() => removeItem(item.id)} className="text-neutral-400 hover:text-red-500 transition-colors p-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500 text-sm">{cart.length} jenis produk</span>
                <button onClick={clearCart} className="text-red-500 hover:text-red-600 text-sm font-medium">Kosongkan Keranjang</button>
              </div>
            </div>

            {/* Form */}
            <div className="card p-6 h-fit">
              <h3 className="font-body font-semibold text-neutral-800 dark:text-neutral-100 mb-5">Detail Pemesan</h3>
              <div className="space-y-4">
                {[
                  { key: 'customerName', label: 'Nama / Instansi *', placeholder: 'Contoh: SMA Negeri 1 Jakarta', type: 'text' },
                  { key: 'phone', label: 'Nomor HP/WA *', placeholder: '0812-3456-7890', type: 'tel' },
                  { key: 'email', label: 'Email', placeholder: 'email@instansi.com', type: 'email' },
                  { key: 'address', label: 'Alamat Pengiriman', placeholder: 'Jl. ... Kota', type: 'text' }
                ].map(f => (
                  <div key={f.key}>
                    <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 block mb-1">{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} value={form[f.key]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      className="input-field" />
                  </div>
                ))}
                <div>
                  <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 block mb-1">Catatan</label>
                  <textarea rows={3} placeholder="Spesifikasi tambahan..." value={form.notes}
                    onChange={e => setForm({ ...form, notes: e.target.value })}
                    className="input-field resize-none" />
                </div>
                {error && <p className="text-red-600 text-sm bg-red-50 dark:bg-red-900/30 rounded-xl px-3 py-2">{error}</p>}
                <button onClick={handleSubmit} disabled={loading} className="btn-primary w-full">
                  {loading ? 'Mengirim...' : '📤 Kirim Permintaan Penawaran'}
                </button>
                <p className="text-xs text-neutral-500 text-center">Tim kami akan menghubungi Anda dalam 1x24 jam</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
