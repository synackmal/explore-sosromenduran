import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import heroEvent from "@/assets/hero/hero-event.jpg";
import kampungImg from "@/assets/kampung-1.jpg";
import culinaryImg from "@/assets/culinary-1.jpg";
import umkmImg from "@/assets/umkm-1.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Event & Tradisi — Sosromenduran" },
      { name: "description", content: "Event tahunan dan tradisi rutin warga Kelurahan Sosromenduran." },
    ],
  }),
  component: EventsPage,
});

// TODO: ganti dengan data & cerita event asli, verifikasi ke warga/kelurahan sebelum publish
type EventEntry = {
  slug: string;
  title: string;
  period: string;
  location: string;
  cover: string;
  background: string;
  description: string;
};

const EVENTS: EventEntry[] = [
  {
    slug: "sarkem-fest",
    title: "Sarkem Fest",
    period: "Digelar setiap Agustus",
    location: "Kawasan Pasar Kembang",
    cover: kampungImg,
    background:
      "Sarkem Fest lahir dari inisiatif warga dan pelaku UMKM setempat untuk menghidupkan kembali citra kawasan Pasar Kembang lewat sudut pandang budaya, kuliner, dan kreativitas warga.",
    description:
      "Festival tahunan yang menampilkan panggung musik, bazar UMKM, dan pertunjukan seni jalanan di sepanjang kawasan Pasar Kembang.",
  },
  {
    slug: "kirab-budaya",
    title: "Kirab Budaya Sosromenduran",
    period: "Digelar setiap Agustus, bertepatan dengan HUT RI",
    location: "Sepanjang Jl. Sosrowijayan",
    cover: culinaryImg,
    background:
      "Tradisi kirab ini telah berlangsung turun-temurun sebagai bentuk rasa syukur warga dan penghormatan terhadap sejarah kampung-kampung di Sosromenduran.",
    description:
      "Pawai budaya yang menampilkan bregada, jathilan, dan gunungan hasil bumi, diikuti oleh warga dari 7 kampung Sosromenduran.",
  },
  {
    slug: "workshop-batik-warga",
    title: "Workshop Batik Warga",
    period: "Digelar rutin setiap bulan",
    location: "Kampung Sosrowijayan Kulon",
    cover: umkmImg,
    background:
      "Kegiatan ini menjadi salah satu upaya menjaga regenerasi pengrajin batik di kampung, sekaligus membuka ruang belajar bagi wisatawan yang tertarik pada budaya batik Yogyakarta.",
    description:
      "Sesi belajar membatik langsung dari pengrajin senior kampung, terbuka untuk warga dan wisatawan.",
  },
];

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
              </div>
            </motion.div>
          );
        })}
      </section>
    </SiteLayout>
  );
}