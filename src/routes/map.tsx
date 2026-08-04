import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Card } from "@/components/ui/card";
import heroMAP from "@/assets/hero/hero-peta.jpg";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Peta Wisata Interaktif — Sosromenduran" },
      { name: "description", content: "Peta wisata interaktif Kelurahan Sosromenduran." },
    ],
  }),
  component: MapPage,
});

function MapPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Interactive Map"
        title="Peta Wisata Sosromenduran"
        subtitle="Jelajahi kampung, kuliner, UMKM, hingga fasilitas publik lewat peta interaktif."
        image={heroMAP}
      />

      <section className="mx-auto max-w-7xl px-4 md:px-8 pt-10 pb-20">
        <Card className="overflow-hidden border-border/60">
          <iframe
            title="Peta Interaktif Sosromenduran"
            src="/map-embed/index.html"
            className="aspect-video w-full border-0"
            loading="lazy"
          />
        </Card>
      </section>
    </SiteLayout>
  );
}