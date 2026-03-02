// ContactPage.jsx - Contact form and company contact info
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show success (no dedicated contact route in backend)
    setSent(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-950 py-16 transition-colors">
        <div className="container-main text-center">
          <h1 className="section-title mb-4">Hubungi Kami</h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-xl mx-auto">
            Punya pertanyaan atau ingin meminta penawaran? Tim kami siap
            membantu Anda.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl text-neutral-900 mb-6">
                Informasi Kontak
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ),
                    label: "Alamat",
                    value:
                      "Jl. Contoh No. 123, Jakarta Selatan, DKI Jakarta 12345",
                  },
                  {
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    ),
                    label: "Telepon",
                    value: "+62 812-3456-7890",
                    href: "tel:+6281234567890",
                  },
                  {
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    ),
                    label: "Email",
                    value: "dutaedukasiduta@gmail.com",
                    href: "mailto:fayakunachmadisa2010@gmail.com",
                  },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-50 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-0.5">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="font-medium text-neutral-800 hover:text-primary transition-colors"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="font-medium text-neutral-800">
                          {c.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/6285290922955"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat WhatsApp Sekarang
                </a>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-neutral-100 rounded-2xl h-48 flex items-center justify-center text-neutral-400">
                <div className="text-center">
                  <div className="text-3xl mb-2">🗺️</div>
                  <p className="text-sm">Google Maps akan tampil di sini</p>
                  <p className="text-xs">
                    Ganti dengan embed iframe dari Google Maps
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-8">
              <h2 className="font-heading text-2xl text-neutral-900 mb-6">
                Kirim Pesan
              </h2>
              {sent ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">✉️</div>
                  <h3 className="font-body font-semibold text-neutral-800 mb-2">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-neutral-500">
                    Terima kasih, kami akan segera menghubungi Anda.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    {
                      key: "name",
                      label: "Nama Lengkap *",
                      type: "text",
                      placeholder: "Nama Anda",
                    },
                    {
                      key: "email",
                      label: "Email *",
                      type: "email",
                      placeholder: "email@contoh.com",
                    },
                    {
                      key: "phone",
                      label: "Nomor HP",
                      type: "tel",
                      placeholder: "0812-xxxx-xxxx",
                    },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="text-sm font-medium text-neutral-700 block mb-1">
                        {f.label}
                      </label>
                      <input
                        required={f.label.includes("*")}
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.key]}
                        onChange={(e) =>
                          setForm({ ...form, [f.key]: e.target.value })
                        }
                        className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-sm font-medium text-neutral-700 block mb-1">
                      Pesan *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Jelaskan kebutuhan Anda..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Kirim Pesan
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
