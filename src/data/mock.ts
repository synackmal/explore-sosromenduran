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
  extraSection?: RichSection;
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
  extraSection?: RichSection;
};

export type RichBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; rows: { label: string; value: string }[] };

export type RichSection = {
  category: "Potensi Wisata" | "Aktivitas Budaya" | "Profil Usaha";
  subject: string;
  blocks: RichBlock[];
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
    extraSection: {
  category: "Profil Usaha",
  subject: "Ciplak Cipluk",
  blocks: [
    { type: "paragraph", text: `Usaha Ciplak Cipluk merupakan usaha kerajinan tangan yang telah berdiri sekitar lima tahun. Nama "Ciplak Cipluk" diambil dari nama panggilan cucu pemilik usaha sebagai bentuk kedekatan keluarga yang kemudian menjadi identitas merek. Awalnya usaha ini hanya memproduksi tas berbahan kain. Namun, seiring berkembangnya kreativitas dan kebutuhan pasar, Ciplak Cipluk kini menghasilkan berbagai produk kerajinan yang memanfaatkan kain perca dan limbah tekstil sebagai bahan baku utama.

Usaha ini lahir dari semangat pemberdayaan masyarakat. Sebelum mendirikan Ciplak Cipluk, pemilik aktif memberikan pelatihan menjahit dan keterampilan kepada masyarakat di berbagai kelurahan. Melihat bahwa banyak peserta pelatihan belum mampu mengembangkan usaha secara mandiri, beliau kemudian mendirikan usaha ini sekaligus mengajak para peserta pelatihan untuk bergabung sebagai tenaga produksi.` },
    { type: "subheading", text: "Jenis Produk" },
    { type: "list", items: ["Tas", "Daster", "Dompet", "Gantungan kunci", "Souvenir", "Celemek", "Pot hias", "Dekorasi rumah", "Berbagai kerajinan berbahan limbah tekstil dan plastik"] },
    { type: "subheading", text: "Bahan Baku" },
    { type: "list", items: ["Kain lurik", "Batik", "Katun", "Jeans", "Kanvas", "Goni", "Kain perca", "Botol plastik bekas", "Gelas plastik bekas dan limbah lainnya"] },
    { type: "subheading", text: "Kisaran Harga Produk" },
    { type: "table", rows: [
      { label: "Souvenir", value: "Mulai Rp6.500" },
      { label: "Gantungan kunci", value: "Sekitar Rp10.000" },
      { label: "Produk kecil", value: "Sekitar Rp15.000" },
      { label: "Dompet", value: "Rp30.000–Rp35.000" },
      { label: "Celemek", value: "Sekitar Rp40.000" },
      { label: "Lukisan kain", value: "Sekitar Rp90.000" },
      { label: "Daster", value: "Rp100.000–Rp130.000" },
      { label: "Tas", value: "Mulai Rp140.000" },
    ] },
    { type: "paragraph", text: "Harga produk dapat disesuaikan dengan ukuran, desain, tingkat kesulitan pembuatan, dan permintaan konsumen." },
    { type: "subheading", text: "Proses Produksi" },
    { type: "paragraph", text: `Salah satu keunikan Ciplak Cipluk terletak pada proses produksinya yang memanfaatkan limbah tekstil menjadi produk baru yang bernilai ekonomi. Seluruh desain dan pola dibuat langsung oleh pemilik usaha sehingga setiap produk memiliki karakter yang khas.

Proses produksi dilakukan secara bertahap, dimulai dari pembuatan desain dan pola, pemotongan bahan, penjahitan, hingga proses finishing berupa bordir, lukis tangan, atau pemasangan aksesori. Dengan konsep upcycling, limbah kain yang sebelumnya tidak memiliki nilai guna diolah kembali menjadi produk fungsional sekaligus memiliki nilai estetika.` },
    { type: "subheading", text: "Pemberdayaan Masyarakat" },
    { type: "paragraph", text: `Ciplak Cipluk menjadi wadah pemberdayaan bagi masyarakat yang berada di kawasan Sitisewu. Saat ini usaha tersebut melibatkan sekitar 30–40 orang yang sebagian besar merupakan ibu rumah tangga dan lansia dari beberapa wilayah di Yogyakarta.

Sebagian besar proses produksi dikerjakan dari rumah masing-masing sesuai dengan pembagian tugas dan keterampilan yang dimiliki. Pola kerja ini memberikan fleksibilitas bagi para pekerja untuk tetap menjalankan aktivitas sehari-hari sekaligus memperoleh tambahan pendapatan.` },
    { type: "subheading", text: "Pemasaran" },
    { type: "list", items: ["Pameran tingkat kota dan nasional (Jakarta, Bandung, Pontianak)", "Pameran di kawasan Malioboro", "Bandara Yogyakarta", "Jaringan komunitas dan relasi", "Pemesanan langsung melalui WhatsApp"] },
    { type: "subheading", text: "Harapan Pengembangan" },
    { type: "paragraph", text: "Pemilik berharap Ciplak Cipluk dapat terus berkembang sebagai usaha kreatif yang mampu menjangkau pasar yang lebih luas melalui pemasaran digital. Selain itu, regenerasi pelaku usaha menjadi perhatian utama agar semangat berkarya dan pemberdayaan masyarakat tetap berlanjut." },
  ],
},
  },
  {
    name: "Sosrowijayan Wetan",
    cover: coverSosrowijayanWetan,
    short: "Kampung asal abdi dalem Sosrowijoyo yang bertransformasi jadi kawasan penginapan backpacker dekat Malioboro.",
    history: `Sosrowijayan mengambil nama dari KRT Sosrowijoyo, suami seorang putri Sri Sultan Hamengku Buwono II. Dalem atau kediaman Sosrowijoyo dahulu berdiri di selatan Stasiun Tugu, menjadi pusat kampung yang kemudian membelah wilayah ini menjadi dua, yakni Sosrowijayan Wetan di sisi timur dan Sosrowijayan Kulon di sisi barat. Kini bangunan dalem tersebut sudah tiada, berganti fungsi menjadi hotel, namun namanya tetap melekat abadi pada kampung ini.

Letaknya yang strategis, hanya sekitar dua ratus meter dari Stasiun Tugu dan berbatasan langsung dengan Jalan Malioboro, membuat Sosrowijayan Wetan mengalami transformasi besar pada paruh akhir abad ke-20. Dari kampung permukiman biasa, wilayah ini perlahan berubah menjadi kampung turis di Yogyakarta bersamaan dengan daerah Prawirotaman, seiring menjamurnya losmen dan penginapan murah yang menyasar wisatawan backpacker domestik maupun asing.

Perpaduan budaya lokal dan internasional pun tumbuh secara organik di sini. Banyak warga yang bekerja di sektor jasa pariwisata, mulai dari pengelola penginapan, pemandu wisata, hingga usaha laundry dan toko cendera mata. Julukan "Kampung Internasional" yang disematkan pada kampung ini menjadikan Sosrowijayan Wetan sebagai bukti nyata bagaimana sebuah kampung tempat abdi dalem keraton tinggal dapat bertransformasi menjadi kampung kosmopolitan tanpa kehilangan akar sejarahnya.`,
    uniqueness: "Julukan Kampung Internasional merupakan identitas yang terbentuk dari sejarah panjang perkembangan pariwisata di kawasan Sosrowijayan. Sejak era backpacker tourism, kampung ini telah menjadi salah satu tujuan favorit wisatawan asing yang mencari akomodasi dengan harga yang terjangkau sekaligus ingin merasakan suasana kampung yang hangat dan autentik. Hingga saat ini, wisatawan dari berbagai negara masih menjadikan Sosrowijayan Wetan sebagai tempat menginap sebelum melanjutkan perjalanan ke berbagai destinasi di Yogyakarta maupun daerah wisata lain. Kehadiran wisatawan mancanegara memberikan warna tersendiri bagi kehidupan masyarakat, menciptakan ruang perjumpaan budaya yang berlangsung secara alami melalui aktivitas sehari-hari.",
    attractions: ["Penginapan dan Hospitality", "Wisata Berbasis Komunitas"],
    extraSection: {
  category: "Potensi Wisata",
  subject: "Kampung Internasional",
  blocks: [
    { type: "paragraph", text: `Julukan Kampung Internasional merupakan identitas yang terbentuk dari sejarah panjang perkembangan pariwisata di kawasan Sosrowijayan. Sejak era backpacker tourism, kampung ini telah menjadi salah satu tujuan favorit wisatawan asing yang mencari akomodasi dengan harga yang terjangkau sekaligus ingin merasakan suasana kampung yang hangat dan autentik.

Hingga saat ini, wisatawan dari berbagai negara masih menjadikan Sosrowijayan Wetan sebagai tempat menginap sebelum melanjutkan perjalanan ke berbagai destinasi di Yogyakarta maupun daerah wisata lain.` },
    { type: "subheading", text: "Penginapan dan Hospitality" },
    { type: "paragraph", text: `Salah satu kekuatan utama Sosrowijayan Wetan adalah keberadaan berbagai jenis akomodasi yang dapat memenuhi kebutuhan wisatawan dengan beragam anggaran. Mulai dari homestay, guest house, hostel, hingga hotel berbintang dapat ditemukan di kawasan ini.

Selain menyediakan tempat menginap, banyak pengelola penginapan yang turut memberikan informasi mengenai destinasi wisata, kuliner, transportasi, hingga budaya lokal kepada wisatawan.` },
    { type: "subheading", text: "Wisata Berbasis Komunitas" },
    { type: "paragraph", text: `Di balik ramainya aktivitas pariwisata, Sosrowijayan Wetan tetap mempertahankan kehidupan kampung yang hangat. Berbagai kegiatan masyarakat, pelaku UMKM, komunitas, hingga penyelenggaraan acara budaya menjadi bagian dari pengalaman wisata yang dapat dinikmati pengunjung.

Konsep ini menghadirkan pengalaman yang berbeda bagi wisatawan. Mereka tidak hanya datang untuk menginap, mereka dapat mengenal kehidupan masyarakat lokal, berinteraksi secara langsung dengan warga, serta merasakan suasana kampung yang menjadi bagian dari identitas Yogyakarta.` },
    { type: "subheading", text: "Peran dalam Pariwisata Malioboro" },
    { type: "paragraph", text: `Keberadaan Sosrowijayan Wetan memiliki peran penting dalam mendukung ekosistem pariwisata Malioboro. Kampung ini menjadi titik awal bagi banyak wisatawan untuk menjelajahi Kota Yogyakarta. Dari kawasan ini, wisatawan dapat dengan mudah mengakses Malioboro, Keraton Yogyakarta, Taman Sari, Benteng Vredeburg, hingga berbagai destinasi budaya lainnya.

Selain itu, perkembangan berbagai usaha jasa wisata seperti biro perjalanan, penyewaan kendaraan, restoran, dan toko souvenir turut memberikan kontribusi terhadap pertumbuhan ekonomi masyarakat setempat.` },
  ],
},
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
    extraSection: {
  category: "Aktivitas Budaya",
  subject: "Sarkem Festival",
  blocks: [
    { type: "paragraph", text: `Sarkem Festival merupakan agenda budaya tahunan yang diselenggarakan di Kalurahan Sosromenduran sebagai media promosi pariwisata sekaligus pelestarian budaya lokal. Festival ini melibatkan seluruh kampung di Kalurahan Sosromenduran dan menjadi ruang kolaborasi antara masyarakat, pemerintah, pelaku UMKM, komunitas seni, serta berbagai pihak lainnya.

Nama "Sarkem" dipilih karena telah lama dikenal sebagai sebutan kawasan Pasar Kembang. Melalui festival ini, nama yang sebelumnya sering dikaitkan dengan stigma negatif dihadirkan kembali sebagai identitas baru yang merepresentasikan kekayaan budaya, sejarah, serta semangat kebersamaan masyarakat.

Pelaksanaan festival biasanya bertepatan dengan tradisi Ruwahan (Nyadran), yaitu tradisi masyarakat Jawa menjelang bulan Ramadan sebagai ungkapan rasa syukur, doa bersama, dan penghormatan kepada leluhur.` },
    { type: "subheading", text: "Festival Pembuatan Apem" },
    { type: "paragraph", text: "Rangkaian kegiatan diawali dengan pembuatan apem secara gotong royong oleh masyarakat dari berbagai kampung di Sosromenduran. Tradisi ini menjadi simbol rasa syukur sekaligus persiapan menyambut datangnya bulan suci Ramadan." },
    { type: "subheading", text: "Kirab Gunungan Apem" },
    { type: "paragraph", text: "Apem yang telah dibuat kemudian disusun menjadi sebuah gunungan dan diarak mengelilingi kawasan Sosromenduran. Kirab diikuti oleh masyarakat, kelompok seni, bregada, serta berbagai komunitas yang mengenakan pakaian adat." },
    { type: "subheading", text: "Kenduri Ruwahan" },
    { type: "paragraph", text: "Setelah kirab, masyarakat melaksanakan Kenduri Ruwahan, yaitu doa bersama sebagai bentuk ungkapan syukur sekaligus memohon keberkahan menjelang bulan Ramadan." },
    { type: "subheading", text: "Pawai Budaya" },
    { type: "paragraph", text: "Setiap kampung menampilkan identitas dan potensi budayanya melalui pawai budaya. Berbagai kostum tradisional, kesenian daerah, serta kreativitas masyarakat ditampilkan dalam arak-arakan yang menjadi salah satu atraksi utama festival." },
    { type: "subheading", text: "Bazar UMKM" },
    { type: "paragraph", text: "Festival juga menghadirkan bazar UMKM yang diikuti oleh pelaku usaha lokal. Berbagai produk kuliner, kerajinan tangan, hingga suvenir khas Sosromenduran dipamerkan dan dipasarkan kepada pengunjung." },
    { type: "subheading", text: "Panggung Hiburan" },
    { type: "paragraph", text: "Pada malam hari, rangkaian festival ditutup dengan pertunjukan hiburan yang menampilkan band lokal, musik keroncong, tari tradisional, pertunjukan seni, hingga hiburan modern yang melibatkan event organizer." },
    { type: "subheading", text: "Makna Budaya dan Nilai Wisata" },
    { type: "paragraph", text: `Lebih dari sekadar festival tahunan, Sarkem Festival merupakan ruang untuk memperkenalkan identitas Sosromenduran kepada masyarakat luas. Bagi wisatawan, festival ini menghadirkan pengalaman yang autentik karena mereka dapat menyaksikan langsung tradisi masyarakat, menikmati kuliner khas, berinteraksi dengan pelaku UMKM, serta mengenal kehidupan kampung yang berada di balik ramainya kawasan Malioboro.` },
  ],
},
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
    extraSection: {
  category: "Aktivitas Budaya",
  subject: "Omah Seni Djayaningratan",
  blocks: [
    { type: "paragraph", text: `Omah Seni Djayaningratan merupakan ruang seni dan budaya yang berada di Kampung Sosrodipuran. Tempat ini hadir sebagai wadah bagi berbagai aktivitas kesenian, mulai dari pameran seni rupa, pertunjukan musik, tari, teater, pembacaan puisi, hingga kegiatan edukasi budaya yang melibatkan masyarakat. Sebelum pandemi COVID-19, Omah Seni Djayaningratan dikenal sebagai ruang kreatif yang aktif menyelenggarakan berbagai kegiatan seni secara rutin dan menjadi tempat berkumpulnya seniman dari berbagai daerah di Indonesia.

Pandemi COVID-19 menyebabkan seluruh aktivitas seni terhenti sehingga bangunan sempat tidak terawat dan mengalami beberapa kerusakan, seperti atap yang bocor. Namun, semangat gotong royong masyarakat dan pengurus mendorong bangkitnya kembali Omah Seni Djayaningratan sebagai ruang berkesenian. Upaya revitalisasi tersebut tidak hanya bertujuan menghidupkan kembali aktivitas seni, tetapi juga memperkuat peran kampung sebagai destinasi wisata budaya berbasis komunitas.

Selain menjadi tempat pertunjukan, Omah Seni Djayaningratan juga memiliki ruang pamer yang dapat dimanfaatkan oleh seniman, komunitas, maupun kurator untuk menyelenggarakan pameran seni. Ke depan, ruang ini direncanakan berkembang menjadi art gallery yang dapat dikunjungi setiap hari sehingga wisatawan dapat menikmati karya seni tanpa harus menunggu penyelenggaraan acara tertentu.` },
    { type: "subheading", text: "Panggung Gumregah" },
    { type: "paragraph", text: `Panggung Gumregah merupakan salah satu program unggulan Omah Seni Djayaningratan yang lahir sebagai simbol kebangkitan aktivitas seni setelah masa pandemi. Kata "Gumregah" dalam bahasa Jawa memiliki makna bangkit kembali atau kembali bersemangat. Nama tersebut dipilih sebagai representasi semangat masyarakat dan para seniman untuk menghidupkan kembali ruang seni yang sempat vakum akibat pandemi.

Melalui Panggung Gumregah, Omah Seni Djayaningratan berupaya menghadirkan ruang ekspresi yang terbuka bagi masyarakat sekaligus menghidupkan kembali denyut kehidupan seni di Kampung Sosrodipuran.` },
    { type: "subheading", text: "Rangkaian Acara" },
    { type: "paragraph", text: `Pelaksanaan perdana Panggung Gumregah di tahun 2026 ini mengangkat tema Pentas Seni Dangdut. Tema ini dipilih karena mampu menjangkau berbagai kalangan masyarakat dan menciptakan suasana yang lebih inklusif sehingga menarik lebih banyak pengunjung.

Selain pertunjukan musik dangdut, kegiatan ini juga dirangkaikan dengan pembukaan pameran seni yang menampilkan karya para seniman dari berbagai daerah. Perpaduan antara seni pertunjukan dan seni rupa menjadikan Panggung Gumregah sebagai ruang apresiasi budaya yang dapat dinikmati oleh masyarakat maupun wisatawan.` },
    { type: "subheading", text: "Aktivitas Seni dan Budaya" },
    { type: "paragraph", text: `Omah Seni Djayaningratan tidak hanya menyelenggarakan Panggung Gumregah, tetapi juga menjadi tempat berlangsungnya berbagai kegiatan seni dan budaya. Sebelum pandemi, ruang ini secara rutin menjadi lokasi penyelenggaraan pameran seni rupa, pertunjukan teater, pembacaan puisi, pertunjukan tari, musik, hingga kegiatan budaya yang melibatkan komunitas lokal, termasuk kelompok Kembang Adas yang menampilkan pembacaan naskah dan pertunjukan budaya di pendopo.

Dalam penyelenggaraan pameran, Omah Seni Djayaningratan juga menjalin kolaborasi dengan seniman dari berbagai daerah, seperti Aceh, Bandung, Purwokerto, Surabaya, Jakarta, dan Yogyakarta. Kolaborasi tersebut menunjukkan bahwa ruang seni ini tidak hanya menjadi milik masyarakat lokal, tetapi juga menjadi titik temu bagi komunitas seni dari berbagai wilayah di Indonesia.` },
    { type: "subheading", text: "Keterlibatan Masyarakat" },
    { type: "paragraph", text: `Keberhasilan Omah Seni Djayaningratan tidak terlepas dari peran aktif masyarakat. Warga dilibatkan sebagai pelaku pertunjukan tari, musik, puisi, maupun teater. Selain itu, kegiatan seni juga memberikan ruang bagi pelaku usaha untuk memasarkan produk mereka kepada pengunjung.

Pengelola menerapkan konsep yang terbuka terhadap berbagai gagasan. Masyarakat maupun komunitas seni dipersilakan mengajukan ide penyelenggaraan kegiatan, dan pengelola siap memberikan dukungan agar ruang seni ini terus berkembang sebagai pusat aktivitas budaya berbasis komunitas.` },
    { type: "subheading", text: "Rencana Pengembangan" },
    { type: "paragraph", text: `Ke depan, Omah Seni Djayaningratan memiliki berbagai rencana pengembangan untuk memperkuat posisinya sebagai destinasi wisata budaya. Salah satu program yang sedang dipersiapkan adalah pembukaan art gallery permanen yang dapat dikunjungi setiap hari. Galeri tersebut nantinya akan menampilkan berbagai karya seni rupa, kerajinan tangan, hingga produk berbahan daur ulang hasil karya masyarakat.

Selain itu, pengelola juga berencana membuka berbagai kelas edukasi, seperti kelas seni rupa, kelas tari, kegiatan membatik, serta pameran tematik yang bekerja sama dengan berbagai institusi budaya, termasuk Museum Rempah. Melalui berbagai program tersebut, Omah Seni Djayaningratan diharapkan menjadi ruang belajar sekaligus destinasi wisata edukatif bagi masyarakat dan wisatawan.` },
  ],
},
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
  extraSection: {
    category: "Potensi Wisata",
    subject: "Taman Yuwono",
    blocks: [
      { type: "paragraph", text: "Selain dikenal sebagai kawasan penunjang wisata Malioboro, Sosromenduran memiliki potensi wisata berbasis sejarah dan budaya yang masih terus berkembang. Keberadaan bangunan-bangunan berarsitektur kolonial, jejak industri batik, serta kisah para tokoh yang pernah tinggal di kawasan ini menjadi daya tarik tersendiri bagi wisatawan yang ingin mengenal sisi lain Yogyakarta." },
      { type: "subheading", text: "Taman Yuwono" },
      { type: "paragraph", text: `Taman Yuwono merupakan salah satu kawasan bersejarah yang terletak di Jalan Dagen, Kampung Sosromenduran, hanya sekitar lima menit berjalan kaki dari Jalan Malioboro. Dahulu kawasan ini dikenal sebagai Taman Joewana, sebuah kompleks permukiman yang berkembang pada masa kolonial Belanda. Hingga kini, kawasan tersebut masih mempertahankan tata ruang permukiman lama yang dikelilingi rumah-rumah bergaya kolonial atau Indis (gaya arsitektur hasil perpaduan antara arsitektur Eropa, terutama Belanda, dengan budaya dan iklim Nusantara), sehingga menghadirkan suasana yang berbeda dibandingkan hiruk pikuk kawasan Malioboro di sekitarnya.

Saat ini, sebagian bangunan di kawasan Taman Yuwono telah dimanfaatkan sebagai penginapan heritage. Meski mengalami penyesuaian fungsi, karakter bangunan dan suasana kawasan tetap dipertahankan sehingga pengunjung dapat merasakan pengalaman menginap di lingkungan yang sarat akan nilai sejarah.` },
      { type: "subheading", text: "Wisata Sejarah" },
      { type: "paragraph", text: `Taman Yuwono menjadi salah satu destinasi wisata sejarah yang menawarkan pengalaman berbeda bagi wisatawan. Kawasan ini menggambarkan bagaimana Sosromenduran berkembang sebagai permukiman masyarakat dari berbagai latar belakang budaya pada masa kolonial. Keberadaan rumah-rumah tua, tata ruang permukiman yang masih asli, serta kisah perkembangan industri batik menjadikan kawasan ini menarik untuk dijelajahi melalui wisata berjalan kaki (heritage walking tour).

Bagi wisatawan yang ingin mengenal Yogyakarta lebih dalam, Taman Yuwono memberikan sudut pandang bahwa pesona kota ini tidak hanya terletak pada Malioboro dan Keraton, tetapi juga pada kampung-kampung yang menyimpan cerita sejarah dan kehidupan masyarakatnya.` },
    ],
  },
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
    extraSection: {
  category: "Profil Usaha",
  subject: "The Photo Art",
  blocks: [
    { type: "table", rows: [
      { label: "Nama Usaha", value: "The Photo Art" },
      { label: "Lokasi", value: "Kampung Pajeksan, Kalurahan Sosromenduran, kawasan Malioboro, Kota Yogyakarta" },
    ] },
    { type: "subheading", text: "Jenis Layanan" },
    { type: "list", items: ["Penyewaan pakaian adat Jawa", "Jasa fotografi di kawasan Malioboro", "Penyewaan properti pendukung untuk sesi foto"] },
    { type: "subheading", text: "Jenis Pakaian yang Ditawarkan" },
    { type: "list", items: ["Pakaian adat standar pria dan wanita", "Busana kemben atau kamisol", "Busana adat premium, termasuk busana pengantin (manten)"] },
    { type: "subheading", text: "Rincian Tarif Sewa" },
    { type: "table", rows: [
      { label: "Pakaian adat standar (pria/wanita)", value: "Rp25.000/setel" },
      { label: "Busana kemben atau kamisol", value: "Rp50.000/setel" },
      { label: "Busana premium atau pengantin (manten)", value: "Rp100.000/setel" },
      { label: "Selendang (opsional)", value: "Rp5.000" },
      { label: "Layanan rias (make-up)", value: "Biaya terpisah" },
    ] },
    { type: "subheading", text: "Fasilitas yang Termasuk" },
    { type: "list", items: ["Keris", "Payung tradisional", "Aksesori pendukung lainnya tanpa biaya tambahan"] },
    { type: "subheading", text: "Jam Operasional" },
    { type: "list", items: ["Setiap hari pukul 08.00–17.00 WIB", "Reservasi khusus dapat dilakukan mulai pukul 06.00 WIB dengan sistem pemesanan terlebih dahulu"] },
    { type: "subheading", text: "Wisata Berbasis Pengalaman Budaya" },
    { type: "paragraph", text: "Keberadaan jasa foto baju adat di Kampung Pajeksan memberikan warna baru bagi pariwisata di kawasan Malioboro. Wisatawan tidak hanya berkunjung untuk menikmati suasana jalanan atau berbelanja, tetapi juga dapat merasakan pengalaman mengenakan busana adat Jawa dan mengabadikan momen di berbagai sudut ikonik Malioboro." },
  ],
},
  },
  {
    name: "Jogonegaran",
    cover: coverJogonegaran,
    short: "Bekas dalem putri keraton dan kampus, kini berkembang jadi kampung sayur dan kuliner olahan warga.",
    history: `Jogonegaran menyimpan jejak salah satu dalem penting di Yogyakarta. Bangunan dalem yang menjadi cikal bakal nama kampung ini dibangun pada masa pemerintahan Sri Sultan Hamengku Buwono VII (1877-1921), dan pada awalnya ditempati oleh sang putri, GKR Dewi, dari permaisuri GKR Kencono. Letak kampung ini berada di sebelah barat Kampung Dagen dan Pajeksan, menyatu dalam gugusan kampung keraton di sekitar kawasan Malioboro.

Dari warisan sejarah sebagai dalem bangsawan dan bekas kampus, Jogonegaran hari ini menemukan identitas barunya sebagai kampung yang mengembangkan konsep kampung sayur dan kuliner olahan berbasis pemberdayaan masyarakat. Transformasi ini menunjukkan bagaimana kampung yang dulunya sarat dengan aktivitas keraton dan akademik kini merangkul potensi ekonomi kerakyatan sebagai wajah barunya di tengah kawasan wisata Malioboro.`,
    uniqueness: "Bekas dalem putri keraton yang kini dikenal sebagai kampung sayur dan kuliner olahan berbasis warga.",
    attractions: ["Kampung sayur", "Kuliner olahan warga"],
    extraSection: {
  category: "Potensi Wisata",
  subject: "Kampung Sayur dan Kuliner",
  blocks: [
    { type: "subheading", text: "Wisata Kuliner" },
    { type: "paragraph", text: `Salah satu potensi utama Kampung Jogonegaran adalah wisata kuliner yang dikembangkan oleh masyarakat setempat. Berbagai makanan dan minuman hasil olahan warga menjadi bagian dari identitas kampung sekaligus mendukung kegiatan ekonomi kreatif.

Keberadaan kuliner lokal menjadi pelengkap bagi wisatawan yang berkunjung ke kawasan Malioboro. Dengan lokasi yang mudah dijangkau, Jogonegaran memiliki peluang besar untuk menjadi destinasi singgah bagi wisatawan yang ingin menikmati hidangan khas sekaligus mengenal aktivitas masyarakat setempat.` },
    { type: "subheading", text: "Kampung Sayur" },
    { type: "paragraph", text: `Potensi unggulan lainnya adalah Kampung Sayur, yaitu kawasan yang memanfaatkan lahan terbatas di lingkungan permukiman untuk membudidayakan berbagai jenis tanaman sayuran. Konsep ini menunjukkan bahwa ruang sempit di perkotaan tetap dapat dimanfaatkan secara produktif sekaligus memperindah lingkungan.

Kampung Sayur memiliki nilai edukatif yang tinggi karena dapat dijadikan media pembelajaran mengenai pertanian perkotaan, ketahanan pangan keluarga, dan pelestarian lingkungan.` },
  ],
},
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
  extraSection: k.extraSection,
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
  ["Kuliner", "Asinan Bogor Depan Gereja", "Asinan segar khas Bogor dengan bumbu kacang manis-pedas, cocok untuk cuaca panas.", "Jl. Sosrowijayan GT I No. 1F, Sosromenduran", "Setiap hari 10.00–16.00", "Tidak tercantum", "Asinan Buah, Asinan Sayur, Kerupuk Kuning"],
  ["Kuliner", "Wings Rice Bowl", "Rice bowl dengan varian sayap ayam, buka 24 jam, harga terjangkau.", "Jl. Wongsodirjan, Sosromenduran", "Buka 24 jam", "+62 823-2787-2735", "Nasi Langgi, Rice Bowl Sayap Ayam"],
  ["Kuliner", "Warung Rames Bu Iin", "Warung nasi rames sederhana, bersih dan teduh, parkir luas.", "Jl. Wongsodirjan, Sosromenduran", "Tidak tercantum", "+62 838-4439-3893", "Nasi Rames"],
  ["Kuliner", "Soto Sulung", "Soto sulung sederhana di kawasan Sosromenduran.", "Sosromenduran", "Tidak tercantum", "Tidak tercantum", "Soto Sulung"],
  ["Kuliner", "Nasi Goreng Exist", "Nasi goreng kaki lima dengan bumbu ala satai, tersedia nasi goreng Magelangan dan kwetiau.", "Jl. Wongsodirjan No. 23, Sosromenduran", "Senin–Jumat 09.00–23.00, Sabtu 09.00–24.00, Minggu 16.00–23.00", "+62 897-0066-807", "Nasi Goreng Biasa, Nasi Goreng Magelangan, Kwetiau"],
  ["Kuliner", "Mie Ayam Yoman", "Mi ayam sederhana dengan mi keriting, harga sangat terjangkau.", "Jl. Wongsodirjan No. 46-22, Sosromenduran", "Senin–Sabtu 17.00–20.00", "Tidak tercantum", "Mi Ayam, Mi Ayam Kuah, Es Teh"],
  ["Kuliner", "Angkringan Kopi Joss Tiara", "Angkringan legendaris dekat Stasiun Tugu, terkenal dengan kopi joss dan nasi kucing.", "Jl. Pasar Kembang, Sosromenduran", "Setiap hari 15.45–24.00", "Tidak tercantum", "Kopi Joss, Nasi Kucing, Sate-satean"],
  ["Kuliner", "Angkringan Kopi Joss Pak Gondrong", "Angkringan dengan suasana santai, dekat area Malioboro.", "Jl. Wongsodirjan No. 10, Sosromenduran", "Selasa–Minggu 18.00–01.00", "+62 878-3975-2109", "Kopi Joss, Sego Kucing"],
  ["Kuliner", "Sego Berkat dan Susu Murni Sortanjung", "Warung nasi dan susu murni segar, dekat Stasiun Tugu, tempat nongkrong nyaman.", "Jl. Wongsodirjan, Sosromenduran", "Senin–Jumat 07.00–10.30 & 17.00–24.00, Sabtu–Minggu 07.00–15.00 & 17.00–24.00", "+62 813-2540-1928", "Sego Berkat, Susu Murni, Dimsum"],
  ["Kuliner", "Es Coklat Tentrem", "Es cokelat legendaris di Jl. Sosrowijayan, favorit wisatawan Malioboro.", "Jl. Sosrowijayan No. 30, Sosromenduran", "Setiap hari 15.00–24.00", "+62 898-0591-352", "Es Coklat, Roti"],
  ["Kuliner", "Bebek Goreng Rempah Suwarno", "Bebek goreng renyah dengan bumbu rempah khas, cukup tersembunyi di gang.", "Jl. Sosrowijayan GT I, Sosromenduran", "Setiap hari 08.00–21.00", "+62 856-4300-3008", "Bebek Goreng, Onion Ring, Sambal"],
  ["Kuliner", "Nasi Goreng Suroboyo", "Nasi goreng khas Surabaya di Jl. Malioboro.", "Jl. Malioboro No. 175, Sosromenduran", "Tidak tercantum", "Tidak tercantum", "Nasi Goreng Suroboyo"],
  ["Kuliner", "Dapur Penyetan dan Kelontong Mba Lia", "Warung penyetan dan kelontong, dekat Stasiun Tugu.", "Jl. Pasar Kembang No. 5, Sosromenduran", "Setiap hari 06.00–23.00", "+62 856-4386-1630", "Ayam/Bandeng Presto Penyet, Ayam Bakar, Soto"],
  ["Kuliner", "Warung Bakso Cornelan (Non-Halal)", "Bakso non-halal legendaris, khas dengan babi dan usus, harus ambil nomor antre.", "Jl. Sosrowijayan No. 43, Sosromenduran", "Senin–Jumat & Minggu 16.30–20.30 (Sabtu tutup)", "+62 813-2809-4421", "Bakso Daging Babi, Es Sirup, Bakso Kriuk"],
  ["Kuliner", "Gudeg Bu Menuk", "Gudeg segar tidak terlalu manis, favorit sarapan di Sosrowijayan.", "Jl. Sosrowijayan No. 45, Sosromenduran", "Setiap hari 05.00–09.00", "Tidak tercantum", "Gudeg, Telur, Bubur Gudeg"],
  ["Kuliner", "Bubur Ayam dan Soto Ayam Teras RGM", "Bubur ayam dan soto ayam untuk sarapan, dekat Malioboro.", "Jl. Sosrowijayan No. 33, Sosromenduran", "Setiap hari 06.15–14.00", "+62 851-7714-9393", "Bubur Ayam, Soto Ayam, Pecel"],
  ["Kuliner", "Asinan Nyinyir", "Asinan buah segar dengan level kepedasan 1–5.", "Sosromenduran", "Setiap hari 09.00–21.00", "+62 858-7854-4414", "Asinan Mangga Muda, Asinan Salak, Asinan Nanas"],
  ["Kuliner", "Lumpia Jago Malioboro", "Lumpia dengan menu tambahan tengkleng dan tongseng.", "Jl. Dagen, Sosromenduran", "Kamis, Jumat, Sabtu, Minggu, Senin 16.00–22.30; Selasa 16.00–17.00; Rabu tutup", "Tidak tercantum", "Lumpia, Tengkleng, Tongseng"],
  ["Kuliner", "Wedang Ronde Lek Dhie Milenial", "Wedang ronde hangat khas dengan jahe, kacang, dan roti tawar.", "Jl. Malioboro No. 16, Sosromenduran", "Senin–Kamis, Sabtu–Minggu 17.30–24.00 (Jumat tutup)", "+62 838-4003-6871", "Wedang Ronde, Roti Tawar, Kacang"],
  ["Kuliner", "Warung Cokro Endos", "Nasi goreng pete, bakmi jawa, dan sop iga sapi dalam satu warung.", "Jl. Dagen No. 7, Sosromenduran", "Setiap hari 09.00–02.00", "+62 858-1429-5421", "Nasi Goreng Pete, Bakmi Jawa, Sop Iga Sapi"],
  ["Kuliner", "Nasi Rames Rendang Surya", "Nasi rames dengan rendang terkenal, sambal yang khas.", "Jl. Pajeksan, Sosromenduran", "Setiap hari 10.00–22.00", "+62 882-2528-3662", "Rendang Sapi, Rendang Ayam, Sambal"],
  ["Kuliner", "Ayam Goreng Pak Landung", "Ayam goreng dengan sambal mentah/matang yang jadi andalan.", "Jl. Sosromenduran, Sosromenduran", "Setiap hari 17.00–21.30", "+62 812-2920-4432", "Ayam Goreng, Sambal Mentah, Sambal Matang"],
  ["Kuliner", "Penyetan Mahessa", "Penyetan dengan sambal ulek langsung, level pedas bisa custom.", "Jl. Dagen, Sosromenduran", "Setiap hari 17.00–24.00", "Tidak tercantum", "Sambal Belut, Sambal Wader, Ayam Penyet"],
  ["Kuliner", "Bakso Punksit 182", "Warung bakso di Jl. Dagen.", "Jl. Dagen No. 50, Sosromenduran", "Setiap hari 17.00–22.00", "+62 882-0065-00226", "Bakso"],
  ["Kuliner", "Nasi Goreng dan Bakmi Jawa nDobloh", "Nasi goreng dan bakmi jawa, usaha keluarga dengan pelayanan ramah.", "Jl. Dagen No. 50, Sosromenduran", "Setiap hari 18.00–24.00", "Tidak tercantum", "Nasi Goreng, Bakmi Goreng, Bakmi Godog"],
  ["Kuliner", "Bakmi Jawa Ngedjaman", "Bakmi jawa dengan menu Magelangan, sate klatak, dan rica-rica, suasana nyaman dengan dekorasi khas.", "Jl. Dagen No. 9, Sosromenduran", "Setiap hari 08.00–23.00", "+62 896-7244-0488", "Bakmi Jawa Godog, Sate Klatak, Rica-Rica"],
  ["Kuliner", "Bakmi Jawa Mince", "Bakmi jawa dimasak dengan arang, dekat Hotel Fortuna Grande.", "Jl. Dagen, Sosromenduran", "Tidak tercantum", "+62 821-3643-1841", "Bakmi Goreng, Bakmi Godog, Acar"],
  ["Kuliner", "Mie Ayam 69", "Mi ayam dengan cita rasa gurih, ada juga timlo dan bakmoy.", "Jl. Sosrowijayan No. 69, Sosromenduran", "Setiap hari 09.00–20.00", "+62 274-542859", "Mi Ayam, Timlo, Bakmoy"],
  ["Kuliner", "Angkringan Ma' Iputh", "Angkringan dengan nasi kucing dan sambal teri.", "Jl. Sosrowijayan GT I, Sosromenduran", "Tidak tercantum", "Tidak tercantum", "Nasi Kucing, Sambal Teri, Sate"],
  ["Kuliner", "Bakmi Jowo Sarmangun", "Bakmi jowo di Jl. Jogonegaran.", "Jl. Jogonegaran, Sosromenduran", "Setiap hari 10.00–22.00", "+62 896-7460-8408", "Bakmi Jawa"],
  ["Kuliner", "Bakmi Pak Mangun Non Halal", "Bakmi jawa non-halal dimasak dengan anglo tradisional, topping babi melimpah.", "Jl. Jogonegaran, Sosromenduran", "Setiap hari 17.00–23.00", "Tidak tercantum", "Bakmi Godog, Bakmi Goreng, Topping Babi"],
  ["Kuliner", "Lumpia Maksumi", "Lumpia murah meriah, sering habis sebelum jam 9 pagi.", "Jl. Gandekan, Sosromenduran", "Sabtu–Kamis 06.30–09.00", "+62 895-0717-9238", "Lumpia"],
  ["Kuliner", "Bakmi Jawa Pak Handoko", "Bakmi jawa godok dan magelangan, porsi besar dan harga terjangkau.", "Jl. Jogonegaran, Sosromenduran", "Setiap hari 17.30–24.00", "+62 853-3659-1765", "Bakmi Godok, Bakmi Magelangan, Bakmi Goreng"],
  ["Kuliner", "Nasi Goreng Ongko", "Nasi goreng kecombrang yang jadi favorit, bisa custom pedas.", "Jl. Sosrowijayan GT I No. 951, Sosromenduran", "Selasa, Rabu, Jumat, Sabtu 18.00–21.30", "+62 851-6358-2726", "Nasi Goreng Kecombrang, Nasi Goreng Extra Telur, Bakso"],
  ["Kuliner", "Bakso dan Mie Ayam Pak Tumiyo", "Warung bakso dan mi ayam pagi hari.", "Jl. Jogonegaran, Sosromenduran", "Setiap hari 07.00–09.30", "Tidak tercantum", "Bakso, Mi Ayam"],
  ["Kuliner", "Kue Basah Widya", "Toko kue basah tradisional.", "Jl. Jogonegaran No. 918, Sosromenduran", "Setiap hari 08.00–20.00", "+62 274-580601", "Kue Basah"],
  ["Kuliner", "Bu Sumi Snack", "Toko snack/camilan, buka 24 jam.", "Jl. Jogonegaran, Sosromenduran", "Buka 24 jam", "+62 896-7734-7979", "Snack/Camilan"],
  ["Kuliner", "Warung Bu Hadi", "Warung makan rumahan, menu berganti tiap hari.", "Jl. Pajeksan, Sosromenduran", "Setiap hari 07.00–06.00 (nyaris 24 jam)", "Tidak tercantum", "Menu harian berganti-ganti"],
  ["Kuliner", "Warung Bu Sri", "Warung nasi rames dan nasi bakmoy, suasana kampung khas Malioboro.", "Jl. Pajeksan, Sosromenduran", "Setiap hari 05.30–19.30", "+62 813-9372-3878", "Nasi Rames, Nasi Bakmoy"],
  ["Oleh-oleh", "Bakpia Arisha", "Toko bakpia oleh-oleh, buka 24 jam.", "Jl. Sosrowijayan GT I No. 296, Sosromenduran", "Buka 24 jam", "+62 821-7370-4415", "Bakpia"],
  ["Kuliner", "Stella Cake & Bakery", "Toko roti dan kue legendaris, favorit roti coklat lohan, sudah melayani lintas generasi.", "Jl. Pajeksan No. 566, Sosromenduran", "Senin–Sabtu 09.00–21.00", "+62 274-513257", "Roti Coklat Lohan, Sandwich, Roti"],
  ["Kuliner", "Angkringan Pak Djoyo", "Angkringan sederhana, buka sore hingga malam.", "Sosromenduran", "Setiap hari 15.00–24.00", "Tidak tercantum", "Nasi Kucing, Gorengan, Sate"],
  ["Persewaan Baju Adat", "Sewa Baju Adat Yogyakarta Mbah Dhe", "Toko persewaan baju adat Jawa lengkap dengan jasa foto, favorit wisatawan di kawasan Malioboro.", "Jl. Kp. Pajeksan Jl. Sosrowijayan GT I No.600, Sosromenduran", "Senin–Jumat 08.00–17.00, Sabtu–Minggu 07.00–17.00", "+62 877-6738-6376", "Baju Adat"],
  ["Jasa Pendidikan", "Les Privat Jogja - Kompeten dan Berpengalaman", "Jasa les privat berbagai mata pelajaran, tutor ramah dan mudah dipahami.", "6937+RHX, Jl. Kp. Pajeksan, Sosromenduran", "Buka 24 jam", "+62 812-1656-4265", "Les Privat"],
  ["Sewa Baju Adat & Fotografi", "Sarimbit Sewa Baju Adat & Jasa Photo (Depan Hotel El Royal)", "Studio fotografi dan persewaan baju adat sarimbit, lokasi persis di depan Hotel El Royal Malioboro.", "Depan Hotel El Royal, Jl. Dagen/Jl. Malioboro, Sosromenduran", "Setiap hari 08.00–16.00", "+62 815-7879-9772", "Baju Adat Sarimbit, Jasa Foto"],
  ["Jasa Laundry", "Brengos Laundry Balap", "Layanan laundry cuci-setrika, dikenal cepat, wangi, dan rapi.", "Jl. Dagen/Jl. Sosromenduran/Jl. Sosrowijayan GT I No.290, Sosromenduran", "Setiap hari 08.00–19.00", "+62 822-2094-9464", "Cuci & Setrika"],
  ["Toko Ponsel", "Tourist SIM Card Indonesia - SatuD Cell", "Toko ponsel & SIM card khusus turis, dekat ibis Styles Yogyakarta.", "Jl. Jogonegaran, Sosromenduran", "Setiap hari 08.30–21.45", "+62 856-2423-6574", "SIM Card Turis"],
  ["Toko Ponsel", "1DC Cell Tourist Corner", "Toko ponsel & SIM card turis, pelayanan ramah dan cepat di kawasan Jl. Dagen.", "Jl. Dagen, Sosromenduran", "Setiap hari 07.00–23.00", "+62 897-8600-160", "SIM Card Turis"],
  ["Toko Bunga", "Give Bouquet", "Toko bunga dan buket, cocok untuk berbagai acara.", "Jl. Sosrowijayan, Gang Kebon, Sosromenduran", "Setiap hari 08.00–19.00", "+62 895-0343-1975", "Buket Bunga"],
  ["Kerajinan Kulit", "Wrekso Leather Goods", "Toko produk kulit asli (tas, dompet, ikat pinggang) dengan kualitas kerajinan tangan.", "Jl. Sosrowijayan No.37, Sosromenduran", "Senin & Minggu 15.30–21.00, Selasa–Sabtu 09.30–21.00", "+62 878-3921-1197", "Produk Kulit"],
  ["Toko Buku", "The Lucky Boomerang Book Shop", "Toko buku bekas impor berbagai bahasa, suasana kampung khas Sosrowijayan.", "Jalan Sosrowijayan GT/95, Gg. 1, Sosromenduran", "Rabu–Minggu 12.00–17.00 (Senin–Selasa tutup)", "+62 878-6169-8307", "Buku Bekas/Grosir"],
  ["Jasa Laundry", "VIA Laundry Service On Kilo's", "Layanan laundry per kilogram, cepat dan terpercaya.", "Kampung Jl. Sosrowijayan GT I No.55, Sosromenduran", "Senin–Kamis & Minggu 08.00–20.00, Jumat 08.00–18.00, Sabtu 08.00–19.00", "+62 851-0390-9990", "Cuci & Setrika per Kilo"],
  ["Jasa Pijat", "Pijat Panggilan Jogja 24 Jam (Hoki Jogja Massage)", "Jasa pijat panggilan 24 jam, terapis profesional dan berpengalaman.", "Sosromenduran, Gedong Tengen", "Buka 24 jam", "+62 895-2910-2447", "Pijat Panggilan"],
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