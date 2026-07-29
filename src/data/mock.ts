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
  signature?: string;
  priceRange?: string;
  description: string;
  address: string;
  hours: string;
  contact: string;
  mapsUrl?: string;
  gallery: string[];
  location?: { lat: number; lng: number };
  category: string;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

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
    category: "Kuliner",
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

// Data riset lapangan tim KKN — foto masih placeholder, lokasi (lat/lng) & mapsUrl belum diisi,
// TODO: lengkapi begitu foto asli & titik lokasi ArcGIS tersedia
const CULINARY_RAW: [string, string, string, string, string, string, string][] = [
  ["Kuliner", "Kedai Lur", "Rumah makan khas Jogja dengan menu ayam goreng godhong telo dan mi jawa, suasana nyaman ala rumah tradisional.", "Jl. Gowongan Kidul No. 29A, Sosromenduran", "Senin–Sabtu 12.00–21.00", "+62 858-7850-6000", "Ayam Goreng Godhong Telo, Mi Jawa, Timus"],
  ["Kuliner", "Bakwan Udang Malioboro", "Gerai bakwan udang khas, murah dan gurih, favorit jajanan sore di area Malioboro.", "Jl. Wongsodirjan, Sosromenduran", "Tidak tercantum", "Tidak tercantum", "Bakwan Udang"],
  ["Kuliner", "Asinan Bogor Depan Gereja", "Asinan segar khas Bogor dengan bumbu kacang manis-pedas, cocok untuk cuaca panas.", "Jl. Sosrowijayan GT I No. 1F, Sosromenduran", "Setiap hari 10.00–16.00", "Tidak tercantum", "Asinan Buah, Asinan Sayur, Kerupuk Kuning"],
  ["Kuliner", "Wings Rice Bowl", "Rice bowl dengan varian sayap ayam, buka 24 jam, harga terjangkau.", "Jl. Wongsodirjan, Sosromenduran", "Buka 24 jam", "+62 823-2787-2735", "Nasi Langgi, Rice Bowl Sayap Ayam"],
  ["Kuliner", "Warung Rames Bu Iin", "Warung nasi rames sederhana, bersih dan teduh, parkir luas.", "Jl. Wongsodirjan, Sosromenduran", "Tidak tercantum", "+62 838-4439-3893", "Nasi Rames"],
  ["Kuliner", "Soto Sulung", "Soto sulung sederhana di kawasan Sosromenduran.", "Sosromenduran", "Tidak tercantum", "Tidak tercantum", "Soto Sulung"],
  ["Kuliner", "Nasi Goreng Exist", "Nasi goreng kaki lima dengan bumbu ala satai, tersedia nasi goreng Magelangan dan kwetiau.", "Jl. Wongsodirjan No. 23, Sosromenduran", "Senin–Jumat 09.00–23.00", "+62 897-0066-807", "Nasi Goreng Biasa, Nasi Goreng Magelangan, Kwetiau"],
  ["Kuliner", "Mie Ayam Yoman", "Mi ayam sederhana dengan mi keriting, harga sangat terjangkau.", "Jl. Wongsodirjan No. 46-22, Sosromenduran", "Senin–Sabtu 17.00–20.00", "Tidak tercantum", "Mi Ayam, Mi Ayam Kuah, Es Teh"],
  ["Angkringan", "Angkringan Kopi Joss Tiara", "Angkringan legendaris dekat Stasiun Tugu, terkenal dengan kopi joss dan nasi kucing.", "Jl. Pasar Kembang, Sosromenduran", "Setiap hari 15.45–24.00", "Tidak tercantum", "Kopi Joss, Nasi Kucing, Sate-satean"],
  ["Angkringan", "Angkringan Kopi Joss Pak Gondrong", "Angkringan dengan suasana santai, dekat area Malioboro.", "Jl. Wongsodirjan No. 10, Sosromenduran", "Selasa–Minggu 18.00–01.00", "+62 878-3975-2109", "Kopi Joss, Sego Kucing"],
  ["Kuliner", "Sego Berkat dan Susu Murni Sortanjung", "Warung nasi dan susu murni segar, dekat Stasiun Tugu, tempat nongkrong nyaman.", "Jl. Wongsodirjan, Sosromenduran", "Setiap hari 07.00–10.30 & 17.00–24.00", "+62 813-2540-1928", "Sego Berkat, Susu Murni, Dimsum"],
  ["Kuliner", "Es Coklat Tentrem", "Es cokelat legendaris di Jl. Sosrowijayan, favorit wisatawan Malioboro.", "Jl. Sosrowijayan No. 30, Sosromenduran", "Setiap hari 15.00–24.00", "+62 898-0591-352", "Es Coklat, Roti"],
  ["Kuliner", "Bebek Goreng Rempah Suwarno", "Bebek goreng renyah dengan bumbu rempah khas, cukup tersembunyi di gang.", "Jl. Sosrowijayan GT I, Sosromenduran", "Setiap hari 08.00–21.00", "+62 856-4300-3008", "Bebek Goreng, Onion Ring, Sambal"],
  ["Kuliner", "Nasi Goreng Suroboyo", "Nasi goreng khas Surabaya di Jl. Malioboro.", "Jl. Malioboro No. 175, Sosromenduran", "Tidak tercantum", "Tidak tercantum", "Nasi Goreng Suroboyo"],
  ["Kuliner", "Dapur Penyetan dan Kelontong Mba Lia", "Warung penyetan dan kelontong, dekat Stasiun Tugu.", "Jl. Pasar Kembang No. 5, Sosromenduran", "Setiap hari 06.00–23.00", "+62 856-4386-1630", "Ayam/Bandeng Presto Penyet, Ayam Bakar, Soto"],
  ["Kuliner", "Warung Bakso Cornelan (Non-Halal)", "Bakso non-halal legendaris, khas dengan babi dan usus, harus ambil nomor antre.", "Jl. Sosrowijayan No. 43, Sosromenduran", "Setiap hari 16.30–20.30", "+62 813-2809-4421", "Bakso Daging Babi, Es Sirup, Bakso Kriuk"],
  ["Kuliner", "Gudeg Bu Menuk", "Gudeg segar tidak terlalu manis, favorit sarapan di Sosrowijayan.", "Jl. Sosrowijayan No. 45, Sosromenduran", "Setiap hari 05.00–09.00", "Tidak tercantum", "Gudeg, Telur, Bubur Gudeg"],
  ["Kuliner", "Bubur Ayam dan Soto Ayam Teras RGM", "Bubur ayam dan soto ayam untuk sarapan, dekat Malioboro.", "Jl. Sosrowijayan No. 33, Sosromenduran", "Setiap hari 06.15–14.00", "+62 851-7714-9393", "Bubur Ayam, Soto Ayam, Pecel"],
  ["Kuliner", "Asinan Nyinyir", "Asinan buah segar dengan level kepedasan 1–5.", "Sosromenduran", "Setiap hari 09.00–21.00", "+62 858-7854-4414", "Asinan Mangga Muda, Asinan Salak, Asinan Nanas"],
  ["Kuliner", "Lumpia Jago Malioboro", "Lumpia dengan menu tambahan tengkleng dan tongseng.", "Jl. Dagen, Sosromenduran", "Kamis–Senin 16.00–22.30", "Tidak tercantum", "Lumpia, Tengkleng, Tongseng"],
  ["Kuliner", "Wedang Ronde Lek Dhie Milenial", "Wedang ronde hangat khas dengan jahe, kacang, dan roti tawar.", "Jl. Malioboro No. 16, Sosromenduran", "Setiap hari 17.30–24.00", "+62 838-4003-6871", "Wedang Ronde, Roti Tawar, Kacang"],
  ["Kuliner", "Warung Cokro Endos", "Nasi goreng pete, bakmi jawa, dan sop iga sapi dalam satu warung.", "Jl. Dagen No. 7, Sosromenduran", "Setiap hari 09.00–02.00", "+62 858-1429-5421", "Nasi Goreng Pete, Bakmi Jawa, Sop Iga Sapi"],
  ["Kuliner", "Nasi Rames Rendang Surya", "Nasi rames dengan rendang terkenal, sambal yang khas.", "Jl. Pajeksan, Sosromenduran", "Setiap hari 10.00–22.00", "+62 882-2528-3662", "Rendang Sapi, Rendang Ayam, Sambal"],
  ["Kuliner", "Ayam Goreng Pak Landung", "Ayam goreng dengan sambal mentah/matang yang jadi andalan.", "Jl. Sosromenduran, Sosromenduran", "Setiap hari 17.00–21.30", "+62 812-2920-4432", "Ayam Goreng, Sambal Mentah, Sambal Matang"],
  ["Kuliner", "Penyetan Mahessa", "Penyetan dengan sambal ulek langsung, level pedas bisa custom.", "Jl. Dagen, Sosromenduran", "Setiap hari 17.00–24.00", "Tidak tercantum", "Sambal Belut, Sambal Wader, Ayam Penyet"],
  ["Kuliner", "Bakso Punksit 182", "Warung bakso di Jl. Dagen.", "Jl. Dagen No. 50, Sosromenduran", "Setiap hari 17.00–22.00", "+62 882-0065-00226", "Bakso"],
  ["Kuliner", "Nasi Goreng dan Bakmi Jawa nDobloh", "Nasi goreng dan bakmi jawa, usaha keluarga dengan pelayanan ramah.", "Jl. Dagen No. 50, Sosromenduran", "Setiap hari 18.00–24.00", "Tidak tercantum", "Nasi Goreng, Bakmi Goreng, Bakmi Godog"],
  ["Kuliner", "Bakmi Jawa Ngedjaman", "Bakmi jawa dengan menu Magelangan, sate klatak, dan rica-rica, suasana nyaman dengan dekorasi khas.", "Jl. Dagen No. 9, Sosromenduran", "Setiap hari 08.00–23.00", "+62 896-7244-0488", "Bakmi Jawa Godog, Sate Klatak, Rica-Rica"],
  ["Kuliner", "Bakmi Jawa Mince", "Bakmi jawa dimasak dengan arang, dekat Hotel Fortuna Grande.", "Jl. Dagen, Sosromenduran", "Tidak tercantum", "+62 821-3643-1841", "Bakmi Goreng, Bakmi Godog, Acar"],
  ["Kuliner", "Mie Ayam 69", "Mi ayam dengan cita rasa gurih, ada juga timlo dan bakmoy.", "Jl. Sosrowijayan No. 69, Sosromenduran", "Setiap hari 09.00–20.00", "+62 274-542859", "Mi Ayam, Timlo, Bakmoy"],
  ["Angkringan", "Angkringan Ma' Iputh", "Angkringan dengan nasi kucing dan sambal teri.", "Jl. Sosrowijayan GT I, Sosromenduran", "Tidak tercantum", "Tidak tercantum", "Nasi Kucing, Sambal Teri, Sate"],
  ["Kuliner", "Bakmi Jowo Sarmangun", "Bakmi jowo di Jl. Jogonegaran.", "Jl. Jogonegaran, Sosromenduran", "Setiap hari 10.00–22.00", "+62 896-7460-8408", "Bakmi Jawa"],
  ["Kuliner", "Bakmi Pak Mangun Non Halal", "Bakmi jawa non-halal dimasak dengan anglo tradisional, topping babi melimpah.", "Jl. Jogonegaran, Sosromenduran", "Setiap hari 17.00–23.00", "Tidak tercantum", "Bakmi Godog, Bakmi Goreng, Topping Babi"],
  ["Kuliner", "Lumpia Maksumi", "Lumpia murah meriah, sering habis sebelum jam 9 pagi.", "Jl. Gandekan, Sosromenduran", "Sabtu–Kamis 06.30–09.00", "+62 895-0717-9238", "Lumpia"],
  ["Kuliner", "Bakmi Jawa Pak Handoko", "Bakmi jawa godok dan magelangan, porsi besar dan harga terjangkau.", "Jl. Jogonegaran, Sosromenduran", "Setiap hari 17.30–24.00", "+62 853-3659-1765", "Bakmi Godok, Bakmi Magelangan, Bakmi Goreng"],
  ["Kuliner", "Nasi Goreng Ongko", "Nasi goreng kecombrang yang jadi favorit, bisa custom pedas.", "Jl. Sosrowijayan GT I No. 951, Sosromenduran", "Selasa, Rabu, Jumat, Sabtu 18.00–21.30", "+62 851-6358-2726", "Nasi Goreng Kecombrang, Nasi Goreng Extra Telur, Bakso"],
  ["Kuliner", "Bakso dan Mie Ayam Pak Tumiyo", "Warung bakso dan mi ayam pagi hari.", "Jl. Jogonegaran, Sosromenduran", "Setiap hari 07.00–09.30", "Tidak tercantum", "Bakso, Mi Ayam"],
  ["Kue/Camilan", "Kue Basah Widya", "Toko kue basah tradisional.", "Jl. Jogonegaran No. 918, Sosromenduran", "Setiap hari 08.00–20.00", "+62 274-580601", "Kue Basah"],
  ["Kue/Camilan", "Bu Sumi Snack", "Toko snack/camilan, buka 24 jam.", "Jl. Jogonegaran, Sosromenduran", "Buka 24 jam", "+62 896-7734-7979", "Snack/Camilan"],
  ["Kuliner", "Warung Bu Hadi", "Warung makan rumahan, menu berganti tiap hari.", "Jl. Pajeksan, Sosromenduran", "Setiap hari 07.00–18.00", "Tidak tercantum", "Menu harian berganti-ganti"],
  ["Kuliner", "Warung Bu Sri", "Warung nasi rames dan nasi bakmoy, suasana kampung khas Malioboro.", "Jl. Pajeksan, Sosromenduran", "Setiap hari 05.30–19.30", "+62 813-9372-3878", "Nasi Rames, Nasi Bakmoy"],
  ["Oleh-oleh", "Bakpia Arisha", "Toko bakpia oleh-oleh, buka 24 jam.", "Jl. Sosrowijayan GT I No. 296, Sosromenduran", "Buka 24 jam", "+62 821-7370-4415", "Bakpia"],
  ["Kue/Bakery", "Stella Cake & Bakery", "Toko roti dan kue legendaris, favorit roti coklat lohan, sudah melayani lintas generasi.", "Jl. Pajeksan No. 566, Sosromenduran", "Senin–Sabtu 09.00–21.00", "+62 274-513257", "Roti Coklat Lohan, Sandwich, Roti"],
  ["Angkringan", "Angkringan Pak Djoyo", "Angkringan sederhana, buka sore hingga malam.", "Sosromenduran", "Setiap hari 15.00–24.00", "Tidak tercantum", "Nasi Kucing, Gorengan, Sate"],
];

export const culinaries: Culinary[] = CULINARY_RAW.map(
  ([category, name, description, address, hours, contact, productsRaw]) => ({
    slug: slugify(name),
    name,
    category,
    description,
    address,
    hours,
    contact,
    products: productsRaw.split(",").map((p) => p.trim()),
    photo: culinaryImg, // TODO: ganti dengan foto asli tiap tempat
    gallery: [culinaryImg],
  })
);

export const stats = {
  kampungs: kampungs.length,
  umkm: umkms.length,
  culinary: culinaries.length,
  attractions: 27,
};

export const galleryImages = [
  kampungImg, culinaryImg, umkmImg,
  kampungImg, culinaryImg, umkmImg,
  kampungImg, culinaryImg, umkmImg,
];