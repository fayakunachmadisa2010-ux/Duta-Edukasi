// ProductDetailPage.jsx - Single product view
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import { useCart } from '../context/CartContext';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    api.getProduct(id)
      .then(res => setProduct(res.data))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) return (
    <div className="container-main py-20 animate-pulse">
      <div className="h-6 bg-neutral-200 rounded w-48 mb-8" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="aspect-square bg-neutral-200 rounded-2xl" />
        <div className="space-y-4">
          <div className="h-8 bg-neutral-200 rounded w-3/4" />
          <div className="h-4 bg-neutral-200 rounded w-1/4" />
          <div className="h-4 bg-neutral-200 rounded w-full" />
          <div className="h-4 bg-neutral-200 rounded w-full" />
        </div>
      </div>
    </div>
  );

  if (!product) return (
    <div className="container-main py-20 text-center">
      <div className="text-5xl mb-4">😕</div>
      <h2 className="font-heading text-2xl text-neutral-700 mb-4">Produk tidak ditemukan</h2>
      <Link to="/catalog" className="btn-primary">← Kembali ke Katalog</Link>
    </div>
  );

  return (
    <div className="py-10 bg-neutral-50 dark:bg-neutral-950 min-h-screen transition-colors">
      <div className="container-main">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
          <Link to="/" className="hover:text-primary">Beranda</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-primary">Katalog</Link>
          <span>/</span>
          <span className="text-neutral-800">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/600x600?text=Produk'; }}
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <span className="inline-block bg-primary-100 text-primary text-sm font-medium px-3 py-1 rounded-full w-fit mb-3">
              {product.categoryLabel}
            </span>
            <h1 className="font-heading text-3xl text-neutral-900 dark:text-white mb-4">{product.name}</h1>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">{product.description}</p>

            <div className="bg-primary-50 rounded-2xl p-4 mb-6">
              <p className="text-sm text-neutral-600">Harga</p>
              <p className="font-body font-bold text-primary text-xl">Hubungi kami untuk penawaran harga terbaik</p>
              <p className="text-xs text-neutral-500 mt-1">Harga grosir tersedia untuk pembelian dalam jumlah besar</p>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="text-sm font-medium text-neutral-700 block mb-2">Jumlah ({product.unit})</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 rounded-xl border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 hover:border-primary hover:text-primary transition-colors"
                >
                  −
                </button>
                <span className="w-16 text-center font-semibold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 rounded-xl border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 hover:border-primary hover:text-primary transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={handleAdd} className={`btn-primary flex-1 ${added ? 'bg-green-600 hover:bg-green-700' : ''}`}>
                {added ? '✅ Ditambahkan ke Keranjang' : '🛒 Tambah ke Keranjang'}
              </button>
              <Link to="/cart" className="btn-outline flex-1 text-center">
                Lihat Keranjang
              </Link>
            </div>

            {/* Contact */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
              <p className="text-sm text-neutral-500 mb-3">Butuh info lebih lanjut?</p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Tanya via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
