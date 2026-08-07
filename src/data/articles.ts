import type { RichBlock } from "./mock";
import coverTasteOfSosromenduran from "@/assets/articles/taste-of-sosromenduran-cover.jpeg";
import photoCorobikang from "@/assets/articles/corobikang.jpeg";
import photoLumpia from "@/assets/articles/lumpia-mak-sumi.jpeg";
import photoAsinan from "@/assets/articles/asinan-nyinyir.jpeg";

export type ArticleFoodEntry = {
  name: string;
  slug: string;
  photo: string;
  body: RichBlock[];
  info: { label: string; value: string }[];
};

export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  cover: string;
  intro: string;
  entries: ArticleFoodEntry[];
  tips: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "taste-of-sosromenduran-penunjang-malioboro",
    title: "Taste of Sosromenduran: Penunjang Malioboro",
    subtitle: "Panduan kuliner hidden gem di kawasan Malioboro",
    cover: coverTasteOfSosromenduran,
    intro:
      "Bosan dengan duet gudeg dan bakpia setiap kali berkunjung ke Jogja? Tenang, kota ini menyimpan kejutan cita rasa yang kerap luput dari radar wisatawan umum. Di balik riuhnya perlintasan Stasiun Tugu dan deretan toko Jalan Malioboro, ada kawasan Sosromenduran yang menawarkan deretan hidden gem kuliner unik — mulai dari kue tradisional legit, lumpia renyah ukuran jumbo, hingga olahan buah pedas menyegarkan. Jika kamu baru saja turun dari bus Trans Jogja atau ingin melarikan diri sejenak dari keramaian Malioboro, berikut panduan jelajah kuliner di Sosromenduran yang wajib masuk bucket list perjalananmu!",
    entries: [
      {
        name: "Corobikang Warisan 1984",
        slug: "corobikang-warisan-1984",
        photo: photoCorobikang,
        body: [
          {
            type: "paragraph",
            text: `Ada banyak kuliner khas Yogyakarta yang bisa kamu temui di kawasan Malioboro. Namun, kalau kamu ingin mencoba merasakan suasana pagi dan sarapan unik, bisa datang ke area bekas pasar Sosrowijayan. Di sana, kalian akan disuguhi pemandangan memasak tradisional yang menarik, yaitu dengan tungku kecil berbahan bakar arang dan cetakan corobikang. Aroma gurih santan yang mulai matang akan mulai menyebar dan menggoda siapa pun yang berada di dekatnya.

Usaha Corobikang ini merupakan warisan turun-temurun dari Mbah Kalim, penjual corobikang legendaris yang telah berjualan sejak tahun 1984. Setelah Mbah Kalim berpulang pada tahun 2023, sang anak dengan setia meneruskan resep keluarga hingga hari ini. Lapaknya masih berdiri sangat sederhana di Jalan Sosrowijayan, menempati sudut lokasi yang sama persis saat sang ibu pertama kali merintis berjualan puluhan tahun silam.`,
          },
          { type: "subheading", text: "Cita Rasa & Variasi Produk" },
          {
            type: "list",
            items: [
              "Bahan Utama: adonan sederhana tepung beras, santan, dan gula pasir tanpa bahan pengawet. Warna pink cantik berasal dari pewarna makanan khusus.",
              "Tekstur & Rasa: lembut dengan paduan manis-gurih seimbang. Bagian bawah yang sedikit gosong (smoky) justru jadi sensasi rasa yang paling dicari.",
              "Menu Tambahan: kerupuk yang dibeli dari Pasar Beringharjo lalu digoreng sendiri.",
            ],
          },
        ],
        info: [
          { label: "Lokasi", value: "Jalan Sosrowijayan, Sosromenduran, Gedong Tengen, Kota Yogyakarta, DIY 55271" },
          { label: "Harga", value: "Rp2.000/biji" },
          { label: "Jam Operasional", value: "Setiap hari, 06.00–09.00 WIB (atau hingga habis)" },
        ],
      },
      {
        name: "Lumpia Mak Sumi",
        slug: "lumpia-mak-sumi",
        photo: photoLumpia,
        body: [
          {
            type: "paragraph",
            text: "Masih di sekitar kawasan Sosromenduran dan tak jauh dari Pathuk Center, aroma gurih gorengan panas kerap menghentikan langkah para pejalan kaki. Salah satu kuliner sarapan dan camilan pagi yang wajib disinggahi di kawasan Jalan Gandekan ini adalah Lumpia Mak Sumi. Bagi kamu yang kurang menyukai aroma menusuk khas rebung pada umumnya, Lumpia Mak Sumi adalah jawaban sempurna.",
          },
          { type: "subheading", text: "Cita Rasa & Keunikan Produk" },
          {
            type: "list",
            items: [
              "Ukuran Jumbo & Isian Khas: porsi mantap dan mengenyangkan, bumbu meresap sempurna hingga lapisan terdalam.",
              "Kulit Super Renyah & Tidak Berminyak: digoreng hingga kuning keemasan, crispy tanpa berminyak berlebih.",
              "Kombinasi Saus Bawang & Cabai Rawit Segar: dimakan dengan cabai rawit hijau, acar, dan saus bawang putih halus yang gurih asin.",
            ],
          },
        ],
        info: [
          { label: "Lokasi", value: "Jalan Gandekan, Sosromenduran, Gedong Tengen, Yogyakarta (sekitar Pasar Pathuk)" },
          { label: "Harga", value: "Rp4.000/biji" },
          { label: "Jam Operasional", value: "Setiap hari (kecuali Jumat), 06.30–09.00 WIB" },
          { label: "Tips", value: "Santap selagi hangat untuk kerenyahan maksimal" },
        ],
      },
      {
        name: "Asinan Nyinyir",
        slug: "asinan-nyinyir",
        photo: photoAsinan,
        body: [
          {
            type: "paragraph",
            text: `Puas menikmati kudapan gurih dan manis di pagi hari, saatnya mengimbangi lidah dengan yang segar dan membakar semangat. Masih di area Sosromenduran, ada satu tempat wajib untuk pecinta kuliner asam-pedas, yaitu Asinan Nyinyir.

Kisah Asinan Nyinyir berawal dari keberanian Bu Rizki, seorang mantan karyawan perusahaan swasta yang memutuskan resign demi memfokuskan merawat buah hatinya yang sakit. Setelah satu tahun menganggur, Bu Rizki mencoba peruntungan berjualan salad buah, lalu beralih membuat asinan buah melalui sistem pre-order. Usahanya melesat tajam pada 2017–2020 seiring populernya ojek online dan ulasan viral dari akun Kuliner Jogja. Kata "Nyinyir" dipilih karena terinspirasi permintaan pelanggan yang menginginkan rasa super pedas — sepedas ucapan mulut yang nyinyir!`,
          },
          { type: "subheading", text: "Variasi Menu & Cita Rasa" },
          {
            type: "paragraph",
            text: "Setiap porsi dikemas dalam cup 500 ml berisi potongan buah segar seperti bengkuang, nanas, belimbing, mangga, kedondong, dan salak (bisa juga pesan varian buah tunggal). Tersedia 3 varian bumbu:",
          },
          {
            type: "list",
            items: [
              "Asinan Kuah (Best Seller): perpaduan asam, manis, dan pedas kuah merah yang menyegarkan.",
              "Bumbu Bangkok: taburan bumbu kering gurih-pedas dengan aroma rempah khas.",
              "Bugar (Bumbu Garam): sensasi asam-asin-pedas yang simpel namun membakar lidah.",
            ],
          },
        ],
        info: [
          { label: "Harga", value: "Rp15.000 (offline) / Rp25.000 (online via ShopeeFood, GrabFood, GoFood)" },
          { label: "Jam Operasional", value: "Fleksibel, biasanya 09.00–21.00 WIB" },
          { label: "Kontak", value: "@Asinan_Nyinyir (Instagram)" },
        ],
      },
    ],
    tips: [
      "Agendakan perburuan pagi hari — Corobikang dan Lumpia Mak Sumi buka 06.00/06.30 WIB dan cepat habis sebelum jam 09.00 WIB.",
      "Jalan kaki adalah kunci — turun di Halte Trans Jogja Malioboro atau Stasiun Tugu, lalu lanjutkan jalan kaki santai.",
      "Siapkan uang tunai pecahan kecil (Rp2.000–Rp10.000) untuk transaksi cepat di lapak sarapan pagi.",
    ],
  },
];