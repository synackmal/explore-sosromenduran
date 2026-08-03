import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import type { RichBlock } from "@/data/mock";
import { SARKEM_FEST } from "@/data/events";
import heroEvent from "@/assets/hero/hero-eventt.jpeg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: `${SARKEM_FEST.title} — Sosromenduran` },
      { name: "description", content: SARKEM_FEST.subtitle },
    ],
  }),
  component: EventsPage,
});

function RichSectionBlock({ block }: { block: RichBlock }) {
  if (block.type === "paragraph") {
    return (
      <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
        {block.text.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    );
  }
  if (block.type === "subheading") {
    return <h2 className="font-display text-2xl font-bold mt-2">{block.text}</h2>;
  }
  if (block.type === "list") {
    return (
      <ul className="list-disc space-y-1.5 pl-5 text-muted-foreground">
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "table") {
    return (
      <dl className="divide-y divide-border/60 rounded-xl border border-border/60">
        {block.rows.map((row, i) => (
          <div key={i} className="flex flex-col gap-1 p-3 sm:flex-row sm:items-baseline sm:gap-4">
            <dt className="text-sm text-muted-foreground sm:w-56 sm:shrink-0">{row.label}</dt>
            <dd className="font-medium text-foreground">{row.value}</dd>
          </div>
        ))}
      </dl>
    );
  }
  return null;
}

function EventsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Tradisi & Perayaan"
        title={SARKEM_FEST.title}
        subtitle={SARKEM_FEST.subtitle}
        image={heroEvent}
      />

      <section className="mx-auto max-w-3xl px-4 md:px-8 py-14">
        <div className="mb-10 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
            <CalendarDays className="h-3.5 w-3.5" /> {SARKEM_FEST.period}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-foreground/70">
            <MapPin className="h-3.5 w-3.5" /> {SARKEM_FEST.location}
          </span>
        </div>

        <div className="space-y-6">
          {SARKEM_FEST.blocks.map((block, i) => (
            <RichSectionBlock key={i} block={block} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}