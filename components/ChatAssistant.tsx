"use client";

import { useEffect, useRef, useState } from "react";
import { localAnswer } from "@/lib/faq";

type Msg = { role: "user" | "ai"; text: string };

const SUGGESTIONS = [
  "What's my home worth?",
  "Minimum down payment?",
  "Which neighbourhoods?",
  "Do you handle commercial?",
  "How long to sell?",
  "What commission do you charge?",
];

// 100% local — answers come from lib/faq.ts. No AI, no API, no network.
const answer = localAnswer;

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "ai",
      text: "Hi, I'm Aurum — KAVIVIN's AI concierge. Ask me about valuations, listings, or financing in Calgary.",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing, open]);

  const send = (text: string) => {
    const clean = text.trim();
    if (!clean) return;
    setMsgs((m) => [...m, { role: "user", text: clean }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { role: "ai", text: answer(clean) }]);
    }, 750 + Math.min(clean.length * 12, 900));
  };

  return (
    <>
      {/* Launcher */}
      <button
        aria-label="Open AI assistant"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-[60] grid h-16 w-16 place-items-center rounded-full bg-gold-gradient text-ink-900 shadow-gold transition-transform hover:scale-105"
      >
        {open ? (
          <span className="text-2xl leading-none">×</span>
        ) : (
          <span className="font-display text-xl font-bold">Au</span>
        )}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 animate-pulse rounded-full border-2 border-ink-900 bg-emerald-400" />
        )}
      </button>

      {/* Panel */}
      <div
        className={`fixed bottom-24 right-6 z-[60] w-[min(92vw,380px)] origin-bottom-right transition-all duration-300 ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="flex h-[540px] max-h-[72vh] flex-col overflow-hidden rounded-2xl border border-gold/20 bg-ink-800/95 shadow-lift backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-white/[0.06] bg-ink-900/60 px-5 py-4">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient font-display font-bold text-ink-900">
              Au
            </span>
            <div className="leading-tight">
              <p className="font-display text-base font-semibold text-ivory">
                Aurum
              </p>
              <p className="flex items-center gap-1.5 text-[11px] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                AI Concierge · online
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5">
            {msgs.map((m, i) => (
              <Bubble key={i} msg={m} />
            ))}
            {typing && (
              <div className="flex items-center gap-1.5 pl-1">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="h-2 w-2 animate-bounce rounded-full bg-gold/70"
                    style={{ animationDelay: `${d * 0.15}s` }}
                  />
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Suggestions */}
          {msgs.length <= 2 && (
            <div className="flex flex-wrap gap-2 px-4 pb-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-gold/30 px-3 py-1.5 text-[11px] text-ivory/80 transition-colors hover:border-gold hover:text-gold"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-white/[0.06] p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Aurum anything…"
              className="flex-1 rounded-full bg-ink-700 px-4 py-2.5 text-sm text-ivory placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-gold/50"
            />
            <button
              type="submit"
              className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient text-ink-900 transition-transform hover:scale-105"
              aria-label="Send"
            >
              ↑
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function Bubble({ msg }: { msg: Msg }) {
  const ai = msg.role === "ai";
  return (
    <div className={`flex ${ai ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          ai
            ? "rounded-tl-sm border border-white/[0.06] bg-ink-700 text-ivory/90"
            : "rounded-tr-sm bg-gold-gradient text-ink-900"
        }`}
      >
        {msg.text}
      </div>
    </div>
  );
}
