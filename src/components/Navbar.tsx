import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-bold text-slate-950">
          StellarOps Board
        </Link>
        <div className="flex items-center gap-4 text-sm font-semibold text-slate-700">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/docs">Docs</Link>
        </div>
      </nav>
    </header>
  );
}
