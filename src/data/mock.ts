import kampungImg from "@/assets/kampung-1.jpg";
import culinaryImg from "@/assets/culinary-1.jpg";
import umkmImg from "@/assets/umkm-1.jpg";

export type Kampung = {
  slug: string;
  name: string;
  cover: string;
  short: string;
  history: string;
  uniqueness: string;
  attractions: string[];
  culturalActivities: string[];
  gallery: string[];
  location: { lat: number; lng: number };
  umkm: string[];
  culinary: string[];
};

export type UMKM = {
  slug: string;
  name: string;
  category: string;
  photo: string;
  description: string;
  address: string;
  hours: string;
  contact: string;
  products: string[];
  gallery: string[];
  location: { lat: number; lng: number };
};

export type Culinary = {
  slug: string;
  name: string;
  photo: string;
  signature: string;
  priceRange: string;
  description: string;
  address: string;
  hours: string;
  contact: string;
  mapsUrl: string;
  gallery: string[];
  location: { lat: number; lng: number };
  category: string;
};

export type EventItem = {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  cover: string;
};

const KAMPUNG_NAMES = [
  "Sosrowijayan Wetan",
  "Sosrowijayan Kulon",
  "Jogonegaran",
  "Pajeksan",
  "Gandekan Lor",
  "Dagen",
  "Pringgokusuman",
];

export const kampungs: Kampung[] = KAMPUNG_NAMES.map((name, i) => ({
  slug: name.toLowerCase().replace(/\s+/g, "-"),
  name,
  cover: kampungImg,
  short: `Kampung ${name} adalah salah satu kampung bersejarah di Kelurahan Sosromenduran dengan karakter budaya yang khas.`,
  history: `Kampung ${name} berdiri sejak masa Kesultanan Yogyakarta. Nama kampung ini berkaitan erat dengan profesi dan peran warganya pada masa Keraton, dan berkembang seiring tumbuhnya kawasan Malioboro sebagai jantung wisata Yogyakarta.`,
  uniqueness: `Suasana kampung yang menyatu dengan denyut Malioboro, warga yang ramah, gang-gang bermural, serta aktivitas UMKM dan kuliner khas Yogyakarta.`,
  attractions: [
    "Gang mural batik",
    "Kampung wisata heritage",
    "Studio batik warga",
    "Sudut instagramable",
  ],
  culturalActivities: [
    "Jathilan bulanan",
    "Latihan gamelan warga",
    "Kirab budaya",
    "Workshop batik",
  ],
  gallery: [kampungImg, umkmImg, culinaryImg, kampungImg],
  location: { lat: -7.7925 + i * 0.001, lng: 110.365 + i * 0.001 },
  umkm: ["batik-lestari", "kopi-gandekan"],
  culinary: ["gudeg-yu-djum", "sate-kere-pak-min"],
}));

export const umkms: UMKM[] = [
  {
    slug: "batik-lestari",
    name: "Batik Lestari",
    category: "Kerajinan",
    photo: umkmImg,
    description: "Workshop batik tulis dan cap yang telah berjalan turun temurun sejak 1978.",
    address: "Jl. Sosrowijayan Kulon No. 12",
    hours: "08.00 - 20.00",
    contact: "+62 812 3456 7890",
    products: ["Batik tulis", "Batik cap", "Kain jarik", "Souvenir"],
    gallery: [umkmImg, kampungImg, culinaryImg],
    location: { lat: -7.7928, lng: 110.3651 },
  },
  {
    slug: "kopi-gandekan",
    name: "Kopi Gandekan",
    category: "Kuliner",
    photo: culinaryImg,
    description: "Kedai kopi lokal dengan biji pilihan dari petani Gunung Kidul.",
    address: "Jl. Gandekan Lor No. 5",
    hours: "07.00 - 23.00",
    contact: "+62 813 9876 5432",
    products: ["Kopi tubruk", "V60", "Cold brew", "Snack tradisional"],
    gallery: [culinaryImg, kampungImg],
    location: { lat: -7.793, lng: 110.366 },
  },
  {
    slug: "souvenir-malioboro",
    name: "Souvenir Malioboro",
    category: "Souvenir",
    photo: kampungImg,
    description: "Aneka oleh-oleh khas Yogyakarta dari pengrajin kampung.",
    address: "Jl. Pajeksan No. 8",
    hours: "09.00 - 21.00",
    contact: "+62 811 2345 6789",
    products: ["Kaos jogja", "Gantungan kunci", "Miniatur becak", "Blangkon"],
    gallery: [kampungImg, umkmImg],
    location: { lat: -7.7935, lng: 110.3648 },
  },
  {
    slug: "jamu-mbok-yem",
    name: "Jamu Mbok Yem",
    category: "Minuman",
    photo: culinaryImg,
    description: "Jamu tradisional Jawa racikan turun temurun.",
    address: "Jl. Jogonegaran No. 21",
    hours: "05.30 - 11.00",
    contact: "+62 858 1234 5678",
    products: ["Beras kencur", "Kunyit asam", "Sinom", "Temulawak"],
    gallery: [culinaryImg],
    location: { lat: -7.792, lng: 110.365 },
  },
  {
    slug: "perak-kotagede",
    name: "Kerajinan Perak Sosro",
    category: "Kerajinan",
    photo: umkmImg,
    description: "Perhiasan perak handmade dengan motif batik dan wayang.",
    address: "Jl. Dagen No. 3",
    hours: "10.00 - 20.00",
    contact: "+62 819 4567 1234",
    products: ["Cincin", "Kalung", "Anting", "Bros"],
    gallery: [umkmImg],
    location: { lat: -7.7924, lng: 110.3655 },
  },
  {
    slug: "warung-angkringan-sri",
    name: "Angkringan Bu Sri",
    category: "Kuliner",
    photo: culinaryImg,
    description: "Angkringan legendaris dengan nasi kucing dan wedang jahe.",
    address: "Jl. Pringgokusuman No. 15",
    hours: "17.00 - 02.00",
    contact: "+62 856 2345 6789",
    products: ["Nasi kucing", "Sate usus", "Wedang jahe", "Gorengan"],
    gallery: [culinaryImg],
    location: { lat: -7.7932, lng: 110.3662 },
  },
];

export const culinaries: Culinary[] = [
  {
    slug: "gudeg-yu-djum",
    name: "Gudeg Yu Djum",
    photo: culinaryImg,
    signature: "Gudeg komplit dengan krecek dan telur",
    priceRange: "Rp 20.000 - Rp 60.000",
    description: "Gudeg legendaris Yogyakarta yang manis gurih, disajikan hangat di atas daun pisang.",
    address: "Jl. Sosrowijayan Wetan No. 4",
    hours: "06.00 - 22.00",
    contact: "+62 274 512345",
    mapsUrl: "https://maps.google.com/?q=Gudeg+Yu+Djum+Yogyakarta",
    gallery: [culinaryImg, kampungImg],
    location: { lat: -7.7926, lng: 110.3653 },
    category: "Tradisional",
  },
  {
    slug: "sate-kere-pak-min",
    name: "Sate Kere Pak Min",
    photo: culinaryImg,
    signature: "Sate kere tempe gembus",
    priceRange: "Rp 15.000 - Rp 40.000",
    description: "Sate rakyat khas Yogyakarta dari tempe gembus dan lemak sapi, dibakar dengan arang.",
    address: "Jl. Jogonegaran No. 10",
    hours: "16.00 - 23.00",
    contact: "+62 274 987654",
    mapsUrl: "https://maps.google.com/?q=Sate+Kere+Yogyakarta",
    gallery: [culinaryImg],
    location: { lat: -7.7929, lng: 110.3659 },
    category: "Street Food",
  },
  {
    slug: "bakmi-jawa-mbah-mo",
    name: "Bakmi Jawa Mbah Mo",
    photo: culinaryImg,
    signature: "Bakmi godog ayam kampung",
    priceRange: "Rp 25.000 - Rp 45.000",
    description: "Bakmi jawa autentik dimasak di atas anglo dengan aroma khas asap kayu.",
    address: "Jl. Dagen No. 7",
    hours: "17.00 - 24.00",
    contact: "+62 274 445566",
    mapsUrl: "https://maps.google.com/?q=Bakmi+Jawa+Yogyakarta",
    gallery: [culinaryImg],
    location: { lat: -7.7922, lng: 110.3658 },
    category: "Tradisional",
  },
  {
    slug: "kopi-joss-lek-man",
    name: "Kopi Joss Lek Man",
    photo: culinaryImg,
    signature: "Kopi joss arang panas",
    priceRange: "Rp 5.000 - Rp 20.000",
    description: "Kopi ikonik Yogyakarta dengan arang membara yang celup langsung ke cangkir.",
    address: "Jl. Pringgokusuman No. 2",
    hours: "18.00 - 03.00",
    contact: "+62 274 223344",
    mapsUrl: "https://maps.google.com/?q=Kopi+Joss+Yogyakarta",
    gallery: [culinaryImg],
    location: { lat: -7.7934, lng: 110.3661 },
    category: "Minuman",
  },
];

export const events: EventItem[] = [
  {
    slug: "kirab-budaya-sosromenduran",
    title: "Kirab Budaya Sosromenduran",
    date: "2026-08-17",
    location: "Sepanjang Jl. Sosrowijayan",
    description: "Pawai budaya tahunan menampilkan bregada, jathilan, dan gunungan hasil bumi.",
    cover: kampungImg,
  },
  {
    slug: "festival-kuliner-malioboro",
    title: "Festival Kuliner Malioboro",
    date: "2026-09-05",
    location: "Kampung Dagen",
    description: "Puluhan tenant kuliner legendaris menyajikan menu khas Yogyakarta.",
    cover: culinaryImg,
  },
  {
    slug: "workshop-batik-warga",
    title: "Workshop Batik Warga",
    date: "2026-07-28",
    location: "Kampung Sosrowijayan Kulon",
    description: "Belajar membatik langsung dari pengrajin senior kampung.",
    cover: umkmImg,
  },
];

export const stats = {
  kampungs: kampungs.length,
  umkm: 84,
  culinary: 42,
  attractions: 27,
};

export const galleryImages = [
  kampungImg, culinaryImg, umkmImg,
  kampungImg, culinaryImg, umkmImg,
  kampungImg, culinaryImg, umkmImg,
];
