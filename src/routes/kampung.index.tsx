import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { kampungs } from "@/data/mock";

export const Route = createFileRoute("/kampung/")({
  head: () => ({
    meta: [
      { title: "Kampung Sosromenduran — Bergandeng Tengen" },
      { name: "description", content: "Jelajahi 7 kampung heritage di Kelurahan Sosromenduran, Yogyakarta." },
    ],
  }),
  component: KampungIndex,
});

function KampungIndex() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 md:px-8 pt-14 pb-6">
        <SectionHeader eyebrow="7 Kampung Heritage" title="Kampung Sosromenduran" subtitle="Setiap kampung adalah bab cerita — dari mural, kuliner, hingga seni batik warga." />
      </section>
      <section className="mx-auto max-w-7xl px-4 md:px-8 pb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {kampungs.map((k, i) => (
          <motion.div key={k.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            <Link to="/kampung/$slug" params={{ slug: k.slug }}>
              <Card className="overflow-hidden group border-border/60 hover:shadow-xl hover:shadow-primary/10 transition-all h-full">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={k.cover} alt={k.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-white/90 text-foreground">Heritage</Badge>
                </div>
                <CardContent className="p-5">
                  <div className="font-display font-bold text-xl">{k.name}</div>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{k.short}</p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground"><MapPin className="h-3 w-3" /> Sosromenduran</span>
                    <span className="text-primary font-semibold flex items-center gap-1">Selengkapnya <ArrowRight className="h-3 w-3" /></span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </section>
    </SiteLayout>
  );
}
