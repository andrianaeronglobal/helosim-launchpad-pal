import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import logoAsset from "@/assets/helosim-logo.png.asset.json";
import baliHero from "@/assets/bali-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Helosim — SIM Indonesia untuk Pekerja di Taiwan" },
      {
        name: "description",
        content:
          "Kartu SIM Indonesia untuk pekerja migran di Taiwan. Tidak perlu registrasi IMEI, bisa langsung pakai. Paket 10GB, 20GB, dan 50GB mulai 350 NTD per 30 hari.",
      },
      { property: "og:title", content: "Helosim — SIM Indonesia untuk Pekerja di Taiwan" },
      {
        property: "og:description",
        content:
          "Tidak perlu registrasi IMEI, bisa langsung pakai. Paket data Indonesia 10GB/350 NTD, 20GB/450 NTD, 50GB/750 NTD untuk 30 hari.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WA_NUMBER = "886986405504";

const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

const plans = [
  { name: "10 GB", days: "30 hari", price: "350", unit: "NTD", featured: false },
  { name: "20 GB", days: "30 hari", price: "450", unit: "NTD", featured: true },
  { name: "50 GB", days: "30 hari", price: "750", unit: "NTD", featured: false },
];

const steps = [
  {
    n: "01",
    title: "Pesan paketmu",
    body: "Pilih paket data yang cocok — 10GB, 20GB, atau 50GB. Bayar dalam NTD, kirim ke alamatmu di Taiwan.",
  },
  {
    n: "02",
    title: "Masukkan SIM",
    body: "Tinggal pasang di HP seperti SIM biasa. Tidak perlu registrasi IMEI, tidak perlu setting aneh-aneh.",
  },
  {
    n: "03",
    title: "Langsung pakai",
    body: "Internet langsung nyala. Video call keluarga, WhatsApp, YouTube — semua jalan tanpa antre.",
  },
];

const faqs = [
  {
    q: "Apakah benar tidak perlu registrasi IMEI?",
    a: "Benar. SIM Helosim bisa langsung dipakai begitu dipasang — tanpa registrasi IMEI, tanpa aktivasi rumit.",
  },
  {
    q: "Berapa lama paket berlaku?",
    a: "Semua paket berlaku 30 hari sejak pertama kali dipakai.",
  },
  {
    q: "Bagaimana cara bayarnya?",
    a: "Bayar dalam NTD — mudah untuk kamu yang bekerja di Taiwan. Detail pembayaran dikirim setelah pemesanan.",
  },
  {
    q: "Kapan eSIM tersedia?",
    a: "eSIM dan produk travel lainnya sedang kami siapkan. Daftarkan emailmu untuk jadi yang pertama tahu.",
  },
];

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function IndonesiaFlag({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={`overflow-hidden rounded-[3px] ring-1 ring-black/10 ${className}`} aria-hidden="true">
      <rect width="24" height="8" fill="#e0术0000" />
      <rect y="8" width="24" height="8" fill="#ffffff" />
    </svg>
  );
}

function Index() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <div className="mx-auto max-w-6xl px-6">
        {/* Nav */}
        <header className="flex items-center justify-between py-5">
          <a href="#" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Helosim" className="h-9 w-9 rounded-full" />
            <span className="font-display text-xl font-extrabold tracking-tight">
              HELO<span className="text-brand-red">SIM</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#paket" className="transition-colors hover:text-foreground">
              Paket
            </a>
            <a href="#cara" className="transition-colors hover:text-foreground">
              Cara Kerja
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
          </nav>
          <a
            href={waLink("Halo Helosim, saya mau pesan paket SIM Indonesia.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-brand-green/30 transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="size-4" />
            Pesan Sekarang
          </a>
        </header>

        {/* Hero */}
        <section className="grid items-center gap-12 py-10 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold text-secondary-foreground">
              <span className="size-2 rounded-full bg-brand-red" />
              SIM Indonesia · Untuk pekerja di Taiwan
            </div>
            <h1 className="mt-6 font-display text-5xl font-black leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Internet langsung{" "}
              <span className="relative inline-block">
                <span className="absolute -inset-1 -rotate-2 rounded-2xl bg-brand-yellow/70" />
                <span className="relative">nyala.</span>
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Kartu SIM Indonesia yang langsung aktif begitu dipasang. Video call
              keluarga di kampung tanpa khawatir kuota habis atau IMEI diblokir.
            </p>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-2xl bg-brand-red/10 px-5 py-3 ring-1 ring-brand-red/20">
              <span className="size-2.5 rounded-full bg-brand-red" />
              <span className="text-sm font-bold text-brand-red sm:text-base">
                Tidak perlu registrasi IMEI, bisa langsung pakai
              </span>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={waLink("Halo Helosim, saya mau pesan paket SIM Indonesia.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 font-display text-base font-bold text-primary-foreground shadow-lg shadow-brand-green/30 transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="size-5" />
                Pesan Sekarang
              </a>
              <a
                href="#cara"
                className="rounded-full border border-border bg-card px-6 py-3.5 text-base font-semibold transition-colors hover:bg-secondary"
              >
                Cara Kerja
              </a>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
              <div>
                <div className="font-display text-3xl font-black text-brand-red">350</div>
                <div className="text-xs text-muted-foreground">NTD mulai dari</div>
              </div>
              <div>
                <div className="font-display text-3xl font-black text-brand-navy">30</div>
                <div className="text-xs text-muted-foreground">hari masa aktif</div>
              </div>
              <div>
                <div className="font-display text-3xl font-black text-brand-navy">0</div>
                <div className="text-xs text-muted-foreground">registrasi IMEI</div>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-6">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-brand-navy/15 ring-1 ring-border">
              <img
                src={baliHero}
                alt="Gerbang Bali Handara, destinasi wisata terkenal di Indonesia"
                width={1600}
                height={900}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-card px-5 py-3.5 shadow-xl ring-1 ring-border animate-float">
              <div className="text-xs text-muted-foreground">Rindu rumah?</div>
              <div className="font-display text-sm font-bold">Video call tanpa putus</div>
            </div>
            <div className="absolute -top-4 right-8 rounded-2xl bg-brand-yellow px-4 py-2.5 shadow-lg">
              <span className="font-display text-sm font-black text-brand-navy">eSIM segera hadir</span>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="paket" className="py-16 lg:py-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                Pilihan Paket
              </div>
              <h2 className="mt-3 flex items-center gap-4 font-display text-5xl font-black uppercase tracking-tight text-balance sm:text-6xl">
                <span className="text-4xl sm:text-5xl" role="img" aria-label="Bendera Indonesia">
                  🇮🇩
                </span>
                <span className="relative inline-block">
                  <span className="absolute -inset-1 -rotate-1 rounded-2xl bg-brand-yellow/70" />
                  <span className="relative text-brand-navy">Paket Indonesia</span>
                </span>
              </h2>
            </div>
            <span className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground">
              Kuota penuh · Masa aktif 30 hari · Tanpa registrasi IMEI
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={
                  p.featured
                    ? "relative rounded-3xl bg-brand-navy p-8 text-primary-foreground shadow-2xl shadow-brand-navy/25"
                    : "rounded-3xl bg-card p-8 shadow-lg shadow-brand-navy/5 ring-1 ring-border"
                }
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-yellow px-4 py-1 text-xs font-black text-brand-navy">
                    PALING LARIS
                  </span>
                )}
                <div className="flex items-center gap-2">
                  <span role="img" aria-label="Bendera Indonesia" className="text-base">
                    🇮🇩
                  </span>
                  <span className={p.featured ? "text-xs text-primary-foreground/60" : "text-xs text-muted-foreground"}>
                    Indonesia · {p.days}
                  </span>
                </div>
                <div className="mt-2 font-display text-3xl font-black">{p.name}</div>
                <div className="mt-5 flex items-baseline gap-1.5">
                  <span
                    className={`font-display text-5xl font-black ${p.featured ? "text-brand-yellow" : "text-brand-red"}`}
                  >
                    {p.price}
                  </span>
                  <span className={p.featured ? "text-sm font-semibold text-primary-foreground/60" : "text-sm font-semibold text-muted-foreground"}>
                    {p.unit}
                  </span>
                </div>
                <ul className={`mt-6 space-y-2.5 text-sm ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  <li className="flex items-center gap-2">
                    <span className={`size-1.5 rounded-full ${p.featured ? "bg-brand-yellow" : "bg-brand-red"}`} />
                    Kuota {p.name}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className={`size-1.5 rounded-full ${p.featured ? "bg-brand-yellow" : "bg-brand-red"}`} />
                    Masa aktif {p.days}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className={`size-1.5 rounded-full ${p.featured ? "bg-brand-yellow" : "bg-brand-red"}`} />
                    Tidak perlu registrasi IMEI
                  </li>
                </ul>
                <a
                  href={waLink(`Halo Helosim, saya mau pesan paket Indonesia ${p.name} - ${p.price} ${p.unit}, ${p.days}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    p.featured
                      ? "mt-7 block rounded-full bg-brand-yellow px-5 py-3 text-center font-display text-sm font-bold text-brand-navy transition-transform hover:-translate-y-0.5"
                      : "mt-7 block rounded-full bg-primary px-5 py-3 text-center font-display text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  }
                >
                  Pesan Paket Ini
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="cara" className="py-16 lg:py-20">
          <div className="mb-10 max-w-xl">
            <div className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
              Cara Kerja
            </div>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-balance sm:text-5xl">
              Tiga langkah. Langsung online.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="rounded-3xl bg-card p-7 shadow-lg shadow-brand-navy/5 ring-1 ring-border transition-transform hover:-translate-y-1"
                style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
              >
                <div className="font-display text-5xl font-black text-brand-red/25">{s.n}</div>
                <h3 className="mt-4 font-display text-xl font-extrabold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA / eSIM */}
        <section id="pesan" className="py-16 lg:py-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-red p-10 text-primary-foreground shadow-2xl shadow-primary/30 sm:p-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-4xl font-black tracking-tight text-balance sm:text-5xl">
                  Siap sebelum gajian berikutnya?
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-primary-foreground/85">
                  Tinggalkan email untuk pesan paket SIM dan jadi yang pertama tahu
                  saat eSIM Helosim hadir. Tanpa spam, janji.
                </p>
              </div>
              {sent ? (
                <div className="rounded-2xl bg-primary-foreground/10 p-6 text-center ring-1 ring-primary-foreground/20">
                  <p className="font-display text-lg font-bold">Terima kasih!</p>
                  <p className="mt-1 text-sm text-primary-foreground/80">
                    Kami akan menghubungimu segera.
                  </p>
                </div>
              ) : (
                <form
                  className="flex flex-col gap-3 sm:flex-row"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email.trim()) setSent(true);
                  }}
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@kamu.com"
                    className="w-full rounded-full bg-background px-5 py-3.5 text-base font-medium text-foreground outline-none ring-1 ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-brand-yellow"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-full bg-brand-navy px-6 py-3.5 font-display text-base font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Kabari Saya
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 lg:py-20">
          <h2 className="mb-10 font-display text-4xl font-black tracking-tight sm:text-5xl">
            Tanya jawab
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl bg-card p-6 ring-1 ring-border">
                <div className="font-display font-bold">{f.q}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3">
                <img src={logoAsset.url} alt="Helosim" className="h-8 w-8 rounded-full" />
                <span className="font-display text-lg font-extrabold tracking-tight">
                  HELO<span className="text-brand-red">SIM</span>
                </span>
              </div>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Internet Indonesia untuk perantau. SIM fisik hari ini, eSIM dan
                produk travel lainnya segera hadir.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium text-muted-foreground">
              <a href="#paket" className="transition-colors hover:text-foreground">Paket</a>
              <a href="#cara" className="transition-colors hover:text-foreground">Cara Kerja</a>
              <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
            </div>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">© 2026 Helosim. Dibuat untuk para perantau.</p>
        </footer>
      </div>
    </div>
  );
}
