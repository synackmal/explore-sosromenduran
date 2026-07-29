import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { kampungs } from "@/data/mock";
import heroPeta from "@/assets/hero/hero-peta.jpg";

export const Route = createFileRoute("/wisata")({
  head: () => ({
    meta: [
      { title: "Wisata — Sosromenduran" },
      { name: "description", content: "Spot dan destinasi wisata di 7 kampung Kelurahan Sosromenduran." },
    ],
  }),
  component: WisataPage,
});

// Kumpulkan semua atraksi dari tiap kampung jadi 1 daftar wisata
function buildWisataList() {
  return kampungs.flatMap((k) =>
    k.attractions.map((attraction) => ({
      title: attraction,
      kampung: k.name,
      kampungSlug: k.slug,
      cover: k.cover,
    }))
  );
}

function WisataPage() {
  const wisataList = useMemo(() => buildWisataList(), []);
  const [kampungFilter, setKampungFilter] = useState("Semua");

  const filters = ["Semua", ...kampungs.map((k) => k.name)];
  const filtered = wisataList.filter((w) => kampungFilter === "Semua" || w.kampung === kampungFilter);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Jelajahi"
        title="Wisata Sosromenduran"
        subtitle="Spot dan destinasi menarik yang tersebar di 7 kampung."
        image={heroPeta}
      />

      <section className="mx-auto max-w-7xl px-4 md:px-8 pt-10 pb-6">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setKampungFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                kampungFilter === f ? "bg-primary text-primary-foreground" : "border border-border/60 text-foreground/70 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-8 pb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((w, i) => (
          <Link key={`${w.kampungSlug}-${i}`} to="/kampung/$slug" params={{ slug: w.kampungSlug }}>
            <Card className="overflow-hidden group border-border/60 hover:shadow-xl transition-all h-full">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={w.cover} alt={w.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <CardContent className="p-5">
                <Badge variant="secondary" className="mb-2 flex w-fit items-center gap-1">
                  <MapPin className="h-3 w-3" /> {w.kampung}
                </Badge>
                <div className="font-display font-bold text-lg">{w.title}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground py-20">Belum ada data wisata untuk kampung ini.</div>
        )}
      </section>
    </SiteLayout>
  );
}