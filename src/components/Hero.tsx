import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase text-teal-200">StellarOps Labs</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">StellarOps Board</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            A maintainer dashboard for reviewing Stellar and Soroban contributor issues, labels, repository readiness, and workflow health in honest mock mode.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="focus-ring rounded-md bg-teal-500 px-5 py-3 text-sm font-bold text-slate-950" href="/dashboard">
              Open Dashboard
            </Link>
            <Link className="focus-ring rounded-md border border-white/25 px-5 py-3 text-sm font-bold text-white" href="/docs">
              Read Docs
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-white/15 bg-white/8 p-5">
          <div className="grid gap-3">
            {["Issue readiness scoring", "Label coverage", "Repo health signals", "Maintainer workflow status"].map((item, index) => (
              <div key={item} className="flex items-center justify-between rounded-md bg-white px-4 py-3 text-slate-950">
                <span className="font-semibold">{item}</span>
                <span className="rounded-md bg-teal-50 px-2 py-1 text-xs font-bold text-teal-800">{index === 0 ? "92%" : "tracked"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
