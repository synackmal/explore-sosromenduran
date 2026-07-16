import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, MapPin, Clock, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { umkms } from "@/data/mock";
import heroUMKM from "@/assets/hero/hero-umkm.jpg";

export const Route = createFileRoute("/umkm")({
  head: () => ({ meta: [{ title: "Direktori UMKM — Sosromenduran" }, { name: "description", content: "Direktori UMKM warga Kelurahan Sosromenduran." }] }),
  component: UMKMDirectory,
});

function UMKMDirectory() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [sort, setSort] = useState("name");

  const categories = useMemo(() => Array.from(new Set(umkms.map((u) => u.category))), []);
  const filtered = useMemo(() => {
    let out = umkms.filter((u) => (cat === "all" || u.category === cat) && (u.name.toLowerCase().includes(q.toLowerCase()) || u.description.toLowerCase().includes(q.toLowerCase())));
    if (sort === "name") out = [...out].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "category") out = [...out].sort((a, b) => a.category.localeCompare(b.category));
    return out;
  }, [q, cat, sort]);

  return (
    <SiteLayout>
  <PageHero
    eyebrow="Direktori UMKM"
    title="Ekonomi Kreatif Warga"
    subtitle="Temukan produk lokal, kerajinan, dan jasa dari UMKM Sosromenduran."
    image={heroUMKM}
  />
  <section className="mx-auto max-w-7xl px-4 md:px-8 pt-10 pb-6">
    <div className="grid gap-3 md:grid-cols-[1fr_200px_200px] mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari UMKM..." className="pl-9" />
      </div>
      <Select value={cat} onValueChange={setCat}>
        <SelectTrigger><SelectValue placeholder="Kategori" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Semua Kategori</SelectItem>
          {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
        </SelectContent>
      </Select>
      <Select value={sort} onValueChange={setSort}>
        <SelectTrigger><SelectValue placeholder="Urutkan" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Nama (A-Z)</SelectItem>
          <SelectItem value="category">Kategori</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </section>
      <section className="mx-auto max-w-7xl px-4 md:px-8 pb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((u) => (
          <Card key={u.slug} className="overflow-hidden border-border/60 group hover:shadow-xl transition-all">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={u.photo} alt={u.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <CardContent className="p-5 space-y-2">
              <Badge variant="secondary">{u.category}</Badge>
              <div className="font-display font-bold text-lg">{u.name}</div>
              <p className="text-sm text-muted-foreground line-clamp-2">{u.description}</p>
              <div className="pt-2 space-y-1 text-xs text-muted-foreground">
                <div className="flex items-center gap-2"><MapPin className="h-3 w-3" /> {u.address}</div>
                <div className="flex items-center gap-2"><Clock className="h-3 w-3" /> {u.hours}</div>
                <div className="flex items-center gap-2"><Phone className="h-3 w-3" /> {u.contact}</div>
              </div>
              <div className="pt-2 flex flex-wrap gap-1">
                {u.products.slice(0, 3).map((p) => <span key={p} className="text-[10px] px-2 py-1 rounded-full bg-muted">{p}</span>)}
              </div>
            </CardContent>
          </Card>
        ))}
        {filtered.length === 0 && <div className="col-span-full text-center text-muted-foreground py-20">Tidak ada UMKM yang cocok.</div>}
      </section>
    </SiteLayout>
  );
}
