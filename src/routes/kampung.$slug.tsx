import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, ArrowLeft, Sparkles, Music, Store, Utensils, Palette, Compass } from "lucide-react";
import type { Kampung, RichBlock } from "@/data/mock";
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

const CATEGORY_ICON = { "Potensi Wisata": Compass, "Aktivitas Budaya": Palette, "Profil Usaha": Store };

function RichSectionBlock({ block }: { block: RichBlock }) {
  if (block.type === "paragraph") {
    return (
      <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
        {block.text.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    );
  }
  if (block.type === "subheading") {
    return <h3 className="font-display text-xl font-bold mt-2">{block.text}</h3>;
  }
  if (block.type === "list") {
    return (
      <ul className="list-disc space-y-1.5 pl-5 text-muted-foreground">
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "table") {
    return (
      <dl className="divide-y divide-border/60 rounded-xl border border-border/60">
        {block.rows.map((row, i) => (
          <div key={i} className="flex flex-col gap-1 p-3 sm:flex-row sm:items-baseline sm:gap-4">
            <dt className="text-sm text-muted-foreground sm:w-56 sm:shrink-0">{row.label}</dt>
            <dd className="font-medium text-foreground">{row.value}</dd>
          </div>
        ))}
      </dl>
    );
  }
  return null;
}

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
          <Section title="Sejarah">
            <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
              {k.history.split("\n\n").map((paragraf, i) => (
                <p key={i}>{paragraf}</p>
              ))}
            </div>
          </Section>

          <Section title="Keunikan Lokal">
            <p className="text-muted-foreground leading-relaxed text-justify">{k.uniqueness}</p>
          </Section>

          {k.extraSection && (
            <Section title={`${k.extraSection.category}: ${k.extraSection.subject}`} icon={CATEGORY_ICON[k.extraSection.category]}>
              <div className="space-y-5">
                {k.extraSection.blocks.map((block, i) => (
                  <RichSectionBlock key={i} block={block} />
                ))}
              </div>
            </Section>
          )}

          <Section title="Daya Tarik Wisata" icon={Sparkles}>
            <div className="grid gap-3 sm:grid-cols-2">
              {k.attractions.map((a) => (
                <div key={a} className="rounded-xl border border-border p-4 bg-card">{a}</div>
              ))}
            </div>
          </Section>
        </div>

        <aside className="space-y-6">
          <Card className="border-border/60">
            <CardContent className="p-5">
              <div className="text-sm font-semibold flex items-center gap-2 mb-3"><MapPin className="h-4 w-4 text-primary" /> Lokasi</div>
              <div className="aspect-square overflow-hidden rounded-xl border border-border/60">
  <iframe
    title={`Peta lokasi ${k.name}`}
    src={`https://www.openstreetmap.org/export/embed.html?bbox=${k.location.lng - 0.004}%2C${k.location.lat - 0.003}%2C${k.location.lng + 0.004}%2C${k.location.lat + 0.003}&layer=mapnik&marker=${k.location.lat}%2C${k.location.lng}`}
    className="h-full w-full border-0"
    loading="lazy"
  />
</div>
              <div className="text-xs text-muted-foreground mt-3">Lat: {k.location.lat.toFixed(4)}, Lng: {k.location.lng.toFixed(4)}</div>
              <Button asChild variant="secondary" className="w-full mt-4">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${k.location.lat},${k.location.lng}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Buka di Google Maps
                </a>
              </Button>
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