// AboutPage.jsx - Company profile, vision, mission, values
export default function AboutPage() {
  const values = [
    { icon: '🤝', title: 'Kepercayaan', desc: 'Kami membangun hubungan jangka panjang dengan pelanggan berdasarkan transparansi dan kejujuran.' },
    { icon: '⭐', title: 'Kualitas', desc: 'Setiap produk dipilih dengan standar kualitas tinggi dari supplier terpercaya.' },
    { icon: '🚀', title: 'Inovasi', desc: 'Terus berinovasi untuk menghadirkan solusi pengadaan yang lebih efisien.' },
    { icon: '🌍', title: 'Integritas', desc: 'Menjalankan bisnis dengan penuh integritas dan tanggung jawab sosial.' }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-950 py-16 transition-colors">
        <div className="container-main">
          <div className="max-w-2xl">
            <span className="inline-block bg-primary-100 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Tentang Kami
            </span>
            <h1 className="section-title mb-4">Distributor Perlengkapan Terpercaya sejak 2014</h1>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Duta Edukasi lahir dari keinginan untuk memberikan solusi pengadaan yang mudah, terpercaya, dan berkualitas bagi institusi pendidikan, pemerintahan, dan bisnis di seluruh Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Kisah Kami</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Berawal dari sebuah toko kecil di Jakarta pada tahun 2014, Duta Edukasi didirikan dengan visi sederhana: menyederhanakan proses pengadaan perlengkapan bagi sekolah dan kantor.
                </p>
                <p>
                  Selama lebih dari satu dekade, kami telah berkembang menjadi distributor terpercaya yang melayani lebih dari 1.000 pelanggan di seluruh Indonesia — mulai dari sekolah dasar di pelosok desa hingga kementerian pemerintah di ibu kota.
                </p>
                <p>
                  Hari ini, Duta Edukasi bangga menjadi mitra pengadaan yang dapat diandalkan, dengan jaringan distribusi yang kuat dan komitmen pada kualitas yang tidak pernah goyah.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '2014', label: 'Tahun Berdiri' },
                  { num: '1000+', label: 'Pelanggan Aktif' },
                  { num: '500+', label: 'SKU Produk' },
                  { num: '34', label: 'Provinsi Dijangkau' }
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 text-center shadow-sm">
                    <div className="font-heading font-bold text-2xl text-primary">{s.num}</div>
                    <div className="text-neutral-500 text-sm mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-neutral-50">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-2xl mb-4">🎯</div>
              <h3 className="font-heading text-2xl text-neutral-900 mb-4">Visi</h3>
              <p className="text-neutral-600 leading-relaxed">
                Menjadi distributor perlengkapan terdepan dan terpercaya di Indonesia yang berkontribusi nyata pada kemajuan pendidikan, keselamatan kerja, dan fasilitas publik bangsa.
              </p>
            </div>
            <div className="card p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-2xl mb-4">🚀</div>
              <h3 className="font-heading text-2xl text-neutral-900 mb-4">Misi</h3>
              <ul className="space-y-3 text-neutral-600">
                {[
                  'Menyediakan produk berkualitas tinggi dengan harga yang kompetitif',
                  'Membangun jaringan distribusi yang efisien ke seluruh Indonesia',
                  'Memberikan pelayanan konsultasi profesional kepada setiap pelanggan',
                  'Memastikan ketersediaan produk yang konsisten dan pengiriman tepat waktu'
                ].map((m, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title">Nilai-Nilai Kami</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-body font-semibold text-neutral-800 mb-2">{v.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution */}
      <section className="py-16 bg-primary-50">
        <div className="container-main text-center">
          <h2 className="section-title mb-4">Kemampuan Distribusi</h2>
          <p className="text-neutral-600 text-lg mb-8 max-w-xl mx-auto">
            Dengan armada pengiriman yang handal dan mitra logistik terpercaya, kami mampu mengirimkan pesanan ke seluruh pelosok Indonesia.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: '🏙️', label: 'Pengiriman ke 34 Provinsi' },
              { icon: '📦', label: 'Pemesanan Minimum Fleksibel' },
              { icon: '⚡', label: 'Proses Cepat & Terjadwal' }
            ].map((d, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="text-3xl mb-3">{d.icon}</div>
                <p className="font-body font-medium text-neutral-700">{d.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
