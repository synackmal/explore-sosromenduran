import { createFileRoute } from "@tanstack/react-router";
import { Landmark, Compass, Heart, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "Tentang Sosromenduran" }, { name: "description", content: "Sejarah, visi, misi, dan potensi wisata Kelurahan Sosromenduran." }] }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 md:px-8 pt-14 pb-6">
        <SectionHeader eyebrow="Tentang Kami" title="Kelurahan Sosromenduran" subtitle="Kelurahan bersejarah di jantung Yogyakarta yang berdampingan langsung dengan kawasan Malioboro." />
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-8 pb-10 space-y-10">
        <Block icon={Landmark} title="Sejarah">
          Sosromenduran adalah kelurahan bersejarah di Kecamatan Gedongtengen, Kota Yogyakarta. Nama-nama kampungnya seperti Sosrowijayan, Jogonegaran, dan Pajeksan berakar pada peran abdi dalem Keraton Yogyakarta pada masanya. Kelurahan ini tumbuh bersama kawasan Malioboro sejak abad ke-19.
        </Block>
        <Block icon={Compass} title="Visi">
          Menjadikan Sosromenduran sebagai kelurahan wisata heritage yang inklusif, berbudaya, dan berdaya ekonomi tinggi bagi warganya.
        </Block>
        <Block icon={Heart} title="Misi">
          <ul className="list-disc pl-5 space-y-1">
            <li>Melestarikan budaya dan sejarah kampung-kampung Sosromenduran.</li>
            <li>Memberdayakan UMKM dan pelaku ekonomi kreatif warga.</li>
            <li>Menyediakan layanan wisata yang ramah, aman, dan berkesan.</li>
            <li>Mendukung transformasi digital pariwisata kampung.</li>
          </ul>
        </Block>
        <Block icon={Sparkles} title="Potensi Wisata & Warisan Budaya">
          Sosromenduran menyimpan potensi wisata heritage, kuliner legendaris, seni batik warga, jathilan, gamelan, hingga event budaya tahunan. Semua terhubung dalam radius berjalan kaki dari Stasiun Tugu dan Malioboro.
        </Block>
      </section>
    </SiteLayout>
  );
}

function Block({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <Card className="border-border/60">
      <CardContent className="p-8 grid gap-4 md:grid-cols-[80px_1fr]">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-7 w-7" /></div>
        <div>
          <h3 className="font-display text-2xl font-bold mb-2">{title}</h3>
          <div className="text-muted-foreground leading-relaxed">{children}</div>
        </div>
      </CardContent>
    </Card>
  );
}
