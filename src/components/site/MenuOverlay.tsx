import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";

const MENU_ITEMS = [
  { to: "/", label: "Beranda" },
  { to: "/kampung", label: "Kampung" },
  { to: "/umkm", label: "UMKM" },
  { to: "/wisata", label: "Wisata" },
  { to: "/events", label: "Event" },
  { to: "/gallery", label: "Galeri" },
  { to: "/funfact", label: "Funfact" },
];

export function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
          animate={{ clipPath: "circle(150% at calc(100% - 3rem) 2.5rem)" }}
          exit={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-primary"
        >
          <div className="absolute inset-x-0 top-0 mx-auto flex h-20 max-w-7xl items-center justify-end px-4 md:px-8">
  <button
    onClick={onClose}
    aria-label="Tutup menu"
    className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-primary transition-colors hover:bg-cream/90"
  >
    <X className="h-5 w-5" />
  </button>
</div>

          <motion.ul
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } },
              hidden: {},
            }}
            className="flex max-w-4xl flex-row flex-wrap items-center justify-center gap-x-6 gap-y-5 px-8 text-center md:gap-x-8 md:gap-y-7"
          >
            {MENU_ITEMS.map((item) => (
              <motion.li
                key={item.to}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Link
                  to={item.to}
                  onClick={onClose}
                  className="font-display text-3xl font-bold text-cream transition-colors hover:text-gold sm:text-4xl md:text-5xl"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 text-center text-xs font-normal uppercase tracking-[0.2em] text-cream/60"
          >
            KKN-PPM UGM Bergandeng Tengen 2026
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}