import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center flex-1 px-4 py-24 text-center bg-white">
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-green-light text-brand-green text-sm font-medium">
          Nowy sposób na pomoc w podróży
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-brand-text leading-tight max-w-3xl">
          Połącz <span className="text-brand-green">podróż</span> z{" "}
          <span className="text-brand-green">zarabianiem</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          Workation łączy podróżników z lokalnymi zleceniodawcami. Side questy
          1–4h lub kilkudniowe projekty — zarabiaj podróżując lub znajdź pomoc
          tam, gdzie jej potrzebujesz.
        </p>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            href="/register?role=helper"
            className="px-8 py-4 rounded-2xl bg-brand-green text-white text-lg font-semibold hover:bg-brand-green-dark transition-colors shadow-lg shadow-brand-green/25"
          >
            Jestem podróżnikiem
          </Link>
          <Link
            href="/register?role=client"
            className="px-8 py-4 rounded-2xl border-2 border-brand-green text-brand-green text-lg font-semibold hover:bg-brand-green-light transition-colors"
          >
            Szukam pomocy
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-brand-text mb-14">
            Jak to działa?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-brand-green-light flex items-center justify-center mb-5">
                  <span className="text-brand-green text-xl font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-brand-text mb-14">
            Popularne kategorie
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100 hover:border-brand-green hover:bg-brand-green-light transition-colors cursor-pointer group"
              >
                <span className="text-3xl">{cat.icon}</span>
                <span className="font-medium text-brand-text group-hover:text-brand-green text-sm text-center">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-brand-green py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Gotowy na workation?
        </h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto">
          Dołącz do społeczności podróżników i zleceniodawców już dziś.
        </p>
        <Link
          href="/register"
          className="inline-block px-8 py-4 rounded-2xl bg-white text-brand-green font-semibold text-lg hover:bg-gray-50 transition-colors"
        >
          Zarejestruj się za darmo
        </Link>
      </section>
    </div>
  );
}

const steps = [
  {
    title: "Wybierz swoją rolę",
    desc: "Jesteś podróżnikiem szukającym zleceń lub przedsiębiorcą potrzebującym pomocy?",
  },
  {
    title: "Przeglądaj lub dodaj zlecenie",
    desc: "Side questy 1–4h na miejscu lub kilkudniowe projekty dopasowane do Twojej trasy.",
  },
  {
    title: "Połącz się i działaj",
    desc: "Umów się, zrealizuj zlecenie i zbieraj opinie. Zarabiaj podróżując.",
  },
];

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
