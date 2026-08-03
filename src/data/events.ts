import type { RichBlock } from "./mock";
import kampungImg from "@/assets/kampung-1.jpg";

export type EventProfile = {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  cover: string;
  blocks: RichBlock[];
};

export const SARKEM_FEST: EventProfile = {
  title: "Sarkem Fest",
  subtitle: "Festival budaya tahunan kawasan Pasar Kembang dan Sosromenduran",
  period: "Bulan Ruwah (kalender Jawa), biasanya sekitar Februari–Maret, 1–2 minggu sebelum Ramadhan",
  location: "Jl. Pasar Kembang, Jl. Sosrowijayan, dan kawasan Kelurahan Sosromenduran",
  cover: kampungImg, // TODO: ganti foto asli dokumentasi Sarkem Fest
  blocks: [
    {
      type: "paragraph",
      text: "Sarkem Fest adalah festival budaya tahunan yang digelar di kawasan Pasar Kembang (Sarkem) dan Kelurahan Sosromenduran, hasil kolaborasi Dinas Pariwisata Kota Yogyakarta dengan warga Kelurahan Sosromenduran, komunitas Pasar Kembang, kelompok sadar wisata (Pokdarwis), serta para pelaku usaha jasa pariwisata di kawasan tersebut. Secara administratif, festival ini juga didukung penuh oleh Kemantren Gedongtengen, wilayah kecamatan yang menaungi Kelurahan Sosromenduran. Festival ini sudah menjadi agenda rutin dan masuk dalam Calendar of Event Kota Yogyakarta, digelar setiap tahun selama dua hari dan terbuka gratis untuk umum.",
    },
    { type: "subheading", text: "Sejarah & Latar Belakang" },
    {
      type: "paragraph",
      text: `Akar dari Sarkem Fest adalah tradisi Ruwahan Apeman, ritual masyarakat Jawa menjelang Ramadhan yang identik dengan kue apem sebagai simbol permohonan maaf — kata apem sendiri diyakini berasal dari kata Arab afwun yang kemudian diserap menjadi apem. Tradisi mengolah dan berbagi apem ini sudah lama dijalankan secara swadaya oleh warga Sosromenduran, terutama di Kampung Sosrowijayan, jauh sebelum akhirnya dikemas menjadi festival resmi oleh Pemerintah Kota Yogyakarta.

Festival ini dirancang punya dua tujuan sekaligus: melestarikan tradisi ruwahan apeman, dan mempromosikan potensi wisata kampung-kampung pinggiran seperti Sosrowijayan dan Pasar Kembang, kawasan yang dulunya dikenal punya citra negatif karena asosiasinya dengan prostitusi. Festival ini juga berfungsi sebagai medium promosi pariwisata efektif menjelang bulan Ramadhan — periode yang biasanya justru diwarnai penurunan kunjungan wisata dan tingkat hunian hotel di Yogyakarta. Kirab gunungan apem dalam festival ini secara simbolis merepresentasikan lima unsur pembangunan kota: pemerintah kota (diwakili aparat kelurahan), korporasi (diwakili hotel-hotel sekitar), komunitas penggagas festival, kalangan kampus (mahasiswa), dan kampung (masyarakat setempat).`,
    },
    { type: "subheading", text: "Rangkaian Kegiatan" },
    {
      type: "paragraph",
      text: `Sarkem Fest biasanya dibuka dengan Yogowes Monalisa, yaitu jelajah sepeda susur kampung dan sungai yang diikuti komunitas sepeda se-Kota Yogyakarta, start dari Dinas Pariwisata Kota Yogyakarta dan finis di kawasan Sosromenduran.

Rangkaian dilanjutkan dengan prosesi Ngublag Jladren Apem — proses membuat dan mengaduk adonan apem — yang menandai dimulainya Festival Pembuatan Apem, diikuti puluhan RT warga Sosromenduran. Pengunjung bisa menyaksikan langsung proses pembuatan apem, kolak, dan ketan, serta mencicipinya secara gratis selama persediaan masih ada. Berdampingan dengan itu, digelar bazar ekonomi kreatif yang menampilkan produk-produk UMKM warga setempat.

Puncak acara adalah kirab gunungan apem, di mana jodang gunungan yang disusun dari sekitar 1.000 kue apem — dilengkapi ketan dan kolak — diarak bersama pasukan bregodo (prajurit tradisional gaya keraton), perwakilan kampung-kampung di Kelurahan Sosromenduran, mahasiswa, dan pelajar setempat. Rute kirab melewati jalan-jalan utama kawasan, seperti Jalan Pasar Kembang, Jalan Malioboro, dan Jalan Sosrowijayan. Sepanjang rute, dilakukan seserahan apem kepada hotel-hotel di kawasan Sosromenduran sebagai simbol silaturahmi antara warga kampung dan pelaku usaha perhotelan, sekaligus dibagikan ke wisatawan yang dijumpai di sepanjang jalan.

Rangkaian kirab ditutup dengan kenduri ruwahan — doa bersama dengan menggelar tikar di sepanjang Jalan Sosrowijayan, dilanjutkan makan nasi gurih bersama warga — yang diakhiri dengan prosesi rebutan gunungan apem yang selalu dinanti wisatawan. Festival juga dimeriahkan dengan parade musik di beberapa titik panggung, menampilkan beragam genre mulai dari jazz, keroncong, hingga musik populer, serta atraksi barongsai dan pertunjukan komunitas seni lokal.`,
    },
    { type: "subheading", text: "Makna & Perkembangan" },
    {
      type: "paragraph",
      text: "Sarkem Fest menjadi contoh nyata transformasi tradisi komunitas menjadi festival pariwisata resmi tanpa menghilangkan otentisitasnya. Ritual Ruwahan Apeman yang dulunya hanya dijalankan sederhana secara swadaya oleh warga kini menjadi jantung dari sebuah festival berskala kota, yang mempertemukan unsur pemerintah, dunia usaha (khususnya perhotelan), komunitas, kalangan akademisi, dan masyarakat kampung dalam satu perayaan. Festival ini juga secara konsisten digunakan sebagai medium untuk mengangkat citra positif kawasan Sarkem, sekaligus mendorong geliat ekonomi kreatif warga melalui bazar UMKM yang menjadi bagian tetap dari rangkaian acaranya.",
    },
  ],
};