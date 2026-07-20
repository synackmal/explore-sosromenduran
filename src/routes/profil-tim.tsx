import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";

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
  { name: "Nama Anggota 1", role: "Koordinator" },
  { name: "Nama Anggota 2", role: "Sekretaris" },
  { name: "Nama Anggota 3", role: "Bendahara" },
  { name: "Nama Anggota 4", role: "Divisi Program" },
  { name: "Nama Anggota 5", role: "Divisi Publikasi" },
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
            const initials = member.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("");

            return (
              <button
                key={member.name}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group relative w-full overflow-hidden transition-all duration-500 ease-out md:h-full"
                style={{ flexGrow: isActive ? 4 : 1, flexBasis: 0, minHeight: "80px" }}
              >
                {/* TODO: ganti div gradient ini dengan <img src={member.photo} className="absolute inset-0 h-full w-full object-cover" /> */}
                <div className={`absolute inset-0 bg-gradient-to-br ${SLICE_STYLES[i % SLICE_STYLES.length]}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div
                  className={`absolute inset-0 grid place-items-center font-display text-5xl font-bold text-white/15 transition-opacity duration-300 md:text-7xl ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {initials}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-left md:p-6">
                  <div
                    className={`font-display font-bold text-white transition-all duration-300 ${
                      isActive ? "text-xl md:text-3xl" : "text-sm md:text-base"
                    }`}
                  >
                    {member.name}
                  </div>
                  <div
                    className={`text-white/80 transition-all duration-300 overflow-hidden ${
                      isActive ? "mt-1 max-h-10 text-sm md:text-base" : "max-h-0 text-xs opacity-0"
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