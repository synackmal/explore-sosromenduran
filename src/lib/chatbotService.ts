import { kampungs, umkms, culinaries, events } from "@/data/mock";

const apiKey = import.meta.env.VITE_GROQ_API_KEY;

export type ChatMessage = { role: "user" | "assistant"; content: string };

function buildKnowledgeBase() {
  const kampungText = kampungs
    .map((k) => `- ${k.name}: ${k.short} Keunikan: ${k.uniqueness}`)
    .join("\n");

  const umkmText = umkms
    .map((u) => `- ${u.name} (${u.category}, ${u.address}, buka ${u.hours}): ${u.description}`)
    .join("\n");

  const culinaryText = culinaries
    .map((c) => `- ${c.name} (${c.category}, ${c.priceRange}, buka ${c.hours}): ${c.signature}`)
    .join("\n");

  const eventText = events
    .map((e) => `- ${e.title} (${e.date}, ${e.location}): ${e.description}`)
    .join("\n");

  return { kampungText, umkmText, culinaryText, eventText };
}

export async function getChatResponse(history: ChatMessage[]): Promise<string> {
  try {
    const kb = buildKnowledgeBase();

    const systemPrompt = `
Kamu adalah "Tengen", asisten virtual resmi untuk Kelurahan Sosromenduran, Gedongtengen, Yogyakarta.
Kamu ramah, santai, dan komunikatif — bicara seperti orang lokal yang membantu, bukan seperti robot formal.

DATA KAMPUNG:
${kb.kampungText}

DATA UMKM:
${kb.umkmText}

DATA KULINER:
${kb.culinaryText}

DATA EVENT:
${kb.eventText}

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