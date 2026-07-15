import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Kontak — Sosromenduran" }, { name: "description", content: "Hubungi Kelurahan Sosromenduran, Yogyakarta." }] }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 md:px-8 pt-14 pb-6">
        <SectionHeader eyebrow="Kontak" title="Hubungi Kami" subtitle="Silakan sampaikan pertanyaan, saran, atau kolaborasi kepada tim Sosromenduran." />
      </section>
      <section className="mx-auto max-w-7xl px-4 md:px-8 pb-20 grid gap-8 lg:grid-cols-[1fr_400px]">
        <Card className="border-border/60">
          <CardContent className="p-8">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 md:grid-cols-2">
                <div><Label>Nama</Label><Input className="mt-1" placeholder="Nama lengkap" /></div>
                <div><Label>Email</Label><Input className="mt-1" type="email" placeholder="you@email.com" /></div>
              </div>
              <div><Label>Subjek</Label><Input className="mt-1" placeholder="Topik pesan" /></div>
              <div><Label>Pesan</Label><Textarea className="mt-1" rows={6} placeholder="Tulis pesan Anda..." /></div>
              <Button type="submit" className="rounded-full">Kirim Pesan <Send className="ml-2 h-4 w-4" /></Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-border/60">
            <CardContent className="p-6 space-y-4">
              <div className="flex gap-3"><MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" /><div><div className="font-semibold">Kantor Kelurahan</div><div className="text-sm text-muted-foreground">Jl. Sosrowijayan No. 1, Yogyakarta 55271</div></div></div>
              <div className="flex gap-3"><Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" /><div><div className="font-semibold">Telepon</div><div className="text-sm text-muted-foreground">+62 274 512 345</div></div></div>
              <div className="flex gap-3"><Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" /><div><div className="font-semibold">Email</div><div className="text-sm text-muted-foreground">info@sosromenduran.id</div></div></div>
            </CardContent>
          </Card>
          <Card className="border-border/60 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary/15 to-accent/15 batik-pattern grid place-items-center">
              <MapPin className="h-10 w-10 text-primary" />
            </div>
          </Card>
        </div>
      </section>
    </SiteLayout>
  );
}
