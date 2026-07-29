import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CountUpNumber } from "@/components/site/CountUpNumber";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { kampungs, umkms, culinaries, stats } from "@/data/mock";
import heroImg from "@/assets/hero-sosromenduran.jpg";
import batikCircle1 from "@/assets/decor/batik-circle-1.png";
import batikCircle2 from "@/assets/decor/batik-circle-2.png";
import wordmark from "@/assets/wordmark-bergandeng-tengen.svg";
import kampungImg from "@/assets/kampung-1.jpg";
import culinaryImg from "@/assets/culinary-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bergandeng Tengen — Wisata Kelurahan Sosromenduran Yogyakarta" },
      { name: "description", content: "Portal wisata resmi Kelurahan Sosromenduran, Yogyakarta. Jelajahi kampung heritage, UMKM, kuliner khas, dan event budaya." },
      { property: "og:title", content: "Bergandeng Tengen — Sosromenduran" },
      { property: "og:description", content: "Discover the Hidden Gems of Sosromenduran." },
    ],
  }),
  component: Home,
});

// Gabungan featured UMKM + Kuliner buat landing page
const featuredEconomy = [
  ...umkms.slice(0, 2).map((u) => ({ slug: u.slug, name: u.name, category: u.category, photo: u.photo, desc: u.description })),
  ...culinaries.slice(0, 1).map((c) => ({ slug: c.slug, name: c.name, category: "Kuliner", photo: c.photo, desc: c.description })),
];

const BEAUTY_ITEMS = [
  { type: "image" as const, src: kampungImg, caption: "Gang-gang kampung yang hidup" },
  { type: "quote" as const, dark: true, text: '"Sosromenduran itu Jogja dalam versi paling jujur — ramai, ramah, dan penuh cerita."' },
  { type: "image" as const, src: culinaryImg, caption: "Cita rasa yang tak lekang waktu" },
  { type: "quote" as const, dark: false, text: '"Setiap gang punya mural, setiap warung punya cerita turun-temurun."' },
  { type: "image" as const, src: kampungImg, caption: "Warna-warni mural kampung" },
  { type: "quote" as const, dark: true, text: '"Di sini, sejarah dan kehidupan sehari-hari berjalan berdampingan."' },
];

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Sosromenduran" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          <img
            src={batikCircle1}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-54 -left-34 h-80 w-80 md:h-[28rem] md:w-[28rem] lg:h-[34rem] lg:w-[34rem] opacity-50 motion-safe:animate-[spinSlow_60s_linear_infinite]"
          />
          <img
            src={batikCircle2}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-58 -right-38 h-80 w-80 md:h-[28rem] md:w-[28rem] lg:h-[34rem] lg:w-[34rem] opacity-70 motion-safe:animate-[spinSlowReverse_80s_linear_infinite]"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-24 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <Badge className="mb-5 bg-white/15 text-white border-white/30 backdrop-blur">
              Kalurahan Sosromenduran, Yogyakarta
            </Badge>
            <img
              src={wordmark}
              alt="Bergandeng Tengen 2026"
              className="mx-auto w-full max-w-[280px] sm:max-w-[380px] md:max-w-[520px] lg:max-w-[620px]"
            />
            <p className="mt-5 text-lg md:text-4xl text-white/85 mx-auto md:whitespace-nowrap w-fit italic">
              Discover the Hidden Gems of Sosromenduran
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/kampung">Jelajahi Kampung <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-white/10 border-white/40 text-white hover:bg-white/20 hover:text-white">
                <Link to="/map">Lihat Peta Wisata</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome + Stats */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-20 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Selamat Datang</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Denyut Malioboro,<br /> jiwa <span className="text-gradient-warm">kampung Jawa</span>.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Sosromenduran adalah kelurahan bersejarah di jantung Yogyakarta yang berdampingan langsung dengan Malioboro. Terdiri dari 7 kampung, kelurahan ini merangkai kisah tentang warga, budaya, kuliner, dan kreativitas UMKM yang tumbuh turun temurun.
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild variant="secondary" className="rounded-full"><Link to="/profil">Tentang Sosromenduran</Link></Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Kampung", target: stats.kampungs, decimals: 0 },
            { label: "Luas Wilayah", target: 0.49, decimals: 2, suffix: " km²" },
            { label: "Jumlah Penduduk", target: 7236, decimals: 0, prefix: "±" },
            { label: "Rukun Warga", target: 14, decimals: 0 },
          ].map((s) => (
            <Card key={s.label} className="glass border-border/60">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient-warm">
                  <CountUpNumber target={s.target} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Keindahan Wilayah — full-bleed horizontal auto-scroll */}
<section className="overflow-hidden bg-primary/5 py-16">
  <div className="mx-auto max-w-7xl px-4 md:px-8">
    <SectionHeader eyebrow="Rasakan Suasananya" title="Keindahan Sosromenduran" center />
  </div>

  <div className="relative mt-4">
    <motion.div
      className="flex w-max gap-0"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 64, ease: "linear", repeat: Infinity }}
    >
      {[...BEAUTY_ITEMS, ...BEAUTY_ITEMS].map((item, i) =>
       item.type === "image" ? (
  <div
    key={i}
    className="relative h-[420px] w-[300px] shrink-0 overflow-hidden  md:h-[460px] md:w-[340px]"
  >
    <img src={item.src} alt={item.caption} className="h-full w-full object-cover" />
  </div>
) : (
          <div
            key={i}
            className={`flex h-[420px] w-[300px] shrink-0 flex-col justify-center p-7 md:h-[460px] md:w-[340px] md:p-8 ${
              item.dark ? "bg-primary text-cream" : "bg-tertiary/15 text-foreground"
            }`}
          >
            <Quote className={`h-8 w-8 ${item.dark ? "text-gold" : "text-primary"}`} />
            <p className="mt-4 font-display text-lg italic leading-snug md:text-xl">{item.text}</p>
          </div>
        )
      )}
    </motion.div>
  </div>
</section>

      {/* Featured Kampungs */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16">
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <SectionHeader eyebrow="Featured" title="Kampung Sosromenduran" subtitle="Tujuh kampung dengan karakter dan sejarah yang unik." />
          <Button asChild variant="ghost"><Link to="/kampung">Lihat semua <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {kampungs.slice(0, 3).map((k, i) => (
            <motion.div
              key={k.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to="/kampung/$slug" params={{ slug: k.slug }}>
                <Card className="overflow-hidden group border-border/60 hover:shadow-xl hover:shadow-primary/10 transition-all">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={k.cover} alt={k.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <CardContent className="p-5">
                    <Badge variant="secondary" className="mb-2">Kampung Heritage</Badge>
                    <div className="font-display font-bold text-xl">{k.name}</div>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{k.short}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured UMKM & Kuliner */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16">
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <SectionHeader eyebrow="Ekonomi Warga" title="UMKM & Kuliner Pilihan" subtitle="Kerajinan, jasa, dan cita rasa khas warga Sosromenduran." />
          <Button asChild variant="ghost"><Link to="/umkm">Lihat semua <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredEconomy.map((item) => (
            <Card key={item.slug} className="overflow-hidden group border-border/60 hover:shadow-xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.photo} alt={item.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <CardContent className="p-5">
                <Badge variant="secondary">{item.category}</Badge>
                <div className="font-display font-bold text-lg mt-2">{item.name}</div>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Explore CTA */}
<section className="mx-auto max-w-4xl px-4 md:px-8 py-24 text-center">
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Siap Menjelajah?</p>
  <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
    Jelajahi Sosromenduran dengan cara Anda sendiri.
  </h2>
  <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
    <Link
      to="/map"
      className="group flex items-center gap-2 border-b-2 border-primary pb-1 font-display text-xl font-bold text-primary transition-colors hover:text-accent md:text-2xl"
    >
      Explore Peta
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </Link>
    <Link
      to="/kampung"
      className="group flex items-center gap-2 border-b-2 border-primary pb-1 font-display text-xl font-bold text-primary transition-colors hover:text-accent md:text-2xl"
    >
      Explore Kampung
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </Link>
  </div>
</section>
    </SiteLayout>

  );
}