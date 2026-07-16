export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo/90 via-indigo/60 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-8 text-white">
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-3">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-3xl md:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="mt-3 text-white/85 max-w-xl">{subtitle}</p>}
      </div>
      <div className="parang-accent absolute bottom-0 left-0 right-0" />
    </section>
  );
}