import { createFileRoute } from "@tanstack/react-router";
import { MapPin, ExternalLink, Compass, Heart } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroProfil from "@/assets/hero/hero-about.jpg";

export const Route = createFileRoute("/profil")({
  head: () => ({
    meta: [
      { title: "Tentang Kalurahan — Sosromenduran" },
      { name: "description", content: "Visi, misi, dan informasi resmi Kelurahan Sosromenduran." },
    ],
  }),
  component: ProfilPage,
});

function ProfilPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Profil"
        title="Tentang Kalurahan"
        subtitle="Kenali lebih dekat Kelurahan Sosromenduran."
        image={heroProfil}
      />

      <section className="mx-auto max-w-5xl px-4 md:px-8 pt-10 pb-20 space-y-8">
        <Card className="border-border/60">
          <CardContent className="p-8 grid gap-4 md:grid-cols-[80px_1fr]">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Compass className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">Visi</h3>
              {/* TODO: isi visi resmi kelurahan */}
              <p className="text-muted-foreground leading-relaxed">
                Menjadikan Sosromenduran sebagai kelurahan wisata heritage yang inklusif, berbudaya, dan berdaya ekonomi tinggi bagi warganya.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardContent className="p-8 grid gap-4 md:grid-cols-[80px_1fr]">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Heart className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">Misi</h3>
              {/* TODO: isi misi resmi kelurahan */}
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground leading-relaxed">
                <li>Melestarikan budaya dan sejarah kampung-kampung Sosromenduran.</li>
                <li>Memberdayakan UMKM dan pelaku ekonomi kreatif warga.</li>
                <li>Menyediakan layanan wisata yang ramah, aman, dan berkesan.</li>
                <li>Mendukung transformasi digital pariwisata kampung.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardContent className="p-8">
            <h3 className="font-display text-xl font-bold mb-2">Lurah Sosromenduran Saat Ini</h3>
            {/* TODO: isi nama lurah/ketua saat ini */}
            <p className="text-muted-foreground">Nama Lurah — menjabat sejak [tahun]</p>
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardContent className="p-8 space-y-4">
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold">Kantor Kelurahan Sosromenduran</div>
                {/* TODO: isi alamat lengkap */}
                <div className="text-sm text-muted-foreground">Jl. Sosrowijayan No. 1, Yogyakarta 55271</div>
              </div>
            </div>
            <Button asChild className="rounded-full">
              <a href="https://linktr.ee/DRopSSosro?utm_source=qr_code" target="_blank" rel="noreferrer">
                Layanan & Aduan Kelurahan <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>
    </SiteLayout>
  );
}