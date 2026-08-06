import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import heroProfil from "@/assets/hero/hero-about.jpg";
// TODO: ganti dengan foto peta kawasan asli
import petaKawasan from "@/assets/peta-kawasan-sosromenduran.svg";
// TODO: ganti dengan foto Pak Lurah & Bu Sekre asli
// import fotoLurah from "@/assets/lurah-hendy-setiawan.jpg";
// import fotoSekretaris from "@/assets/sekretaris-elia-sundari.jpg";

export const Route = createFileRoute("/profil")({
  head: () => ({
    meta: [
      { title: "Tentang Kalurahan — Sosromenduran" },
      { name: "description", content: "Profil resmi, visi-misi, dan data wilayah Kalurahan Sosromenduran." },
    ],
  }),
  component: ProfilPage,
});

import { PIMPINAN, VISI, MISI, DATA_WILAYAH, BATAS_WILAYAH } from "@/data/profil";

function ProfilPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Profil"
        title="Tentang Kalurahan"
        subtitle="Profil resmi, visi-misi, dan data wilayah Kalurahan Sosromenduran."
        image={heroProfil}
      />

      <div className="mx-auto max-w-3xl px-4 md:px-8 py-16">
        {/* Pimpinan */}
        <section>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            Pimpinan
          </h2>
    <div className="mt-6 grid gap-8 sm:grid-cols-2">
  {PIMPINAN.map((p) => (
    <div key={p.name}>
      <p className="font-display text-xl font-bold leading-tight md:text-2xl">{p.name}</p>
      <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
    </div>
  ))}
</div>
        </section>

        <hr className="my-14 border-border/60" />

        {/* Visi */}
        <section>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            Visi
          </h2>
          <p className="mt-5 font-display text-2xl italic leading-snug text-foreground md:text-3xl">
  "{VISI}"
</p>
        </section>

        <hr className="my-14 border-border/60" />

        {/* Misi */}
        <section>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            Misi
          </h2>
          <ol className="mt-6 space-y-6">
  {MISI.map((m, i) => (
    <li key={m} className="flex gap-5">
      <span className="font-display text-2xl font-bold text-primary/40 md:text-3xl">
        {String(i + 1).padStart(2, "0")}
      </span>
      <span className="pt-1 text-lg leading-relaxed text-foreground/85 md:text-xl">{m}</span>
    </li>
  ))}
</ol>
        </section>

        <hr className="my-14 border-border/60" />

        {/* Data Wilayah */}
        <section>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            Data Wilayah
          </h2>
          <dl className="mt-6 divide-y divide-border/60">
            {DATA_WILAYAH.map((d) => (
              <div key={d.label} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-6">
                <dt className="text-sm text-muted-foreground sm:w-52 sm:shrink-0">{d.label}</dt>
                <dd className="font-medium text-foreground">{d.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <hr className="my-14 border-border/60" />

        {/* Peta Kawasan */}
        <section>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            Peta Kawasan
          </h2>
          {/* TODO: ganti div ini dengan <img src={petaKawasan} alt="Peta Kawasan Kalurahan Sosromenduran" className="mt-6 w-full rounded-2xl border border-border/60" /> */}
          <div className="mt-6 flex justify-center rounded-2xl border border-border/60 bg-secondary/10 p-6">
  <img
    src={petaKawasan}
    alt="Peta kawasan Kalurahan Sosromenduran, luas 0,4 km²"
    className="max-h-[420px] w-auto"
  />
</div>
        </section>

        <hr className="my-14 border-border/60" />

        {/* Batas Wilayah */}
        <section>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            Batas Wilayah
          </h2>
          <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {BATAS_WILAYAH.map((b) => (
              <div key={b.arah}>
                <p className="font-display font-bold">{b.arah}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-14 border-border/60" />

        {/* Kontak & Layanan */}
    {/* Layanan Publik */}
<section>
  <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-primary">
    Layanan Publik
  </h2>
  <p className="mt-4 flex items-start gap-2 text-muted-foreground">
    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
    {/* TODO: isi alamat lengkap kantor kalurahan */}
    Kantor Kalurahan Sosromenduran, Kemantren Gedongtengen, Kota Yogyakarta
  </p>
  <div className="mt-6 grid gap-4 sm:grid-cols-2">
    <div className="rounded-2xl border border-border/60 p-5">
      <p className="font-display font-bold">Peminjaman Aula</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Ajukan peminjaman fasilitas aula kalurahan untuk kegiatan warga.
      </p>
      <Button asChild variant="outline" className="mt-4 rounded-full">
        <a href="https://linktr.ee/DRopSSosro?utm_source=qr_code" target="_blank" rel="noreferrer">
          Ajukan Peminjaman <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="rounded-2xl border border-border/60 p-5">
      <p className="font-display font-bold">Survei Kepuasan Masyarakat</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Bantu kami tingkatkan pelayanan dengan mengisi Survei Kepuasan Masyarakat (SKM).
      </p>
      <Button asChild variant="outline" className="mt-4 rounded-full">
        <a href="https://docs.google.com/forms/d/1SNi5kl4udEaIuBJyiai69MlXTi_kX6JUrWlqCJqRYqg/viewform?edit_requested=true" target="_blank" rel="noreferrer">
          Isi SKM <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  </div>
</section>
      </div>
    </SiteLayout>
  );
}