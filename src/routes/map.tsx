import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Layers } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import heroMAP from "@/assets/hero/hero-peta.jpg";


export const Route = createFileRoute("/map")({
  head: () => ({ meta: [{ title: "Peta Wisata Interaktif — Sosromenduran" }, { name: "description", content: "Peta wisata interaktif Kelurahan Sosromenduran berbasis ArcGIS." }] }),
  component: MapPage,
});

const LAYERS = [
  "Batas Kampung", "Tempat Wisata", "Kuliner", "UMKM",
  "Fasilitas Umum", "Parkir", "Masjid", "Hotel", "Transportasi",
];

function MapPage() {
  const [active, setActive] = useState<Record<string, boolean>>(Object.fromEntries(LAYERS.map((l) => [l, true])));

  return (
    <SiteLayout>
  <PageHero
    eyebrow="Interactive Map"
    title="Peta Wisata Sosromenduran"
    subtitle="Peta interaktif ArcGIS Online — jelajahi kampung, kuliner, UMKM, hingga fasilitas publik."
    image={heroMAP}
  />
  <section className="mx-auto max-w-7xl px-4 md:px-8 pt-10 pb-20 grid gap-6 lg:grid-cols-[280px_1fr]"></section>
      <section className="mx-auto max-w-7xl px-4 md:px-8 pb-20 grid gap-6 lg:grid-cols-[280px_1fr]">
        <Card className="border-border/60 h-fit lg:sticky lg:top-24">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-4 font-semibold"><Layers className="h-4 w-4 text-primary" /> Layer Peta</div>
            <div className="space-y-3">
              {LAYERS.map((l) => (
                <div key={l} className="flex items-center gap-2">
                  <Checkbox id={l} checked={active[l]} onCheckedChange={(v) => setActive((s) => ({ ...s, [l]: !!v }))} />
                  <Label htmlFor={l} className="text-sm cursor-pointer">{l}</Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/60 overflow-hidden">
          {/* ArcGIS Online Web Map placeholder — replace with <div id="viewDiv"> or iframe src */}
          <div id="arcgis-webmap" className="aspect-video bg-gradient-to-br from-primary/10 via-cream to-accent/10 batik-pattern relative">
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center max-w-sm px-6">
                <div className="grid h-16 w-16 mx-auto place-items-center rounded-2xl bg-primary text-primary-foreground mb-4"><MapPin className="h-8 w-8" /></div>
                <div className="font-display font-bold text-xl">Reserved for ArcGIS Web Map</div>
                <p className="text-sm text-muted-foreground mt-2">Komponen peta ArcGIS Online akan disematkan di sini. Layer, marker, dan popup siap dikonfigurasi.</p>
              </div>
            </div>
            {/* fake pins */}
            {[
              { top: "20%", left: "30%" }, { top: "40%", left: "60%" }, { top: "65%", left: "45%" }, { top: "30%", left: "75%" },
            ].map((p, i) => (
              <div key={i} className="absolute" style={p}>
                <div className="relative">
                  <MapPin className="h-6 w-6 text-primary drop-shadow-lg animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </SiteLayout>
  );
}
