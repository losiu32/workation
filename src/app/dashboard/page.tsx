"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

type Mode = "helper" | "client";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<Mode>("helper");

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push("/login");
      } else {
        setUser(data.user);
        setLoading(false);
      }
    });
  }, [router]);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  }

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-green border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const name = user?.user_metadata?.name || user?.email;
  const isHelper = mode === "helper";

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-brand-text">Cześć, {name} 👋</h1>
          <p className="text-gray-500 mt-1 text-sm">{user?.email}</p>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-gray-400 hover:text-red-500 transition-colors"
        >
          Wyloguj się
        </button>
      </div>

      {/* Mode switcher */}
      <div className="flex items-center gap-2 p-1.5 bg-gray-100 rounded-2xl mb-8 w-fit">
        <ModeButton
          icon="🧳"
          label="Szukam zleceń"
          active={mode === "helper"}
          onClick={() => setMode("helper")}
        />
        <ModeButton
          icon="🙋"
          label="Szukam pomocy"
          active={mode === "client"}
          onClick={() => setMode("client")}
        />
      </div>

      {/* Context info */}
      <div className="p-4 rounded-2xl bg-brand-green-light mb-8">
        <p className="text-sm text-brand-green font-medium">
          {isHelper
            ? "Tryb podróżnika — przeglądaj zlecenia i zarabiaj w podróży"
            : "Tryb zleceniodawcy — znajdź kogoś do pomocy w swoim mieście"}
        </p>
      </div>

      {/* Quick actions */}
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {isHelper ? (
          <>
            <ActionCard icon="🔍" title="Szukaj zleceń" desc="Przeglądaj dostępne side questy w okolicy." href="/browse" />
            <ActionCard icon="📋" title="Moje aplikacje" desc="Zlecenia, do których aplikowałeś." href="/my-applications" />
            <ActionCard icon="⭐" title="Opinie" desc="Twoje oceny od zleceniodawców." href="/reviews" />
            <ActionCard icon="💰" title="Zarobki" desc="Historia wypłat i rozliczeń." href="/earnings" />
          </>
        ) : (
          <>
            <ActionCard icon="➕" title="Dodaj zlecenie" desc="Opublikuj nowe zlecenie i znajdź podróżnika." href="/new-quest" />
            <ActionCard icon="📋" title="Moje zlecenia" desc="Zarządzaj opublikowanymi zleceniami." href="/my-quests" />
            <ActionCard icon="👥" title="Aplikacje" desc="Przeglądaj chętnych podróżników." href="/applications" />
            <ActionCard icon="⭐" title="Opinie" desc="Oceny wystawione podróżnikom." href="/reviews" />
          </>
        )}
      </div>

      {/* Coming soon */}
      <div className="rounded-2xl border border-dashed border-gray-200 p-8 text-center text-gray-400">
        <p className="text-4xl mb-3">🚧</p>
        <p className="font-medium text-gray-500">Więcej funkcji wkrótce</p>
        <p className="text-sm mt-1">Zlecenia, wiadomości i płatności są w budowie.</p>
      </div>
    </div>
  );
}

function ModeButton({ icon, label, active, onClick }: {
  icon: string; label: string; active: boolean; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
        active
          ? "bg-white text-brand-green shadow-sm"
          : "text-gray-500 hover:text-brand-text"
      }`}
    >
      <span>{icon}</span>
      {label}
    </button>
  );
}

function ActionCard({ icon, title, desc, href }: {
  icon: string; title: string; desc: string; href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-brand-green hover:bg-brand-green-light transition-all group"
    >
      <span className="text-3xl">{icon}</span>
      <div>
        <p className="font-semibold text-brand-text group-hover:text-brand-green transition-colors">{title}</p>
        <p className="text-sm text-gray-500 mt-0.5">{desc}</p>
      </div>
    </a>
  );
}
