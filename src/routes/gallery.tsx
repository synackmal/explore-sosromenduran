import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import heroGaleri from "@/assets/hero/hero-galeri.jpg";
import foto1 from "@/assets/gallery/foto-1.jpg";
import foto2 from "@/assets/gallery/foto-2.JPG";
import foto3 from "@/assets/gallery/foto-3.JPG";
import foto4 from "@/assets/gallery/foto-4.JPG";
import foto5 from "@/assets/gallery/foto-5.JPG";
import foto6 from "@/assets/gallery/foto-6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galeri — Sosromenduran" },
      { name: "description", content: "Dokumentasi kegiatan Kelurahan Sosromenduran dan tim KKN-PPM UGM." },
    ],
  }),
  component: Gallery,
});

type GalleryItem = { src: string };

const GALLERY_ITEMS: GalleryItem[] = [
  { src: foto1 },
  { src: foto2 },
  { src: foto3 },
  { src: foto4 },
  { src: foto5 },
  { src: foto6 },
];

function Gallery() {
  const [open, setOpen] = useState<GalleryItem | null>(null);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Galeri"
        title="Momen Sosromenduran"
        subtitle="Dokumentasi kegiatan kelurahan, PKK, dan tim kami."
        image={heroGaleri}
      />

      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {GALLERY_ITEMS.map((item, i) => (
          <button
            key={`${item.src}-${i}`}
            onClick={() => setOpen(item)}
            className="group relative aspect-square overflow-hidden rounded-2xl"
          >
            <img
              src={item.src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </button>
        ))}
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
          <img
            src={open.src}
            alt=""
            className="max-h-[85vh] w-full max-w-3xl rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </SiteLayout>
  );
}