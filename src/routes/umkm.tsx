import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, MapPin, Clock, Phone, Utensils, Shirt, Sparkles, Store, GraduationCap, Smartphone, Flower2, BookOpen } from "lucide-react";import { SiteLayout } from "@/components/site/SiteLayout";
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

const CATEGORY_ICON: Record<string, React.ComponentType<{ className?: string }>> = {
  Kuliner: Utensils,
  "Oleh-oleh": Utensils,
  "Persewaan Baju Adat": Shirt,
  "Sewa Baju Adat & Fotografi": Sparkles,
  "Jasa Laundry": Shirt,
  "Toko Ponsel": Smartphone,
  "Toko Bunga": Flower2,
  "Kerajinan Kulit": Store,
  "Toko Buku": BookOpen,
  "Jasa Pijat": Sparkles,
  "Jasa Pendidikan": GraduationCap,
};

function UMKMDirectory() {
  const [q, setQ] = useState("");

const entries = useMemo(() => buildEntries(), []);

const filtered = entries.filter(
  (e) => e.name.toLowerCase().includes(q.toLowerCase()) || e.description.toLowerCase().includes(q.toLowerCase())
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
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-8 pb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((e) => {
  const Icon = CATEGORY_ICON[e.category] ?? Store;
  return (
    <Card key={e.slug} className="border-border/60 transition-shadow hover:shadow-lg">
      <CardContent className="p-5 space-y-3">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <Badge variant="secondary" className="mb-1">{e.category}</Badge>
            <div className="font-display font-bold leading-tight">{e.name}</div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{e.description}</p>
        <div className="space-y-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-2"><MapPin className="h-3 w-3 shrink-0" /> {e.address}</div>
          <div className="flex items-center gap-2"><Clock className="h-3 w-3 shrink-0" /> {e.hours}</div>
          {e.contact && e.contact !== "Tidak tercantum" && (
            <div className="flex items-center gap-2"><Phone className="h-3 w-3 shrink-0" /> {e.contact}</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
})}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground py-20">Tidak ada hasil yang cocok.</div>
        )}
      </section>
    </SiteLayout>
  );
}