import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { galleryImages } from "@/data/mock";
import heroGallery from "@/assets/hero/hero-galeri.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Galeri — Sosromenduran" }, { name: "description", content: "Galeri foto wisata, budaya, dan kuliner Sosromenduran." }] }),
  component: Gallery,
});

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <SiteLayout>
  <PageHero
    eyebrow="Galeri"
    title="Momen Sosromenduran"
    subtitle="Wisata, budaya, kuliner, dan aktivitas warga dalam satu bingkai."
    image={heroGallery}
  />
  <section className="mx-auto max-w-7xl px-4 md:px-8 pt-10 pb-20 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></section>
      <section className="mx-auto max-w-7xl px-4 md:px-8 pb-20 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((img, i) => (
          <button key={i} onClick={() => setOpen(img)} className={`overflow-hidden rounded-2xl group ${i % 5 === 0 ? "row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}>
            <img src={img} alt="" loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </button>
        ))}
      </section>
      {open && (
        <div className="fixed inset-0 bg-black/90 z-50 grid place-items-center p-4" onClick={() => setOpen(null)}>
          <button className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white" onClick={() => setOpen(null)}><X /></button>
          <img src={open} alt="" className="max-h-[90vh] max-w-full rounded-2xl" />
        </div>
      )}
    </SiteLayout>
  );
}
