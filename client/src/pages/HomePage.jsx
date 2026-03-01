// HomePage.jsx - Dark mode aware
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import ProductCard from '../components/ProductCard';
import logo from '../assets/logo.png';

const categories = [
  { id: 'office-supplies', label: 'Perlengkapan Kantor', icon: '🗂️', description: 'ATK, kertas, pulpen, tinta, ordner.', color: 'from-blue-50 to-blue-100 border-blue-200 dark:from-blue-900/20 dark:to-blue-900/30 dark:border-blue-800' },
  { id: 'school-supplies', label: 'Perlengkapan Sekolah', icon: '📚', description: 'Buku tulis, tas, spidol, alat siswa.', color: 'from-green-50 to-green-100 border-green-200 dark:from-green-900/20 dark:to-green-900/30 dark:border-green-800' },
  { id: 'educational-equipment', label: 'Alat Peraga Pendidikan', icon: '🔬', description: 'Globe, papan tulis, kit IPA lengkap.', color: 'from-purple-50 to-purple-100 border-purple-200 dark:from-purple-900/20 dark:to-purple-900/30 dark:border-purple-800' },
  { id: 'public-facility', label: 'Fasilitas Umum', icon: '🏛️', description: 'Kursi, tempat sampah, perlengkapan publik.', color: 'from-orange-50 to-orange-100 border-orange-200 dark:from-orange-900/20 dark:to-orange-900/30 dark:border-orange-800' },
  { id: 'safety-equipment', label: 'Peralatan Keselamatan', icon: '🧯', description: 'APAR, helm safety, perlengkapan K3 SNI.', color: 'from-red-50 to-red-100 border-red-200 dark:from-red-900/20 dark:to-red-900/30 dark:border-red-800' }
];

const whyUs = [
  { icon: '✅', title: 'Produk Berkualitas', desc: 'Semua produk dari supplier terpercaya dan tersertifikasi.' },
  { icon: '🚚', title: 'Distribusi Luas', desc: 'Menjangkau seluruh Indonesia dengan pengiriman terjadwal.' },
  { icon: '💼', title: 'Spesialis B2B', desc: 'Melayani sekolah, kantor, pemerintah, dan organisasi.' },
  { icon: '📞', title: 'Konsultasi Gratis', desc: 'Tim kami siap membantu memilih produk yang tepat.' }
];

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    api.getProducts().then(res => setFeaturedProducts(res.data.slice(0, 4))).catch(() => {});
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 pt-16 pb-20 transition-colors duration-300">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary-100 dark:bg-primary-900/40 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                🇮🇩 Distributor Terpercaya di Indonesia
              </span>
              <h1 className="section-title text-4xl md:text-5xl mb-6">
                Solusi Lengkap{' '}
                <span className="text-primary">Perlengkapan</span>{' '}
                untuk Instansi Anda
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-8">
                Duta Edukasi menyediakan perlengkapan kantor, sekolah, alat pendidikan, fasilitas umum, dan peralatan keselamatan dengan kualitas terjamin.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/catalog" className="btn-primary text-base px-8 py-4">
                  Lihat Katalog
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/contact" className="btn-outline text-base px-8 py-4">Hubungi Kami</Link>
              </div>

              <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-neutral-200 dark:border-neutral-800">
                {[
                  { num: '500+', label: 'Produk' },
                  { num: '1000+', label: 'Pelanggan' },
                  { num: '10+', label: 'Tahun' },
                  { num: '34', label: 'Provinsi' }
                ].map((s, i) => (
                  <div key={i}>
                    <div className="font-heading font-bold text-3xl text-primary">{s.num}</div>
                    <div className="text-neutral-500 dark:text-neutral-400 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Logo as hero visual */}
            <div className="hidden lg:flex items-center justify-center">
              <img src={logo} alt="Duta Edukasi" className="w-80 h-80 object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 bg-white dark:bg-neutral-950 transition-colors">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title">Kategori Produk Kami</h2>
            <p className="section-subtitle mx-auto">Lima kategori untuk memenuhi semua kebutuhan instansi Anda</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {categories.map(cat => (
              <Link
                key={cat.id}
                to={`/catalog?category=${cat.id}`}
                className={`bg-gradient-to-br ${cat.color} border rounded-2xl p-5 hover:-translate-y-1 transition-all duration-200 hover:shadow-md`}
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-body font-semibold text-neutral-800 dark:text-neutral-100 text-sm mb-1">{cat.label}</h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900 transition-colors">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title">Mengapa Memilih Duta Edukasi?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-body font-semibold text-neutral-800 dark:text-neutral-100 mb-2">{item.title}</h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      {featuredProducts.length > 0 && (
        <section className="py-20 bg-white dark:bg-neutral-950 transition-colors">
          <div className="container-main">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="section-title">Produk Pilihan</h2>
                <p className="section-subtitle">Beberapa produk unggulan kami</p>
              </div>
              <Link to="/catalog" className="btn-outline hidden sm:flex">Lihat Semua →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container-main text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">Siap Memulai Pengadaan?</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
            Kirimkan permintaan penawaran sekarang dan tim kami akan segera menghubungi Anda.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/catalog" className="btn-primary bg-accent hover:bg-accent-dark text-base px-8 py-4">
              Buat Permintaan Penawaran
            </Link>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors text-base">
              WhatsApp Langsung
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
