import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { events } from "@/data/mock";

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [{ title: "Event Budaya — Sosromenduran" }, { name: "description", content: "Agenda event budaya dan festival Sosromenduran." }] }),
  component: Events,
});

function Events() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 md:px-8 pt-14 pb-6">
        <SectionHeader eyebrow="Agenda" title="Event & Festival" subtitle="Jangan lewatkan momen budaya yang hidup di Sosromenduran." />
      </section>
      <section className="mx-auto max-w-7xl px-4 md:px-8 pb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((e) => (
          <Card key={e.slug} className="overflow-hidden border-border/60 group">
            <div className="aspect-video overflow-hidden">
              <img src={e.cover} alt={e.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <CardContent className="p-5">
              <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                <Calendar className="h-3 w-3" /> {new Date(e.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
              </div>
              <div className="font-display font-bold text-lg mt-2">{e.title}</div>
              <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><MapPin className="h-3 w-3" /> {e.location}</div>
              <p className="text-sm text-muted-foreground mt-2">{e.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </SiteLayout>
  );
}
