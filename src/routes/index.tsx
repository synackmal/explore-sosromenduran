import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Utensils, Store, Landmark, Calendar, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { kampungs, umkms, culinaries, events, stats } from "@/data/mock";
import heroImg from "@/assets/hero-sosromenduran.jpg";

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

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Sosromenduran" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
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
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] md:whitespace-nowrap">
              Bergandeng <span className="text-gradient-warm">Tengen</span>
            </h1>
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

      {/* Welcome */}
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
            <Button asChild variant="secondary" className="rounded-full"><Link to="/about">Tentang Sosromenduran</Link></Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Landmark, label: "Kampung", value: stats.kampungs },
            { icon: Store, label: "UMKM", value: stats.umkm },
            { icon: Utensils, label: "Kuliner", value: stats.culinary },
            { icon: MapPin, label: "Destinasi Wisata", value: stats.attractions },
          ].map((s) => (
            <Card key={s.label} className="glass border-border/60">
              <CardContent className="p-6">
                <s.icon className="h-6 w-6 text-primary mb-3" />
                <div className="text-4xl font-display font-bold text-gradient-warm">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </CardContent>
            </Card>
          ))}
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

      {/* Featured Culinary */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16">
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <SectionHeader eyebrow="Rasa Jogja" title="Kuliner Legendaris" subtitle="Cicipi cita rasa Yogyakarta di setiap sudut kampung." />
          <Button asChild variant="ghost"><Link to="/culinary">Semua kuliner <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {culinaries.map((c) => (
            <Card key={c.slug} className="overflow-hidden group border-border/60 hover:-translate-y-1 transition-transform">
              <div className="aspect-square overflow-hidden">
                <img src={c.photo} alt={c.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <CardContent className="p-4">
                <Badge className="mb-2 bg-accent/10 text-accent border-accent/20" variant="outline">{c.category}</Badge>
                <div className="font-semibold">{c.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.signature}</div>
                <div className="text-xs font-semibold text-primary mt-2">{c.priceRange}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured UMKM */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16">
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <SectionHeader eyebrow="UMKM Warga" title="Ekonomi Kreatif Kampung" />
          <Button asChild variant="ghost"><Link to="/umkm">Semua UMKM <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {umkms.slice(0, 3).map((u) => (
            <Card key={u.slug} className="overflow-hidden group border-border/60 hover:shadow-xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={u.photo} alt={u.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <CardContent className="p-5">
                <Badge variant="secondary">{u.category}</Badge>
                <div className="font-display font-bold text-lg mt-2">{u.name}</div>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{u.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Map preview */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16">
        <Card className="overflow-hidden border-border/60">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <SectionHeader eyebrow="Tourism Map" title="Peta Wisata Interaktif" subtitle="Temukan destinasi, kuliner, UMKM, hingga fasilitas umum dalam satu peta interaktif berbasis ArcGIS." />
              <Button asChild className="rounded-full w-fit"><Link to="/map">Buka Peta <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            </div>
            <div className="relative aspect-[4/3] md:aspect-auto bg-gradient-to-br from-primary/20 to-accent/20 batik-pattern">
              <div className="absolute inset-0 grid place-items-center">
                <MapPin className="h-16 w-16 text-primary drop-shadow-lg" />
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Events */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16">
        <SectionHeader eyebrow="Event Mendatang" title="Agenda Budaya" />
        <div className="grid gap-6 md:grid-cols-3">
          {events.map((e) => (
            <Card key={e.slug} className="overflow-hidden group border-border/60">
              <div className="aspect-video overflow-hidden">
                <img src={e.cover} alt={e.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                  <Calendar className="h-3 w-3" /> {new Date(e.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                </div>
                <div className="font-display font-bold text-lg mt-2">{e.title}</div>
                <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><MapPin className="h-3 w-3" /> {e.location}</div>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{e.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[var(--gold)] to-accent p-10 md:p-16 text-center">
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">Siap menjelajahi Sosromenduran?</h2>
            <p className="mt-4 text-white/85 max-w-xl mx-auto">Rencanakan kunjungan Anda, temukan kampung, kuliner, dan cerita budaya yang menunggu.</p>
            <Button asChild size="lg" variant="secondary" className="mt-8 rounded-full">
              <Link to="/map">Mulai Petualangan <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
