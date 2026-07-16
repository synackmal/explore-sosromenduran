import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getChatResponse } from "@/lib/chatbotService";

type Msg = { role: "user" | "bot"; text: string };

const SUGGESTIONS = [
  "Wisata apa saja di Sosromenduran?",
  "Rekomendasi kuliner khas?",
  "Rekomendasi oleh-oleh?",
  "Dimana parkir terdekat?",
  "Event budaya terdekat?",
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
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
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-primary to-[var(--gold)] text-primary-foreground shadow-xl shadow-primary/30 hover:scale-105 transition-transform"
        aria-label="Open chat"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[32rem] flex flex-col rounded-2xl glass shadow-2xl overflow-hidden"
          >
            <div className="p-4 bg-gradient-to-br from-primary to-[var(--gold)] text-primary-foreground">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-white/20">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-semibold">Tengen</div>
                  <div className="text-xs opacity-80">Asisten Wisata Sosromenduran</div>
                </div>
              </div>
            </div>
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
