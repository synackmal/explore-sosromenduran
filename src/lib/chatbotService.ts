import { kampungs, umkms, culinaries, events, stats } from "@/data/mock";

const apiKey = import.meta.env.VITE_GROQ_API_KEY;

export type ChatMessage = { role: "user" | "assistant"; content: string };

function buildKnowledgeBase() {
  const kampungSummary = kampungs.map((k) => ({
    nama: k.name,
    ringkasan: k.short,
    sejarah: k.history,
    keunikan: k.uniqueness,
    atraksi: k.attractions,
    aktivitasBudaya: k.culturalActivities,
  }));

  const umkmSummary = umkms.map((u) => ({
    nama: u.name,
    kategori: u.category,
    deskripsi: u.description,
    alamat: u.address,
    jamBuka: u.hours,
    kontak: u.contact,
    produk: u.products,
  }));

  const culinarySummary = culinaries.map((c) => ({
    nama: c.name,
    kategori: c.category,
    menuAndalan: c.signature,
    kisaranHarga: c.priceRange,
    deskripsi: c.description,
    alamat: c.address,
    jamBuka: c.hours,
  }));

  const eventSummary = events.map((e) => ({
    judul: e.title,
    tanggal: e.date,
    lokasi: e.location,
    deskripsi: e.description,
  }));

  return { kampungSummary, umkmSummary, culinarySummary, eventSummary, stats };
}

export async function getChatResponse(history: ChatMessage[]): Promise<string> {
  try {
    const kb = buildKnowledgeBase();

    const systemPrompt = `
Kamu adalah "Tengen", asisten virtual resmi untuk Kelurahan Sosromenduran, Gedongtengen, Yogyakarta.
Kamu ramah, santai, dan komunikatif — bicara seperti orang lokal yang membantu, bukan seperti robot formal.

BERIKUT DATA RESMI SEBAGAI ACUAN UTAMA JAWABANMU:

KAMPUNG (7 kampung di Sosromenduran):
${JSON.stringify(kb.kampungSummary)}

UMKM:
${JSON.stringify(kb.umkmSummary)}

KULINER:
${JSON.stringify(kb.culinarySummary)}

EVENT/AGENDA:
${JSON.stringify(kb.eventSummary)}

STATISTIK: ${JSON.stringify(kb.stats)}

ATURAN:
1. Prioritaskan jawaban dari data di atas untuk pertanyaan spesifik soal Sosromenduran (kampung, UMKM, kuliner, event).
2. Kamu punya ingatan percakapan — perhatikan histori chat sebelumnya, dan jawab dengan nyambung sesuai konteks. Kalau user menjawab singkat seperti "ada", "iya", "boleh", pahami itu sebagai respons terhadap pertanyaanmu sebelumnya, JANGAN bilang "Anda belum bertanya apa-apa".
3. Untuk sapaan/basa-basi (halo, terima kasih, dll), balas secara natural dan hangat seperti percakapan biasa, tidak perlu menyisipkan data setiap saat.
4. Jika ditanya sesuatu yang datanya belum tersedia, akui dengan jujur dan santai bahwa datanya belum lengkap saat ini, lalu tawarkan info lain yang tersedia atau arahkan ke kantor Kelurahan.
5. Jawaban ringkas dan mengalir, maksimal 3-4 kalimat kecuali diminta detail lebih lanjut.
    `;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "system", content: systemPrompt }, ...history],
        temperature: 0.5,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Groq API error:", response.status, errText);
      throw new Error(`Groq error ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Chatbot error:", error);
    return "Waduh, maaf ya bot-nya lagi istirahat sebentar. Coba tanya lagi nanti, atau hubungi kantor Kelurahan Sosromenduran langsung.";
  }
}