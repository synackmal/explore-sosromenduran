import kampungImg from "@/assets/kampung-1.jpg";
import culinaryImg from "@/assets/culinary-1.jpg";
import umkmImg from "@/assets/umkm-1.jpg";
import coverSitisewu from "@/assets/kampung/sitisewu.jpeg";
import coverSosrowijayanWetan from "@/assets/kampung/sosrowijayan-wetan.jpg";
import coverSosrowijayanKulon from "@/assets/kampung/sosrowijayan-kulon.jpeg";
import coverSosrodipuran from "@/assets/kampung/sosrodipuran.jpeg";
import coverSosromenduran from "@/assets/kampung/sosromenduran.jpeg";
import coverPajeksan from "@/assets/kampung/pajeksan.jpeg";
import coverJogonegaran from "@/assets/kampung/jogonegaran.jpeg";

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

type KampungSeed = {
  name: string;
  cover: string;
  short: string;
  history: string;
  uniqueness: string;
  attractions: string[];
};

// Sejarah lengkap dari riset tim — TODO: verifikasi ulang & lengkapi attractions/culturalActivities per kampung
const KAMPUNG_SEEDS: KampungSeed[] = [
  {
    name: "Sitisewu",
    cover:  coverSitisewu,
    short: "Dulu kampung abdi dalem pengurus tenaga kerja keraton, kini dikenal lewat kerajinan kain perca dan musik kentongan.",
    history: `Nama Sitisewu tak lahir dari kebetulan. Kampung ini dahulu merupakan tempat tinggal para abdi dalem keraton yang bertugas mengurus "bau suku", yaitu penyediaan tenaga kerja atau buruh bagi keperluan Keraton Yogyakarta. Setiap kali istana membutuhkan tambahan tenaga untuk pembangunan atau upacara, para abdi dalem dari kampung inilah yang bertugas mencarikannya, menjadikan Sitisewu semacam "kantor perekrutan" tenaga kerja keraton pada masanya.

Seiring waktu, fungsi administratif keraton itu memudar bersama perubahan zaman, namun jiwa gotong royong dan keterampilan tangan warganya tetap diwariskan turun-temurun. Kampung yang berada di wilayah Sosromenduran ini kemudian dikenal luas melalui kreativitas warganya, terutama para ibu lanjut usia yang menekuni kerajinan dari limbah kain perca menjadi dompet, tas, gantungan kunci, hingga taplak meja bersulam tangan.

Selain kerajinan tangan, Sitisewu juga menjaga kelestarian kesenian musik tradisional kentongan, warisan budaya yang jarang ditemui di kampung-kampung kota lain. Kombinasi antara semangat kerja abdi dalem masa lalu dan kreativitas ekonomi warga masa kini membuat Sitisewu tumbuh sebagai kampung wisata yang bahkan pernah didatangi wisatawan mancanegara yang ingin belajar langsung proses pembuatan kerajinan khas kampung ini.`,
    uniqueness: "Kerajinan kain perca hasil karya ibu-ibu lansia, serta kesenian musik kentongan yang jarang ditemui di kampung kota lain.",
    attractions: ["Sentra kerajinan kain perca", "Musik tradisional kentongan"],
  },
  {
    name: "Sosrowijayan Wetan",
    cover: coverSosrowijayanWetan,
    short: "Kampung asal abdi dalem Sosrowijoyo yang bertransformasi jadi kawasan penginapan backpacker dekat Malioboro.",
    history: `Sosrowijayan mengambil nama dari KRT Sosrowijoyo, suami seorang putri Sri Sultan Hamengku Buwono II. Dalem atau kediaman Sosrowijoyo dahulu berdiri di selatan Stasiun Tugu, menjadi pusat kampung yang kemudian membelah wilayah ini menjadi dua, yakni Sosrowijayan Wetan di sisi timur dan Sosrowijayan Kulon di sisi barat. Kini bangunan dalem tersebut sudah tiada, berganti fungsi menjadi hotel, namun namanya tetap melekat abadi pada kampung ini.

Letaknya yang strategis, hanya sekitar dua ratus meter dari Stasiun Tugu dan berbatasan langsung dengan Jalan Malioboro, membuat Sosrowijayan Wetan mengalami transformasi besar pada paruh akhir abad ke-20. Dari kampung permukiman biasa, wilayah ini perlahan berubah menjadi kampung turis di Yogyakarta bersamaan dengan daerah Prawirotaman, seiring menjamurnya losmen dan penginapan murah yang menyasar wisatawan backpacker domestik maupun asing.

Perpaduan budaya lokal dan internasional pun tumbuh secara organik di sini. Banyak warga yang bekerja di sektor jasa pariwisata, mulai dari pengelola penginapan, pemandu wisata, hingga usaha laundry dan toko cendera mata. Julukan "Kampung Internasional" yang disematkan pada kampung ini menjadikan Sosrowijayan Wetan sebagai bukti nyata bagaimana sebuah kampung tempat abdi dalem keraton tinggal dapat bertransformasi menjadi kampung kosmopolitan tanpa kehilangan akar sejarahnya.`,
    uniqueness: "Dijuluki 'Kampung Internasional', pusat losmen dan penginapan backpacker paling dekat dengan Stasiun Tugu.",
    attractions: ["Kawasan penginapan backpacker", "Dekat Stasiun Tugu & Malioboro"],
  },
  {
    name: "Sosrowijayan Kulon",
    cover: coverSosrowijayanKulon,
    short: "Belahan barat Sosrowijayan, rumah bagi kawasan legendaris Pasar Kembang.",
    history: `Sebagai belahan barat dari kampung yang sama-sama menyandang nama Sosrowijoyo, Sosrowijayan Kulon berbagi asal-usul yang identik dengan tetangganya di sisi timur. Namun sejarah membawa kedua wilayah ini ke arah perkembangan yang berbeda. Jika Sosrowijayan Wetan lebih dulu dikenal sebagai kampung turis dengan deretan losmen dan hotel, Sosrowijayan Kulon justru membentuk karakternya sendiri lewat keberadaan kawasan Pasar Kembang yang legendaris.

Nama Pasar Kembang sendiri telah lama identik dengan bagian dari sejarah sosial Yogyakarta di seputar Stasiun Tugu, sebuah kawasan yang tumbuh seiring geliat perdagangan dan aktivitas di sekitar jalur kereta api sejak masa kolonial. Branding kawasan ini terbentuk lebih dahulu dan lebih kuat dibandingkan nama kampungnya sendiri, sehingga banyak orang mengenal wilayah ini lewat nama pasarnya ketimbang nama administratifnya.

Dari masa ke masa, Sosrowijayan Kulon tetap menjadi bagian tak terpisahkan dari denyut kawasan Malioboro-Tugu, hidup berdampingan dengan saudaranya di sisi timur namun mempertahankan identitas lokalnya yang khas. Kini kampung ini turut menjadi bagian dari jejaring Kampung Wisata Sosromenduran, melengkapi keragaman potensi ketujuh kampung dalam kelurahan yang sama.`,
    uniqueness: "Rumah bagi kawasan Pasar Kembang (Sarkem), salah satu kawasan bersejarah paling dikenal di seputar Stasiun Tugu.",
    attractions: ["Kawasan Pasar Kembang", "Denyut kawasan Malioboro-Tugu"],
  },
  {
    name: "Sosrodipuran",
    cover: coverSosrodipuran,
    short: "Bekas kediaman putri keraton yang kini menjadi lokasi sekolah bersejarah dan sentra kerajinan kulit.",
    history: `Kampung ini dinamai dari BRAy Sosrodipuro (atau Sosrodipura), putri Sri Sultan Hamengku Buwono II dari garwa BRAy Surtikanthi. Dalem Sosrodipuran, yang kini berdiri di Jalan Dagen, dahulu merupakan kediaman sang putri dengan arsitektur khas Jawa lengkap dengan pendapa dan dalem ageng beratap joglo. Letaknya berdampingan dengan Kampung Sosromenduran, tepat di selatan Sosrowijayan, menjadikannya bagian dari klaster permukiman kerabat keraton di kawasan ini.

Bangunan bersejarah ini memasuki babak baru ketika kompleksnya difungsikan sebagai sarana pendidikan. Yayasan Netral yang mendirikan Neutrale School pada 12 Desember 1912 kemudian menjadikan Pendapa Ndalem Sosrodipuran sebagai lokasi sekolah permanennya. Bagian belakang kompleks ini bahkan sempat digunakan sebagai area perkuliahan Universitas Proklamasi 45 (UP45) sebelum akhirnya dialihfungsikan penuh untuk SD Netral C & D Yogyakarta. Meski beberapa struktur asli seperti dalem ageng telah mengalami perubahan dan pelapukan usia, bagian pendapa dan beberapa elemen bangunan tetap dipertahankan sebagai cagar budaya kota.

Dari sisi kehidupan warga, Sosrodipuran tumbuh dengan karakter yang berbeda dari kampung sekitarnya. Wilayah ini dikenal dengan potensi kerajinan kulit serta seni tari tradisional yang terus dilestarikan oleh generasi ke generasi, mencerminkan bagaimana warisan estetika keraton yang dahulu melekat pada sang putri kini menjelma menjadi denyut kesenian rakyat sehari-hari.`,
    uniqueness: "Bekas kediaman putri keraton yang kini menjadi lokasi SD Netral, dengan pendapa cagar budaya yang masih terjaga.",
    attractions: ["Pendapa cagar budaya Sosrodipuran", "Kerajinan kulit", "Seni tari tradisional"],
  },
  {
    name: "Sosromenduran",
    cover: coverSosromenduran,
    short: "Kampung asal nama kelurahan, dulu pemukiman abdi dalem, kini sentra produksi kaos dan souvenir Malioboro.",
    history: `Sebagai kampung yang namanya diabadikan menjadi nama kelurahan, Sosromenduran memiliki posisi istimewa. Kampung ini berdiri di seputar dalem KRT Sosromenduro, yang merupakan seorang abdi dalem keraton, dengan lokasi yang berdampingan dengan Sosrodipuran dan berada di selatan Sosrowijayan. Pola penamaan semacam ini lazim ditemui di kampung-kampung njaban beteng atau luar benteng Keraton Yogyakarta, tempat nama-nama abdi dalem diabadikan menjadi identitas wilayah tempat tinggal mereka.

Berbeda dari kampung tetangganya yang lebih identik dengan kediaman putra-putri raja, Sosromenduran mencerminkan jejak abdi dalem yang mengabdi langsung kepada keraton. Letaknya yang berdekatan dengan Malioboro dan Stasiun Tugu perlahan mengubah wajah kampung ini dari pemukiman abdi dalem menjadi kawasan ekonomi kreatif, terutama sejak dikenal sebagai sentra produksi kaos oblong dan aneka souvenir yang menopang aktivitas wisata di kawasan Malioboro.

Kini, sebagai representasi dari seluruh kelurahan, Sosromenduran terus berinovasi menjadi kampung wisata kota yang aktif, tak hanya menjadi penyangga kawasan Malioboro, bahkan kampung tersebut tampil sebagai etalase budaya urban Yogyakarta, lengkap dengan berbagai kegiatan warga mulai dari karnaval pelajar hingga penyuluhan kesehatan lansia yang mempertahankan semangat gotong royong ala abdi dalem pendahulunya.`,
    uniqueness: "Sentra produksi kaos oblong dan souvenir yang menopang aktivitas wisata Malioboro.",
    attractions: ["Sentra produksi kaos & souvenir", "Etalase budaya urban Yogyakarta"],
  },
  {
    name: "Pajeksan",
    cover: coverPajeksan,
    short: "Dulu tempat tinggal abdi dalem jaksa, kini kampung multietnis dengan warisan kuliner Tionghoa yang kental.",
    history: `Nama Pajeksan berasal dari kata "Jeksa" atau jaksa, merujuk pada abdi dalem yang dahulu bertugas menangani urusan hukum dan peradilan di lingkungan Keraton Yogyakarta. Kampung ini menjadi tempat tinggal para abdi dalem jeksa tersebut, menjadikannya salah satu kampung dengan fungsi administratif-yudisial yang khas di antara kampung-kampung njaban beteng lainnya.

Seiring waktu, komposisi penduduk Pajeksan berkembang menjadi lebih majemuk, dihuni oleh percampuran etnis Jawa, Madura, Minang, Batak, dan yang paling menonjol adalah etnis Tionghoa dalam jumlah besar. Perpaduan budaya inilah yang kemudian membentuk wajah kuliner khas kampung ini, dengan warga yang piawai memproduksi aneka penganan berakar budaya Tionghoa seperti bakpia, kue ku, thong pia, hingga hidangan seperti cwie mie dan mie angsio yang disajikan di rumah-rumah makan setempat.

Warisan multietnis ini terus hidup hingga kini. Jika dahulu Pajeksan dikenal luas lewat julukan 'Pajeksan Kacangan' sebagai sentra kacang bawang, kini denyut akulturasi itu tetap terjaga melalui kreativitas pembuatan Barongsai dan Naga yang menjadi andalan warga. Bersanding dengan alunan musik keroncong, Pajeksan pun menjadi bukti nyata bagaimana sebuah kampung abdi dalem bertransformasi menjadi ruang perjumpaan lintas budaya yang khas Yogyakarta.`,
    uniqueness: "Kampung multietnis dengan warisan kuliner Tionghoa serta kerajinan Barongsai dan Naga.",
    attractions: ["Kuliner khas Tionghoa-Jawa", "Kerajinan Barongsai & Naga", "Musik keroncong"],
  },
  {
    name: "Jogonegaran",
    cover: coverJogonegaran,
    short: "Bekas dalem putri keraton dan kampus, kini berkembang jadi kampung sayur dan kuliner olahan warga.",
    history: `Jogonegaran menyimpan jejak salah satu dalem penting di Yogyakarta. Bangunan dalem yang menjadi cikal bakal nama kampung ini dibangun pada masa pemerintahan Sri Sultan Hamengku Buwono VII (1877-1921), dan pada awalnya ditempati oleh sang putri, GKR Dewi, dari permaisuri GKR Kencono. Letak kampung ini berada di sebelah barat Kampung Dagen dan Pajeksan, menyatu dalam gugusan kampung keraton di sekitar kawasan Malioboro.

Dari warisan sejarah sebagai dalem bangsawan dan bekas kampus, Jogonegaran hari ini menemukan identitas barunya sebagai kampung yang mengembangkan konsep kampung sayur dan kuliner olahan berbasis pemberdayaan masyarakat. Transformasi ini menunjukkan bagaimana kampung yang dulunya sarat dengan aktivitas keraton dan akademik kini merangkul potensi ekonomi kerakyatan sebagai wajah barunya di tengah kawasan wisata Malioboro.`,
    uniqueness: "Bekas dalem putri keraton yang kini dikenal sebagai kampung sayur dan kuliner olahan berbasis warga.",
    attractions: ["Kampung sayur", "Kuliner olahan warga"],
  },
];

export const kampungs: Kampung[] = KAMPUNG_SEEDS.map((k, i) => ({
  slug: slugify(k.name),
  name: k.name,
  cover: k.cover, 
  short: k.short,
  history: k.history,
  uniqueness: k.uniqueness,
  attractions: k.attractions,
  culturalActivities: [], // TODO: isi aktivitas budaya rutin per kampung kalau ada
  gallery: [kampungImg, umkmImg, culinaryImg],
  location: { lat: -7.7925 + i * 0.001, lng: 110.365 + i * 0.001 }, // TODO: ganti koordinat asli
  umkm: [], // TODO: hubungkan slug UMKM yang berlokasi di kampung ini
  culinary: [], // TODO: hubungkan slug kuliner yang berlokasi di kampung ini
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