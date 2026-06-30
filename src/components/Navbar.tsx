import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-16 px-4 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center">
          <span className="text-white font-bold text-sm">W</span>
        </div>
        <span className="text-xl font-bold text-brand-text">Workation</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <Link href="/browse" className="hover:text-brand-green transition-colors">
          Przeglądaj zlecenia
        </Link>
        <Link href="/how-it-works" className="hover:text-brand-green transition-colors">
          Jak to działa
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/login"
          className="px-4 py-2 text-sm font-medium text-brand-text hover:text-brand-green transition-colors"
        >
          Zaloguj się
        </Link>
        <Link
          href="/register"
          className="px-4 py-2 rounded-xl bg-brand-green text-white text-sm font-medium hover:bg-brand-green-dark transition-colors"
        >
          Zarejestruj się
        </Link>
      </div>
    </nav>
  );
}
