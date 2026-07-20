import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, MapPin, Clock, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { umkms, culinaries } from "@/data/mock";
import heroUMKM from "@/assets/hero/hero-umkm.jpg";

export const Route = createFileRoute("/umkm")({
  head: () => ({
    meta: [
      { title: "UMKM & Kuliner — Sosromenduran" },
      { name: "description", content: "Direktori UMKM, kerajinan, dan kuliner warga Kelurahan Sosromenduran." },
    ],
  }),
  component: UMKMDirectory,
});

// Gabungin UMKM + Kuliner jadi 1 list dengan bentuk data yang seragam
type Entry = {
  slug: string;
  name: string;
  category: string;
  photo: string;
  description: string;
  address: string;
  hours: string;
  contact?: string;
};

function buildEntries(): Entry[] {
  const fromUmkm: Entry[] = umkms.map((u) => ({
    slug: u.slug,
    name: u.name,
    category: u.category,
    photo: u.photo,
    description: u.description,
    address: u.address,
    hours: u.hours,
    contact: u.contact,
  }));

  const fromCulinary: Entry[] = culinaries.map((c) => ({
    slug: c.slug,
    name: c.name,
    category: "Kuliner",
    photo: c.photo,
    description: c.description,
    address: c.address,
    hours: c.hours,
    contact: c.contact,
  }));

  return [...fromUmkm, ...fromCulinary];
}

function UMKMDirectory() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Semua");

  const entries = useMemo(() => buildEntries(), []);
  const categories = useMemo(() => ["Semua", ...Array.from(new Set(entries.map((e) => e.category)))], [entries]);

  const filtered = entries.filter(
    (e) =>
      (cat === "Semua" || e.category === cat) &&
      (e.name.toLowerCase().includes(q.toLowerCase()) || e.description.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Ekonomi Warga"
        title="UMKM & Kuliner"
        subtitle="Kerajinan, jasa, dan cita rasa khas dari warga 7 kampung Sosromenduran."
        image={heroUMKM}
      />

      <section className="mx-auto max-w-7xl px-4 md:px-8 pt-10 pb-6">
        <div className="relative mb-5 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari UMKM atau kuliner..." className="pl-9" />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                cat === c ? "bg-primary text-primary-foreground" : "border border-border/60 text-foreground/70 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-8 pb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((e) => (
          <Card key={e.slug} className="overflow-hidden border-border/60 group hover:shadow-xl transition-all">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={e.photo} alt={e.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <CardContent className="p-5 space-y-2">
              <Badge variant="secondary">{e.category}</Badge>
              <div className="font-display font-bold text-lg">{e.name}</div>
              <p className="text-sm text-muted-foreground line-clamp-2">{e.description}</p>
              <div className="pt-2 space-y-1 text-xs text-muted-foreground">
                <div className="flex items-center gap-2"><MapPin className="h-3 w-3" /> {e.address}</div>
                <div className="flex items-center gap-2"><Clock className="h-3 w-3" /> {e.hours}</div>
                {e.contact && <div className="flex items-center gap-2"><Phone className="h-3 w-3" /> {e.contact}</div>}
              </div>
            </CardContent>
          </Card>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground py-20">Tidak ada hasil yang cocok.</div>
        )}
      </section>
    </SiteLayout>
  );
}