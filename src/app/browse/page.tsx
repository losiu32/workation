"use client";

import { useState } from "react";

const categories = [
  { icon: "💻", label: "IT & Tech" },
  { icon: "📸", label: "Foto & Video" },
  { icon: "🚗", label: "Transport" },
  { icon: "🌿", label: "Ogród & Dom" },
  { icon: "📦", label: "Logistyka" },
  { icon: "🎨", label: "Grafika" },
  { icon: "📣", label: "Marketing" },
  { icon: "🔧", label: "Majsterkowanie" },
];

const MOCK_QUESTS = [
  {
    id: 1,
    title: "Pomoc przy przeprowadzce — przeniesienie mebli",
    category: "Logistyka",
    icon: "📦",
    location: "Kraków, Kazimierz",
    duration: "3–4h",
    pay: "150 zł",
    date: "5 lip 2026",
    desc: "Potrzebuję 2 osób do przeniesienia mebli z mieszkania na 3. piętrze (brak windy). Meble nieduże, głównie kartony i kilka szaf.",
  },
  {
    id: 2,
    title: "Sesja zdjęciowa produktów do sklepu internetowego",
    category: "Foto & Video",
    icon: "📸",
    location: "Warszawa, Mokotów",
    duration: "2h",
    pay: "200 zł",
    date: "7 lip 2026",
    desc: "Szukam fotografa z własnym sprzętem do zdjęć ok. 30 produktów (biżuteria). Jasne tło, zdjęcia pionowe i poziome.",
  },
  {
    id: 3,
    title: "Naprawa kranu i uszczelnienie w łazience",
    category: "Majsterkowanie",
    icon: "🔧",
    location: "Gdańsk, Wrzeszcz",
    duration: "1–2h",
    pay: "100 zł",
    date: "6 lip 2026",
    desc: "Cieknący kran w łazience i nieszczelność przy wannie do uszczelnienia silikonem. Narzędzia na miejscu.",
  },
  {
    id: 4,
    title: "Konfiguracja laptopa i instalacja oprogramowania",
    category: "IT & Tech",
    icon: "💻",
    location: "Wrocław, Centrum",
    duration: "2h",
    pay: "120 zł",
    date: "8 lip 2026",
    desc: "Nowy laptop do skonfigurowania — system, oprogramowanie biurowe, konfiguracja poczty i dysku w chmurze.",
  },
  {
    id: 5,
    title: "Koszenie trawy i przycinanie żywopłotu",
    category: "Ogród & Dom",
    icon: "🌿",
    location: "Poznań, Grunwald",
    duration: "3h",
    pay: "130 zł",
    date: "9 lip 2026",
    desc: "Ogród ok. 200m², do skoszenia trawa i przycięcie żywopłotu od ulicy. Sprzęt zapewniony.",
  },
  {
    id: 6,
    title: "Transport zakupów z IKEA do domu",
    category: "Transport",
    icon: "🚗",
    location: "Łódź",
    duration: "1h",
    pay: "80 zł",
    date: "10 lip 2026",
    desc: "Potrzebuję osoby z autem/busem do transportu zakupów z IKEA Łódź. Kilka kartonów, meble płasko pakowane.",
  },
];

type DurationType = "Wszystkie" | "1–2h" | "3–4h" | "Cały dzień";

export default function BrowsePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [duration, setDuration] = useState<DurationType>("Wszystkie");

  const filtered = MOCK_QUESTS.filter((q) => {
    const matchSearch =
      search === "" ||
      q.title.toLowerCase().includes(search.toLowerCase()) ||
      q.location.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === null || q.category === activeCategory;
    const matchDuration =
      duration === "Wszystkie" ||
      (duration === "1–2h" && (q.duration === "1h" || q.duration === "2h" || q.duration === "1–2h")) ||
      (duration === "3–4h" && (q.duration === "3h" || q.duration === "4h" || q.duration === "3–4h")) ||
      (duration === "Cały dzień" && q.duration === "Cały dzień");
    return matchSearch && matchCategory && matchDuration;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brand-text mb-2">Przeglądaj zlecenia</h1>
        <p className="text-gray-500">Znajdź side quest pasujący do Twojej trasy</p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input
          type="text"
          placeholder="Szukaj zlecenia lub miasta…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-brand-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-2 flex-wrap mb-4">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
            activeCategory === null
              ? "bg-brand-green text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Wszystkie
        </button>
        {categories.map((cat) => (
          <button
            key={cat.label}
            onClick={() => setActiveCategory(activeCategory === cat.label ? null : cat.label)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              activeCategory === cat.label
                ? "bg-brand-green text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <span>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Duration filter */}
      <div className="flex gap-2 mb-8">
        {(["Wszystkie", "1–2h", "3–4h", "Cały dzień"] as DurationType[]).map((d) => (
          <button
            key={d}
            onClick={() => setDuration(d)}
            className={`px-4 py-1.5 rounded-lg text-sm transition-colors ${
              duration === d
                ? "bg-brand-text text-white"
                : "border border-gray-200 text-gray-500 hover:border-brand-green hover:text-brand-green"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-400 mb-4">
        {filtered.length} {filtered.length === 1 ? "zlecenie" : "zleceń"}
      </p>

      {/* Quest cards */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-medium text-gray-500">Brak wyników</p>
          <p className="text-sm mt-1">Spróbuj innych filtrów lub wyszukaj inne miasto</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map((quest) => (
            <QuestCard key={quest.id} quest={quest} />
          ))}
        </div>
      )}
    </div>
  );
}

function QuestCard({ quest }: { quest: typeof MOCK_QUESTS[0] }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-green hover:shadow-sm transition-all group">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <div className="w-12 h-12 rounded-xl bg-brand-green-light flex items-center justify-center text-2xl flex-shrink-0">
            {quest.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-brand-text group-hover:text-brand-green transition-colors">
              {quest.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">{quest.desc}</p>
            <div className="flex flex-wrap gap-3 mt-3">
              <span className="flex items-center gap-1 text-xs text-gray-500">
                📍 {quest.location}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-500">
                ⏱ {quest.duration}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-500">
                📅 {quest.date}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-3 flex-shrink-0">
          <span className="text-xl font-bold text-brand-green">{quest.pay}</span>
          <button className="px-4 py-2 rounded-xl bg-brand-green text-white text-sm font-medium hover:bg-brand-green-dark transition-colors">
            Aplikuj
          </button>
        </div>
      </div>
    </div>
  );
}
