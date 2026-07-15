import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { culinaries } from "@/data/mock";

export const Route = createFileRoute("/culinary")({
  head: () => ({ meta: [{ title: "Direktori Kuliner — Sosromenduran" }, { name: "description", content: "Kuliner khas dan legendaris di Sosromenduran, Yogyakarta." }] }),
  component: CulinaryDir,
});

function CulinaryDir() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const categories = useMemo(() => Array.from(new Set(culinaries.map((u) => u.category))), []);
  const filtered = culinaries.filter((c) => (cat === "all" || c.category === cat) && c.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 md:px-8 pt-14 pb-6">
        <SectionHeader eyebrow="Rasa Jogja" title="Direktori Kuliner" subtitle="Rekomendasi makanan legendaris dan kuliner khas Sosromenduran." />
        <div className="grid gap-3 md:grid-cols-[1fr_240px] mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari kuliner..." className="pl-9" />
          </div>
          <Select value={cat} onValueChange={setCat}>
            <SelectTrigger><SelectValue placeholder="Kategori" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Kategori</SelectItem>
              {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 md:px-8 pb-20 grid gap-6 md:grid-cols-2">
        {filtered.map((c) => (
          <Card key={c.slug} className="overflow-hidden border-border/60 group hover:shadow-xl transition-all">
            <div className="grid sm:grid-cols-[200px_1fr]">
              <div className="aspect-square sm:aspect-auto overflow-hidden">
                <img src={c.photo} alt={c.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <CardContent className="p-5 space-y-2">
                <Badge className="bg-accent/10 text-accent border-accent/20" variant="outline">{c.category}</Badge>
                <div className="font-display font-bold text-xl">{c.name}</div>
                <div className="text-sm text-primary font-semibold">{c.signature} • {c.priceRange}</div>
                <p className="text-sm text-muted-foreground line-clamp-2">{c.description}</p>
                <div className="pt-2 space-y-1 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2"><MapPin className="h-3 w-3" /> {c.address}</div>
                  <div className="flex items-center gap-2"><Clock className="h-3 w-3" /> {c.hours}</div>
                  <div className="flex items-center gap-2"><Phone className="h-3 w-3" /> {c.contact}</div>
                </div>
                <Button asChild size="sm" variant="secondary" className="mt-2"><a href={c.mapsUrl} target="_blank" rel="noreferrer">Google Maps <ExternalLink className="ml-1 h-3 w-3" /></a></Button>
              </CardContent>
            </div>
          </Card>
        ))}
      </section>
    </SiteLayout>
  );
}
