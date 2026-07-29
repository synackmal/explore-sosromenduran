import kampungImg from "@/assets/kampung-1.jpg";
import culinaryImg from "@/assets/culinary-1.jpg";
import umkmImg from "@/assets/umkm-1.jpg";

// TODO: ganti dengan data & cerita event asli, verifikasi ke warga/kelurahan sebelum publish
export type EventEntry = {
  slug: string;
  title: string;
  period: string;
  location: string;
  cover: string;
  background: string;
  description: string;
};

export const EVENTS: EventEntry[] = [
  {
    slug: "sarkem-fest",
    title: "Sarkem Fest",
    period: "Digelar setiap Agustus",
    location: "Kawasan Pasar Kembang",
    cover: kampungImg,
    background:
      "Sarkem Fest lahir dari inisiatif warga dan pelaku UMKM setempat untuk menghidupkan kembali citra kawasan Pasar Kembang lewat sudut pandang budaya, kuliner, dan kreativitas warga.",
    description:
      "Festival tahunan yang menampilkan panggung musik, bazar UMKM, dan pertunjukan seni jalanan di sepanjang kawasan Pasar Kembang.",
  },
  {
    slug: "kirab-budaya",
    title: "Kirab Budaya Sosromenduran",
    period: "Digelar setiap Agustus, bertepatan dengan HUT RI",
    location: "Sepanjang Jl. Sosrowijayan",
    cover: culinaryImg,
    background:
      "Tradisi kirab ini telah berlangsung turun-temurun sebagai bentuk rasa syukur warga dan penghormatan terhadap sejarah kampung-kampung di Sosromenduran.",
    description:
      "Pawai budaya yang menampilkan bregada, jathilan, dan gunungan hasil bumi, diikuti oleh warga dari 7 kampung Sosromenduran.",
  },
  {
    slug: "workshop-batik-warga",
    title: "Workshop Batik Warga",
    period: "Digelar rutin setiap bulan",
    location: "Kampung Sosrowijayan Kulon",
    cover: umkmImg,
    background:
      "Kegiatan ini menjadi salah satu upaya menjaga regenerasi pengrajin batik di kampung, sekaligus membuka ruang belajar bagi wisatawan yang tertarik pada budaya batik Yogyakarta.",
    description:
      "Sesi belajar membatik langsung dari pengrajin senior kampung, terbuka untuk warga dan wisatawan.",
  },
];