import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-[color-mix(in_oklab,var(--foreground)_92%,black)] text-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl font-bold">Bergandeng Tengen</div>
          <p className="mt-2 text-sm text-cream/70">
            Discover the Hidden Gems of Sosromenduran
          </p>
          <div className="mt-4 flex gap-3">
            <a className="p-2 rounded-full bg-white/10 hover:bg-white/20" href="#"><Instagram className="h-4 w-4" /></a>
            <a className="p-2 rounded-full bg-white/10 hover:bg-white/20" href="#"><Facebook className="h-4 w-4" /></a>
            <a className="p-2 rounded-full bg-white/10 hover:bg-white/20" href="#"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-3">Jelajahi</div>
          <ul className="space-y-2 text-sm text-cream/70">
            <li><Link to="/kampung">Kampung</Link></li>
            <li><Link to="/umkm">UMKM</Link></li>
            <li><Link to="/map">Peta Wisata</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Informasi</div>
          <ul className="space-y-2 text-sm text-cream/70">
            <li><Link to="/about">Tentang</Link></li>
            <li><Link to="/events">Event</Link></li>
            <li><Link to="/gallery">Galeri</Link></li>
            <li><Link to="/contact">Chat</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Kontak</div>
          <ul className="space-y-2 text-sm text-cream/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /> Jl. Sosrowijayan No 21, Yogyakarta 55271</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" /> (0274) 547317</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5" /> sosromenduran@jogjakota.go.id</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Kalurahan Sosromenduran - KKN-PPM UGM Bergandeng Tengen 
      </div>
    </footer>
  );
}
