// CatalogPage.jsx - Product catalog with category filtering
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { api } from '../services/api';
import ProductCard from '../components/ProductCard';

const categoryOptions = [
  { id: '', label: 'Semua Produk', icon: '🛒' },
  { id: 'office-supplies', label: 'Perlengkapan Kantor', icon: '🗂️' },
  { id: 'school-supplies', label: 'Perlengkapan Sekolah', icon: '📚' },
  { id: 'educational-equipment', label: 'Alat Peraga Pendidikan', icon: '🔬' },
  { id: 'public-facility', label: 'Fasilitas Umum', icon: '🏛️' },
  { id: 'safety-equipment', label: 'Peralatan Keselamatan', icon: '🧯' }
];

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const activeCategory = searchParams.get('category') || '';

  useEffect(() => {
    setLoading(true);
    api.getProducts(activeCategory)
      .then(res => setProducts(res.data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, [activeCategory]);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );

  const setCategory = (id) => {
    if (id) setSearchParams({ category: id });
    else setSearchParams({});
  };

  return (
    <div className="py-10 bg-neutral-50 dark:bg-neutral-950 min-h-screen transition-colors">
      <div className="container-main">
        {/* Header */}
        <div className="mb-8">
          <h1 className="section-title mb-2">Katalog Produk</h1>
          <p className="text-neutral-500 dark:text-neutral-400">Temukan produk yang Anda butuhkan, tambah ke keranjang, lalu kirim permintaan penawaran.</p>
        </div>

        {/* Search */}
        <div className="relative mb-6 max-w-md">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Cari produk..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categoryOptions.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-primary hover:text-primary'
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="card overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-neutral-200" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-neutral-200 rounded w-1/3" />
                  <div className="h-4 bg-neutral-200 rounded w-2/3" />
                  <div className="h-3 bg-neutral-200 rounded w-full" />
                  <div className="h-3 bg-neutral-200 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="font-body font-semibold text-neutral-700 mb-2">Produk tidak ditemukan</h3>
            <p className="text-neutral-500 dark:text-neutral-400">Coba kata kunci lain atau pilih kategori berbeda.</p>
          </div>
        ) : (
          <>
            <p className="text-neutral-500 text-sm mb-4">{filtered.length} produk ditemukan</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
