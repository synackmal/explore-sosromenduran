import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { EVENTS } from "@/data/events";
import heroEvent from "@/assets/hero/hero-event.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Event & Tradisi — Sosromenduran" },
      { name: "description", content: "Event tahunan dan tradisi rutin warga Kelurahan Sosromenduran." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Tradisi & Perayaan"
        title="Event Sosromenduran"
        subtitle="Kenali tradisi dan perayaan rutin yang menghidupkan kampung sepanjang tahun."
        image={heroEvent}
      />

      <section className="mx-auto max-w-6xl px-4 md:px-8 py-16 space-y-20">
        {EVENTS.map((e, i) => {
          const reversed = i % 2 === 1;
          return (
            <motion.div
              key={e.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`grid items-center gap-8 md:grid-cols-2 ${reversed ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <img src={e.cover} alt={e.title} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {e.period}
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">{e.title}</h2>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {e.location}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">{e.description}</p>
                <div className="mt-4 border-l-2 border-tertiary pl-4">
                  <p className="text-sm italic leading-relaxed text-foreground/80">{e.background}</p>
                </div>
                <Link
                  to="/events/$slug"
                  params={{ slug: e.slug }}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Lihat Detail
                </Link>
              </div>
            </motion.div>
          );
        })}
      </section>
    </SiteLayout>
  );
}