import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Clock, Tag, ImageIcon } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import type { RichBlock } from "@/data/mock";
import { ARTICLES } from "@/data/articles";

export const Route = createFileRoute("/artikel/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Artikel"} — Sosromenduran` },
      { name: "description", content: loaderData?.subtitle ?? "" },
    ],
  }),
  component: ArticleDetail,
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
    return <h3 className="font-display text-xl font-bold mt-2">{block.text}</h3>;
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
  return null;
}

function ArticleDetail() {
  const article = Route.useLoaderData();

  return (
    <SiteLayout>
      <div className="pt-20">
        {/* TODO: ganti dengan foto cover artikel asli */}
        <div className="relative h-64 w-full overflow-hidden md:h-96">
  <img src={article.cover} alt={article.title} className="h-full w-full object-cover" />
</div>

        <div className="mx-auto max-w-3xl px-4 py-10 md:px-8">
          <Link to="/umkm" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" /> Kembali ke UMKM & Kuliner
          </Link>

          <h1 className="mt-6 font-display text-3xl font-bold md:text-4xl">{article.title}</h1>
          <p className="mt-2 text-muted-foreground">{article.subtitle}</p>

          <p className="mt-6 text-muted-foreground leading-relaxed text-justify">{article.intro}</p>

          <div className="mt-12 space-y-14">
            {article.entries.map((entry) => (
              <div key={entry.slug} id={entry.slug}>
                {/* TODO: ganti dengan foto makanan asli */}
                <div className="aspect-video w-full overflow-hidden rounded-2xl">
  <img src={entry.photo} alt={entry.name} className="h-full w-full object-cover" />
</div>

                <h2 className="mt-5 font-display text-2xl font-bold">{entry.name}</h2>

                <div className="mt-4 space-y-5">
                  {entry.body.map((block, i) => (
                    <RichSectionBlock key={i} block={block} />
                  ))}
                </div>

                <dl className="mt-5 divide-y divide-border/60 rounded-xl border border-border/60">
                  {entry.info.map((row) => (
                    <div key={row.label} className="flex flex-col gap-1 p-3 sm:flex-row sm:items-baseline sm:gap-4">
                      <dt className="flex items-center gap-1.5 text-sm text-muted-foreground sm:w-44 sm:shrink-0">
                        {row.label === "Lokasi" && <MapPin className="h-3.5 w-3.5" />}
                        {row.label === "Jam Operasional" && <Clock className="h-3.5 w-3.5" />}
                        {row.label === "Harga" && <Tag className="h-3.5 w-3.5" />}
                        {row.label}
                      </dt>
                      <dd className="font-medium text-foreground">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-14 border-l-2 border-tertiary pl-4">
            <h3 className="font-display text-lg font-bold">Tips Singkat Jelajah Kuliner</h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
              {article.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}