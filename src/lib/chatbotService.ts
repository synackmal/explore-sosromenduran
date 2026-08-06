import { kampungs, umkms, culinaries } from "@/data/mock";
import { SARKEM_FEST } from "@/data/events";
import { PIMPINAN, VISI, MISI, DATA_WILAYAH, BATAS_WILAYAH, TEAM_INFO } from "@/data/profile";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export type ChatMessage = { role: "user" | "assistant"; content: string };

function richBlocksToText(blocks: import("@/data/mock").RichBlock[]): string {
  return blocks
    .map((b) => {
      if (b.type === "paragraph") return b.text;
      if (b.type === "subheading") return `## ${b.text}`;
      if (b.type === "list") return b.items.map((i) => `- ${i}`).join("\n");
      if (b.type === "table") return b.rows.map((r) => `${r.label}: ${r.value}`).join("\n");
      return "";
    })
    .join("\n");
}

function buildKnowledgeBase() {
  const kampungText = kampungs
    .map((k) => {
      const extra = k.extraSection
        ? `\n  ${k.extraSection.category} - ${k.extraSection.subject}: ${richBlocksToText(k.extraSection.blocks)}`
        : "";
      return `- ${k.name}: ${k.short}\n  Sejarah: ${k.history}\n  Keunikan: ${k.uniqueness}${extra}`;
    })
    .join("\n\n");

  const umkmText = umkms
    .map((u) => `- ${u.name} (${u.category}, ${u.address}, buka ${u.hours}): ${u.description}`)
    .join("\n");

  const culinaryText = culinaries
    .map((c) => `- ${c.name} (${c.category}, ${c.address}, buka ${c.hours}): ${c.description}`)
    .join("\n");

  const eventText = `- ${SARKEM_FEST.title}: ${SARKEM_FEST.subtitle}. Waktu: ${SARKEM_FEST.period}. Lokasi: ${SARKEM_FEST.location}. ${richBlocksToText(SARKEM_FEST.blocks)}`;
  const profilText = `Visi: ${VISI}
Misi: ${MISI.join("; ")}
Pimpinan: ${PIMPINAN.map((p) => `${p.name} (${p.role})`).join(", ")}
Data Wilayah: ${DATA_WILAYAH.map((d) => `${d.label}: ${d.value}`).join(", ")}
Batas Wilayah: ${BATAS_WILAYAH.map((b) => `${b.arah} - ${b.desc}`).join(" | ")}`;

const teamText = TEAM_INFO.map((t) => `${t.name} (${t.role})`).join(", ");

  return { kampungText, umkmText, culinaryText, eventText, profilText, teamText };
}

export async function getChatResponse(history: ChatMessage[]): Promise<string> {
  try {
    const kb = buildKnowledgeBase();

    const systemPrompt = `
Kamu adalah "Tengen", asisten virtual resmi untuk Kalurahan Sosromenduran, Gedongtengen, Yogyakarta.
Kamu ramah, santai, dan komunikatif — bicara seperti orang lokal yang membantu, bukan seperti robot formal.

DATA 7 KAMPUNG (sejarah, keunikan, dan potensi masing-masing):
${kb.kampungText}

DATA UMKM & JASA:
${kb.umkmText}

DATA KULINER:
${kb.culinaryText}

DATA EVENT/TRADISI:
${kb.eventText}

PROFIL KALURAHAN:
${kb.profilText}

TIM KKN-PPM UGM BERGANDENG TENGEN:
${kb.teamText}

ATURAN:
1. Prioritaskan jawaban dari data di atas untuk pertanyaan spesifik soal Sosromenduran (kampung, UMKM, kuliner, event).
2. Kamu punya ingatan percakapan — perhatikan histori chat sebelumnya, dan jawab dengan nyambung sesuai konteks.
3. Untuk sapaan/basa-basi, balas secara natural dan hangat.
4. Jika ditanya sesuatu yang datanya belum tersedia, akui dengan jujur dan arahkan ke kantor Kalurahan.
5. Jawaban ringkas dan mengalir, maksimal 3-4 kalimat kecuali diminta detail lebih lanjut.
`;

    const geminiHistory = history.map((m) => ({
  role: m.role === "assistant" ? "model" : "user",
  parts: [{ text: m.content }],
}));

const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: systemPrompt }] },
      contents: geminiHistory,
      generationConfig: { temperature: 0.5 },
    }),
  }
);

if (!response.ok) {
  const errText = await response.text();
  console.error("Gemini API error:", response.status, errText);
  throw new Error(`Gemini error ${response.status}`);
}

const data = await response.json();
return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Chatbot error:", error);
    return "Waduh, maaf ya bot-nya lagi istirahat sebentar. Coba tanya lagi nanti, atau hubungi kantor Kalurahan Sosromenduran langsung.";
  }
}