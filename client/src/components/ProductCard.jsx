// ProductCard.jsx - Dark mode aware
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const categoryColors = {
  'office-supplies': 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  'school-supplies': 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  'educational-equipment': 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  'public-facility': 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  'safety-equipment': 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300'
};

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="card overflow-hidden group flex flex-col">
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Produk'; }}
        />
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full w-fit ${categoryColors[product.category] || 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'}`}>
          {product.categoryLabel}
        </span>

        <Link to={`/product/${product.id}`}>
          <h3 className="font-body font-semibold text-neutral-800 dark:text-neutral-100 mt-2 mb-1 hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2 flex-1 mb-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-neutral-100 dark:border-neutral-800">
          <span className="text-primary font-semibold text-sm">Hubungi untuk harga</span>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-all ${
              added
                ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'
                : 'bg-primary-50 text-primary hover:bg-primary hover:text-white dark:bg-primary-900/30 dark:hover:bg-primary'
            }`}
          >
            {added ? (
              <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Ditambahkan</>
            ) : (
              <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>Tambah</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
