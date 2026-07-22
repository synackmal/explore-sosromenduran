import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import heroFunfact from "@/assets/hero/hero-galeri.jpg";

export const Route = createFileRoute("/funfact")({
  head: () => ({
    meta: [
      { title: "Funfact — Sosromenduran" },
      { name: "description", content: "Fakta-fakta menarik seputar Kelurahan Sosromenduran dan sekitarnya." },
    ],
  }),
  component: FunfactPage,
});

// TODO: ganti dengan funfact asli — riset singkat, cek fakta sebelum publish
type Funfact = { number?: string; title: string; text: string };

const FUNFACTS: Funfact[] = [
  {
    number: "1970-an",
    title: "Asal Nama Sarkem",
    text: "Sarkem adalah singkatan dari Pasar Kembang, nama kawasan yang dulunya dikenal sebagai pasar bunga sebelum berkembang menjadi kawasan yang dikenal luas seperti sekarang.",
  },
  {
    title: "Jantung Malioboro",
    text: "Sosromenduran berbatasan langsung dengan Jalan Malioboro, menjadikannya salah satu kelurahan dengan lalu-lintas wisatawan tertinggi di Yogyakarta.",
  },
  {
    number: "7",
    title: "Kampung dalam 1 Kelurahan",
    text: "Meski wilayahnya kecil, Sosromenduran terbagi menjadi 7 kampung dengan karakter dan sejarah masing-masing yang berbeda.",
  },
  {
    title: "Dekat Stasiun Tugu",
    text: "Lokasinya yang berdekatan dengan Stasiun Tugu menjadikan Sosromenduran sebagai titik transit penting bagi wisatawan yang baru tiba di Yogyakarta.",
  },
  {
    title: "Kampung Batik Warga",
    text: "Sejumlah warga Sosromenduran masih aktif memproduksi batik tulis dan cap secara turun-temurun, menjaga tradisi kerajinan khas Yogyakarta tetap hidup.",
  },
];

const CARD_STYLES = [
  "bg-primary text-cream",
  "bg-tertiary/20 text-foreground",
  "bg-secondary/25 text-foreground",
];

function FunfactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Tahukah Kamu?"
        title="Funfact Sosromenduran"
        subtitle="Fakta-fakta menarik seputar wilayah dan sejarah Sosromenduran."
        image={heroFunfact}
      />

      <section className="mx-auto max-w-5xl px-4 md:px-8 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {FUNFACTS.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
              className={`rounded-3xl p-7 md:p-8 ${CARD_STYLES[i % CARD_STYLES.length]} ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <Sparkles className="h-6 w-6 shrink-0 opacity-70" />
                {f.number && (
                  <span className="font-display text-3xl font-bold opacity-80 md:text-4xl">{f.number}</span>
                )}
              </div>
              <h3 className="mt-4 font-display text-xl font-bold md:text-2xl">{f.title}</h3>
              <p className="mt-2 leading-relaxed opacity-90">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}