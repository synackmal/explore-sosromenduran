import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import foto1 from "@/assets/gallery/foto-1.jpg";
import foto2 from "@/assets/gallery/foto-2.jpg";
import foto3 from "@/assets/gallery/foto-3.jpg";
import foto4 from "@/assets/gallery/foto-4.jpg";
import foto5 from "@/assets/gallery/foto-5.jpg";
import foto6 from "@/assets/gallery/foto-6.jpg";

import heroGaleri from "@/assets/hero/hero-galeri.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galeri — Sosromenduran" },
      { name: "description", content: "Dokumentasi kegiatan Kelurahan Sosromenduran dan tim KKN-PPM UGM." },
    ],
  }),
  component: Gallery,
});

// TODO: ganti dengan foto dokumentasi asli, caption, dan kategori sesungguhnya
type GalleryItem = { src: string};

const GALLERY_ITEMS: GalleryItem[] = [
  { src: foto1},
  { src: foto2},
  { src: foto3},
  { src: foto4},
  { src: foto5},
  { src: foto6},
];

function Gallery() {
  const [open, setOpen] = useState<GalleryItem | null>(null);
  const [cat, setCat] = useState("Semua");

  const categories = useMemo(
    () => ["Semua", ...Array.from(new Set(GALLERY_ITEMS.map((g) => g.category)))],
    []
  );
  const filtered = GALLERY_ITEMS.filter((g) => cat === "Semua" || g.category === cat);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Galeri"
        title="Momen Sosromenduran"
        subtitle="Dokumentasi kegiatan kelurahan, PKK, dan tim kami."
        image={heroGaleri}
      />

      <section className="mx-auto max-w-7xl px-4 md:px-8 pt-10 pb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                cat === c ? "bg-primary text-primary-foreground" : "border border-border/60 text-foreground/70 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-8 pb-20 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {filtered.map((item, i) => (
          <button
            key={`${item.src}-${i}`}
            onClick={() => setOpen(item)}
            className="group relative aspect-square overflow-hidden rounded-2xl"
          >
            <img
              src={item.src}
              alt={item.caption}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gold">{item.category}</p>
              <p className="mt-1 font-display text-sm font-bold leading-tight text-white md:text-base">
                {item.caption}
              </p>
            </div>
          </button>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground py-20">Belum ada dokumentasi di kategori ini.</div>
        )}
      </section>

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setOpen(null)}
            aria-label="Tutup"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img src={open.src} alt={open.caption} className="max-h-[75vh] w-full rounded-2xl object-contain" />
            <div className="mt-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">{open.category}</p>
              <p className="mt-1 font-display text-lg font-bold text-white">{open.caption}</p>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}