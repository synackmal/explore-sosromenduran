import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroContact from "@/assets/hero/hero-contact.jpg";
import { getChatResponse } from "@/lib/chatbotService";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Chat — Sosromenduran" },
      { name: "description", content: "Ngobrol dengan Tengen, asisten wisata Sosromenduran." },
    ],
  }),
  component: ChatPage,
});

type Msg = { role: "user" | "bot"; text: string };

const SUGGESTIONS = [
  "Wisata apa saja di Sosromenduran?",
  "Rekomendasi kuliner khas?",
  "Rekomendasi oleh-oleh?",
  "Dimana parkir terdekat?",
  "Event budaya terdekat?",
];

function ChatPage() {
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: "Halo! Saya Tengen, asisten wisata Sosromenduran. Ada yang bisa saya bantu?" },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing]);

  const send = async (text: string) => {
  if (!text.trim()) return;
  const newMsgs = [...msgs, { role: "user" as const, text }];
  setMsgs(newMsgs);
  setInput("");
  setTyping(true);

  // convert histori local (role: user/bot) ke format yang API butuhkan (role: user/assistant)
  const history = newMsgs.map((m) => ({
    role: m.role === "bot" ? ("assistant" as const) : ("user" as const),
    content: m.text,
  }));

  const reply = await getChatResponse(history);
  setTyping(false);
  setMsgs((m) => [...m, { role: "bot", text: reply }]);
};

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Ngobrol Yuk"
        title="Chat dengan Tengen"
        subtitle="Asisten wisata Sosromenduran siap bantu jawab pertanyaan Anda."
        image={heroContact}
      />
      <section className="mx-auto max-w-3xl px-4 md:px-8 pt-10 pb-20">
        <Card className="border-border/60 flex flex-col h-[70vh] overflow-hidden">
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl px-3 py-2 rounded-bl-sm">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-foreground/40 animate-bounce [animation-delay:-.3s]" />
                    <span className="h-2 w-2 rounded-full bg-foreground/40 animate-bounce [animation-delay:-.15s]" />
                    <span className="h-2 w-2 rounded-full bg-foreground/40 animate-bounce" />
                  </div>
                </div>
              </div>
            )}
            {msgs.length <= 1 && (
              <div className="pt-2 space-y-2">
                <div className="text-xs text-muted-foreground">Pertanyaan populer:</div>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="w-full text-left text-xs px-3 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-3 border-t border-border/60 flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanya apa saja..."
              className="flex-1 rounded-full bg-muted px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit" size="icon" className="rounded-full shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </Card>
      </section>
    </SiteLayout>
  );
}