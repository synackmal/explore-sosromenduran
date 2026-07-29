import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { MenuOverlay } from "./MenuOverlay";
import logoLight from "@/assets/kkn-logo-light.png";
import logoDark from "@/assets/kkn-logo-dark.png";
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const transparent = !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu otomatis kalau pindah halaman
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/contact", label: "Chatbot" },
    { to: "/map", label: "Peta" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          transparent ? "bg-transparent" : "glass border-b border-border/60"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={transparent ? logoLight : logoDark}
              alt="Logo Sosromenduran"
              className="h-10 w-10 object-contain transition-opacity duration-300"
            />
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
  {navLinks.map((l) => (
    <Link
      key={l.to}
      to={l.to}
      className={`rounded-md px-3 py-2 text-base font-medium transition-colors ${
        transparent ? "text-white/85 hover:text-white" : "text-foreground/80 hover:text-primary"
      }`}
    >
      {l.label}
    </Link>
  ))}
  <ProfilDropdown transparent={transparent} />
</nav>

          {/* Tombol Menu — selalu ada, di semua ukuran layar */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            className={`relative flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
              menuOpen ? "bg-cream text-primary" : transparent ? "bg-white/15 text-white" : "bg-primary text-cream"
            }`}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-6 bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-0.5 w-6 bg-current transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-0.5 w-6 bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

function ProfilDropdown({ transparent }: { transparent: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 rounded-md px-3 py-2 text-base font-medium transition-colors ${
          transparent ? "text-white/85 hover:text-white" : "text-foreground/80 hover:text-primary"
        }`}
      >
        Profil
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-cream/10 bg-primary p-2 shadow-xl">
          <Link
            to="/profil"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-3 text-cream/90 transition-colors hover:bg-cream/10 hover:text-cream"
          >
            Tentang Kalurahan
          </Link>
          <Link
            to="/profil-tim"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-3 text-cream/90 transition-colors hover:bg-cream/10 hover:text-cream"
          >
            Profil Tim
          </Link>
        </div>
      )}
    </div>
  );
}