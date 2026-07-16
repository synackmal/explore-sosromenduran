import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoLight from "@/assets/kkn-logo-light.png";
import logoDark from "@/assets/kkn-logo-dark.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/kampung", label: "Kampung" },
  { to: "/umkm", label: "UMKM" },
  { to: "/culinary", label: "Kuliner" },
  { to: "/map", label: "Peta" },
  { to: "/gallery", label: "Galeri" },
  { to: "/events", label: "Event" },
  { to: "/about", label: "Tentang" },
  { to: "/contact", label: "Chat" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const transparent = !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        transparent ? "bg-transparent border-b border-transparent" : "glass border-b border-border/60"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img
  src={transparent ? logoLight : logoDark}
  alt="Logo Sosromenduran"
  className="h-10 w-10 object-contain transition-opacity duration-300"
/>
          <div className="leading-tight">
            <div className={`font-display text-xl font-bold ${transparent ? "text-white" : ""}`}>
              Bergandeng Tengen
            </div>
            <div
              className={`text-xs uppercase tracking-widest ${
                transparent ? "text-white/70" : "text-muted-foreground"
              }`}
            >
              Sosromenduran
            </div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: transparent ? "text-white" : "text-primary" }}
              className={`px-3 py-2 text-base font-medium transition-colors rounded-md ${
                transparent
                  ? "text-white/85 hover:text-white"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className={`lg:hidden p-2 rounded-md ${transparent ? "text-white hover:bg-white/10" : "hover:bg-muted"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-muted text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="parang-accent" />
    </header>
  );
}