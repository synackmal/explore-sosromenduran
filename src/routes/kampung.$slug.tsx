import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, ArrowLeft, Sparkles, Music, Store, Utensils } from "lucide-react";
import type { Kampung } from "@/data/mock";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { kampungs } from "@/data/mock";

export const Route = createFileRoute("/kampung/$slug")({
  loader: ({ params }): Kampung => {
    const k = kampungs.find((x) => x.slug === params.slug);
    if (!k) throw notFound();
    return k;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Kampung"} — Sosromenduran` },
      { name: "description", content: loaderData?.short ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <SiteLayout><div className="mx-auto max-w-3xl px-4 py-24 text-center"><h1 className="text-3xl font-bold">Kampung tidak ditemukan</h1></div></SiteLayout>
  ),
  errorComponent: ({ error }) => <SiteLayout><div className="mx-auto max-w-3xl px-4 py-24 text-center">{error.message}</div></SiteLayout>,
  component: KampungDetail,
});

function KampungDetail() {
  const k = Route.useLoaderData() as Kampung;
  return (
    <SiteLayout>
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={k.cover} alt={k.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-4 md:px-8 pb-10 text-white">
            <Link
  to="/kampung"
  className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/25 mb-4"
>
  <ArrowLeft className="h-4 w-4" /> Semua Kampung
</Link>
            <h1 className="font-display text-4xl md:text-6xl font-bold">{k.name}</h1>
            <p className="mt-3 max-w-2xl text-white/85">{k.short}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-8 py-14 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <Section title="Sejarah"><p className="text-muted-foreground leading-relaxed">{k.history}</p></Section>
          <Section title="Keunikan Lokal"><p className="text-muted-foreground leading-relaxed">{k.uniqueness}</p></Section>

          <Section title="Daya Tarik Wisata" icon={Sparkles}>
            <div className="grid gap-3 sm:grid-cols-2">
              {k.attractions.map((a) => (
                <div key={a} className="rounded-xl border border-border p-4 bg-card">{a}</div>
              ))}
            </div>
          </Section>

          <Section title="Aktivitas Budaya" icon={Music}>
            <div className="flex flex-wrap gap-2">
              {k.culturalActivities.map((a) => (
                <Badge key={a} variant="secondary" className="px-3 py-1">{a}</Badge>
              ))}
            </div>
          </Section>
          
        </div>

        <aside className="space-y-6">
          <Card className="border-border/60">
            <CardContent className="p-5">
              <div className="text-sm font-semibold flex items-center gap-2 mb-3"><MapPin className="h-4 w-4 text-primary" /> Lokasi</div>
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 grid place-items-center batik-pattern">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <div className="text-xs text-muted-foreground mt-3">Lat: {k.location.lat.toFixed(4)}, Lng: {k.location.lng.toFixed(4)}</div>
              <Button asChild variant="secondary" className="w-full mt-4"><Link to="/map">Buka di Peta</Link></Button>
            </CardContent>
          </Card>

          <Card className="border-border/60">
            <CardContent className="p-5">
              <div className="text-sm font-semibold flex items-center gap-2 mb-3"><Store className="h-4 w-4 text-primary" /> UMKM</div>
              <ul className="space-y-2 text-sm">
                {k.umkm.map((u) => (
                  <li key={u}><Link to="/umkm" className="hover:text-primary">{u.replace(/-/g, " ")}</Link></li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/60">
            <CardContent className="p-5">
              <div className="text-sm font-semibold flex items-center gap-2 mb-3"><Utensils className="h-4 w-4 text-primary" /> Kuliner</div>
              <ul className="space-y-2 text-sm">
                {k.culinary.map((c) => (
                  <li key={c}><Link to="/umkm" className="hover:text-primary">{c.replace(/-/g, " ")}</Link></li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Section({ title, icon: Icon, children }: { title: string; icon?: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold flex items-center gap-2 mb-4">
        {Icon && <Icon className="h-5 w-5 text-primary" />} {title}
      </h2>
      {children}
    </div>
  );
}
