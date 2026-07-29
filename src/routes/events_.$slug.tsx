import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, CalendarDays, ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { EVENTS } from "@/data/events";

export const Route = createFileRoute("/events_/$slug")({
  loader: ({ params }) => {
    const event = EVENTS.find((e) => e.slug === params.slug);
    if (!event) throw notFound();
    return event;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Event"} — Sosromenduran` },
      { name: "description", content: loaderData?.description ?? "" },
    ],
  }),
  component: EventDetailPage,
}); 

function EventDetailPage() {
  const event = Route.useLoaderData();

  return (
    <SiteLayout>
      <div className="pt-20">
        <div className="relative h-64 w-full overflow-hidden md:h-96">
          <img src={event.cover} alt={event.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        <div className="mx-auto max-w-3xl px-4 py-10 md:px-8">
          <Link to="/events" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" /> Kembali ke semua event
          </Link>

          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
            <CalendarDays className="h-3.5 w-3.5" />
            {event.period}
          </span>

          <h1 className="mt-4 font-display text-3xl font-bold md:text-4xl">{event.title}</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> {event.location}
          </p>

          <p className="mt-6 text-muted-foreground leading-relaxed">{event.description}</p>

          <div className="mt-6 border-l-2 border-tertiary pl-4">
            <p className="text-sm italic leading-relaxed text-foreground/80">{event.background}</p>
          </div>

          {/* TODO: tambahkan section lain sesuai kebutuhan, misal: rangkaian acara, galeri foto, narasumber, dll */}
        </div>
      </div>
    </SiteLayout>
  );
}