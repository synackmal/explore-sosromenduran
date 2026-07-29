import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import fotoAkmal from "@/assets/team/akmal.jpg";
import fotoFadhil from "@/assets/team/fadhil.jpg";
import fotoNajwa from "@/assets/team/najwa.jpg";
import fotoBunga from "@/assets/team/bunga.jpg";
import fotoLutfia from "@/assets/team/lutfia.jpg";

export const Route = createFileRoute("/profil-tim")({
  head: () => ({
    meta: [
      { title: "Profil Tim — Sosromenduran" },
      { name: "description", content: "Kenali tim KKN-PPM UGM Bergandeng Tengen 2026." },
    ],
  }),
  component: ProfilTimPage,
});

// TODO: ganti dengan foto asli (import gambar, tambahkan field `photo`, render <img> menggantikan div gradient)
const TEAM = [
  { name: "Muhammad Akmal Fauzan", role: "Web Developer", photo: fotoAkmal },
  { name: "Fadhil Alfian Priambda", role: "Web Developer", photo: fotoFadhil },
  { name: "Najwa Millati", role: "Mapping", photo: fotoNajwa },
  { name: "Bunga Sumbodro", role: "Content Writer", photo: fotoBunga },
  { name: "Lutfia Diana", role: "Content Writer", photo: fotoLutfia },
];

const SLICE_STYLES = [
  "from-primary via-primary to-accent",
  "from-accent via-accent to-tertiary",
  "from-tertiary via-tertiary to-primary",
  "from-primary via-accent to-tertiary",
  "from-accent via-primary to-primary",
];

function ProfilTimPage() {
  const [active, setActive] = useState(0);

  return (
    <SiteLayout>
      <div className="pt-20">
        <div className="mx-auto max-w-7xl px-4 pt-10 pb-6 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Profil</p>
          <h1 className="font-display text-3xl font-bold md:text-5xl">Tim Kami</h1>
        </div>

   <div className="flex h-[75vh] min-h-[460px] w-full flex-col md:h-[82vh] md:flex-row">
  {TEAM.map((member, i) => {
    const isActive = active === i;

    return (
      <button
        key={member.name}
        onMouseEnter={() => setActive(i)}
        onClick={() => setActive(i)}
        className="group relative w-full flex-1 overflow-hidden transition-all duration-500 ease-out md:h-full"
      >
        <img
          src={member.photo}
          alt={member.name}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ${
            isActive ? "scale-105" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-70"
          }`}
        />

        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center p-5 text-center md:p-8">
          <div className="font-display text-lg font-bold text-white md:text-l">{member.name}</div>
          <div
            className={`text-white/85 transition-all duration-300 overflow-hidden ${
              isActive ? "mt-1 max-h-8 text-sm" : "max-h-0 text-xs opacity-0"
            }`}
          >
            {member.role}
          </div>
        </div>
      </button>
    );
  })}
</div>
      </div>
    </SiteLayout>
  );
}